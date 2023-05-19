import axios from 'axios';

const BACKEND_URL = "http://192.168.1.12:8080/api/auth"


const addTokenToHeaders = ( token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };


export async function login(email, password){

    console.log("email ", email);
    console.log("password ", password);


    const url = BACKEND_URL+"/login"

    const response = await axios.post(url, {
        email,
        password
    })

    return response.data
}

export async function signup(email, password){

  console.log("email ", email);
  console.log("password ", password);


  const url = BACKEND_URL+"/signup"

  const response = await axios.post(url, {
      email,
      password
  })

  return response.data
}
