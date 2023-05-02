import axios from "axios";
const ApiSanctum = axios.create({
    // baseURL: 'https://api.shongjogyou.com/',
    baseurl: "http://127.0.0.1:8000/",
    withCredentials: true
});




export default ApiSanctum;