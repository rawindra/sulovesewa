import React from 'react';
import { Carousel } from 'antd';
import { usePage } from '@inertiajs/react';
const contentStyle = {
    margin: 0,
    height: '400px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
};
const AntCarousel = ({ sliders }) => {
    const { app } = usePage().props

    return (
        <Carousel autoplay>
            {sliders.map((slider, index) => (
                <div key={index}>
                    <img src={app.storage_url + '/' + slider.image} style={contentStyle} />
                </div>
            ))}
        </Carousel>
    );
};
export default AntCarousel;