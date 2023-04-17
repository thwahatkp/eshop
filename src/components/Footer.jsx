import React, {  } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    // const [year,setYear] = useState(Date)
    let year = new Date().getFullYear()
    return (
        <div className='flex flex-col md:flex-row md:justify-between text-center border-t-2 border-gray-300 py-5 text-sm'>
            <div className="mb-4">
                <Link className='mx-2.5'>About</Link>
                <Link className='mx-2.5'>Privacy Policy</Link>
                <Link className='mx-2.5'>Terms of Services</Link>
            </div>
            <p>&copy; Copyright Reserved {year}</p>
        </div>
    )
}

export default Footer