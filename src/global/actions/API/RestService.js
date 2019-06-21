import axios from 'axios';
import { getToken } from "../LocalStorage";

    export async function get(url){
        const axiosInst = await this._getAxiosInstance()
        return axiosInst.get(url);
    }   
    
    export async function post(url, body){
        const axiosInst = await this._getAxiosInstance()
        return axiosInst.post(url, body);
    }
    
    _getHeaders = async () => {
        const token = await getToken()
    
        if (!token) {
          console.log(`A request hab been initiated with no token stored.`);
        }
        console.log("_getHeaders: " + token);
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
    }
    _getAxiosInstance = async () => {
        return axios.create({
            baseURL: "http://192.168.100.126:8000/api",
            responseType: "json",
            headers: await this._getHeaders()
          });
    }