import axios from "axios/index";

export const instance = axios.create({
  baseURL: 'https://jeeves-199912.appspot.com/',
  method: 'post',
});