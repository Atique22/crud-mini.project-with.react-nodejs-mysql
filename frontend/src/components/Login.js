import React, { useState} from 'react'
import {Link } from "react-router-dom";
export default function Login() {
  
     const [show, setshow] = useState(false); 
       const handleChange=(e)=> {
            // console.log(e.target.value);
            if(e.target.value==='User')
            {  console.log("user call "+e.target.value);
                setshow(false);
                // e.form['security'].style.visibility='hidden'
            }
            else {
                console.log("admin call "+e.target.value);
                setshow(true);
                // e.form['security'].style.visibility='visible'
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
                                        {/* {{#if mesg }}
                                        <h2 className="title-font font-medium text-1xl text-green-600 ">Registration
                                            successfully! {{ userEmail }}</h2>
                                        {{/if}} */}

                                        <h1 className="title-font font-medium text-1xl text-white-900">Slow-carb next level
                                            shoindcgoitch </h1>
                                        <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street
                                            art gentrify
                                            hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                                    </div>
                                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-5 flex flex-col md:ml-auto w-full mt-7 md:mt-0">
                                        {/* <h2 className="text-gray-900 text-lg font-medium title-font mb-3">Sign in</h2>
                                        {{#if require }}
                                        <h2 className="title-font font-medium text-1xl text-red-600 ">Please enter complete
                                            requirements!</h2>
                                        {{/if}}
                                        {{#if valid_e_p }}
                                        <h2 className="title-font font-medium text-0.5xl text-red-600 ">Please correct enter
                                            email and Password!</h2>
                                        {{/if}} */}

                                        <form action="/login_user" method="">
                                            <div className="relative mb-2">
                                                <input type="email" id="email" name="email" placeholder="Enter email!"
                                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>

                                            <div className="relative mb-2">
                                                <input type="password" id="password" name="password"
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
                                                <input placeholder="Enter Admin Security "
                                                //  style={{'visibility':'hidden'}}
                                                    type="password" id="security" name="security"
                                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                :null}
                                            </div>
                                            <button name="submit"
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
