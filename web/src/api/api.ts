import axios from "axios";

const api = axios.create({
    // baseURL: "http://localhost:3000/data/",
    baseURL:"http://127.0.0.1:5173/data"
});

export const nodesJson = async () => {
    const response = await api.get("/renderNodes.json",);
    return response.data;
};

export const linksJson = async () => { 
    const response = await api.get("/renderLinks.json");
    return response.data;
};