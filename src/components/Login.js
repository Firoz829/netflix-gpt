import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <div className="logo">
      <Header />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
          alt="logo"
        />
      </div>
      <form className="rounded-lg absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="p-4 my-4 w-full bg-red-600 rounded-lg ">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSingInForm
            ? "New to Netflix? Sign Up"
            : "Alraedy registered? Sign Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
