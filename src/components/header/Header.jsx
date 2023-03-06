import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./header.scss";

function Header({ image, name, title }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="left">
          <h4>{title}</h4>
        </div>
        <div className="right" onClick={() => setModalOpen(!modalOpen)}>
          <div className="image">
            <img src={image} alt="" />
            <h4>{name}</h4>
          </div>

          {modalOpen && (
            <div className="modal">
              <Modal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
