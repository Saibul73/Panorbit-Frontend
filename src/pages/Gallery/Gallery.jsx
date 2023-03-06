import { React} from "react";
import "../Posts/Posts.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/header/Header";
import Chat from "../../components/Chat/Chat";
import { useSelector } from "react-redux";

const Gallery = () => {

const {user} = useSelector((state)=>state.userData) 
  return (
    <div className="posts__container">
      <div>
        <Sidebar />
      </div>
      <div>
        <Header image={user?.profilepicture} name={user?.name} title={"Gallery"}/>
        <div className="text">
        <h1>Comming Soon</h1>
      </div>  
      </div>
      <div className='chat-div'>
        <Chat/>
      </div>
    </div>
  );
};

export default Gallery;
