import assets from "./assets";

const Serv = [
  {
    id: "S-01",
    name: "Website",
    creator: "Putri Intan",
    price: "2,000",
    description:
      "Create your own website, for personal or professional use. Extra Features: backend, multipage, interactive elements, login portal",
    image: assets.comp,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Tan",
        price: 4.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-12",
        name: "Jennifer Sia",
        price: 4.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: 4.75,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
  {
    id: "S-02",
    name: "Multiplatform App",
    creator: "Siti Nurhaliza",
    price: "40,000",
    description:
    "Develop a multiplatform app for your business. This app will work on android and apple phones. Extra Features: backend with database, multipage, login portal",
    image: assets.appM,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: 7.05,
        image: assets.person04,
        date: "December 12, 2019 at 12:10 PM",
      },
    ],
  },
  {
    id: "S-03",
    name: "IOS App",
    creator: "Elisabeth aho",
    price: "30,000",
    description:
      "Develop an IOS app for your business. This app will not work on android phones. Extra Features: backend with database, multipage, login portal",
    image: assets.iosA,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: 95.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-32",
        name: "Jennifer Sia",
        price: 95.5,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
    ],
  },
  {
    id: "S-04",
    name: "Consultation",
    creator: "Putri Intan",
    price: "150",
    description:
      "If you are not sure what your businesss model would beneift from the most, sit down for a consultation to talk about your needs for your business.",
    image: assets.cons,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: 56.25,
        image: assets.person02,
        date: "December 12, 2019 at 12:10 PM",
      },
      {
        id: "BID-42",
        name: "Jennifer Sia",
        price: 54.25,
        image: assets.person03,
        date: "December 27, 2019 at 1:50 PM",
      },
      {
        id: "BID-43",
        name: "Rosie Wong",
        price: 55.15,
        image: assets.person04,
        date: "December 31, 2019 at 3:50 PM",
      },
      {
        id: "BID-44",
        name: "Vincent Swift",
        price: 54.15,
        image: assets.person02,
        date: "December 31, 2019 at 3:50 PM",
      },
    ],
  },
 
 
];

export { Serv };