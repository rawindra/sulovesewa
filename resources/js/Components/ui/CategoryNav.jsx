import React from 'react';
import { Menu } from 'antd';
import AntCarousel from './AntCarousel';

const CategoryNavWithSlider = ({ categories, sliders }) => {
    function transformCategories(categories) {
        return categories.map(category => {
            const transformed = {
                key: category.id.toString(),
                label: category.name,
            };

            if (category.children && category.children.length > 0) {
                transformed.children = transformCategories(category.children);
            }

            return transformed;
        });
    }

    const items = transformCategories(categories);

    const onClick = (e) => {
        console.log('click', e);
    };

    return (
        <div className='bg-orange-500'>
            <div className='hidden md:block p-2 bg-gray-200 '>
                <div className='mx-auto w-3/4 flex items-center justify-between'>
                    <span>All Categories</span>
                    <div className='flex gap-2'>
                        <span>Grocery</span>
                        <span>Food</span>
                        <span>Household</span>
                    </div>
                </div>
            </div>
            <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-[20%_80%]'>
                <div className='hidden md:block mx-auto w-2/2'>
                    <Menu
                        onClick={onClick}
                        style={{
                            width: 256,
                        }}
                        mode="vertical"
                        items={items}
                    />
                </div>
                <div>
                    <AntCarousel sliders={sliders} />
                </div>
            </div>
        </div>
    )
};

export default CategoryNavWithSlider;