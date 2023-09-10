import { TechBlog } from "./TechBlg";
import { gaminggBlog } from "./Gaming";
import { BLOGS_Details } from "./Blogs";


export let BlogInHome=[]
function looper(obj,aray) {
    for(let i=0;i<2;i++){
        aray.push(obj[i])
    }
    // console.log(aray[0])
}
looper(TechBlog,BlogInHome)
looper(gaminggBlog,BlogInHome)
looper(BLOGS_Details,BlogInHome)
console.log(BlogInHome)
