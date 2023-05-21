import axios from "axios";
export const API_URL = "http://localhost:3001/";

const ACCESS_TOKEN = "";

export const get = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  return response.data;
};
