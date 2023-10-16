import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.imgur.com/3/gallery",
    headers: {
        Authorization: 'Client-ID eec5caf087dab35',
    },
});

export default api;


