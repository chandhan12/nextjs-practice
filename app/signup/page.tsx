"use client"
import axios from "axios"
import { useRouter } from "next/navigation"



import { useRef } from "react"



const signup = () => {
    const emailRef=useRef<HTMLInputElement>()
    const passwordRef=useRef<HTMLInputElement>()
    const router=useRouter()
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
        
            <input ref={emailRef} className="text-black p-1 m-2 rounded-md" type="text" placeholder="email" />
            <input ref={passwordRef} className="text-black p-1 m-2 rounded-md" type="password" placeholder="password" />
      
        <button className="rounded-md p-2 m-2 text-black bg-white" onClick={async ()=>{
            
            const email=emailRef.current.value
            const password=passwordRef.current.value
           await axios.post("http://localhost:3000/api/v1/user/signup",{
                email,
                password
            })
            router.push("/signin")
            
        }}>Sign Up</button>
    </div>
  )
}

export default signup
