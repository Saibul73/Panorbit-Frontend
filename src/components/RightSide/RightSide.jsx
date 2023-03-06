import React from "react";
import Address from "../Address/Address";
import Profile from "../Profile/Profile";
import "./RightSide.scss";
import Header from "../header/Header";
import { useSelector } from "react-redux";

const RightSide = () => {
  const {user} = useSelector((state)=>state.userData)
  console.log(user,"hiiiiii");
  return (
    <div className="RightSide__container">
      <div className="header-div">
        <Header image={user?.profilepicture} name={user?.name} title={"Profile"}/>
      </div>
      <div className="main-div">
        <div className="details">
          <Profile userData={user} />
        </div>
        <div className="about">
          <Address userData={user} />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
