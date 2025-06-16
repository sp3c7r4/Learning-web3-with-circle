import axios from "axios";
import env from "./env";


export const get_app_id = async () => {
  const options = {
    method: "GET",
    url: "https://api.circle.com/v1/w3s/config/entity",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.API_KEY}`,
    },
  };


  return axios
    .request(options)
    .then(function (response) {
      return response.data.data.appId;
    })
    .catch(function (error) {
      console.error(error);
    });
};

console.log("App ID:", await get_app_id());