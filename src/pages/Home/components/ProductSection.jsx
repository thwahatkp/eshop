import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
const ProductSection = () => {
    return (
        <div className='my-20'>
            <div className="flex flex-row justify-between">
                <h2 className='text-3xl'>Men's Collection</h2>
                <Link className='text-xl flex flex-row' to="/">
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-7 ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </Link>
            </div>
            <div className="grid grid-flow-row xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10 mt-3">
                <Product
                    src="men/product1.jpg" sizes={['XL', 'XXL', 'L', 'S', 'M']}
                    colors={['bg-black', 'bg-blue-800', 'bg-white', 'bg-red-800', 'bg-green-700']}
                />

                <Product src="men/product2.jpg"
                    colors={['bg-black', 'bg-blue-800', 'bg-white', 'bg-red-800']}
                    sizes={['XL', 'XXL', 'L', 'S']}
                />
                <Product
                    src="men/product3.jpg"
                    sizes={['XL', 'XXL', 'L', 'S', 'M']}
                    colors={['bg-black', 'bg-blue-800', 'bg-white', 'bg-red-800', 'bg-green-700']} />

                <Product
                    src="men/product4.jpg"
                    sizes={['XL', 'XXL', 'L', 'S', 'M']}
                    colors={['bg-black', 'bg-blue-800', 'bg-white', 'bg-red-800', 'bg-green-700']} />
                <Product
                    src="men/product4.jpg"
                    sizes={['XL', 'XXL', 'L', 'S', 'M']}
                    colors={['bg-black', 'bg-blue-800', 'bg-white', 'bg-red-800', 'bg-green-700']} />
            </div>
        </div>

    )
}

export default ProductSection