import React, { useState, useRef } from "react";
import axios from "axios";
import { Button } from "@material-tailwind/react";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email: email, password: password };
    try {
      const response = await axios.post(
        "https://average-needle-production.up.railway.app/api/v1/auth/authenticate",
        credentials
      );
      const { data } = response;
      console.log(data);
      setErrMsg("");
      // window.location.href = "/properties";
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePwdInput = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col gap-3 mb-5 p-0">
        {errMsg ? (
          <p ref={errRef} aria-live="assertive">
            {errMsg}
          </p>
        ) : (
          ""
        )}
        <img
          src="/logo-bright.png"
          alt=""
          className="w-[250px] h-[40px] object-cover mb-2 mx-auto"
        />
        <h2 className="px-4 text-3xl font-medium text-center text-black mt-2">
          Welcome Back
        </h2>
        <p className="text-center mb-3 font-light text-gray-500 tracking-wide">
          Please enter your details to sign in.
        </p>
        <div className="flex justify-between">
          <Button>apple</Button>
          <Button>google</Button>
          <Button>github</Button>
        </div>
        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-full h-px my-8 bg-gray-200 border-0"></hr>
          <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
            or
          </span>
        </div>
        <label htmlFor="email" className="text-sm font-thin cursor-pointer">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-4 bg-[#E7ECF3] text-sm leading-normal border border-gray-300 rounded-lg"
          onChange={handleEmailInput}
        />
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="text-sm font-thin cursor-pointer">
          Password
        </label>
        <div className="flex items-center justify-between">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="w-full p-4 bg-[#E7ECF3] text-sm leading-normal border border-gray-300 rounded-lg transition-all"
            onChange={handlePwdInput}
          />
          <svg
            width="21"
            height="17"
            viewBox="0 0 21 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute -translate-x-1/2 left-[82%] cursor-pointer`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <path
              d="M20.7729 7.90908C18.7536 3.21908 14.9549 0.309082 10.8563 0.309082C6.75775 0.309082 2.95908 3.21908 0.939779 7.90908C0.884735 8.03525 0.856323 8.17142 0.856323 8.30908C0.856323 8.44674 0.884735 8.58292 0.939779 8.70908C2.95908 13.3991 6.75775 16.3091 10.8563 16.3091C14.9549 16.3091 18.7536 13.3991 20.7729 8.70908C20.8279 8.58292 20.8563 8.44674 20.8563 8.30908C20.8563 8.17142 20.8279 8.03525 20.7729 7.90908ZM10.8563 14.3091C7.68743 14.3091 4.68847 12.0191 2.95908 8.30908C4.68847 4.59908 7.68743 2.30908 10.8563 2.30908C14.0252 2.30908 17.0242 4.59908 18.7536 8.30908C17.0242 12.0191 14.0252 14.3091 10.8563 14.3091ZM10.8563 4.30908C10.0655 4.30908 9.29238 4.54368 8.63482 4.9832C7.97725 5.42273 7.46474 6.04744 7.16209 6.77835C6.85945 7.50925 6.78026 8.31352 6.93455 9.08944C7.08884 9.86537 7.46967 10.5781 8.02888 11.1375C8.5881 11.6969 9.30058 12.0779 10.0762 12.2322C10.8519 12.3866 11.6559 12.3074 12.3865 12.0046C13.1172 11.7018 13.7417 11.1892 14.181 10.5314C14.6204 9.87357 14.8549 9.10021 14.8549 8.30908C14.8549 7.24822 14.4337 6.2308 13.6838 5.48065C12.9339 4.73051 11.9168 4.30908 10.8563 4.30908ZM10.8563 10.3091C10.4609 10.3091 10.0744 10.1918 9.74557 9.97202C9.41679 9.75226 9.16053 9.4399 9.00921 9.07445C8.85789 8.709 8.81829 8.30686 8.89544 7.9189C8.97258 7.53094 9.163 7.17457 9.4426 6.89487C9.72221 6.61516 10.0785 6.42468 10.4663 6.34751C10.8541 6.27034 11.2561 6.30995 11.6214 6.46132C11.9867 6.6127 12.299 6.86904 12.5187 7.19794C12.7384 7.52684 12.8556 7.91352 12.8556 8.30908C12.8556 8.83951 12.645 9.34822 12.27 9.7233C11.8951 10.0984 11.3866 10.3091 10.8563 10.3091Z"
              fill="#B1B5C4"
            />
          </svg>
        </div>
      </div>
      <button
        className="w-full p-4 font-semibold text-base text-white bg-black mt-3 rounded-lg"
        onClick={handleSubmit}
      >
        Sign in
      </button>
    </>
  );
};

export default Login;
