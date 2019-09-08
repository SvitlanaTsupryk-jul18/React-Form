const ObjectId = val => val;
const ISODate = date => date;

const regions = [
  {
    _id: ObjectId("5b3987d829cece0c6c7bd193"),
    name: "АВТОНОМНА РЕСПУБЛІКА КРИМ",
    koatuu: "0100000000",
    id: "b392aad2-988b-4452-851c-766d48fc94c6",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd194"),
    name: "ВІННИЦЬКА",
    koatuu: "0500000000",
    id: "c4c0f907-8b60-483e-bbf6-dfb34ab91574",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd195"),
    name: "ДНІПРОПЕТРОВСЬКА",
    koatuu: "1200000000",
    id: "45311788-3735-4ccf-884c-409c089f3a45",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd196"),
    name: "ДОНЕЦЬКА",
    koatuu: "1400000000",
    id: "27b0197d-f470-4b2c-af27-4d82e953db9d",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd197"),
    name: "ЖИТОМИРСЬКА",
    koatuu: "1800000000",
    id: "0cbaccf9-77e2-48a4-94d3-ad3737140476",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd198"),
    name: "ЗАКАРПАТСЬКА",
    koatuu: "2100000000",
    id: "9ff97849-ea3b-449a-9a2d-f7de4c3e9559",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd199"),
    name: "ЗАПОРІЗЬКА",
    koatuu: "2300000000",
    id: "00eb9de4-508d-4219-bfc8-496238570dfd",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19a"),
    name: "ІВАНО-ФРАНКІВСЬКА",
    koatuu: "2600000000",
    id: "4fc7d2f2-c61a-4533-a1a9-62480c80e263",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19b"),
    name: "КИЇВСЬКА",
    koatuu: "3200000000",
    id: "c0607c50-2dde-4c79-8ec9-696836a99a18",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19c"),
    name: "КІРОВОГРАДСЬКА",
    koatuu: "3500000000",
    id: "bfc84d7a-6487-4ae4-93b6-026182ff1238",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19d"),
    name: "ЛУГАНСЬКА",
    koatuu: "4400000000",
    id: "616f1acc-7a4e-4d03-9a03-5ab3e372578f",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19e"),
    name: "ЛЬВІВСЬКА",
    koatuu: "4600000000",
    id: "1718a2a9-46cb-4f53-a3eb-2b341f7bb034",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd19f"),
    name: "МИКОЛАЇВСЬКА",
    koatuu: "4800000000",
    id: "3f766fcd-8f57-49b1-8c63-0ecf6a1c73d7",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a0"),
    name: "ОДЕСЬКА",
    koatuu: "5100000000",
    id: "b11b31ba-38d9-4a2c-818d-6a1a980998cf",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a1"),
    name: "ПОЛТАВСЬКА",
    koatuu: "5300000000",
    id: "e73779f5-5336-4f14-8351-0938bb412571",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a2"),
    name: "РІВНЕНСЬКА",
    koatuu: "5600000000",
    id: "23a4fa72-d570-4f19-b8f3-89ac42341a47",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a3"),
    name: "СУМСЬКА",
    koatuu: "5900000000",
    id: "23b8090d-9efa-4431-b63a-3f45559eee2c",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a4"),
    name: "ТЕРНОПІЛЬСЬКА",
    koatuu: "6100000000",
    id: "d19e3326-407e-4323-a5a3-e43f574d63cc",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a5"),
    name: "ХАРКІВСЬКА",
    koatuu: "6300000000",
    id: "cfb02075-fab4-4fb1-9a1d-2de9bd3c698a",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a6"),
    name: "ХЕРСОНСЬКА",
    koatuu: "6500000000",
    id: "6f985e33-182f-4aa2-acfc-8bf34702bb85",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a7"),
    name: "ХМЕЛЬНИЦЬКА",
    koatuu: "6800000000",
    id: "39654298-c513-406c-ab27-4adde3921bb1",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a8"),
    name: "ЧЕРКАСЬКА",
    koatuu: "7100000000",
    id: "c55239e7-8c73-425b-a0ef-70466a250581",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1a9"),
    name: "ЧЕРНІВЕЦЬКА",
    koatuu: "7300000000",
    id: "785cb11c-7efb-4599-b613-e19c4c91b289",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1aa"),
    name: "ЧЕРНІГІВСЬКА",
    koatuu: "7400000000",
    id: "d5c669ff-0af8-4dd3-b683-b7d405b071b2",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1ab"),
    name: "М.КИЇВ",
    koatuu: "8000000000",
    id: "1a0a5d1f-06fb-4c93-b9a5-e9eaadea664e",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1ac"),
    name: "М.СЕВАСТОПОЛЬ",
    koatuu: "8500000000",
    id: "99310bc4-ac7c-4f1f-bc29-b3ae25bd96bc",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  },

  {
    _id: ObjectId("5b3987d829cece0c6c7bd1ad"),
    name: "ВОЛИНСЬКА",
    koatuu: "0700000000",
    id: "09a33c98-9a5c-447a-8493-da8fcecb6873",
    request_id: "0cc86f98-efdc-4cbf-a447-9dc6827e9ede",
    request_date: ISODate("2018-07-02T02:03:04.000Z")
  }
];

export default regions;
