import Navbar from '@/Components/partials/Navbar'
import CategoryNavWithSlider from '@/Components/ui/CategoryNav'
import ProductCard from '@/Components/ui/ProductCard'
import FrontLayout from '@/Layouts/FrontLayout'
import { Head } from '@inertiajs/react'
import { Button, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

const Home = () => {
    return (
        <FrontLayout>
            <Head title="Home" />
            <CategoryNavWithSlider />
            <div className='text-2xl mt-8 text-white text-orange-500 font-bold h-10 p-1 text-center'>
                <h3>OUR PRODUCTS</h3>
            </div>
            <div className='flex gap-3 p-6'>
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"BASKIN ROBINS I/CREAM MINT MILK CHOCOLATE 450ML"}
                    price={"Rs. 5000"}
                />
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"DRUK MAYONNAISE 360GM"}
                    price={"Rs. 5000"}
                />
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"DRUK MAYONNAISE 360GM"}
                    price={"Rs. 5000"}
                />
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"DRUK MAYONNAISE 360GM"}
                    price={"Rs. 5000"}
                />
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"DRUK MAYONNAISE 360GM"}
                    price={"Rs. 5000"}
                />
                <ProductCard
                    src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                    name={"DRUK MAYONNAISE 360GM"}
                    price={"Rs. 5000"}
                />
            </div>
        </FrontLayout>
    )
}

export default Home