import React from 'react'
import { Link } from 'react-router-dom'

let Color = ({ color }) =>
    <div className={`${color} h-5 w-5 rounded-full shadow-md mr-2`}></div>


let SizeButton = ({ name, onClick }) => {
    return <div onClick={onClick} className="border-2 border-gray-300 rounded-md text-xs px-2 py-1 mr-2">{name}</div>
}

const Product = (props) => {
    let { src, sizes = [], colors = [] } = props
    return (
        <div className='shadow-lg rounded-lg'>
            <Link to='/'>
                <img src={"images/products/" + src} className='rounded-tl-lg rounded-tr-lg' alt="" />
            </Link>
            <div className="p-5">
                <h3><Link>Men's T-Shirt</Link></h3>
                <div className='flex flex-row my-3'>
                    {
                        colors.map((data, idx) => <Color key={idx} color={data} />)
                    }

                </div>
                <div className="flex flex-row my-3">
                    {
                        sizes.map((data, idx) => {
                            return <SizeButton key={idx} name={data} onClick={() => console.log(data)} />
                        })
                    }
                </div>
                <div className="flex flex-col xl:flex-row justify-between">
                    <Link className='bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-gray-50 flex flex-row hover:to-pink-600 text-sm justify-center my-2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 mr-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>
                        Add to cart
                    </Link>

                    <Link className=' bg-purple-600 rounded-full py-2 px-4 text-gray-50 my-2 justify-center flex flex-row hover:bg-purple-700 text-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>


                        view Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product