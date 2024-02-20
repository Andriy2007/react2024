
import {urls} from "../constants/urls";
import {apiService} from "./ApiService";

const userService = {
    getAll:()=>apiService.get(urls.users),
    create: (data) => apiService.users(urls.users, data)
}
export {
    userService
}