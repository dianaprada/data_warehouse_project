const api = {
  loginUserData: (URL, data) => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
  },
  registerUserData: (URL, data) => {
    return new Promise((resolve, reject) => {
      fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => resolve(response.json()))
        .catch((error) => reject(error));
    });
  },
};

export default api;
