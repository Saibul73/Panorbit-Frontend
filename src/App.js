import Home from "./pages/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserAccount from "./pages/UserAccount/UserAccount";
import Gallery from "./pages/Gallery/Gallery";
import Posts from "./pages/Posts/Posts";
import Todo from "./pages/Todo/Todo";
import { useEffect } from "react";
import axios from "axios";
import {useDispatch} from 'react-redux'
import {setUsers} from './Redux/Features/UserSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get("https://panorbit.in/api/users.json").then((response) => {
      dispatch(setUsers(response.data.users))
    });
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile" element={<UserAccount />} />
        <Route path="/user/posts" element={<Posts />} />
        <Route path="/user/gallery" element={<Gallery />} />
        <Route path="/user/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
