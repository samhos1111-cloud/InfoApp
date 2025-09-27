import axios from "axios";

const besedURL = 'https://newsapi.org/v2/';
const apiKey = '0edf81f9b7fb4916a1e5a0f8960148c7';


export function get (url: string) {
    const myurl= `${besedURL}${url}&apiKey=${apiKey}` ;
    return axios.get(myurl);
} 