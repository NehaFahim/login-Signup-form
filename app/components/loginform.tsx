'use client '  //client-side component
import{useState} from "react"
import {Input} from "@/components/ui/input" 
import {Button} from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"


const LoginForm = () =>{
    const [email,setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    console.log('Login attempt with.' , {email,password})
}


return(
    <Card className = "w-[450px] h-[450px] text-white absolute top-16 left-1/3 bg-opacity-0 backdrop-blur-md bg-gray-600  shadow-md rounded-lg border border-black border-x-4 border-y-4  ">
        <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription className="text-sm text-gray-300">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8 m-4">
                <div className="space-y-2 ">
                  <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=> setEmail (e.target.value)}
                   className="  focus:ring-blue-500 focus:border-blue-500"
                  required 
                  />
                </div>
                <div className="space-y-2">
                    <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword (e.target.value)}
                     className="  focus:ring-blue-500 focus:border-blue-500"
                    required
                    />
                </div>
                <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  className="form-checkbox bg-gray-800 border-gray-600 text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>
                <Button type="submit" 
                className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition" 
                onClick ={()=> alert('Thanks for Login')}>Login</Button>
                
            </form>
        </CardContent>

    </Card>
)
}

export default LoginForm