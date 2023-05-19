import axios from "axios";

const BACKEND_URL = "http://192.168.1.12:8080/api/escooter";

const addTokenToHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export async function findEscooters(token) {
  const url = BACKEND_URL + "/findescooters";

  const response = await axios.get(url, {
    params: {
        tripStart: '',
        tripEnd: '',
        location: ''
        // More key value pairs as needed
      }

  });



  return response.data;
}
