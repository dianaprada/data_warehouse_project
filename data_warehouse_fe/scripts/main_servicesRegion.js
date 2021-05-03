const apiRegions = {

    createRegionData: (URL, data, token) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `bearer ${token}`);
        return new Promise((resolve, reject) => {
    
          fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: myHeaders,
          })
            .then((response) => resolve(response.json()))
            .catch((error) => reject(error));
        });
      },

    getRegionsData: (URL, token) => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Authorization', `bearer ${token}`);
        return new Promise((resolve, reject) => {
          fetch(URL, {
            method: "GET",
            headers: myHeaders,
          })
          .then((response) => resolve(response.json()))
          .catch((error) => reject(error))
        });
      },


};

export default apiRegions;

