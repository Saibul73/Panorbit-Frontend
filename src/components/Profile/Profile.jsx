import React from "react";
import "./Profile.scss";

const Profile = ({ userData }) => {
  console.log(userData?.company);
  return (
    <div className="profile__container">
      <div>
        <div className="header-image">
          <img src={userData.profilepicture} alt="" />
          <h2>{userData.name}</h2>
        </div>
        <div className="profile_details">
          <div>
            <p>Username : </p>
            <p> {userData.username}</p>
          </div>
          <div>
            <p>e-mail : </p>
            <p> {userData.email}</p>
          </div>
          <div>
            <p>Phone : </p>
            <p> {userData.phone}</p>
          </div>
          <div>
            <p>Website : </p>
            <p> {userData.website}</p>
          </div>
        </div>
        <div className="line">
          <hr />
        </div>

        <div className="profile_details">
          <div>
            <h2>Company</h2>
          </div>
          <div>
            <p>Name : </p>
            <p> {userData?.company?.name}</p>
          </div>
          <div>
            <p>catchphrase: </p>
            <p> {userData?.company?.catchPhrase}</p>
          </div>
          <div>
            <p>bs : </p>
            <p> {userData?.company?.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
