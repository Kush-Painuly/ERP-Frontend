import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/api/auth/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const fetchNewAccessToken = async () => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/auth/refresh`,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    await axios.post(
      `${baseUrl}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return true;
  } catch (err) {
    throw err;
  }
};
