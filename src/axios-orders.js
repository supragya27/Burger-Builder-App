import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://the-burger-builder-reactapp.firebaseio.com/'
});

export default instance;