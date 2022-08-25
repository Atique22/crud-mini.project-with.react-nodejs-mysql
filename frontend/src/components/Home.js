import React, { Component } from 'react'
import {Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            

                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"   style={{'backgroundColor': 'rgba(0, 0, 0, 0.1)'}}>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-white text-center px-8 px-md-0">
                            <h2 className="text-2xl font-semibold mb-4">Clicky Intern and Trainee</h2>
                            <h5 className="text-sm font-semibold mb-6">Best & free guide of responsive web design</h5>
                            <div className="md:space-x-2">
                                <Link type="button"
                                    className="inline-block px-5 py-1 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    to="/register" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Registration</Link >
                                <Link type="button"
                                    className="inline-block px-5 py-1 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black-900 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    to="/login" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Login Here  !</Link >
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}
