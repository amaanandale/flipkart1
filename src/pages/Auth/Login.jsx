import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const marks = [3, 4, 6, 3, 2, 7];

  marks.map((num) => {});
  const sum = marks.reduce((acc, num) => {
    return acc + num;
  }, 0);

  console.log(sum);
  const handleLogin = () => {
    //api call zatalo
    // api promise
    //
    navigate("/dashboard");
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="border flex flex-col p-6 shadow-lg bg-white rounded-md gap-5 ">
        <div className="mb-2">
          <h1 className="text-3xl font-semibold ">Log in</h1>
          <p>to start learning</p>
        </div>
        <div>
          <label
            htmlFor="username"
            className="text-xs font-semibold text-slate-500"
            required={2}
          >
            Email
          </label>
          <br />
          <input
            type="text"
            id="username"
            placeholder="Email"
            className="p-2 border rounded-sm outline-none min-w-[300px]"
            required={2}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-xs font-semibold text-slate-500"
          >
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password "
            className="p-2  border rounded-sm outline-none min-w-[300px]"
          />
          <br />
          <a href="#" className="text-xs ">
            Forgot password?
          </a>
        </div>

        <button
          onClick={handleLogin}
          className="text-white bg-blue-600 rounded-md px-4 py-2 mt-2"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
