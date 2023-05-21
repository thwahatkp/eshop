import { Link, useNavigate } from "react-router-dom"
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const Signup = () => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/"
    const [passShow, setPassShow] = useState(false);
    const [error, setError] = useState({})
    const [details, setDetails] = useState({})
    const navigate = useNavigate()


    const handleChange = (e) => {
        setError({})
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e, details) => {
        e.preventDefault()
        axios.post(`${API_URL}register`, details).then((res) => {
            if (res.data.status === 201) {
                localStorage.setItem('details', JSON.stringify(res.data.data))
                navigate('/')
            }
        }).catch((err => {
            let data = err.response.data
            if (data.status === 302) {
                setError(data)
            }
        }))
    }

    return (
        <div className="flex items-center min-h-[80vh] p-4 mx-auto my-auto bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden  bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-lg"
            >
                <div
                    className="p-4 py-6 text-white bg-purple-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    <div className="my-3 text-4xl font-extrabold  text-center">
                        <Link to="#">eshop</Link>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione neque sunt nostrum aliquid ut eligendi placeat rem repudiandae repellendus asperiores?
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Already have an account?</span>
                        <Link to="/login" className="underline">Sign In</Link>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Signup</h3>
                    <form onSubmit={(e) => handleSubmit(e, details)} className="flex flex-col space-y-5">
                        <div className="flex lg:space-x-4 flex-col lg:flex-row">
                            <div className="flex flex-col w-full space-y-1">
                                <label htmlFor="firstname" className="text-sm font-semibold text-gray-500">Firstname</label>
                                <input
                                    type="text"
                                    required
                                    id="firstname"
                                    name="firstname"
                                    autoFocus
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex flex-col w-full space-y-1">
                                <label htmlFor="lastname" className="text-sm font-semibold text-gray-500">Lastname</label>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                        </div>
                        <div className="flex lg:space-x-4 flex-col lg:flex-row">
                            <div className="flex flex-col w-full space-y-1">
                                <label htmlFor="firstname" className="text-sm font-semibold text-gray-500">Username</label>
                                <input
                                    type="text"
                                    id="firstname"
                                    required
                                    name="username"
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                                {error.exists === "username" && <span className="text-center text-red-500 text-sm">{error.message}</span>}
                            </div>
                            <div className="flex w-full flex-col space-y-1 ">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                    <a href="#" className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
                                </div>
                                <div className="relative">

                                    <input
                                        required
                                        type={`${passShow ? 'text' : 'password'}`}
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        className="px-4 w-full py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    />
                                    <span
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
                                        onClick={() => setPassShow(!passShow)}
                                    >
                                        {
                                            passShow ? <UilEyeSlash /> : <UilEye />
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:space-x-4 flex-col lg:flex-row">
                            <div className="flex w-full flex-col space-y-1">
                                <label htmlFor="number" className="text-sm font-semibold text-gray-500">Mobile No</label>
                                <input
                                    type="number"
                                    required
                                    id="number"
                                    name="mobile"
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                                {error.exists === "mobile" && <span className="text-center text-red-500 text-sm">{error.message}</span>}
                            </div>
                            <div className="flex w-full flex-col space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    type="email"
                                    required
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                                {error.exists === "email" && <span className="text-center text-red-500 text-sm">{error.message}</span>}
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-purple-500 rounded-md shadow hover:bg-purple-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup