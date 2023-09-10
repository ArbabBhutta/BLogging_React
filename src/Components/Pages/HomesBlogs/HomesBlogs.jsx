import React from 'react'
import {BlogInHome} from '../../HomeBlogs'
import HomeBloggs from './HomeBloggs'

export default function HomesBlogs() {

  return (
    <div className='container-fluid'>
      <div className="row">
        {BlogInHome.map((Home_blog_detail)=>{
            return <HomeBloggs data={Home_blog_detail}/>
        })}
      </div>
    </div>
  )
}
