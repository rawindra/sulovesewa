import React from 'react'
import RatingBar from './RatingBar'
import { FaStar } from 'react-icons/fa'
import { Button, Rate } from 'antd'
import { useForm, usePage } from '@inertiajs/react'

const Review = ({ product, avgRating, reviews, totalRating }) => {

    const user = usePage().props.auth.user

    const { data, setData, post, processing, reset } = useForm({
        rating: 0,
        review: '',
        product: product.id,
    })

    const calculatePercentageOfRating = (rating) => {
        let numbersOfRating = reviews.filter(review => review.rating === rating).length
        return (numbersOfRating / reviews.length) * 100
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/submit-review', {
            data,
            onSuccess: () => {
                data.review = ''
            },
        })
    }

    return (
        <div>
            <div className="mt-4 text-orange-800 text-med md:text-lg font-semibold">
                Customer Ratings
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex gap-2 md:gap-0 md:flex-col pb-2 items-center md:justify-center md:pb-0">
                    <div className="text-lg md:text-4xl font-semibold md:pt-1.5">
                        {avgRating}
                    </div>
                    <div className="flex flex-wrap items-center gap-1 md:pt-1.5">
                        {[...Array(avgRating)].map((_, index) => (
                            <FaStar className="w-3 sm:w-3.5" key={index} />
                        ))}
                    </div>
                    <div className="text-base md:text-lg text-gray-600 md:pt-1.5">
                        {totalRating} Ratings
                    </div>
                </div>
                <div className='w-full'>
                    <RatingBar width={calculatePercentageOfRating(5)} star={5} />
                    <RatingBar width={calculatePercentageOfRating(4)} star={4} />
                    <RatingBar width={calculatePercentageOfRating(3)} star={3} />
                    <RatingBar width={calculatePercentageOfRating(2)} star={2} />
                    <RatingBar width={calculatePercentageOfRating(1)} star={1} />
                </div>
            </div>

            {
                reviews.map((review, index) => {
                    return (
                        <div className='mb-4' key={index}>
                            <div className='flex gap-2'>
                                <div className="mr-2 font-semibold text-orange-500">
                                    {review.user.name}
                                </div>
                                <div className="flex flex-wrap items-center gap-1 md:pt-1.5">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <FaStar className="w-3 sm:w-3.5" key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="ml-auto text-sm text-gray-700 dark:text-gray-400">
                                {new Date(review.created_at).toDateString()}
                            </div>
                            <div className="no-tailwindcss-base" dangerouslySetInnerHTML={{ __html: review.review }}>
                            </div>
                        </div>
                    )
                })
            }
            {user &&
                <form className='grid cols-1 md:grid-cols-1' onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <Rate onChange={value => setData('rating', value)} />
                    </div>
                    <textarea
                        className="textarea textarea-primary mb-2"
                        placeholder="write your review"
                        value={data.review}
                        onChange={(e) => setData('review', e.target.value)}
                    ></textarea>

                    <button type='submit' className='bg-blue-500 p-2 mt-1 text-white' disabled={processing} >Submit</button>
                </form>
            }
        </div>
    )
}

export default Review