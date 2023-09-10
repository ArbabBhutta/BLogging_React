import { TechBlog } from "./TechBlg";
import { gaminggBlog } from "./Gaming";
import { BLOGS_Details } from "./Blogs";


export let RecentBlogs=[]
function Rlooper(obj,aray) {
    for(let i=0;i<1;i++){
        aray.push(obj[i])
    }
    // console.log(aray[0])
}
Rlooper(TechBlog,RecentBlogs)
Rlooper(gaminggBlog,RecentBlogs)
Rlooper(BLOGS_Details,RecentBlogs)
console.log(RecentBlogs)
