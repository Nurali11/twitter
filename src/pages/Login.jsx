import React, { useContext } from 'react'
import {LogoIcon} from "../assets/icons/index"
import { Context } from '../context/Context'
import Input from '../components/Input'
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { token, setToken } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.login.value,
      password: e.target.password.value,
    };
    e.target.children[2].textContent = "Loading...";
    if (data.email == "nurali@gmail.com" && data.password == "1234") {
      setTimeout(() => setToken(data), 2000);
    } else {
      e.target.children[2].textContent = "Log In";
      toast.error("Malumot Xato");
    }
  }

  return (
    <div className="mt-[10%] bg-gray-50 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-start">
          <LogoIcon />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-black">Log in to Twitter</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="login"
              type="text"
              placeholder="Phone number, email address"
            />
          </div>

          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            style={{ cursor: "pointer" }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-full text-lg transition-colors duration-200"
          >
            Log In
          </button>
        </form>

        <div className="flex justify-between items-center text-blue-500">
          <a href="#" className="text-sm hover:underline">
            Forgot password?
          </a>
          <a href="#" className="text-sm hover:underline">
            Sign up to Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login