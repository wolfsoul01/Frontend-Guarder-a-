import { useState } from "react"
import { LoginForm } from "../components/Login/LoginAcount"
import { CreateForm } from "../components/Login/CreateAcount"

function Login () {

 const [isLogin,setisLogin ]=useState(false)

 function handleClik(){
  setisLogin(!isLogin)
 }
  return (
    <>
      <section className='relative flex flex-wrap lg:h-screen lg:items-center'>
       
       <CreateForm hancleClik={handleClik}/>
        <LoginForm hancleClik={handleClik}/>
        

        <div className={`absolute h-1/2  w-full   lg:h-full lg:w-1/2 ${isLogin? '' : '[1000px>width>800px]:translate-x-full  :translate-y-0 translate-y-full'} transition-all duration-200 `}>
          <img
            alt='Welcome'
            src='/img/login.jpg'
            className='absolute inset-0 h-full w-full object-cover '
          />
        </div>

        
        
      </section>
    </>
  )
}

export default Login
