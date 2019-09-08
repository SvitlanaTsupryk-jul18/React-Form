import React from "react";
import "./App.css";
import regions from "./data/regions";
import values from "./data/values";
import { createForm } from "final-form";
import { connect } from "react-redux";
import postData from "./api";

const fieldNames = [
  "edrpou",
  "legal_form",
  "name",
  "short_name",
  "public_name",
  "owner_property_type",
  "area",
  "area_reg",
  "area_city",
  "area_street",
  "area_street_name"
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await postData(values);
  window.alert(JSON.stringify(values, 0, 2));
};

class Form extends React.Component {
  constructor() {
    super();
    const initialState = {};
    let inConstructor = true;
    this.form = createForm({ onSubmit, validate: this.validate });

    // subscribe to form changes
    this.unsubscribe = this.form.subscribe(
      formState => {
        if (inConstructor) {
          initialState.formState = formState;
        } else {
          this.setState({ formState });
        }
      },
      {
        active: true,
        pristine: true,
        submitting: true,
        values: true
      }
    );

    // register fields
    this.unsubscribeFields = fieldNames.map(fieldName =>
      this.form.registerField(
        fieldName,
        fieldState => {
          if (inConstructor) {
            initialState[fieldName] = fieldState;
          } else {
            this.setState({ [fieldName]: fieldState });
          }
        },
        { value: true, valid: true, active: true, touched: true }
      )
    );

    this.state = initialState;
    inConstructor = false;
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.unsubscribeFields.forEach(unsubscribe => unsubscribe());
  }

  handleSubmit = event => {
    event.preventDefault();
    this.form.submit();
  };

  selectItem = target => {
    this.setState({
      ...this.Formstate,
      [target.name]: {
        name: target.name,
        value: target.value,
        valid: true,
        active: true,
        touched: true
      }
    });
  };

  validate = values => {
    let copy = { ...this.state };
    delete copy.formState;
    let valid = true;
    for (let key in copy) {
      valid = valid * copy[key].valid;
    }
    return Boolean(valid);
  };

  validationInput = target => {
    target.classList.remove("error");
    switch (target.name) {
      case "edrpou":
        if (
          !this.state[target.name].value ||
          this.state[target.name].value.length < 7
        ) {
          target.classList.add("error");
          this.setState({
            ...this.state,
            [target.name]: {
              ...this.state[target.name],
              valid: false,
              active: false,
              touched: true
            }
          });
        }
        break;
      default:
        if (!this.state[target.name].value) {
          target.classList.add("error");
          this.setState({
            ...this.state,
            [target.name]: {
              ...this.state[target.name],
              valid: false,
              active: false,
              touched: true
            }
          });
        }
    }
  };
  render() {
    const {
      formState,
      name,
      edrpou,
      legal_form,
      short_name,
      public_name,
      owner_property_type,
      area,
      area_reg,
      area_city,
      area_street,
      area_street_name
    } = this.state;
    return (
      <div className="form">
        <h1>🏁 Final Form</h1>
        <form onSubmit={this.handleSubmit}>
          <legend>Створити профіль медичного закладу. Крок 1</legend>
          <div className="row">
            <div className="row_item">
              <label
                htmlFor="edrpou"
                className={
                  this.state.edrpou.touched || this.state.edrpou.active
                    ? "touched"
                    : ""
                }
              >
                ЄДРПОУ*
              </label>
              <input
                name="edrpou"
                type="text"
                id="edrpou"
                maxLength="10"
                onBlur={event => this.validationInput(event.target)}
                onChange={event =>
                  edrpou.change(event.target.value || undefined)
                }
                onFocus={() => edrpou.focus()}
                value={edrpou.value || ""}
                placeholder=""
                className={this.state.edrpou.active ? "active--input" : ""}
                // required
              />
              <div
                className={
                  this.state.edrpou.valid === false ? "warning" : "hide"
                }
              >
                ЄДРПОУ введено некоректно, поле повинно містити 8 або 10 цифр
              </div>
            </div>
            <div className="row_item">
              <label className="touched" htmlFor="legal_form">
                Організаційно-правова форма*
              </label>
              <select
                name="legal_form"
                value={legal_form.value}
                onChange={event => this.selectItem(event.target)}
              >
                <option value="140">ДЕРЖАВНЕ ПІДПРИЄМСТВО</option>
                <option value="995">ІНШІ ОРГАНІЗАЦІЙНО-ПРАВОВІ ФОРМИ</option>
                <option value="230">АКЦІОНЕРНЕ ТОВАРИСТВО</option>
                <option value="231">ВІДКРИТЕ АКЦІОНЕРНЕ ТОВАРИСТВО</option>
                <option value="235">
                  ДЕРЖАВНА АКЦІОНЕРНА КОМПАНІЯ (ТОВАРИСТВО)
                </option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="row_item">
              <label
                htmlFor="name"
                className={
                  this.state.name.touched || this.state.name.active
                    ? "touched"
                    : ""
                }
              >
                Повна назва*
              </label>
              <input
                name="name"
                type="text"
                id="name"
                onBlur={event => this.validationInput(event.target)}
                onChange={event => name.change(event.target.value || undefined)}
                onFocus={() => name.focus()}
                value={name.value || ""}
                placeholder=""
                className={this.state.name.active ? "active--input" : ""}
                // required
              />
              <div
                className={this.state.name.valid === false ? "warning" : "hide"}
              >
                Поле не може бути пустим
              </div>
            </div>
            <div className="row_item">
              <label
                htmlFor="short_name"
                className={
                  this.state.short_name.touched || this.state.short_name.active
                    ? "touched"
                    : ""
                }
              >
                Cкорочена назва (за наявності)
              </label>
              <input
                name="short_name"
                type="text"
                id="short_name"
                onBlur={() => short_name.blur()}
                onChange={event =>
                  short_name.change(event.target.value || undefined)
                }
                onFocus={() => short_name.focus()}
                value={short_name.value || ""}
                placeholder=""
                className={this.state.short_name.active ? "active--input" : ""}
              />
            </div>
          </div>
          <div className="row">
            <div className="row_item">
              <label
                htmlFor="public_name"
                className={
                  this.state.public_name.touched ||
                  this.state.public_name.active
                    ? "touched"
                    : ""
                }
              >
                Публічна назва (якщо відрізняється)
              </label>
              <input
                name="public_name"
                type="text"
                id="public_name"
                onBlur={() => public_name.blur()}
                onChange={event =>
                  public_name.change(event.target.value || undefined)
                }
                onFocus={() => public_name.focus()}
                value={public_name.value || ""}
                placeholder=""
                className={this.state.public_name.active ? "active--input" : ""}
              />
            </div>
            <div className="row_item">
              <label htmlFor="owner_property_type" className="touched">
                Тип закладу*
              </label>
              <select
                name="owner_property_type"
                value={owner_property_type.value}
                onChange={event => this.selectItem(event.target)}
              >
                <option value="STATE">бюджетна форма власності</option>
                <option value="PRIVATE">приватна форма власності</option>
              </select>
            </div>
          </div>
          <legend>Види діяльності</legend>
          <div>
            <label className="touched" htmlFor="owner_property_type">
              Обов'язковий КВЕД*
            </label>
            <select
              name="owner_property_type"
              value={owner_property_type.value}
              onChange={event => this.selectItem(event.target)}
            >
              <option value="86.10">
                86.10. Діяльність лікарняних закладів
              </option>
              <option value="86.21">86.21. Загальна медична практика</option>
            </select>
          </div>
          <legend>Адреса</legend>
          <div>Фактичне місцезнаходження*</div>
          <div className="row">
            <div className="row_item--lit">
              <label className="touched" htmlFor="area">
                Область
              </label>
              <select
                name="area"
                value={area.value}
                onChange={event => this.selectItem(event.target)}
              >
                {regions.map(region => (
                  <option key={region.id} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="row_item--lit">
              <label
                htmlFor="area_reg"
                className={
                  this.state.area_reg.touched || this.state.area_reg.active
                    ? "touched"
                    : ""
                }
              >
                Район
              </label>
              <input
                name="area_reg"
                type="text"
                id="area_reg"
                onBlur={() => area_reg.blur()}
                onChange={event =>
                  area_reg.change(event.target.value || undefined)
                }
                onFocus={() => area_reg.focus()}
                value={area_reg.value || ""}
                placeholder=""
                className={this.state.area_reg.active ? "active--input" : ""}
              />
            </div>
            <div className="row_item--lit">
              <label
                htmlFor="area_city"
                className={
                  this.state.area_city.touched || this.state.area_city.active
                    ? "touched"
                    : ""
                }
              >
                Населений пункт*
              </label>
              <input
                name="area_city"
                type="text"
                id="area_city"
                onBlur={event => this.validationInput(event.target)}
                onChange={event =>
                  area_city.change(event.target.value || undefined)
                }
                onFocus={() => area_city.focus()}
                value={area_city.value || ""}
                placeholder=""
                className={this.state.area_city.active ? "active--input" : ""}
                // required
              />
              <div
                className={
                  this.state.area_city.valid === false ? "warning" : "hide"
                }
              >
                Поле не мoже бути пустим
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row_item">
              <label className="touched" htmlFor="area_street">
                Тип вулицi*
              </label>
              <select
                name="area_street"
                value={area_street.value}
                onChange={event => this.selectItem(event.target)}
              >
                <option value="вулиця">вулиця</option>
                {streets.map((street, index) => (
                  <option key={index} value={street}>
                    {street}
                  </option>
                ))}
              </select>
            </div>
            <div className="row_item">
              <label
                htmlFor="area_street_name"
                className={
                  this.state.area_street_name.touched ||
                  this.state.area_street_name.active
                    ? "touched"
                    : ""
                }
              >
                Назва вулицi*
              </label>
              <input
                name="area_street_name"
                type="text"
                id="area_street_name"
                onBlur={event => this.validationInput(event.target)}
                onChange={event =>
                  area_street_name.change(event.target.value || undefined)
                }
                onFocus={() => area_street_name.focus()}
                value={area_street_name.value || ""}
                placeholder=""
                className={
                  this.state.area_street_name.active ? "active--input" : ""
                }
                // required
              />
              <div
                className={
                  this.state.area_street_name.valid === false
                    ? "warning"
                    : "hide"
                }
              >
                Поле не мoже бути пустим
              </div>
            </div>
          </div>
          <div className="buttons">
            <button type="submit" disabled={formState.submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => this.form.reset()}
              disabled={formState.submitting || formState.pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(this.state, 0, 2)}</pre>
        </form>
      </div>
    );
  }
}

const getInfo = type => {
  let infos = values.filter(el => el.name === type);
  return Object.values(infos[0].values);
};

const streets = getInfo("STREET_TYPE");

const mapDispatch = dispatch => ({
  sendData: data => dispatch({ type: "SEND_REGISTATION", data: data })
});

export default connect(
  null,
  mapDispatch
)(Form);
