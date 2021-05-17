/* Configure Database */
const { Contact } = require("../database/models/contactsModel");
const { Company } = require("../database/models/companyModels");
const { City } = require("../database/models/citiesModel");
const { Country } = require("../database/models/countriesModel");
const { Region } = require("../database/models/regionsModel");

const { Op } = require("sequelize");

module.exports = {
  /* Middleware Find contact by ID */

  async findContact(req, rest, next) {
    let contact = await Contact.findOne({
      where: { contactID: req.params.id },
    });

    if (!contact) {
      rest.status(404).json({
        status: 404,
        ok: false,
        title: "Not Found",
        detail: "This Contact does not exist in the database",
        message: "Contact not found",
      });
    } else {
      req.contact = contact;
      next();
    }
  },

  /* Middleware Find Company by ID Include all */

  async findContactIncludeCompany(req, res, next) {
    let contact = await Contact.findOne({
      where: { contactID: req.params.id },
      include: [
        {
          model: Company,
          attributes: ["companyID", "companyName", "cityID"],
          include: [
            {
              model: City,
              attributes: ["cityID", "cityName"],
              include: [
                {
                  model: Country,
                  attributes: ["countryID", "countryName"],
                  include: [
                    {
                      model: Region,
                      attributes: ["regionID", "regionName"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!contact) {
      res.status.json({
        status: 404,
        ok: false,
        title: "Not Found",
        detail: "This Contact does not exist in the database",
        message: "Company not found",
      });
    } else {
      req.contact = contact;
      next();
    }
  },

  /* Create a Company */

  async createContact(req, res) {
    let contact = await Company.create({
      companyID: req.body.companyID,
      contactName: req.body.contactName,
      contactLastName: req.body.contactLastName,
      contactEmail: req.body.contactEmail,
      contactPosition: req.body.contactPosition,
      contactAddress: req.body.contactAddress,
      contactChanel: req.body.contactChanel,
      contactAccount: req.body.contactAccount,
      contactInterest: req.body.contactInterest,
      contactPreferences: req.body.contactPreferences,
      contactImg: req.body.contactImg,
    });

    res.status(201).json({
      contact,
      status: 201,
      ok: true,
      title: "Successful request",
      message: "Created",
    });
  },

  /* Get Contacst */

  async getAllContacts(req, res) {
    company
      .findAll({
        include: [
          {
            model: Company,
            attributes: ["companyID", "companyName", "cityID"],
            include: [
              {
                model: City,
                attributes: ["cityID", "cityName"],
                include: [
                  {
                    model: Country,
                    attributes: ["countryID", "countryName"],
                    include: [
                      {
                        model: Region,
                        attributes: ["regionID", "regionName"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      })
      .then((contacts) => {
        if (!contacts) {
          res.status(404).json({
            status: 404,
            ok: false,
            title: "Not Found",
            detail: "There are no Contacts registered in the database",
            message: "Contact not found",
          });
        } else {
          res.status(200).json({
            contacts,
            status: 200,
            ok: true,
            title: "Successful request",
            message: "Contact Found",
          });
        }
      });
  },

  /* Get Contact by ID */

  async getContactByID(req, res) {
    res.status(200).json({
      contact: req.contact, 
      status: 200,
      ok: true,
      title: "Successful request",
      message: "Contact Found",
    });
  },

  /* Update Contact */

  async updateContact(req, res) {
    (req.contact.companyID = req.body.companyID),
      (req.contact.contactName = req.body.contactName),
      (req.contact.contactLastName = req.body.contactLastName),
      (req.contact.contactEmail = req.body.contactEmail),
      (req.contact.contactPosition = req.body.contactPosition),
      (req.contact.contactAddress = req.body.contactAddress),
      (req.contact.contactChanel = req.body.contactChanel),
      (req.contact.contactAccount = req.body.contactAccount),
      (req.contact.contactInterest = req.body.contactInterest),
      (req.contact.contactPreferences = req.body.contactPreferences),
      (req.contact.contactImg = req.body.contactImg),
      req.contact.save().then((contact) => {
        res.status(200).json({
          company,
          status: 200,
          ok: true,
          title: "Successful request",
          message: "Company has been updated.",
        });
      });
  },

  /* Delete Contact */

  async deleteContact(req, res) {
    req.contact.destroy().then(() => {
      res.status(200).json({
        status: 200,
        ok: true,
        title: "Successful request",
        message: "Contact has been deleted.",
      });
    });
  },
};
