import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import img1 from "../../Images/metaverse-7252754_1920.jpg";
import img2 from "../../Images/camera-2925776_1920.jpg";
import HomesBlogs from "./../HomesBlogs/HomesBlogs";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row intro_bgc">
        <div className="col-sm-6 mt-2 mb-5">
          <img src={img1} height="400px" width="100%" alt="" />
        </div>
        <div className="col-sm-6 text-light mt-5">
          <p>
            <h3 className="mt-4" style={{ color: "white" }}>
              Am a professional Blogger and website Developer As well. i have
              writen approx 74 Blogs and these blogs are about Tech, Beauty,
              Fashion, Travelling and old Era of Our ancesstors.
            </h3>
          </p>
          <div className="hvr">
            {/* have to write button class in down link */}
            <a href="About.html" className="btn btn-lg zoomer abted ">
              About Me
            </a>
          </div>
        </div>
      </div>
      <HomesBlogs />

      <div className="row mt-5 mb-5 main_abt">
        <div className="col-sm-5 mt-5 container">
          <h1 className="mt-5 mb-5">Few Lines About Me</h1>
          <p className="mt-3" style={{ color: "white" }}>
            Am a professional Blogger and website Developer As well. i have
            writen approx 74 Blogs and these blogs are about Tech, Beauty,
            Fashion, Travelling and old Era of Our ancesstors.
          </p>
          <p className="mt-3" style={{ color: "white" }}>
            And As a website Developer I have Developed 98 Websites till now
            most of them were about Blogging and few of them were about
            E-commerce, Portfolio,Landing Pages and Business.
          </p>
          <button className="btn btn-lg contact mt-3 mb-4 zoomer">
            <Link to={"/contact"} className="lnk">
              Contact Me
            </Link>
          </button>
        </div>
        <div className="col-sm-5 container mt-5 mb-5">
          <img
            class="mt-5 zoomer"
            src={img2}
            width="100%"
            height="400px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
