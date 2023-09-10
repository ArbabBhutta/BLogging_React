import React from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { useState ,useEffect} from 'react'

import { gaminggBlog } from '../../Gaming'
import { collection,addDoc ,serverTimestamp,query,orderBy,onSnapshot,where} from 'firebase/firestore'
import { signInWithPopup } from 'firebase/auth'
import { auth,db,Provider } from '../../../firebase'
import Cookies from 'universal-cookie'

export default function SingleGameBlog() {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top when navigating from a different page
    if (location.state && location.state.from !== 'diff') {
      window.scrollTo(0, 0);
    }
  }, [location]);
    let {B_id}=useParams()
    let game=gaminggBlog.find((p)=>p.B_id===Number(B_id))
    
    const Cookie=new Cookies
    const cokie=new Cookies
      // Sign in handler 
      const SignInHandler =async()=>{
        const result = await signInWithPopup(auth, Provider);
        Cookie.set("Auth-Token",result.user.refreshToken)
        setSigned(true)
      }
     
    const [signed,setSigned]=useState(cokie.get("Auth-Token"))
        
        
      
  
    const [showcommnt,setShowcommnet]=useState(true)
    const [newcomnt,setnewcmnt]=useState(false)
    const [cmntinput,setcmntinput]=useState("")

    const showcomntHandler=()=>{
      setShowcommnet(!showcommnt)
    }
    const addcomnt=()=>{
      setnewcmnt(true)
    }
  

    // for the adding cmnts 
    const dbref=collection(db,"Comments")

    const submitHandler=async(e)=>{
      e.preventDefault()
      if (cmntinput==="") return
      await addDoc(dbref,{
        Comenter_Name:auth.currentUser.displayName,
        user_coment:cmntinput,
        ondate:serverTimestamp(),
        B_id,
      })
      setcmntinput("")
      console.log(cmntinput)
   
    }
const [allcmnt,setAllcmnt]=useState([])
    // retriving the cmnt from the db 
    useEffect(() => {
      const newTextQuery = query(
        dbref,
        where("B_id", "==", B_id)
      );
  
      const unsuscribe = onSnapshot(newTextQuery, (snapshot) => {
        let allmessage = [];
  
        snapshot.forEach((doc) => {
          allmessage.push({ ...doc.data(), id: doc.id });
        });
        setAllcmnt(allmessage);
        
      });
      return () => unsuscribe();
    }, []);
  return (
    
      <div  className='col-sm-12' >
        <div >
      <img className='singleBlogsImg' src={game.B_img} alt="Blog_photo"  width='100%' height='700px'/>
      <h1 style={{textAlign:'center'}}>{game.B_Head}</h1>
      <p style={{padding:'30px'}}>{game.B_disc}
      <br />
      <button className='mt-3 mb-3 btn btn_ReadMore'  onClick={addcomnt}>Leave a comment</button> <br/>
 
      {newcomnt && signed ? <div>
        <form onSubmit={submitHandler}>
          <input type="text" onChange={(e)=>setcmntinput(e.target.value)} value={cmntinput} className='input' />
          
          <button className='btn btn_ReadMore mt-3 mb-3' type='submit'>commment</button>
        </form>
        </div>: signed ? "" :<><h5>For comment please sign in </h5><button className='btn btn_ReadMore' onClick={SignInHandler}>Sign in</button></>}
      
      </p>
     
      <button className='btn btn_ReadMore' onClick={showcomntHandler}>{showcommnt ? <>hide Comments</>:<>see all comment</>}</button>
      {showcommnt &&  <div>
        {allcmnt.map((deatil)=>{
          return <div className='mt-3 mb-3'>
            <h4><cite>{deatil.Comenter_Name}</cite></h4>
            <p>"{deatil.user_coment}"</p>
           
          </div>
        })}
      </div>
        }
  </div> 
    </div>
    
  )
}
