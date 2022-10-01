import axios from "axios";
import { useState } from "react";
import { FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../Buttons/Button";
import Input from "../../Inputs/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const clientURL = process.env.REACT_APP_CLIENT_URL;
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${serverURL}/log-in`, {
        username,
        password,
      });

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);

        window.location = clientURL;
      }
    } catch (err) {
      if (typeof err.response.data !== "undefined") {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[32.375rem]">
      <div className="w-full lg:max-w-2xl flex shadow-xl min-h-[32.375rem] h-screen lg:max-h-[40rem]">
        <div className="bg-art bg-no-repeat bg-cover h-full w-32"></div>
        <div className="flex flex-col h-full w-full p-8">
          <div className="flex justify-between">
            <h1 className="font-bold mb-8 text-xl">Log in to Bluedit</h1>
            <Link to={"/"}>
              <FaReddit
                className="fill-blue-500 hover:fill-blue-600 mt-[-3px] ml-4"
                size={34}
              />
            </Link>
          </div>
          <form className="flex flex-col h-full" onSubmit={handleSubmit}>
            <label htmlFor="username" className="text-xs">
              Username:
            </label>
            <Input
              type={"text"}
              value={username}
              name={"username"}
              id={"username"}
              placeholder={"Username"}
              onChange={(e) => setUsername(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            <label htmlFor="password" className="text-xs">
              Password:
            </label>
            <Input
              type={"password"}
              value={password}
              name={"password"}
              id={"password"}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            {error ? (
              <span className="text-xs text-red-500 ml-2">{error}</span>
            ) : null}
            <div className="mt-auto">
              <Button
                text={"Log in"}
                type={"submit"}
                styles={
                  "w-full text-white bg-blue-500 hover:bg-blue-600 text-sm rounded-full py-2.5 text-center my-2 font-bold"
                }
              ></Button>
              <p className="text-center">or</p>
              <Link to="/sign-up">
                <Button
                  text={"Sign up"}
                  type={"button"}
                  styles={
                    "w-full text-blue-500 border border-blue-500 hover:bg-blue-100 text-sm rounded-full py-2.5 text-center mt-auto mt-2 font-bold"
                  }
                ></Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
