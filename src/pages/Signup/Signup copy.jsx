import { Link } from "react-router-dom"
import UilEye from "@iconscout/react-unicons/icons/uil-eye";
import UilEyeSlash from "@iconscout/react-unicons/icons/uil-eye-slash";
import { useState } from "react";

const Signup = () => {
    const [passShow, setPassShow] = useState(false);

    let inputStyle = 'my-3 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none w-full p-3'
    return (
        <div className="">
            <div className="bg-gray-100 h-max w-full md:w-3/5 lg:w-2/5 p-3 my-10 mb-24 mx-auto rounded-3xl shadow-lg border  border-gray-200">
                <div className="heading">
                    <h1 className="text-4xl font-bold font-mono text-center">Sign up</h1>
                </div>
                <div className="body mb-5 my-8">
                    <div className="name sm:flex justify-center space-x-0 sm:space-x-3 block">
                        <input
                            type="text"
                            placeholder="Firstname"
                            className={`${inputStyle} sm:w-1/2 w-full`}
                        />
                        <input
                            type="text"
                            placeholder="Lastname"
                            className={`${inputStyle} sm:w-1/2 w-full`}
                        />
                    </div>
                    <div className="name sm:flex justify-center space-x-0 sm:space-x-3 block">
                        <input
                            type="text"
                            placeholder="Username"
                            className={`${inputStyle} sm:w-3/5 w-full`}
                        />
                        <div className="relative sm:w-2/5 w-full">
                            <input
                                type={`${passShow ? 'text' : 'password'}`}
                                placeholder="Password"
                                className={`${inputStyle} `}
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
                    <input
                        type="number"
                        placeholder="Mobile"
                        className={`${inputStyle}`}
                    />
                    <input
                        type="email"
                        placeholder="Email address"
                        className={`${inputStyle}`}
                    />
                    <button className=" w-full py-3 rounded-full font-bold text-white text-lg bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600">
                        Submit
                    </button>
                </div>
                <div className="footer mb-5 text-center">
                    <Link
                        to="/login"
                        className="text-blue-500 text-lg hover:underline underline-offset-1"
                    >
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup