import axios from "axios";
import {spaceXAPI} from "../constants/urls";

const spaceXAPIService = axios.create({baseURL:spaceXAPI})

export {
    spaceXAPIService
}