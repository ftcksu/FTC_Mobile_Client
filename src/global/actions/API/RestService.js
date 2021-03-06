import axios from "axios";
import { getToken } from "../LocalStorage";

export async function get(url) {
  const axiosInst = await this._getAxiosInstance();
  return axiosInst.get(url);
}

export async function post(url, body) {
  const axiosInst = await this._getAxiosInstance();
  return axiosInst.post(url, body);
}

export async function patch(url, body) {
  const axiosInst = await this._getAxiosInstance();
  return axiosInst.patch(url, body);
}

export async function remove(url) {
  // delete is reserved work in js, so i place a remove
  const axiosInst = await this._getAxiosInstance();
  return axiosInst.delete(url);
}

_getHeaders = async () => {
  const token = await getToken();

  if (!token) {
    console.log(`A request have been initiated with no token stored.`);
  }
  return {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json"
  };
};
_getAxiosInstance = async () => {
  return axios.create({
    baseURL: "https://www.ftcksu.com/v2/api",
    responseType: "json",
    headers: await this._getHeaders()
  });
};
