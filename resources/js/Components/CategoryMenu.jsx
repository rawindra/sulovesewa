import React from 'react'
import AntCarousel from './ui/AntCarousel'
import { Menu } from 'antd';
import { usePage } from '@inertiajs/react';

const buildMenuItems = (categories) => {
    console.log("🚀 ~ buildMenuItems ~ categories:", categories)

    const categoryMap = {};

    // Create a map of category ID to category object
    categories.forEach(category => {
        categoryMap[category.id] = {
            key: category.id.toString(),
            label: category.name,
            children: [],
        };
    });

    // Build the tree structure
    categories.forEach(category => {
        if (category.parent_id) {
            categoryMap[category.parent_id].children.push(categoryMap[category.id]);
        }
    });

    // Filter out only the top-level categories
    return Object.values(categoryMap).filter(category => !categoryMap[category.key].parent_id);
};

const onClick = (e) => {
    console.log('click', e);
};


function CategoryMenu() {
    const { categories } = usePage().props;
    const menuItems = buildMenuItems(categories);
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
                        items={menuItems}
                    />
                </div>
                <div>
                    <AntCarousel />
                </div>
            </div>
        </div>
    )
}

export default CategoryMenu