import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="side__bar">
      <div className="side__bar-content">
        <NavLink to="/user/profile">
          <span>Profile</span> <div><MdKeyboardArrowRight/></div>
        </NavLink>
        <NavLink to="/user/posts">
          <span>Posts</span> <div><MdKeyboardArrowRight/></div>
        </NavLink>
        <NavLink to="/user/gallery">
          <span>Gallery</span> <div><MdKeyboardArrowRight/></div>
        </NavLink>
        <NavLink to="/user/todo">
          <span>ToDo</span> <div><MdKeyboardArrowRight/></div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
