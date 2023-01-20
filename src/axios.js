import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-fashion--shop.cloudfunctions.net/api'  // The API (cloud functions) URL
});

export default instance;