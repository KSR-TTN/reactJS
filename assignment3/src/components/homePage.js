import React, { useState } from "react";
import { UserProfile } from "./userProfile";

export const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <p>
        Home---------------------------------------------------------------------------------------
      </p>
      <h2>{showProfile ? null : "Welcome User"}</h2>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile Page" : "Show Profile Page"}
      </button>
      {/* {showProfile && <UserProfile />} */}
      {showProfile ? <UserProfile /> : null}
      <p>
        Home---------------------------------------------------------------------------------------
      </p>
    </>
  );
};
