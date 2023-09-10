import React from 'react'
import { Link } from 'react-router-dom'

export default function GameBlogList(props) {
    const {B_id,B_Head,B_img,B_disc}=props.data
    return (
        <div className="col-sm-6">
            <Link className='link_Decor' to={`/src/Components/Gaming.js/${B_id}`} state={"diff"}>
        <img className='blogs_image mt-4 mb-4' src={B_img} alt="BLog Image" height='400px' width='95%' />
        <h1 >{B_Head}</h1>
      <button className='btn btn-lg btn_ReadMore zoomer'>Read More</button>
      </Link>
        </div>
    )
}
