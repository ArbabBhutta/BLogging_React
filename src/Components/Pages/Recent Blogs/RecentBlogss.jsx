import React from 'react'
import { RecentBlogs } from '../../RecentBlogs'
import RecentBlog from './RecentBlog'


export default function RecentBlogss() {
  return (
    <div className='container-fluid'>
        <div className="row mt-5 mb-3">
            <h1>Recent Blogs</h1>
            {RecentBlogs.map((recentDetails)=>{
                return <RecentBlog data={recentDetails}/>
            })}
        </div>
      
    </div>
  )
}
