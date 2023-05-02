
class Api {
    static baseurl = "http://127.0.0.1:8000/"
    static url = "http://127.0.0.1:8000/api/";

    static sanctum = this.baseurl + "sanctum/csrf-cookie";

    static AddUser = this.url + "register";



}

export default Api;


