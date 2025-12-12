import {useState} from 'react'

import { useNavigate } from 'react-router-dom';
import image from './image-removebg-preview.png';


 function Login() {
      
      const[email , setEmail] = useState("");
      const[Password , setPsssword] = useState("");
      const[Login , setlogin] = useState(false);
      const[error , seterror] = useState("");

      const navigator = useNavigate();
     
         

    

      const handleclick = (e) => {
            setEmail(e.target.vslue);

      }
      
      
      const handle = (e) => {
           
            setPsssword(e.target.value);
      }
      
      const handlesubimt = () => 
      {
            if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) )
            {
                 navigator("/login");
                 seterror("Please enter the email");

            }
            if(Password.length > 10)
            {
                  navigator("/login");
                  seterror("Please enter the password");
            }
            else
            {
                  navigator("/about");

                  alert(" Try it Next Time ");

                  

            }
           

      }
      
   
      
  
 if(!Login )
 {
  return (
     <main class='flex items-center justify-center w-full  px-20  text-centre min-h-screen'>
                    <div class='bg-white rounded-2xl shadow-2xl flex  w-2/3 max-w-4xl rounded-tr-3xl justify-center '>
                          <div class='w-3/5 p-5'>
                                <div class='py-10'>
                                      <div class='text-2xl  text-black mb-2 font-extrabold'>
                                            <h1>Sign in <span>
                                                  Pmpl Bus </span> </h1>

                                      </div>
                                      <div class='py-2'>
                                            <p class=' bg-slate-100 font-medium text-black'>Create Your Email </p>
                                      </div>
                                      <div class='py-4'>
                                            <input value={email} onChange={handleclick}
                                                  class='p-1 rounded-xl border-separate w-full placeholder:font-light' name='email' placeholder='Email'/>
                                                  <label class= 'bg-red-500 py-1'>
                                                {error}
                                                  </label>

                                      </div>
                                      <div class='py-4'>
                                            <input value={Password} onChange={handle}
                                                  class='p-1 rounded-xl border-separate w-full  placeholder:font-light' name='Password' placeholder='Password'  />

                                      </div>
                                      <div class='py-5'>
                                          
                                          <button onClick={handlesubimt}
                                                  class='w-full  text-md  rounded-lg mb-6  rounded-bg hover:text-white  border-x-gray-900'>
                                           Sign In
                                            </button>
                                            
                                      </div>
                                </div>






                          </div>
                          <div class='w-2/3 bg-gray-900 rounded-2xl rounded-tr-3xl py-37 px-12'>
                                <img class='w-120 h-23 top-4  animate-bounce duration-400 ' src={image} />
                          </div>
                    </div>

              </main>
      
  )  
  
 }
  
}

export default Login;
