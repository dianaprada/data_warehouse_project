const sequelize = require("./src/database/db");

const { User } = require("./src/database/models/usersModel");
const { Region } = require("./src/database/models/regionsModel");
const { Country } = require("./src/database/models/countriesModel");
const { City } = require("./src/database/models/citiesModel");
const { Company } = require("./src/database/models/companyModels");
const { Contact } = require("./src/database/models/contactsModel");

const bcrypt = require("bcrypt");
const authConfig = require("./config/auth");

const saltRounds = Number.parseInt(authConfig.rounds);

const hash_User_1 = bcrypt.hashSync("12345678901", saltRounds);
const hash_User_2 = bcrypt.hashSync("45678901234", saltRounds);
const hash_User_3 = bcrypt.hashSync("78901234567", saltRounds);
const hash_User_4 = bcrypt.hashSync("09876543210", saltRounds);
const hash_User_5 = bcrypt.hashSync("765765765765", saltRounds);

const users = [
  {
    userName:  "Freddie",
    userLastName: "Mercury",
    userEmail: "freddie_mercury@acamica.com",
    userProfile: "Admin",
    userPassword: hash_User_1,
    userImg: "../data_warehouse_be/assets/userimg/freddie_mercury.png",
  },
  {
    userName:  "Mick",
    userLastName: "Jagger",
    userEmail: "mick_jagger@acamica.com",
    userProfile: "Admin",
    userPassword: hash_User_2,
    userImg: "../data_warehouse_be/assets/userimg/mick_jagger.png",
  },
  {
    userName:  "Paul David",
    userLastName: "Hewson",
    userEmail: "u2_bono@acamica.com",
    userProfile: "Admin",
    userPassword: hash_User_3,
    userImg: "../data_warehouse_be/assets/userimg/bono.png",
  },
  {
    userName:  "John",
    userLastName: "Smith",
    userEmail: "john_smith_1@acamica.com",
    userProfile: "Basic",
    userPassword: hash_User_4,
    userImg: "../data_warehouse_be/assets/userimg/john_smith.png",
  },
  {
    userName:  "Jean",
    userLastName: "Doe",
    userEmail: "jean_doe_1@acamica.com",
    userProfile: "Basic",
    userPassword: hash_User_5,
    userImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },
];

// Regions

const regions = [

  {
    regionName: "LATAM",
  },
  {
    regionName: "EMEA",
  },
  {
    regionName: "APAC",
  },
  {
    regionName: "NA",
  },
  {
    regionName: "JAPAN",
  },
 
];

// Countries

const countries = [
  {
    regionID:  "1",
    countryCod: "ar",
    countryName: "Argentina",
  },
  {
    regionID:  "1",
    countryCod: "co",
    countryName: "Colombia",
  },
  {
    regionID:  "1",
    countryCod: "cl",
    countryName: "Chile",
  },
  {
    regionID:  "1",
    countryCod: "uy",
    countryName: "Uruguay",
  },
  {
    regionID:  "1",
    countryCod: "mx",
    countryName: "Mexico",
  },
  {
    regionID:  "2",
    countryCod: "us",
    countryName: "Estados Unidos",
  },  
  {
    regionID:  "3",
    countryCod: "fj",
    countryName: "Fiji",
  }, 
  {
    regionID:  "3",
    countryCod: "mv",
    countryName: "Maldives",
  }, 
  {
    regionID:  "4",
    countryCod: "de",
    countryName: "Alemania",
  },  
  {
    regionID:  "4",
    countryCod: "es",
    countryName: "España",
  }, 
  {
    regionID:  "5",
    countryCod: "jp",
    countryName: "Japón",
  }, 
  
];

// Cities

const cities = [
  {
    countryID:  "1",
    cityName: "Buenos Aires",
  },
  {
    countryID:  "1",
    cityName: "Córdoba",
  },
  {
    countryID:  "2",
    cityName: "Bogotá",
  },
  {
    countryID:  "2",
    cityName: "Medellín",
  },
  {
    countryID:  "2",
    cityName: "Bucaramanga",
  },
  {
    countryID:  "3",
    cityName: "Santiago",
  },  
  {
    countryID:  "4",
    cityName: "Montevideo",
  }, 
  {
    countryID:  "5",
    cityName: "Ciudad de México",
  }, 
  {
    countryID:  "6",
    cityName: "Florida",
  },  
  {
    countryID:  "6",
    cityName: "Texas",
  }, 
  {
    countryID:  "9",
    cityName: "Berlín",
  }, 
  {
    countryID:  "10",
    cityName: "Barcelona",
  },
  {
    countryID:  "11",
    cityName: "Tokio",
  },
  {
    countryID:  "11",
    cityName: "Kioto",
  }, 
  
  
];


// Companies

const companies = [
  {
    cityID:  "1",
    companyName: "Acamica",
    companyAddress: "Humboldt 1967, C1414 CTU",
    companyEmail: "acamica@acamica.com",
    companyPhone: "3151234567",
  },
  {
    cityID:  "6",
    companyName: "Netflix",
    companyAddress: "Calle Falsa 123",
    companyEmail: "netflix@netflix.com",
    companyPhone: "8007550114",
  },
  {
    cityID:  "7",
    companyName: "Despegar",
    companyAddress: "Calle del despegue 123",
    companyEmail: "despegar@despegar.com",
    companyPhone: "8007550114",
  },
  {
    cityID:  "8",
    companyName: "Mercado Libre",
    companyAddress: "Calle del Mercado Libre 123",
    companyEmail: "mercado.libre@mercadolibre.com",
    companyPhone: "8007550114",
  },
  {
    cityID:  "4",
    companyName: "Globant",
    companyAddress: "Carrera 43A #5A-113 Torre norte pisos 16-21. One Plaza Business Center",
    companyEmail: "globant@globant.com",
    companyPhone: "3157550114",
  },
  {
    cityID:  "4",
    companyName: "Ecom Experts",
    companyAddress: "Carrera 43A #5A-113 Torre norte pisos 16-21. One Plaza Business Center",
    companyEmail: "ecomexperts@ecomexperts.com",
    companyPhone: "3157550114",
  },


];

// Contacts

const contacts = [
  {
    companyID:  "6",
    contactName: "Camila Soledad",
    contactLastName: "Pantó",
    contactEmail: "camilapanto123@ecomexperts.com",
    contactPosition: "3151234567",
    contactAddress:  "Humboldt 1967, C1414 CTU",
    contactChanel: "Acamica",
    contactAccount: "Humboldt 1967, C1414 CTU",
    contactInterest: "acamica@acamica.com",
    contactPreferences: "acamica@acamica.com",
    contactImg: "acamica@acamica.com",
  },
 
  
];

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database is connected");
  })
  .then(() => {
    users.forEach((singleuser) => {
      console.log("Usuario: " + singleuser.userLastName);
      User.create(singleuser);
    });

  }).then(() => {
    regions.forEach((singleRegion) => {
      console.log("Región: " + singleRegion.regionName);
      Region.create(singleRegion);
    });

  }).then(() => {
    countries.forEach((singleCountry) => Country.create(singleCountry));

  }).then(() => {
    cities.forEach((singleCity) => City.create(singleCity));

  }).then(() => {
    companies.forEach((singleCompany) => Company.create(singleCompany));
  
  }).then(() => {
    contacts.forEach((singleContact) => Contact.create(singleContact));
  
  }).catch((exp)=> {
    console.log("User creation" + exp);
  });
