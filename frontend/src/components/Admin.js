import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Admin extends Component {
  render() {
    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style={{'backgroundColor': 'rgba(0, 0, 0, 0.3)'}}>
        <div className="flex justify-center items-center h-full">
            <div className="text-white text-center px-14 px-md-0">
                <h2 className="text-3xl font-semibold mb-4">Welcom! Admin
                {/* {{#if mesg }} 
                    <h2 className="title-font font-medium text-3xl text-green-600 "> {{userEmail}}</h2>
                    {{/if}} */}
                </h2>
                <h5 className="text-lg font-semibold mb-6">to Admin page</h5>
                <div className="md:space-x-2">
                    <Link  type="button"
                        className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        to="/view" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Show
                        User Detail</Link >
                    <Link  type="button"
                        className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        to="/login" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go back
                        login page</Link >
                    <Link  type="button"
                        className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        to="/register" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go back
                        registration page</Link >
                    <Link  type="button"
                        className="inline-block px-6 py-2 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        to="/" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go back
                        home page</Link >

                </div>
            </div>
        </div>
    </div>

    )
  }
}
