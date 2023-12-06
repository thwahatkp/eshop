import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API_URL_RENDER;
axios.defaults.withCredentials = true;

export function get(url, config) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { ...config })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export function post(url, data, config) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, { ...config })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export function put(url, data, config) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, { ...data }, { ...config })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
}
export function del(url, id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url + "/" + id, {})
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}

export function delQuery(url, id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url + "=" + id, {})
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err.response.data);
      });
  });
}
