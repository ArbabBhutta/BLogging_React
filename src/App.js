import React, { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Pages/Home/Home";
import Blogs from "./Components/Pages/Blogs/Blogs";
import SingleBlog from './Components/Pages/Blogs/SingleBlog';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact Us/Contact';
import Footer from './Components/Footer/Footer';
import TechBlogs from "./Components/Pages/Tech BLogs/TechBlogs";
import SingleTec from "./Components/Pages/Tech BLogs/SingleTec";
import GamingBlogs from "./Components/Pages/Gaming Tech/GamingBlogs";
import SingleGameBlog from "./Components/Pages/Gaming Tech/SingleGameBlog";
import HomeSingleBlogs from "./Components/Pages/HomesBlogs/HomeSingleBlogs";
import RecentBlogss from "./Components/Pages/Recent Blogs/RecentBlogss";
import SingleRecent from "./Components/Pages/Recent Blogs/SingleRecent";
import { Context } from "./Components/Pages/ContextApi/ContextAPI";
import SignIn from "./Components/Pages/SignIn/SignIn";

function App() {
  const [userinfo,setuserInfo]=useState("")
  return (
    <div className="App">
      <Context>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/Tech" element={<TechBlogs/>}/>
          <Route path="/Games" element={<GamingBlogs/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/src/Components/Blogs.js/:B_id" element={<SingleBlog/>}/>
          <Route path="/src/Components/TechBlg.js/:B_id" element={<SingleTec setuserInfo={setuserInfo}/>}/>
          <Route path="/src/Components/Gaming.js/:B_id" element={<SingleGameBlog/>}/>
          <Route path="/src/Components/HomeBlogs.js/:B_id" element={<HomeSingleBlogs/>}/>
          <Route path="/src/Components/RecentBlogs.js/:B_id" element={<SingleRecent/>}/>
          <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
        <RecentBlogss/>
        <Footer/>
      </Router>
      </Context>
    </div>
  );
}

export default App;
