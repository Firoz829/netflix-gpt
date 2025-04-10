import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("Redux User State on Load:", user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("error");
      });
  };
  return (
    <div className="header absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-lg m-4"
            src={user?.photoURL}
            alt="User Profile"
          />

          <button
            className="text-xl font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
