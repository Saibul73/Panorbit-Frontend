import React from "react";
import { Users } from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__page">
      <div className="shape"></div>
      <div style={{zIndex:'5'}}>
        <Users />
      </div>
    
    </div>
  );
};

export default Home;
