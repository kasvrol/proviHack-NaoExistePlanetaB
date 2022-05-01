import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-provihack-textil.herokuapp.com',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});