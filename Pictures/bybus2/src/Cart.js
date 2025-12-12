import React, { useState } from 'react';

 function Cart({from , To , Price , handle}) {
  
   
   const[isloading , setisloading] = useState(false);
   
    
  return (
    <div class= ' flex p-4 w-78 py-11   top-23 flex gap-24 right-23 justify-center items-center   gap-y-78'>
     <div class= 'flex p-4 gap-40 w-2/1 h-18 text-xl text-fuchsia-100 top-10 right-8   cursor-auto rounded-2xl shadow-2xl bg-black  bg-slate-60 '>

    

      <div>

       <label class= 'py-10 p-1 top-1 '>From</label>
         
           <p>{from}</p>
      </div>
      <div>
      <label>TO</label>
         <h1>{To}</h1>
      </div>
      <div>
      <label>Price</label>
      <p>{Price}</p> 
       </div>

      <button class= 'bg-slate text-left font-semibold text-2xl  cursor-pointer text-red-300'onClick={handle} >
        Book  me
      </button>
       </div>
    </div>

  
  )
}

export default Cart;
