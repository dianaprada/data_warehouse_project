const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

const { Company } = require("./companyModels");

/**
 * Contacts Model
 */

class Contact extends Model {}

Contact.init(
  {
    // attributes
    contactID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    companyID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        is: {
          args: [/^[a-zA-Z\s-, ]+$/i],
          msg: "Contact Name only allow alphabetic characters",
        },
        len: {
          args: [2, 100],
          msg: "User Name must be between 2 and 100 characters in length.",
        },
        notNull: {
          msg: "Please enter the Contact Name",
        },
      },
    },
    contactLastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      validate: {
        is: {
          args: [/^[a-zA-Z\s-, ]+$/i],
          msg: "Contact Name only allow alphabetic characters",
        },
        len: {
          args: [2, 100],
          msg: "Contact Name must be between 2 and 100 characters in length.",
        },
        notNull: {
          msg: "Please enter the Contact Lastname",
        },
      },
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: {
        msg: "This Email address is already taken.",
      },
      validate: {
        isEmail: {
          msg: "Email address must be valid.",
        }, // checks for email format (foo@bar.com)
        len: {
          args: [7, 100],
          msg: "Email address must be between 7 and 100 characters in length.",
        },
        notNull: {
          msg: "Please enter an Email address",
        },
      },
    },
    contactPosition: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100], // only allow values with length between 3 and 100
        notNull: {
          msg: "Please enter the Contact Position",
        },
      },
    },
    contactAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100], // only allow values with length between 3 and 100
        notNull: {
          msg: "Please enter the Contact Address",
        },
      },
    },
    contactChanel: {
      type: DataTypes.ENUM("Teléfono", "Email","WhatsAPP", "Facebook","Twitter"),
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter the Contact Chanel",
        },
      },
    },
    contactAccount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 200], // only allow values with length between 3 and 100
        notNull: {
          msg: "Please enter the Contact Account",
        },
      },
    },
    contactInterest: {
      type: DataTypes.ENUM("0", "25","50", "75","100"),
      allowNull: false,
      defaultValue: "0",
    },
    contactPreferences: {
      type: DataTypes.ENUM("Sin preferencia", "Canal favorito","No molestar"),
      allowNull: false,
      defaultValue: "Sin preferencia",
    },
    contactImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "contact",
  }
);

/**
 * Associations
 */

Company.hasMany(Contact, {
  foreignKey: { name: "companyID", allowNull: false },
});

Contact.belongsTo(Company, {
  foreignKey: { name: "companyID", allowNull: false },
});

module.exports = { Contact };
