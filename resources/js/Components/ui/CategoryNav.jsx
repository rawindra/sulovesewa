import React from 'react';
import { Menu } from 'antd';
import AntCarousel from './AntCarousel';
const items = [
    {
        key: 'sub2',
        label: 'Category Two',
        children: [
            {
                key: '5',
                label: 'Option 5',
            },
            {
                key: '6',
                label: 'Option 6',
            },
            {
                key: 'sub3',
                label: 'Submenu',
                children: [
                    {
                        key: '7',
                        label: 'Option 7',
                    },
                    {
                        key: '8',
                        label: 'Option 8',
                    },
                ],
            },
        ],
    },
    {
        key: 'sub4',
        label: 'Category Three',
        children: [
            {
                key: '9',
                label: 'Option 9',
            },
            {
                key: '10',
                label: 'Option 10',
            },
            {
                key: '11',
                label: 'Option 11',
            },
            {
                key: '12',
                label: 'Option 12',
            },
        ],
    },
    {
        key: 'sub5',
        label: "Category Four",
    },
    {
        key: 'sub6',
        label: "Category Five",
    },
    {
        key: 'sub7',
        label: "Category Six",
    },
    {
        key: 'sub8',
        label: "Category Seven",
    },
];
const onClick = (e) => {
    console.log('click', e);
};
const CategoryNavWithSlider = () => (
    <div className='bg-orange-500'>
        <div className='p-2 bg-gray-200 '>
            <div className='mx-auto w-3/4 flex items-center justify-between'>
                <span>All Categories</span>
                <div className='flex gap-2'>
                    <span>Grocery</span>
                    <span>Food</span>
                    <span>Household</span>
                </div>
            </div>
        </div>
        <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-[20%_80%]'>
            <div className='mx-auto w-2/2'>
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
                <AntCarousel />
            </div>
        </div>
    </div>
);

export default CategoryNavWithSlider;