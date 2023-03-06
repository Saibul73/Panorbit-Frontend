import React, { useState, useEffect } from "react";
import "./Users.scss";
import { useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { setUser } from "../../Redux/Features/UserSlice";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
 const {users} = useSelector((state)=>state.userData)

  const handleProfile = (user) => {
    dispatch(setUser(user))
    navigate("/user/profile");
  };
  return (
    <div className="users__container">
      <div className="users__container-head">
        <h2 >Select an account</h2>
      </div>
      <div className="users__container-box">
      {users && users.map((user) => {
        return (
            <div
              className="users__container-users"
              onClick={() => {
                handleProfile(user);
              }}
            >
              <img src={user.profilepicture} alt="p" />
              <h4>{user.name}</h4>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Users;
