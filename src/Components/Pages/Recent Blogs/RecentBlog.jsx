import React from 'react'
import { Link } from 'react-router-dom'

export default function RecentBlog(props) {
    let {B_id,B_Head,B_disc,B_img}=props.data
  return (
    <div className='col-sm-4'>
      <Link className='link_Decor' to={`/src/Components/RecentBlogs.js/${B_id}`} state={"diff"}>
        <img className='blogs_image mt-4 mb-4' src={B_img} alt="BLog Image" height='350px' width='95%' />
        <h1 >{B_Head}</h1>
      <button className='btn btn-lg btn_ReadMore zoomer'>Read More</button>
      </Link>
    </div>
  )
}
