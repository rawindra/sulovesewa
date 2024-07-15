import CategoryMenu from '@/Components/CategoryMenu'
import CategoryNavWithSlider from '@/Components/ui/CategoryNav'
import ProductCard from '@/Components/ui/ProductCard'
import FrontLayout from '@/Layouts/FrontLayout'
import { Head, Link } from '@inertiajs/react'

const Home = ({ app, categories, products }) => {
    return (
        <FrontLayout>
            <Head title="Home" />
            {/* <CategoryNavWithSlider /> */}
            <CategoryMenu  categories={categories} />
            <div className='text-2xl mt-8 text-orange-500 font-bold h-10 p-1 text-center'>
                <h3>OUR PRODUCTS</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 gap-3 p-6'>
                {products.data.map(product => (
                    <Link href={"/product/show"} className='m-auto' key={product.id}>
                        <ProductCard
                            src={app.storage_url + '/' + product.image}
                            name={product.name}
                            price={"Rs. " + product.price}
                        />
                    </Link>
                ))}
               
            </div>
        </FrontLayout>
    )
}

export default Home