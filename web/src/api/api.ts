import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/data/"
});
  
export const testJson = async () => {
    const response = await api.get("/test.json");
    return response.data;
};