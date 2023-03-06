import React, { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import MessageBox from "../MessageBox/MessageBox";
import "./Chat.scss";

const Chat = () => {
  const [user,setUser] = useState({})
  const [messageBox, setMessageBox] = useState(false);
  const [chatview, setChatview] = useState(false);
  const users = useSelector((state) => state.userData.users);
  return (
    <div className="chat_box">
      <div className="chat_head" onClick={() => setChatview(!chatview)}>
        <div className="chat_icon">
          <BsChatRight />
          <p>Chats</p>
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      {chatview && (
        <div className="chat_users">
          {users.map((user) => {
            
            return (
              <>
                <div
                  className="single_user"
                  onClick={() =>{ setMessageBox(!messageBox);setUser(user)}}
                >
                  <div className="username">
                    <img src={user.profilepicture} alt="" />
                    <p>{user.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      {messageBox && (
        <div className="message">
          <MessageBox user={user} />
        </div>
      )}
    </div>
  );
};

export default Chat;
