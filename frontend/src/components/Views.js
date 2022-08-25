import React, {useState,useEffect} from 'react'
import {Link } from "react-router-dom";
import axios from 'axios';
const URL ='http://localhost:3008'; 

export default function Views() {

    const [reviewData, setreviewData] = useState([]);
    //view data
    const loadUser = async()=>{
        await axios.get(`${URL}/view`).then((response)=>{
            setreviewData(response.data)
        });
    }
    //refresh data
    useEffect(()=>{
        loadUser();
    },[]);


    
    //delete function
    const deleteUser=async(id)=>{
        await axios.delete(`${URL}/delete/${id}`);
        loadUser();
    }


        return (
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{'backgroundColor': 'rgba(0, 0, 0, 0.7)'}}>
                <div className="items-center h-full">
                    <div className="text-white text-center px-14 px-md-0">

                        <section className="text-white-600 body-font">
                            <div className="container px-5 py-20 mx-auto">
                                <div className="flex flex-col text-center w-full mb-10">
                                    <div className="md:space-x-2">
                                        <Link type="button"
                                            className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/admin" role="button" data-mdb-ripple="true"
                                            data-mdb-ripple-color="light">go to back</Link >
                                        <Link type="button"
                                            className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/login" role="button" data-mdb-ripple="true"
                                            data-mdb-ripple-color="light">Go back
                                            login page</Link >
                                        <Link type="button"
                                            className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/register" role="button" data-mdb-ripple="true"
                                            data-mdb-ripple-color="light">Go back
                                            registration page</Link >
                                        <Link type="button"
                                            className="inline-block px-3 py-1 mb-1 md:mb-0 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-sky-700 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                            to="/" role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Go
                                            back
                                            home page</Link >

                                    </div>
                                </div>
                                <div className="lg:w-4/4 w-full mx-auto overflow-auto">
                                    <table className="table-auto w-full text-left whitespace-no-wrap">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                                    ID</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Name</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Email</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Phone</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Address</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Password</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Update</th>
                                                <th
                                                    className="px-1 py-1 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                                    Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {reviewData.map((val)=>{

                                            return <tr>
                                                <td className="px-1 py-1">{ val.id }</td>
                                                <td className="px-1 py-1">{val.Name }</td>
                                                <td className="px-1 py-1">{val.Email }</td>
                                                <td className="px-1 py-1">{val.Phone }</td>
                                                <td className="px-1 py-1">{val.Address }</td>
                                                <td className="px-1 py-1">{val.Password }</td>
                                                <td className="px-1 py-1"><Link to={`/update/${val.id}`}
                                                    className="font-medium text-green-600">Update</Link >
                                                </td>
                                                <td className="px-1 py-1"><button onClick={()=>deleteUser(val.id)}
                                                    className="font-medium text-red-600">Delete</button ></td>
                                            </tr>
                                        })} 
                                        </tbody>
                                    </table>


                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
}
