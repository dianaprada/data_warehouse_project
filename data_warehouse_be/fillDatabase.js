const sequelize = require("./src/database/db");

const { User } = require("./src/database/models/usersModel");
const { Region } = require("./src/database/models/regionsModel");
const { Country } = require("./src/database/models/countriesModel");
const { City } = require("./src/database/models/citiesModel");
const { Company } = require("./src/database/models/companyModels");
const { Contact } = require("./src/database/models/contactsModel");
const { Chanel } = require("./src/database/models/chanelsModel");

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
    countryName: "Argentina",
  },
  {
    regionID:  "1",
    countryName: "Colombia",
  },
  {
    regionID:  "1",
    countryName: "Chile",
  },
  {
    regionID:  "1",
    countryName: "Uruguay",
  },
  {
    regionID:  "1",
    countryName: "Mexico",
  },
  {
    regionID:  "4",
    countryName: "Estados Unidos",
  },  
  {
    regionID:  "3",
    countryName: "Fiji",
  }, 
  {
    regionID:  "3",
    countryName: "Maldives",
  }, 
  {
    regionID:  "2",
    countryName: "Alemania",
  },  
  {
    regionID:  "2",
    countryName: "España",
  }, 
  {
    regionID:  "5",
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
    companyAddress: "Whitehaven Mansions Apt 56B",
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
    cityID:  "12",
    companyName: "Mercado Libre",
    companyAddress: "Privet Drive 4",
    companyEmail: "mercado.libre@mercadolibre.com",
    companyPhone: "8007550114",
  },
  {
    cityID:  "4",
    companyName: "Globant",
    companyAddress: "Carrera 43A #5A-113",
    companyEmail: "globant@globant.com",
    companyPhone: "3157550114",
  },
  {
    cityID:  "10",
    companyName: "Ecom Experts",
    companyAddress: "742 Evergreen Terrace",
    companyEmail: "ecomexperts@ecomexperts.com",
    companyPhone: "3157550114",
  },


];

// Contacts

const contacts = [
  {
    companyID:  "1",
    cityID:  "1",
    contactName: "Camila Soledad",
    contactLastName: "Panto",
    contactEmail: "camila@panto.com",
    contactPosition: "UX Designer",
    contactAddress:  "Whitehaven Mansions Apt 56B",
    contactInterest: "0",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },
  {
    companyID:  "2",
    cityID:  "3",
    contactName: "Agustin Emmanuel",
    contactLastName: "Soria",
    contactEmail: "agustin@soria.com",
    contactPosition: "UI Designer",
    contactAddress:  "Humboldt 1967, C1414 CTU",
    contactInterest: "25",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },
  {
    companyID:  "3",
    cityID:  "5",
    contactName: "Denver Steven",
    contactLastName: "Soria",
    contactEmail: "denver@soria.com",
    contactPosition: "Developer",
    contactAddress:  "Privet Drive 4",
    contactInterest: "50",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  }, 
  {
    companyID:  "4",
    cityID:  "7",
    contactName: "Sebastian Agustin",
    contactLastName: "Panto",
    contactEmail: "sebas@panto.com",
    contactPosition: "Scrum Master",
    contactAddress:  "221B Baker Street",
    contactInterest: "75",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },

  {
    companyID:  "5",
    cityID:  "9",
    contactName: "Valentino",
    contactLastName: "Boetto",
    contactEmail: "valentino@boetto.com",
    contactPosition: "Product Owner",
    contactAddress:  "Número 3 de Abbey Road",
    contactInterest: "75",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },

  {
    companyID:  "1",
    cityID:  "11",
    contactName: "Guillermina",
    contactLastName: "Budano",
    contactEmail: "guillermina@budano.com",
    contactPosition: "Sales",
    contactAddress:  "742 Evergreen Terrace",
    contactInterest: "75",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },

  {
    companyID:  "2",
    cityID:  "10",
    contactName: "Laura",
    contactLastName: "Errante",
    contactEmail: "laura@errante.com",
    contactPosition: "Sales Manager",
    contactAddress:  "Calle falsa 123",
    contactInterest: "75",
    contactImg: "../data_warehouse_be/assets/userimg/jane_doe.png",
  },


];

// Chanels

const chanels = [
  {
    contactID:  "1",
    contactChanel: "Telefono",
    contactAccount: "3151234567",
    contactPreferences: "Sin preferencia",
    
  },
  {
    contactID:  "1",
    contactChanel: "Email",
    contactAccount: "contact1@contact.com",
    contactPreferences: "Canal favorito",
    
  },
  {
    contactID:  "2",
    contactChanel: "WhatsAPP",
    contactAccount: "3012806263",
    contactPreferences: "No molestar",
    
  },
  {
    contactID:  "1",
    contactChanel: "LinkedIn",
    contactAccount: "@Quebobis",
    contactPreferences: "Sin preferencia",
    
  },
  {
    contactID:  "2",
    contactChanel: "LinkedIn",
    contactAccount: "@bobis",
    contactPreferences: "Sin preferencia",
    
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
  
  }).then(() => {
    chanels.forEach((singleChanel) => Chanel.create(singleChanel));
  
  }).catch((exp)=> {
    console.log("User creation" + exp);
  });
