const values = [
  {
    values: {
      MALE: "чоловіча",
      FEMALE: "жіноча"
    },
    name: "GENDER",
    labels: ["SYSTEM", "EXTERNAL"],
    is_active: true
  },
  {
    values: {
      TRACT: "урочище",
      STREET: "вулиця",
      STATION: "станція",
      SQUARE: "площа",
      SELECTION_BASE: "селекційна станція",
      ROAD: "дорога",
      RIVER_SIDE: "набережна",
      PASSAGE: "проїзд",
      PASS: "провулок",
      MILITARY_BASE: "військова частина",
      MICRODISTRICT: "мікрорайон",
      MAIDAN: "майдан",
      LINE: "лінія",
      HOUSING_AREA: "житловий масив",
      HIGHWAY: "шосе",
      FORESTRY: "лісництво",
      ENTRANCE: "в'їзд",
      BOULEVARD: "бульвар",
      BLOCK: "квартал",
      BLIND_STREET: "тупик",
      AVENUE: "проспект",
      ASCENT: "узвіз",
      ALLEY: "алея"
    },
    name: "STREET_TYPE",
    labels: ["SYSTEM", "EXTERNAL"],
    is_active: true
  },
  {
    values: {
      TEMPORARY_PASSPORT: "Тимчасове посвідчення громадянина України",
      TEMPORARY_CERTIFICATE: "Посвідка на проживання",
      REFUGEE_CERTIFICATE: "Посвідка біженця",
      PERMANENT_RESIDENCE_PERMIT: "Посвідка на постійне проживання в Україні",
      PASSPORT: "Паспорт громадянина України",
      NATIONAL_ID: "Біометричний паспорт громадянина України",
      COMPLEMENTARY_PROTECTION_CERTIFICATE:
        "Посвідчення особи, яка потребує додаткового захисту",
      BIRTH_CERTIFICATE:
        "Свідоцтво про народження (для осіб, які не досягли 14-річного віку)"
    },
    name: "DOCUMENT_TYPE",
    labels: ["SYSTEM", "EXTERNAL"],
    is_active: true
  },
  {
    values: {
      VILLAGE: "село",
      TOWNSHIP: "селище міського типу",
      SETTLEMENT: "селище",
      CITY: "місто"
    },
    name: "SETTLEMENT_TYPE",
    labels: ["SYSTEM", "EXTERNAL"],
    is_active: true
  },
  {
    values: {
      PHONE: "телефон",
      EMAIL: "поштова адреса"
    },
    name: "TYPE_CONTACTS",
    labels: ["SYSTEM", "EXTERNAL"],
    is_active: true
  }
];
export default values;
