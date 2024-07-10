import Footer from '@/Components/partials/Footer'
import Navbar from '@/Components/partials/Navbar'
import React from 'react'

const FrontLayout = ({ children }) => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default FrontLayout