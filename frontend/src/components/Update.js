import React, { useState, useEffect } from 'react'
import { Link, useNavigate , useParams } from "react-router-dom";
import axios from 'axios';

export default function Update() {

    const defaultvalue = {
        name: '',
        email: '',
        phone: '',
        address: '',
        password: ''
    }


    const [msg, setMsg] = useState({});
    const [newdata, setNewdata] = useState({});
    const { id } = useParams();
    console.log(newdata);
    const location = useNavigate();

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3008/update/${id}`);
        return setNewdata(result.data[0]);
    }

    useEffect(() => {
        loadUser();
    }, [])

    const handlesubmIt = async (e) => {
        e.preventDefault()
        try {
            console.log("Api calling url");
            const dataA = await axios.post(`http://localhost:3008/save_data/${id}`, newdata);
            console.log(dataA);
            setMsg(dataA?.newdata)
            if (dataA){
                location('/view')
            }

        } catch (error) {
            console.log("Error while calling Api update registration : ", error.message);
            alert(error.message)
        }
    }
    const onValueChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setNewdata({ ...newdata, [e.target.name]: e.target.value });
    }


    return (
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.3)' }}>
            <div className="items-center h-full">
                <div className="text-white text-center px-14 px-md-0">
                    <div className="flex flex-col text-center w-full mb-20">

                        <section className="text-gray-600 body-font relative mt-20">
                            <div className="md:space-x-2 mb-8">
                                <Link type="button"
                                    className="inline-block px-5 py-1 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    to="/view" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">go
                                    to
                                    back</Link >
                                <Link type="button"
                                    className="inline-block px-5 py-1 mb-2 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    to="/login" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go
                                    back
                                    login page</Link >

                            </div>
                            <div
                                className="container mx-auto lg:w-5/6 bg-gray-100 rounded-lg p-4 flex flex-col md:ml-auto w-full md:mt-0">
                                <div className="flex flex-col text-center w-full mb-12">
                                    <h1 className="sm:text-1xl text-1xl font-medium title-font mb-3 text-gray-900">
                                        Registration Update
                                    </h1>
                                    {/* message alert */}
                                    <h2 className="title-font font-medium text-1.5xl text-red-600 ">{msg.message}</h2>
                                    <h2 className="title-font font-medium text-1.5xl text-green-600 ">{msg.message_succes}</h2>


                                </div>
                                <div className="lg:w-4/5 md:w-3/5 mx-auto">
                                    <form action="/save_data" method="">

                                        <input style={{ 'visibility': 'hidden' }} type="text" id="id" name="id"
                                            value={newdata.id} />
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="name"
                                                        className="leading-7 text-sm text-gray-600">Name</label>
                                                    <input type="text" id="name" name="Name" value={newdata.Name} onChange={(e) => onValueChange(e)}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="email"
                                                        className="leading-7 text-sm text-gray-600">Email</label>
                                                    <input type="email" id="email" name="Email" value={newdata.Email} onChange={(e) => onValueChange(e)}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="phone"
                                                        className="leading-7 text-sm text-gray-600">Phone</label>
                                                    <input type="tel" id="phone" name="Phone" value={newdata.Phone} onChange={(e) => onValueChange(e)}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>

                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="address"
                                                        className="leading-7 text-sm text-gray-600">Address</label>
                                                    <input type="text" id="address" name="Address" value={newdata.Address} onChange={(e) => onValueChange(e)}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="password"
                                                        className="leading-7 text-sm text-gray-600">Password</label>
                                                    <input type="password" id="password" name="Password" onChange={(e) => onValueChange(e)}
                                                        value={newdata.Password}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>

                                            <div className="p-1 w-1/3">
                                                <div className="relative">
                                                    <label htmlFor="c_password"
                                                        className="leading-7 text-sm text-gray-600">Confirm
                                                        Password</label>
                                                    <input type="password" id="c_password" name="Password" onChange={(e) => onValueChange(e)}
                                                        value={newdata.Password}
                                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>

                                            <div className="p-2 w-full">
                                                <button name="submit" onClick={(e) => handlesubmIt(e)}
                                                    className="flex mx-auto text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Save</button>
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
