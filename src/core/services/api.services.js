const BASE_URL = 'http://localhost:8080';


async function callApi(endpoint, options = {}) { 

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
    post(endpoint,data){
        return callApi(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
          });
    },
    get(endpoint){
        return callApi(endpoint, {});
    },
    put(endpoint,data){
        return callApi(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
          });
    }
};

export default api;
