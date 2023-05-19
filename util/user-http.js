import axios from "axios";

const BACKEND_URL = "http://192.168.1.12:8080/api/user";

const addTokenToHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function getUserDetails(token) {
  const url = BACKEND_URL + "/profile";

  const response = await axios.get(url, addTokenToHeaders(token));



  return response.data;
}

export async function getBasicUser(id) {
  const url = BACKEND_URL + "/details/"+id;

  const response = await axios.get(url);



  return response.data;
}

