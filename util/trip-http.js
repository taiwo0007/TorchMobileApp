import axios from "axios";

const BACKEND_URL = "http://192.168.1.12:8080/api/trips";

const addTokenToHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function createNewTrip(token, trip) {
  const url = BACKEND_URL + "/create-new-trip";

  const response = await axios.post(url, addTokenToHeaders(token), trip);

  console.warn(response.data);
  return response.data;
}

export async function getTrip(id, token) {
  const url = BACKEND_URL + "/trip-detail/" + id;

  const response = await axios.get(url,addTokenToHeaders(token));

  console.warn(response.data);

  return response.data;
}
