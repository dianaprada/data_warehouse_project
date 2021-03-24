const { User } = require("../database/models/usersModel");

module.exports = {
 
  /* Middelware Profile authentication policies */

  isAdmin(req, res, next) {
    let userProfile = req.user.userProfile;
    let userStatus = req.user.userStatus;

    if (userProfile === "Admin" && userStatus === "Enabled") {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized user" });
    }
  },

  /* Middelware Profile authentication policies */

  isBasic(req, res, next) {
    let userProfile = req.user.userProfile;
    let userStatus = req.user.userStatus;

    if (userProfile === "Basic" && userStatus === "Enabled") {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized user" });
    }
  },
};
