import React from "react";
import logo from "./logo.svg";
import "./App.css";
import regions from "./data/regions";
import values from "./data/values";
import { createForm } from "final-form";

const fieldNames = [
  "edrpou",
  "legal_form",
  "name",
  "short_name",
  "public_name",
  "owner_property_type"
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

class Form extends React.Component {
  constructor() {
    super();
    const initialState = {};
    let inConstructor = true;
    this.form = createForm({ onSubmit });

    // subscribe to form changes
    this.unsubscribe = this.form.subscribe(
      formState => {
        // cannot call setState in constructor, but need to on subsequent notifications
        if (inConstructor) {
          initialState.formState = formState;
        } else {
          this.setState({ formState });
        }
      },
      { active: true, pristine: true, submitting: true, values: true }
    );

    // register fields
    this.unsubscribeFields = fieldNames.map(fieldName =>
      this.form.registerField(
        fieldName,
        fieldState => {
          // cannot call setState in constructor, but need to on subsequent notifications
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

  render() {
    const {
      formState,
      firstName,
      name,
      edrpou,
      legal_form,
      short_name,
      public_name,
      owner_property_type
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
                maxLength="8"
                onBlur={() => edrpou.blur()}
                onChange={event =>
                  edrpou.change(event.target.value || undefined)
                }
                onFocus={() => edrpou.focus()}
                value={edrpou.value || ""}
                placeholder="ЄДРПОУ*"
                // required
              />
            </div>
            <div className="row_item">
              <label htmlFor="legal_form">Організаційно-правова форма*</label>
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
                maxLength="8"
                onBlur={() => name.blur()}
                onChange={event => name.change(event.target.value || undefined)}
                onFocus={() => name.focus()}
                value={name.value || ""}
                placeholder="Повна назва*"
                // required
              />
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
                placeholder="Cкорочена назва (за наявності)"
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
                placeholder="Публічна назва (якщо відрізняється)"
              />
            </div>
            <div className="row_item">
              <label htmlFor="owner_property_type">Тип закладу*</label>
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

export default Form;
