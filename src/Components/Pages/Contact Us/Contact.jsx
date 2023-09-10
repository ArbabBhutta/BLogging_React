import React from 'react'
import './Contact.css'
import formImg from '../../Images/finger-2956974_1920.jpg'


export default function Contact() {
  return (
    <div>
      <div className="container-fluid contact_contanier mt-5 container">
  <div className="row">
    <div className="col-sm-12">
      <h3>CONTACT US</h3>
      <h1>Let's talk about your project</h1>
      <h5>Drop us a line through the form below and we'll get back to you</h5>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-6 container">
      <div className="mb-3 container">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 container">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email"
        />
      </div>
      <div className="mb-3 container">
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject"
        />
      </div>
      <div className="mb-3 container">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={8}
          placeholder="About Your Project..."
          defaultValue={""}
        />
      </div>
      <button className="btn Submit mb-3 zoomer">SUBMIT</button>
    </div>
    <div className="col-sm-6">
      <img
        src={formImg}
        width="90%"
        height="350px"
        alt=""
      />
    </div>
  </div>
</div>

    </div>
  )
}
