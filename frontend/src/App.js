import React, { Component } from 'react'
import Update from './components/Update';
import Views from './components/Views';
import Admin from './components/Admin';
import Users from './components/Users';
import Login from './components/Login';
import Home from './components/Home'
import Registration from './components/Registration'

import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="relative float-left w-full h-screen bg-no-repeat bg-cover bg-center overflow-hidden">

          <header className="text-white-200 body-font ">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
              <h1 className="flex title-font font-medium items-center text-gray-900 mb-1 md:mb-0">
                Clicky Intern
              </h1>
            </div>
          </header>

          <video className="absolute z-5 w-auto min-w-full min-h-full max-w-none" playsInline autoPlay muted loop>
            <source className="object-fill h-auto w-96" src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
          </video>
          {/* here call pages  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<Users />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/view" element={<Views />} />
            <Route path="/update" element={<Update />} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}
