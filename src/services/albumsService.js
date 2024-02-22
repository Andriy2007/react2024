import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const albumsService = {
    getAll: () => apiService.get(urls.albums),
    //   getById: (id) => apiService.get(urls.users.byId(id)),
    //  getPostsById: (userId) => apiService.get(urls.users.getPostsByUserId(userId))
}

export {
    albumsService
}