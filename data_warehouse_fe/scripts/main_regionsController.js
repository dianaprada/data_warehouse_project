/**
 * Imports
 */

 import apiRegions from "./main_servicesRegion.js";
 import {
    URL_NEWREGION,
    URL_GETALLREGIONS
  } from "./global_variables.js";
 import {
    getTokenLocalStorage,
    getUserLocalStorage,
  } from "./localstorage_controller.js";

/**
 * Global Variables
 */

  let allHTMLRegionsData = "";
  let regionsTree = document.getElementById('myUL');

  let newRegionName = document.getElementById('newRegionName');
  let createRegionBtn = document.getElementById('createRegionBtn');

  /**
 * @method createRegion
 * @description: 
 * @returns {}
 */

const createRegion = (() => {
  const { createRegionData } = apiRegions;
  const token = getTokenLocalStorage();
  const regionData = {
    regionName: newRegionName.value
  };
  createRegionData(URL_NEWREGION, regionData, token)
    .then((response) => {
      if (response.message === 'Created') {
        swal(
          "",
          `La región ${regionData.regionName} fue creada exitosamente`,
          "success"
        );
        getRegions();

      } else {
        swal("", `${response.message}`, "error");
      }

    }).catch((error) => { swal("", `${error}`, "error"); });

});

  /**
 * @method getRegions
 * @description: 
 * @returns {}
 */

const getRegions = (() => {
  allHTMLRegionsData = "";
  const token = getTokenLocalStorage();
  const { getRegionsData } = apiRegions;
  getRegionsData(URL_GETALLREGIONS, token)
    .then((response) => {
      getRegionsDataJson(response);
    }).catch((error) => { 
      renderMsg(error);
    });

});

  /**
 * @method getRegionsDataJson
 * @description: 
 * @returns {}
 */

  const getRegionsDataJson =((regionsList) => {
    regionsList.regions.forEach((regionItem) => {
      const { regionID, regionName, countries} = regionItem;
      let allHTMLCountriesData = createCountriesTreeData(regionID, countries);
      allHTMLRegionsData += htmlRegionsTreeData(regionID, regionName, allHTMLCountriesData);
    });

    regionsTree.innerHTML = allHTMLRegionsData;

  });

    /**
 * @method createCountriesTreeData
 * @description: 
 * @returns {}
 */

    const createCountriesTreeData = ((regionID, countries) => {
      let allHTMLCountriesData = "";
      countries.forEach((countryItem) => {
        const { countryID, countryName, Cities } = countryItem;
        let allHTMLCitiesData = createCitiesTreeData(countryID, Cities);
        allHTMLCountriesData += htmlCountriesTreeData(countryID, countryName, allHTMLCitiesData);

      });
      return allHTMLCountriesData;
    });

      /**
 * @method createCitiesTreeData
 * @description: 
 * @returns {}
 */

  const createCitiesTreeData = ((countryID, Cities) => {
    let allHTMLCitiesData = "";
    Cities.forEach((cityItem) => {
      const { cityID, cityName } = cityItem;
      allHTMLCitiesData += htmlCitiesTreeData(cityID, cityName);

    })
    return allHTMLCitiesData;
  });

  /**
 * @method htmlRegionsTreeData
 * @description: 
 * @returns {}
 */

  const htmlRegionsTreeData = ((regionID, regionName, htmlCountry) =>{
    return `
      <li class="list-group-item"><span class="caret">${regionName}</span>
        <button type="button" class="btn text-black-50 ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 edit" data-info="regions" data-id="${regionID}" data-toggle="modal" data-target="#edit-region"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 delete" data-info="regions" data-id="${regionID}"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-secondary text-black btn-sm ml-3 new" data-info="countries" data-id="${regionID}" data-toggle="modal" data-target="#new-country">Añadir país</button>
        <ul class="nested pl-5 list-group list-group-flush countries-Body">
            ${htmlCountry}
        </ul>
      </li>`;
  });

  /**
 * @method htmlCountriesTreeData
 * @description: 
 * @returns {}
 */

const htmlCountriesTreeData = ((countryID, countryName, htmlCity) => {
  return `
      <li class="list-group-item"><span class="caret">${countryName}</span>
        <button type="button" class="btn text-black-50 ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 edit" data-info="countries" data-id="${countryID}" data-toggle="modal" data-target="#edit-country"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 delete" data-info="countries" data-id="${countryID}"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-secondary text-black btn-sm ml-3 new" data-info="cities" data-id="${countryID}" data-toggle="modal" data-target="#new-city">Añadir ciudad</button>
        <ul class="nested pl-5 list-group list-group-flush cities-Body">
            ${htmlCity}
        </ul>
    </li>
  `;
});

  /**
 * @method htmlCitiesTreeData
 * @description: 
 * @returns {}
 */

  const htmlCitiesTreeData = ((cityID, cityName) => {
    return `<li class="list-group-item">${cityName}
        <button type="button" class="btn text-black-50 ellipsis"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 edit" data-info="cities" data-id="${cityID}" data-toggle="modal" data-target="#edit-city"><i class="fa fa-pencil" aria-hidden="true"></i></button>
        <button type="button" class="d-none btn btn-lg text-black-50 delete" data-info="cities" data-id="${cityID}"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </li>`;

  });



/**
 * @method addEventListenerSaveRegion
 * @description: Event Listener Save Region
 * @returns {}
 */

 const addEventListenerSaveRegion = () => {
  createRegionBtn.addEventListener("click", createRegion);
};


/**
 * @method renderMsg
 * @description Render message on the DOM
 * @returns {String}
 */

 const renderMsg = (msg) =>
 (document.querySelector(".error-msg").innerHTML = msg);


/**
* Run
*/

getRegions();
addEventListenerSaveRegion();