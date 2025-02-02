import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Login = ({ onSubmit, userName, setUserName, password, setPassword }) => {
  const [loginstate, setLoginState] = useState(false);

  return (
    <div className="w-full h-screen bg-amber-200 flex justify-center items-center">
      <div className="container w-90 h-100 shadow-lg py-6 px-6 mb-5 bg-white rounded">
        <h1 className="signIn font-extrabold text-2xl">Sign In</h1>
        <p className="des text-md">Stay updated on your professional world</p>
        <form onSubmit={onSubmit}>
          <input
            className="w-full px-4 py-2 border-1 border-gray-400 rounded-sm mt-4 "
            placeholder="Email or Phone"
            type="text"
            value={userName}
            onInput={(e) => setUserName(e.target.value)}
          />
          <input
            className="w-full px-4 py-2 border-1 border-gray-400 rounded-sm mt-4 "
            placeholder="Password"
            type="text"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />

          <div className="text-gray-600 mt-5 text-sm transition-all delay-100">{loginstate ? 'Forgot Password..?': ''}</div>
          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-sm mt-4"
            type="submit"
            onClick={() => setLoginState(true)}
          >
            Log in
          </button>

          <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-sm mt-4"
            type="submit"
            onClick={() => setLoginState(false)}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
