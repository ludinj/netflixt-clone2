import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFITX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="pr-4 text-white font-semibold bg-black/50 px-6 py-2  rounded mr-4">
              My Account
            </button>
          </Link>
          <button
            className="bg-red-600 px-6 py-2  rounded cursor-pointer text-white  font-semibold"
            onClick={handleLogOut}
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4 text-white font-semibold bg-black/50 px-6 py-2  rounded mr-4">
              Login In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2  rounded cursor-pointer text-white  font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
