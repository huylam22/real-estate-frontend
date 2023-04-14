import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};
