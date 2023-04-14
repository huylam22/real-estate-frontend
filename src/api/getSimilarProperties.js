import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getProperties = async (propertyId) => {
  const response = await api.get(`/properties/${propertyId}/similar`);
  return response.data;
};
