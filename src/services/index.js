import axios from 'axios';
import { SERVER_BASE_URL, API_KEY } from '../assets/const/ApiConst';

const getData = function (dateString) {
    console.log("api calling", SERVER_BASE_URL+'?api_key='+API_KEY+'&date='+dateString);
    return axios.get(`${SERVER_BASE_URL+'?api_key='+API_KEY+'&date='+dateString}`, {
        headers: {
            'Accept' : 'application/json'
        }
    }).then(response => response.data)
    .catch(error => {
        return Promise.reject(error.response.data);
    })
}

export default {
    getData
}