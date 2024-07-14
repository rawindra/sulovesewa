import React from 'react'

import { Link, usePage } from '@inertiajs/react'
import { Badge } from 'antd'

import { FaPowerOff, FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {

    const auth = usePage().props.auth

    return (
        <div className="p-6  bg-orange-500">
            <div className='flex items-center justify-between'>
                <Link className="text-white font-bold text-2xl" href="/">
                    SuLoveSewa
                </Link>
                <div className='hidden md:block relative'>
                    <FaSearch size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input type="search" className="w-[300px] md:w-[400px] focus:outline-none p-2 pl-10 text-sm dark:text-gray-900 rounded-lg" name="search" placeholder="Search Products..." />
                </div>
                <div className="flex items-center">
                    {auth.user ? (
                        <Link as='button' href={route('logout')} className='text-green-600 mr-3' method='post'>
                            <FaPowerOff size={20} />
                        </Link>
                    ) : <a href='/login/google'>
                        <button className="font-medium bg-white text-sm text-orange-500 py-2 px-10 border rounded-md mx-5 ">Login</button>
                    </a>}

                    <Link className='pt-2'>
                        <Badge count={1}>
                            <FaCartArrowDown size={30} className='text-white' />
                        </Badge>
                    </Link>
                </div>
            </div>
            <div className='block md:hidden relative mt-2'>
                <FaSearch size={20} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300" />
                <input type="search" className="w-full focus:outline-none p-2 pl-10 text-sm dark:text-gray-900 rounded-lg" name="search" placeholder="Search Products..." />
            </div>
        </div>
    )
}

export default Navbar