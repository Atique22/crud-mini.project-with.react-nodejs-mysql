import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate } from "react-router-dom";

export default function Registration(){

        const defaultvalue={
            name:'',
            email:'',
            phone:'',
            address:'',
            password:''
            }
        const [msg, setMsg] = useState({});
        const [data, setData] = useState(defaultvalue);
        const location = useNavigate()

            const handlesubmIt= async (e)=>{
                e.preventDefault()
                try {
                        console.log("Api calling.url");
                        const dataA= await axios.post(`http://localhost:3008/resgiter_data`, data);
                        setMsg(dataA.data)
                        if (dataA.data.message_succes){
                            location('/login');
                        }
                        else{
                            console.log("Enter valid Requirement");
                        }
                } catch (error) {
                    console.log("Error while calling Api registration : ",error.message);
                }
            }
            const onValueChange=(e)=>{
                    console.log(e.target.name,e.target.value);
                    setData({...data,[e.target.name]:e.target.value});
                }

        return (

                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{'backgroundColor':' rgba(0, 0, 0, 0.3)'}}>
                    <div className="items-center h-full">
                        <div className="text-white text-center px-14 px-md-0">
                            <div className="flex flex-col text-center w-full mb-20">

                                <section className="text-gray-600 body-font relative mt-20">
                                    <div className="md:space-x-2 mb-8">
                                        <Link type="button"
                                            className="inline-block px-5 py-1 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/" role="button" data-mdb-ripple="true"
                                            data-mdb-ripple-color="light">go to
                                            back</Link >
                                        <Link type="button"
                                            className="inline-block px-5 py-1 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/login" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go
                                            back
                                            login page</Link >

                                    </div>
                                    <div
                                        className="container mx-auto lg:w-4/6  bg-gray-100 rounded-lg p-1 flex flex-col md:ml-auto w-full md:mt-0">
                                        <div className="flex flex-col text-center w-full mb-6">
                                            <h1 className="sm:text-2xl text-1xl font-medium title-font mb-3 text-gray-900">
                                                Registration
                                            </h1>
                                            {/* message alert */}
                                            <h2 className="title-font font-medium text-1.5xl text-red-600 ">{msg.message}</h2>
                                            <h2 className="title-font font-medium text-1.5xl text-green-600 ">{msg.message_succes}</h2>
                                          
                                        </div>
                                        <div className="lg:w-5/5 md:w-3/4 mx-auto">
                                            {/* form action */}
                                            <form >
                                                <div className="flex flex-wrap">

                                                    <div className="p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="name"
                                                                className="leading-7 text-sm text-gray-600">Name</label>
                                                            <input type="text" id="name" name="name" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>

                                                    <div className="p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="email"
                                                                className="leading-7 text-sm text-gray-600">Email</label>
                                                            <input type="email" id="email" name="email" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>
                                                    <div className=" p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="phone"
                                                                className="leading-7 text-sm text-gray-600">Phone</label>
                                                            <input type="tel" id="phone" name="phone" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>

                                                    <div className=" p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="address"
                                                                className="leading-7 text-sm text-gray-600">Address</label>
                                                            <input type="text" id="address" name="address" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>
                                                    <div className=" p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="password"
                                                                className="leading-7 text-sm text-gray-600">Password</label>
                                                            <input type="password" id="password" name="password" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>

                                                    <div className=" p-1 w-1/3">
                                                        <div className="relative">
                                                            <label htmlFor="c_password"
                                                                className="leading-7 text-sm text-gray-600">Confirm
                                                                Password</label>
                                                            <input type="password" id="c_password" name="c_password" onChange={(e)=>onValueChange(e)}
                                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                    </div>

                                                    <div className=" p-1 w-full">
                                                        <button name="submit" onClick={(e)=>handlesubmIt(e)}
                                                            className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                                    </div>

                                                </div>
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
