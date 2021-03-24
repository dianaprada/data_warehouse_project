/* Configure serv & ... */
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

/**
 * Middlewares
 */

/* create application/json parser */
const jsonParser = bodyParser.json();

/* create application/x-www-form-urlencoded parser */
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* Authentication */
const auth = require("../middlewares/authentication");

/* Controllers */
const usersController = require("../controllers/usersController");

/* Policies */
const profilePolicy = require("../policies/profilePolicy");


/**
 * User Login
 */

router.post("/login", jsonParser, usersController.signIn);

/**
 * Register - Create new user
 */

router.post("/register", jsonParser, auth, profilePolicy.isAdmin,  usersController.signUp);

/**
 * Users CRUD
 */




module.exports = router;