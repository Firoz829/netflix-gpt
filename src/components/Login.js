import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "./utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/FireBase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/UserSlice";
import { USER_LOGO } from "./utils/constants";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };

  const handleButtonClick = () => {
    //validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);
    if (message) return; // null

    if (!isSingInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              // Profile updated! and again store update
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user1 = userCredential.user;
        })
        .catch((error) => {
          const errorCode1 = error.code;
          const errorMessage1 = error.message;
          console.log(errorCode1 + " " + errorMessage1);
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-lg absolute p-12 bg-black w-4/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg "
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-600 rounded-lg "
          onClick={handleButtonClick}
        >
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:text-blue-500"
          onClick={toggleSignInForm}
        >
          {isSingInForm
            ? "New to Netflix? Sign Up"
            : "Alraedy registered? Sign Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
