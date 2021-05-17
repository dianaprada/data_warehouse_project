/**
 * Imports
 */
 
 import apiCompanies from "./main_servicesCompany.js";
 import apiRegions from "./main_servicesRegion.js";
 import {
   URL_NEWCOMPANY,
   URL_GETCOMPANY,
   URL_GETALLREGIONS,
   URL_GETCOUNTRYBYREGION,
   URL_GETCITYBYCOUNTRY,
   URL_NEWCONTACT,
   URL_GETCONTACT
 } from "./global_variables.js";
 import {
   getTokenLocalStorage,
   getUserLocalStorage,
 } from "./localstorage_controller.js";

 /**
 * Global Variables
 */
 
 let allHTMLContactsData = "";

 let allHTMLCompaniesData = "";
 let allHTMLRegionsData = "";
 let allHTMLCountriesData = "";
 let allHTMLCitiesData = "";
 
 let allHTMLCompaniesDataEdit = "";
 let allHTMLRegionsDataEdit = "";
 let allHTMLCountriesDataEdit = "";
 let allHTMLCitiesDataEdit = "";

