import React from 'react'

const NewsLetter = () => {
    return (
        <div className='rounded-lg shadow-lg my-20 flex flex-row'>
            <div className='lg:w-3/5 w-full bg-gradient-to-r from-black ack to-purple-900  lg:via-purple-900 lg:to-transparent p-12 text-gray-100'>
                <div className="lg:w-1/2" >
                    <h3 className='text-2xl font-extrabold mb-4'>Subscribe to get our offers first</h3>
                    <p className='mb-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsa error eveniet. Saepe aspernatur ea officia ex velit minus sunt?</p>
                    <div>
                        <input type="email" name="" placeholder='Enter email address' className='bg-gray-600 text-gray-200 placeholder-gray-400 px-4 py-3 w-full rounded-lg focus:outline-none mb-4' id="" />
                        <button type='submit' className='bg-red-600 py-3 rounded-lg w-full'>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='lg:w-2/5 w-full lg:flex lg:flex-row hidden'>
                <img src="/images/subscribe-banner.png" alt="" className='h-96' />
            </div>

        </div>
    )
}

export default NewsLetter