import React from 'react'

import { Link } from '@inertiajs/react'
import { Avatar, Badge } from 'antd'

import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="p-6 flex items-center justify-between bg-orange-500">
            <Link className="text-white font-bold text-2xl" href="/">
                SuLoveSewa
            </Link>
            <div className='relative'>
                <FaSearch size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300" />
                <input type="search" className="w-[300px] md:w-[400px] focus:outline-none p-2 pl-10 text-sm dark:text-gray-900 rounded-lg" name="search" placeholder="Search Products..." />
            </div>
            <div className="flex items-center">
                <button className="font-medium bg-white text-sm text-orange-500 py-2 px-10 border rounded-md mx-5 ">Login</button>
                <Link className='pt-2'>
                    <Badge count={1}>
                        <FaCartArrowDown size={30} className='text-white' />
                    </Badge>
                </Link>
            </div>
        </div>
    )
}

export default Navbar