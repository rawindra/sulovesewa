import BreadCrumb from '@/Components/ui/BreadCrumb'
import Review from '@/Components/ui/Review'
import FrontLayout from '@/Layouts/FrontLayout'
import { Head } from '@inertiajs/react'

const ProductShow = ({ app, product }) => {
    return (
        <FrontLayout>
            <Head title="Product Show" />
            <div className=" p-4 m-auto md:px-40">
                <BreadCrumb category="Category Name" title="Product Detail" />
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='flex justify-center'>
                        <img src={app.storage_url + '/' + product.image} className="w-[400px] h-[400px]" />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h2 className="text-3xl font-medium uppercase mb-2">{product.name.toUpperCase()}</h2>
                        <div className="space-y-2">
                            <p className="text-orange-800 font-semibold space-x-2">
                                <span>Availability: </span>
                                <span className="text-green-600">"In Stock"</span>
                            </p>
                            <p className="space-x-2">
                                <span className="text-orange-800 font-semibold">Brand: </span>
                                <span className="text-gray-600">{product.brand.name}</span>
                            </p>
                            <p className="space-x-2">
                                <span className="text-orange-800 font-semibold">Category: </span>
                                <span className="text-gray-600">{product.category.name}</span>
                            </p>
                            <div className="flex items-baseline space-x-2 font-roboto">
                                <p className="text-xl text-primary font-semibold">Rs {product.price}</p>
                            </div>

                            <div className='flex gap-2 items-center'>
                                <h3 className="text-sm text-orange-800 uppercase mb-1">Quantity</h3>
                                <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                    <div className="h-8 w-8  text-base flex items-center justify-center">1</div>
                                    <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button
                                className="bg-orange-500 text-white border border-primary  px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-green-600">
                                Add to cart
                            </button>

                        </div>
                    </div>
                </div>

                <div className="container mt-6 border-b border-gray-200">
                    <h3 className="border-b border-gray-200 font-roboto text-orange-800 pt-3 pb-3 font-medium">Product Description</h3>
                    <div className="md:w-3/5 pt-4 pb-4">
                        <p>{product.description}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Review />
                </div>
            </div>
        </FrontLayout>
    )
}

export default ProductShow