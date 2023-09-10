import React from 'react'
import './About.css'
import img1 from '../../Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import img2 from '../../Images/karsten-winegeart-fd1cQ3mmBTE-unsplash.jpg'
import img3 from '../../Images/erik-odiin-jbQvJx2EWnU-unsplash.jpg'
import img4 from '../../Images/home-office-2804083_1280.jpg'

export default function About() {
  return (
    <div className='container-fluid'>
     <>
  <div className="row mt-5">
    <div className="col-sm-6 mt-5">
      <h1 className="mb-5">Few Lines About Me</h1>
      <p>
        <h4>Am A Blogger and Developer As well. i have writen approx 74 Blogs and
        these blogs are about Tech, Beauty, Fashion, Travelling and old Era of
        Our ancesstors.</h4>
      </p>
      <p>
        {" "}
        <h4>And As a website Developer I have Developed 98 Websites till now most of
        them were about Blogging and few of them were about E-commerce,
        Portfolio,Landing Pages and Business.</h4>
      </p>
    </div>
    <div className="col-sm-6">
      <img
        src={img1}
        height="400px"
        width="100%"
        alt=""
      />
    </div>
  </div>
  <div className="row d-flex justify-content-around align-items-center mt-5 mb-3">
    <div className="col-sm-5">
      <img
        src={img2}
        className="zoomer"
        alt="Hobbies"
        width="100%"
        height="400px"
      />
    </div>
    <div className="col-sm-5">
      <img
        src={img3}
        className="zoomer"
        alt="Hobbies"
        width="100%"
        height="400px"
      />
    </div>
  </div>
  <div className="row travel">
    <div className="col-sm-8 container">
      <h1>Traveling is my passion</h1>
      <p>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
        nulla, ut commodo diam libero vitae erat.</h4>
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-10 container">
      <img
        className="zoomer mt-4 mb-4"
        src={img4}
        width="100%"
        height="500px"
        alt=""
      />
    </div>
  </div>
  <div className="row travel">
    <div className="col-sm-8 container">
      <h1>Fever Of Knowing Technology</h1>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse varius enim in eros elementum
        tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum
        nulla, ut commodo diam libero vitae erat.
      </h4>
    </div>
  </div>
</>

    </div>
  )
}
