import React from "react";
import "./MessageBox.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

const MessageBox = ({ user }) => {
  return (
    <div className="message_box">
      <div className="message_head">
        <div className="userdetail">
          <img src={user.profilepicture} alt="" />
          <p >{user.name}</p>
        </div>
        <div className="icons">
          <IoIosArrowDown />
          <IoCloseSharp />
        </div>
      </div>
      <div style={{height:"80px",border:"1px solid blue"}}>

      </div>
    </div>
  );
};

export default MessageBox;
