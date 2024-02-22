import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const todosService = {
    getAll: () => apiService.get(urls.todos),
 //   getById: (id) => apiService.get(urls.users.byId(id)),
  //  getPostsById: (userId) => apiService.get(urls.users.getPostsByUserId(userId))
}

export {
    todosService
}