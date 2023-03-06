import React from "react";
import "./Address.scss";

const Address = ({ userData }) => {
  return (
    <div className="adressContainer">
      <div>
        <h2>Address:</h2>
      </div>
      <div className="address_details">
        <div>
          <p>Street : </p>
          <p> {userData?.address?.street}</p>
        </div>
        <div>
          <p>Suite : </p>
          <p> {userData?.address?.suite}</p>
        </div>
        <div>
          <p>City : </p>
          <p> {userData?.address?.city}</p>
        </div>
        <div>
          <p>Zipcode : </p>
          <p> {userData?.address?.zipcode}</p>
        </div>
      </div>
      <div>
        <div className="googlemap">
          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20GraftStreet%20:%20%20Kulas%20Light%20%20Suite%20:%20%20Apt.%20556%20%20City%20:%20%20Gwenborough%20%20Zipcode%20:%20%2092998-3874on%20Street,%20Dublin,%20Ireland+(usiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">
            </a>
          </iframe>
          <div className="bottom">
            <p>Lat : <span>{userData?.address?.geo?.lat}</span></p>
            <p>Long : <span>{userData?.address?.geo?.lng}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
