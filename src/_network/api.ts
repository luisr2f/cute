import axios from "axios";
import { Network } from "../_global/constant";



const api = axios.create({
  baseURL: Network.apiUrl, //BASE_URL
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);




export async function getRequest(url: string, params?: any): Promise<any> {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: params,
  };

  console.log("Header", config);
  console.log("URL", url);

  return new Promise((resolve, reject) => {
    api
      .get(url, config)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
