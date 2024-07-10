import React from 'react'
import RatingBar from './RatingBar'
import { FaStar } from 'react-icons/fa'
import { Button, Rate } from 'antd'

const Review = () => {
    return (
        <div>
            <div className="mt-4 text-orange-800 text-med md:text-lg font-semibold">
                Customer Ratings
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex gap-2 md:gap-0 md:flex-col pb-2 items-center md:justify-center md:pb-0">
                    <div className="text-lg md:text-4xl font-semibold md:pt-1.5">
                        5
                    </div>
                    <div className="flex flex-wrap items-center gap-1 md:pt-1.5">
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                    </div>
                    <div className="text-base md:text-lg text-gray-600 md:pt-1.5">
                        12 Ratings
                    </div>
                </div>
                <div className='w-full'>
                    <RatingBar width={100} star={5} />
                    <RatingBar width={80} star={4} />
                    <RatingBar width={50} star={3} />
                    <RatingBar width={30} star={2} />
                    <RatingBar width={10} star={1} />
                </div>
            </div>

            <div className='mb-4'>
                <div className='flex gap-2'>
                    <div className="mr-2 font-semibold text-orange-500">
                        User Name
                    </div>
                    <div className="flex flex-wrap items-center gap-1 md:pt-1.5">
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                        <FaStar className="w-3 sm:w-3.5" />
                    </div>
                </div>
                <div className="ml-auto text-sm text-gray-700 dark:text-gray-400">
                    2015-4-25
                </div>
                <div className="no-tailwindcss-base">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Doloremque, doloribus. Atque, quia.
                    </p>
                </div>
            </div>

            <form className='grid cols-1 md:grid-cols-1'>
                <div className="mb-2">
                    <Rate onChange={value => console.log(value)} />
                </div>
                <textarea
                    className="textarea textarea-primary mb-2"
                    placeholder="write your review"
                ></textarea>

                <Button className='bg-blue-500 mt-1 text-white'>Submit</Button>
            </form>
        </div>
    )
}

export default Review