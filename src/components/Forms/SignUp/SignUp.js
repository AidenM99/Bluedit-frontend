import axios from "axios";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaReddit } from "react-icons/fa";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const clientURL = process.env.REACT_APP_CLIENT_URL;
  const serverURL = process.env.REACT_APP_SERVER_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${serverURL}/sign-up`, {
        email,
        username,
        password,
        confirmPassword,
      });

      if (res.status === 200) window.location = `${clientURL}/log-in`;
    } catch (err) {
      if (typeof err.response.data !== "undefined") {
        setErrors([...err.response.data.errors.errors]);
      }
    }
  };

  const filterErrors = (param) => {
    const newErrors = errors.filter((error) => error.param === param);

    if (newErrors.length > 0) {
      return (
        <span className="text-xs text-red-500 translate-y-[-5px] ml-2">
          {newErrors[0].msg}
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen min-h-[40rem]">
      <div className="w-full lg:max-w-2xl flex shadow-xl min-h-[40rem] h-screen lg:h-[40rem]">
        <div className="bg-art bg-no-repeat bg-cover h-full w-32"></div>
        <div className="flex flex-col h-full w-full p-8">
          <div className="flex justify-between">
            <h1 className="font-bold mb-8 text-xl">Sign up to Bluedit</h1>
            <Link to={"/"}>
              <FaReddit
                className="fill-blue-500 hover:fill-blue-600 mt-[-3px] ml-4"
                size={34}
              />
            </Link>
          </div>
          <form className="flex flex-col h-full" onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-xs">
              Email:
            </label>
            <Input
              type={"email"}
              value={email}
              name={"email"}
              id={"email"}
              placeholder={"Email"}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            {errors.length > 0 ? filterErrors("email") : null}
            <label htmlFor="username" className="text-xs">
              Username:
            </label>
            <Input
              type={"text"}
              value={username}
              name={"username"}
              id={"username"}
              placeholder={"Username"}
              required={true}
              maxLength={"20"}
              onChange={(e) => setUsername(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            {errors.length > 0 ? filterErrors("username") : null}
            <label htmlFor="password" className="text-xs">
              Password:
            </label>
            <Input
              type={"password"}
              value={password}
              name={"password"}
              id={"password"}
              placeholder={"Password"}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            {errors.length > 0 ? filterErrors("password") : null}
            <label htmlFor="confirm-password" className="text-xs">
              Confirm Password:
            </label>
            <Input
              type={"password"}
              value={confirmPassword}
              name={"confirm-password"}
              id={"confirm-password"}
              placeholder={"Confirm Password"}
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
              styles={
                "p-2 focus:outline-none w-full flex border border-gray-200 mb-2 rounded-lg placeholder:text-xs"
              }
            />
            {errors.length > 0 ? filterErrors("confirmPassword") : null}
            <div className="mt-auto">
              <Button
                text={"Sign Up"}
                type={"submit"}
                styles={
                  "w-full text-white bg-blue-500 hover:bg-blue-600 text-sm rounded-full py-2.5 text-center my-2 font-bold"
                }
              ></Button>
              <p className="text-center">or</p>
              <Link to="/log-in">
                <Button
                  text={"Log in"}
                  type={"button"}
                  styles={
                    "w-full text-blue-500 border border-blue-500 hover:bg-blue-100 text-sm rounded-full py-2.5 text-center mt-2 mx-auto font-bold"
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

export default SignUp;
