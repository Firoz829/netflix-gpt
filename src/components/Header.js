import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/FireBase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "./utils/constants";
import { toggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log("Redux User State on Load:", user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const dispatch = useDispatch();

  // check auth if its present i will redirect to the browse page
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // sign in and sing up store user data and redirect the browse page
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component is unMouonts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div className="header absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo"></img>

      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="px-[10px] py-[5px] m-[15px] bg-gray-900 text-white rounded-lg"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="rounded-lg"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white px-[10px] py-[5px] m-[15px] bg-purple-800 rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
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
