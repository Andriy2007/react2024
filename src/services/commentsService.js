import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () => apiService.get(urls.comments),
    //   getById: (id) => apiService.get(urls.users.byId(id)),
    //  getPostsById: (userId) => apiService.get(urls.users.getPostsByUserId(userId))
}

export {
    commentsService
}