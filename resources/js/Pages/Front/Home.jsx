import CategoryMenu from '@/Components/CategoryMenu'
import CategoryNavWithSlider from '@/Components/ui/CategoryNav'
import ProductCard from '@/Components/ui/ProductCard'
import FrontLayout from '@/Layouts/FrontLayout'
import { Head, Link } from '@inertiajs/react'

const Home = ({ categories }) => {
    // console.log(categories);
    return (
        <FrontLayout>
            <Head title="Home" />
            {/* <CategoryNavWithSlider /> */}
            <CategoryMenu  categories={categories} />
            <div className='text-2xl mt-8 text-orange-500 font-bold h-10 p-1 text-center'>
                <h3>OUR PRODUCTS</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 p-6'>
                <Link href={"/product/show"} className='m-auto'>
                    <ProductCard
                        src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                        name={"BASKIN ROBINS I/CREAM MINT MILK CHOCOLATE 450ML"}
                        price={"Rs. 5000"}
                    />
                </Link>
                <Link href={"/product/show"} className='m-auto'>
                    <ProductCard
                        src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
                        name={"DRUK MAYONNAISE 360GM"}
                        price={"Rs. 5000"}
                    />
                </Link>
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