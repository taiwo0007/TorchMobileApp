import axios from "axios";

const BACKEND_URL = "http://192.168.1.12:8080/api/host";

const addTokenToHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function getHostDetails(token) {
  const url = BACKEND_URL + "/host-data";

  const response = await axios.get(url, addTokenToHeaders(token));


    console.warn(response.data.id)
  return response.data;
}

export async function getBasicUser(id) {
  const url = BACKEND_URL + "/details/"+id;

  const response = await axios.get(url);



  return response.data;
}

