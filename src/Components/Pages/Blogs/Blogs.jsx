import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { BLOGS_Details } from '../../Blogs'
import Blog from './Blog'
import './Blogs.css'
const Blogs = () => {
  return (
    <div>
      
      <div className="container-fluid">
        <div className="row">
          {BLOGS_Details.map((b_details)=>{
              return <Blog data={b_details} />
            })}
          
        </div>
      </div>

      
    </div>
  )
}

export default Blogs
