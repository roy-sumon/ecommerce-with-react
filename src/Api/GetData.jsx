import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com"
});

export const getPost = ()=>{
    return api.get("/products");
};