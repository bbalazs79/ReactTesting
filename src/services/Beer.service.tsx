import axios, { AxiosResponse } from "axios";

export function getBeers() {
    const promise = axios.get('https://api.punkapi.com/v2/beers');
    const data = promise.then(response => response.data);
    
    return data;
}

export function getBeer(id: number | string) {
    const promise = axios.get(`https://api.punkapi.com/v2/beers/${id}`);
    const data = promise.then(response => response.data);

    return data;
}

export function getBeersFromLocalExpress() {
    const promise =  axios.get('http://localhost:8080/beer');
    const data = promise.then(response => response.data);
    
    return data;
}