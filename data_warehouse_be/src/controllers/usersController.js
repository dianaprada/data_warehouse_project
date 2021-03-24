/* Configure Database */
const { User } = require("../database/models/usersModel");
const { Op } = require("sequelize");

/* Password hashing */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* Authentication */
const authConfig = require("../../config/auth");

module.exports = {
  
  /* login */
  
  signIn(req, res) {
    let { userAccount, password } = req.body;

    /* Find User */
    console.log("Usuario Body UserAccount", userAccount);
    
    User.findAll({
      where: {
        [Op.or]: [{ userName: userAccount }, { userEmail: userAccount }],
      },
    })
      .then((users) => {
        if (!users) {
          res.status(404).json({ message: "User not found" });
        } else {
          if (bcrypt.compareSync(password, users[0].userPassword)) {
            /* Create Token */
            let token = jwt.sign({ user: users[0] }, authConfig.secret, {
              expiresIn: authConfig.expires,
            });

            res.status(200).json({
              user: users[0].userProfile,
              token: token,
              message: "",
            });
          } else {
            // Unathorized Access
            
            res.status(401).json({ message: "Invalid username or password" });
          }
        }
      })
      .catch((err) => {
        
        res.status(500).json({ message: err });
      });
  },

  /* Register - Create new user */

  signUp(req, res) {
    let passwordLen = req.body.userPassword;

    if (
      passwordLen === null ||
      passwordLen === "null" ||
      passwordLen.length < 8 ||
      passwordLen.length > 20
    ) {
      res.status(400).json({
        message: "Password must be between 8 and 20 characters in length.",
      });
    } else {
      /* Encrypt password */
      let hashPassword = bcrypt.hashSync(
        req.body.userPassword,
        Number.parseInt(authConfig.rounds)
      );

      /* Create a user */
      User.create({
        userName: req.body.userName,
        userLastName: req.body.userLastName,
        userEmail: req.body.userEmail,
        userProfile: req.body.userProfile,
        userPassword: hashPassword,
        userImg: req.body.userImg,
      })
        .then((user) => {
          /* Create Token */
          let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires,
          });
          //res.status(201).json({ message: "User created" });
          res.status(201).json({
            user: user,
            token: token,
          });
        })
        .catch((err) => {
          res.status(400).json({ message: err.message });
        });
    }
  },

  /* Middelware Find User by ID */

  findUser(req, res, next) {
    User.findOne({ where: { userID: req.params.id } }).then((user) => {
      if (!user) {
        res.status(404).json({ msg: "User not found" });
      } else {
        req.user = user;
        next();
      }
    });
  },

  /* Get all Users */

  getAllUsers(req, res) {
    User.findAll({ where: { userStatus: "Enabled" } }).then((users) => {
      res.status(200).json(users);
    });
  },

  /* Get User by ID */

  getOneUser(req, res) {
    res.status(200).json(req.user);
  },

  /* Update User one */

  updateUser(req, res) {
    /* Encrypt password */
    let hashNewPassword = bcrypt.hashSync(
      req.body.password,
      Number.parseInt(authConfig.rounds)
    );

    req.user.userName = req.body.userName;
    req.user.userLastName = req.body.userLastName;
    req.user.userEmail = req.body.userEmail;
    req.user.userProfile = req.body.userProfile;
    req.user.userPassword = hashNewPassword;
    req.user.userImg = req.body.userImg;

    req.user.save().then((user) => {
      res.status(200).json({ msg: "User has been updated.", user });
    });
  },

  /* Delete User */

  deleteUser(req, res) {
    req.user.destroy().then(() => {
      res.status(200).json({ msg: "User has been deleted" });
    });
  },
};
