/**
 * Global variables
 */

/* Login */
const URL_LOGIN = 'http://localhost:8080/login';

/* Register */
const URL_REGISTER = 'http://localhost:8080/register';

/* Get all Users */
const URL_GETALLUSERS = 'http://localhost:8080/allusers';

/* Get user by ID */
const URL_GETUSERID = 'http://localhost:8080/user/';

/* Create Region */
const URL_NEWREGION = 'http://localhost:8080/regions/new';

/* Get All Regions */
const URL_GETALLREGIONS = 'http://localhost:8080/regions/';

/* Create Country */
const URL_NEWCOUNTRY = 'http://localhost:8080/country/new';

/* Get Countries */
const URL_GETCOUNTRY = 'http://localhost:8080/countries/';

/* Get Countries BY ID REGION */
const URL_GETCOUNTRYBYREGION = 'http://localhost:8080/countries/region/';

/* Create City */
const URL_NEWCITY = 'http://localhost:8080/city/new';

/* Get Cities */
const URL_GETCITY = 'http://localhost:8080/cities/';

/* Get Cities */
const URL_GETCITYBYCOUNTRY = 'http://localhost:8080/cities/country/';

/* Create Company */
const URL_NEWCOMPANY = 'http://localhost:8080/company/new';

/* Get Companies */
const URL_GETCOMPANY = 'http://localhost:8080/companies/';



const LOCAL_STORAGE_TOKEN = "userToken";
const LOCAL_STORAGE_USER = "userData";


export {
    URL_LOGIN,
    LOCAL_STORAGE_TOKEN,
    LOCAL_STORAGE_USER,
    URL_REGISTER,
    URL_GETALLUSERS,
    URL_GETUSERID,
    URL_NEWREGION,
    URL_GETALLREGIONS,
    URL_NEWCOUNTRY,
    URL_GETCOUNTRY,
    URL_GETCOUNTRYBYREGION,
    URL_NEWCITY,
    URL_GETCITY,
    URL_GETCITYBYCOUNTRY,
    URL_NEWCOMPANY,
    URL_GETCOMPANY
    
}