import  { useEffect, useState } from 'react'
import Cart from './Cart'
import { Link, Navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import Cart2 from './Cart2';




const data = [
  {
    "id": 1,
    "from" : "pune",
    "To" : "shivijanagar",
    "Price": "30"
  },
  {
    "id" : 2,
    "from" : "pune station",
    "To" : "yewalewadi",
    "Price": "50"

  },
  {
    "id" : 3,
    "from" : "yewalewadi",
    "To" : "Swargate",
    "Price": "34"

  },
  {
    "id" : 4,
    "from" : "Swargate",
    "To" : "yewalewadi",
    "Price": "34"

  },
  {
    "id" : 5,
    "from" : "pune",
    "To" : "hapdspar",
    "Price": "34"

  },

   {
    "id":6,
    "from" : "Hapdaspar",
    "To" : "yewalewadi",
    "Price": "34"

  },
  {
    "id":6,
    "from" : "yewalewadi",
    "To" : "yewalewadi",
    "Price": "34"

  },
  {
    "id":6,
    "from" : "yewalewadi",
    "To" : "Pune",
    "Price": "34"

  },
]







 function About() {


   const[name , setname] = useState("");
   const[To , setTo] = useState("");
   const[data5, setdata5] = useState([]);
   const navigator = useNavigate();
    const handleclick = (e) => {
      setname(e.target.value);
      
    }


    const[loading , setLoading ]  = useState(true);
    const[Login , setLogin] = useState([]);

    const handleclick2 = (e) => {
      setTo(e.target.value);
      

    }

    console.log(Login);
    

    const[ Log , setLog] = useState([]);
 


    const  handleclick4 = () => {
     const data7 = data.filter((x => x.from.toLowerCase().includes(name)));
      setLog(data7);
     
    
      

        
        
      }

      setTimeout(() => {
        setLoading(false);
    }, 2000);

      useEffect(( ) => {
       setTimeout(() => {
        const data5  = data.filter((t => t.To.toLowerCase().includes(To)));
        setLog(data5);

        
       }, 2000);

      } , [])
      
      
       const[handle , sethandle] = useState([]);
    
       const handleclick5 = () => {
        console.log("sandip");
        console.log([...data , handle]);
       }

      

      


      
    
    
    
    return (
    
     <main class='flex flex-col justify-center items-center flex-1 px-10 p-10 w-3 '>
        <div class=' rounded-2xl shadow-2xl flex w-2/3 max-w-4xl py-12  bg-slate-100'>
          <div class='w-2/2 p-10 gap-10  justify-center flex-1 flex bg-slate-50 rounded-2xl shadow-2xl '>
            <label class= ' py-4 flex  font-bold'>
              From
            </label>
            <input class= 'w-3/3 rounded-2ml  h-18 text-inherit' value={name} placeholder='name' onChange={handleclick} />


            <label class= 'py-4 flex font-bold'>
            To
            </label>
            <input class= 'w-3/3 rounded-2md h-18  ' value={To} placeholder='To' onChange={handleclick2} />





            <div class= 'py-5 flex '>
              <button onClick={handleclick4}>
                Search me
              </button>
            </div>
          </div>
        </div>

        <div class='flex-col p-3 py-6'>
     
         {
          Log.map((x => {
            return <Cart
           
              from={x.from}
              Price={x.Price}
              To={x.To}
              handle = {handleclick5}
            
              />;

          }))
          }
       
        


        </div>
        <div>
          
        


        </div>
        <Cart2
        data = {Log}/>
        

      </main>
      
    
    
        
          )
 }

 export default About;
 
    