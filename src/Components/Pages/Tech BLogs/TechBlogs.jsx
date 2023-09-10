import React from 'react'
import { TechBlog } from '../../TechBlg'
import SingleTechBlog from './SingleTechBlog'

export default function TechBlogs() {
  return (
    <div className='container-fluid'>
      <div className="row mt-5">
      {TechBlog.map((Tech_Details)=>{
        return <SingleTechBlog data={Tech_Details}/>
      })}
      </div>
    </div>
  )
}
