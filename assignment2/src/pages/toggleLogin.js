import React, { useState } from "react";
import LoginPage from "../components/login";
import LogoutPage from "../components/logout";

const ToggleLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>
        <p>
          functionality : Toggle Page From Login Page to Logout Page and
          vice-versa
        </p>
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <div>{isLoggedIn ? <LoginPage /> : <LogoutPage />}</div>
      </div>
    </>
  );
};
export default ToggleLogin;
