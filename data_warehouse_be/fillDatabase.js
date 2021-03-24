const sequelize = require("./src/database/db");

const { User } = require("./src/database/models/usersModel");

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

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database is connected");
  })
  .then(() => {
    users.forEach((singleuser) => {
      console.log("Usuario: " + singleuser.userLastName);
      User.create(singleuser);
    }
      
    );
  }).catch((exp)=> {
    console.log("User creation" + exp);
  });
