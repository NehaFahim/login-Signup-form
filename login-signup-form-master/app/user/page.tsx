'use client'
import Image from "next/image"
import LoginForm from "../components/loginform"
import SignUpForm from "../components/signupform"
import {Button} from "@/components/ui/button"
import{useState} from "react"

export default function AuthPage(){
    const [isLogin,setIsLogin]=useState(true)

    return(
        <div className="min-h-screen flex flex-col justify-center items-center  text-black text-2xl ">
            
            <div> {isLogin? <LoginForm/>:<SignUpForm/>}</div>
            <Image src={"/line.avif"} alt="back pic" width={1400} height={800}></Image>
        
            <div className="mb-4 absolute bottom-28">
            <Button
            className="text-lg"
            onClick={()=> setIsLogin(!isLogin)}
            variant={"ghost"}
            >
                <div className="absolute bottom-12 flex items-center text-white text-lg hover:underline ">
       {isLogin ? "Need an account? Sign up":"Already have an account? Login"}
       </div>

            </Button>
        </div>
        </div>
          
    
    )
}