import React, { useState } from "react";
import { login } from "../api/auth.js";
import maleDefaultImg from "../../../assets/male-default-placeholder.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../store/slices/authSlice.js";
import { setUser } from "../../../store/slices/userSlice.js";

const Login = () => {
  const [password, setPassowrd] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputChangeHandler = (name, value) => {
    setLoginData((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(loginData);
    if (!loginData?.email || !loginData?.password) {
      return setIsError("Please Fill all the Fields");
    }
    try {
      setIsLoading(true);
      const response = await login(loginData);
      console.log(response);
      dispatch(setLogin({accessToken : response.data.accessToken}))
      dispatch(setUser({ user: response.data.user}))
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsError(err?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setPassowrd(!password);
  };
  return (
    <>
      {isLoading && <p className="text-white">Loading ...</p>}
      {isError && (
        <Alert variant="filled" severity="error">
          {isError}
        </Alert>
      )}
      <h1 className="text-center text-4xl uppercase text-white font-bold p-4 leading-8">
        Login
      </h1>
      <form
        className="max-w-md mx-auto p-6 border border-gray-500 bg-transparent shadow-4xl rounded-lg"
        onSubmit={submitHandler}
      >
        <div className="flex items-center justify-center border-1 border-gray-500 rounded-full">
          <img src={maleDefaultImg} alt="Login-image" className="w-3/5" />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={(e) => inputChangeHandler("email", e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type={password ? "text" : "password"}
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={(e) => inputChangeHandler("password", e.target.value)}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          <div className="absolute right-0 top-0">
            <IconButton onClick={handleShowPassword}>
              {password ? (
                <VisibilityIcon sx={{ color: "white" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="text-white hover:text-black border border-white transition delay-150 duration-150 bg-tranparent hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
