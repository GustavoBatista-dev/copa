import axios from "axios";

export const api = axios.create({
    baseURL: 'http://172.30.134.197:3333'
});