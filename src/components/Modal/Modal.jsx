import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Modal.scss";

const Modal = () => {
  const user = useSelector((state) => state.userData.user);
  const navigate = useNavigate()
  console.log(user, "modal");
  return (
    <div className="modal_container">
      <img src={user?.profilepicture} alt="" />
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
      <div className="sub-user">
        <img src={user?.profilepicture} alt="" /> 
        <p>{user?.name}</p>
      </div>
      <div className="sub-user">
        <img src={user?.profilepicture} alt="" /> 
        <p>{user?.name}</p>
      </div>
      <button onClick={()=>navigate("/")}>Sign Out</button>
    </div>
  );
};

export default Modal;
