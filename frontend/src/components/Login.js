import React, { useState} from 'react'
import {Link, useNavigate } from "react-router-dom";
import axios from 'axios';





export default function Login() {
  
     const [show, setshow] = useState(false); 
     const location = useNavigate()

     const defaultvalue={
        email:'',
        password:''
        }
    const [msg, setMsg] = useState({});
    const [data, setData] = useState(defaultvalue);
        const handlesubmIt= async (e)=>{
            e.preventDefault()
            try {
                    console.log("Api calling.url");
                    const dataA= await axios.post(`http://localhost:3008/login_user`, data);
                    setMsg(dataA.data)
                    if (dataA.data.message_succes){
                        location('/Admin')
                    }
                    else{
                        console.log("Enter valid Requirement");
                    }

            } catch (error) {
                console.log("Error while calling Api login : ",error.message);
                alert(error.message);
            }
        }
        const onValueChange=(e)=>{
                console.log(e.target.name,e.target.value);
                setData({...data,[e.target.name]:e.target.value});
            }
            
        //admin visible input
       const handleChange=(e)=> {
                if(e.target.value==='User')
                {  console.log("user call "+e.target.value);
                    setshow(false);
                }
                else {
                    console.log("admin call "+e.target.value);
                    setshow(true);
                };
          };



        return (
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed" style={{'backgroundColor': 'rgba(0, 0, 0, 0.4)'}}>
                <div className="items-center h-full">
                    <div className="text-white text-center  p-10 px-md-0">
                        <div className="flex flex-col text-center w-full mb-20">

                            <section className="text-white-600 body-font relative  mt-10">
                                <div className="md:space-x-2 mb-10">
                                    <Link type="button"
                                        className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        to="/" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">go to
                                        back home page</Link >
                                    <Link type="button"
                                        className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        to="/register" role="button" data-mdb-ripple="true"
                                        data-mdb-ripple-color="light">Go
                                        back
                                        registration page</Link >
                                </div>

                                <div className="container px-3 py-1 mx-auto flex flex-wrap items-center text-white-900">
                                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">

                                        <h1 className="title-font font-medium text-1xl text-white-900">Slow-carb next level
                                            shoindcgoitch </h1>
                                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street
                                            art gentrify
                                            hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                                    </div>
                                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-5 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
                                         <h2 className="text-gray-900 text-lg font-medium title-font mb-3">Sign in</h2>
                                        
                                        <h2 className="title-font font-medium text-1xl text-red-600 ">{msg.message}</h2>
                                        <h2 className="title-font font-medium text-1xl text-green-600 ">{msg.message_succes}</h2> 

                                        <form action="/login_user" method="">
                                            <div className="relative mb-2">
                                                <input type="email" id="email" name="email" placeholder="Enter email!" onChange={(e)=>onValueChange(e)}
                                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>

                                            <div className="relative mb-2">
                                                <input type="password" id="password" name="password" onChange={(e)=>onValueChange(e)}
                                                    placeholder="Enter password!"
                                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            {/* <!--            designation--> */}
                                            <div className="relative mb-2">
                                                <select id="designation" name="designation" className="w-full bg-white rounded border border-gray-300
                                                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3
                                                leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={(e)=>handleChange(e) } >
                                                        {/* {handleChange}  this.handleChange() */}
                                                    <option value="User">User</option>
                                                    <option value="Admin">Admin</option>
                                                </select>
                                            </div>
                                            {/* <!--            secuirity--> */}
                                            <div className="relative mb-2">
                                                {show?
                                                <input placeholder="Enter Admin Security " onChange={(e)=>onValueChange(e)}
                                                //  style={{'visibility':'hidden'}}
                                                    type="password" id="security" name="security"
                                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                :null}
                                            </div>
                                            <button name="submit" onClick={(e)=>handlesubmIt(e)}
                                                className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">login</button>
                                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of
                                                them jean shorts.</p>

                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        )
}
