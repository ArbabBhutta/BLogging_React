import { createContext } from "react"
import React, { useEffect, useState,useRef } from "react";

  import { auth,Provider,db } from "../../../firebase";
import { signInWithPopup } from 'firebase/auth';


export const  BlogContext=createContext(null)
export const Context=(props)=>{


    const authHandler= async()=>{
        const userData=await signInWithPopup(auth,Provider)
        return userData
      }

const values={authHandler}
 return (
    <div>
        <BlogContext.Provider value={values}>
            {props.children}
        </BlogContext.Provider>
    </div>
 )
}