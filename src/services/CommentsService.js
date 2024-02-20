import {urls} from "../constants/urls";
import {apiService} from "./ApiService";

const commentsService = {
    getAll:()=>apiService.get(urls.comments),
    create: (data) => apiService.users(urls.comments, data)
}
export {
    commentsService
}