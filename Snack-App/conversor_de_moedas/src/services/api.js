import axios from "axios";

// https://economia.awesomeapi.com.br/json/all
// rota para url

export const Api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
})