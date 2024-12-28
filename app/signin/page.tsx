"use client"

import axios from "axios"
import { useRef } from "react"


const signin = () => {
    const emailRef=useRef<HTMLInputElement>()
        const passwordRef=useRef<HTMLInputElement>()
    return (
      <div className="flex flex-col h-screen w-full justify-center items-center">
          
              <input ref={emailRef} className="text-black p-1 m-2 rounded-md" type="text" placeholder="email" />
              <input ref={passwordRef}  className="text-black p-1 m-2 rounded-md" type="text" placeholder="password" />
        
          <button className="rounded-md p-2 m-2 text-black bg-white"  onClick={()=>{
            
            const email=emailRef.current.value
            const password=passwordRef.current.value
            axios.post("http://localhost:3000/api/v1/user/details",{
                email,
                password
            })
        }}>Sign In</button>
      </div>
    )
  }
  
  export default signin
  