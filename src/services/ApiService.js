import axios from "axios";
import {jsonBaseUrl} from "../constants/urls";

const apiService = axios.create({baseURL:jsonBaseUrl})

export {
    apiService
}