import { Link } from '@inertiajs/react'
import React from 'react'
import { FaChevronRight, FaHouseDamage } from 'react-icons/fa'

const BreadCrumb = ({ category, title }) => {
    return (
        <div className="container flex items-center gap-3 my-10">
            <Link href={"/"} className="text-primary text-base">
                <FaHouseDamage />
            </Link>
            <span className="text-sm text-gray-400">
                <FaChevronRight />
            </span>
            <p className="text-gray-600 font-medium">{category}</p>
            <span className="text-sm text-gray-400">
                <FaChevronRight />
            </span>
            <p className="text-gray-600 font-medium">{title}</p>
        </div>
    )
}

export default BreadCrumb