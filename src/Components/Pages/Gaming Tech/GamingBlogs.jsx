import React from 'react'
import { gaminggBlog } from './../../Gaming';
import GameBlogList from './GameBlogList';

export default function GamingBlogs() {
  return (
    <div className='container-fluid'>
      <div className="row">
        {gaminggBlog.map((gamin_info)=>{
          return <GameBlogList data={gamin_info}/>
        })}
      </div>
    </div>
  )
}
