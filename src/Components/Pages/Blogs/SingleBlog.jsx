import React from 'react'
import { useParams } from 'react-router-dom'
import { BLOGS_Details } from '../../Blogs'

export default function SingleBlog() {

    let {B_id}=useParams();
    const BlogsDetail = BLOGS_Details.find((p) => p.B_id === Number(B_id));

  return (
    <div>
        <img className='singleBlogsImg' src={BlogsDetail.B_img} alt="Blog_photo"  width='100%' height='700px'/>
        <h1 style={{textAlign:'center'}}>{BlogsDetail.B_Head}</h1>
        <p style={{padding:'100px',lineHeight:'40px'}}>{BlogsDetail.B_disc}</p>
    </div>  

  )
}
