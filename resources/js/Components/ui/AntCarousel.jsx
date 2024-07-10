import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '400px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
};
const AntCarousel = () => {

    return (
        <Carousel autoplay>
            <div>
                <img src='https://www.shutterstock.com/image-photo/online-grocery-shopping-home-delivery-260nw-2151476607.jpg' style={contentStyle} />
            </div>
            <div>
                <img src="https://www.shutterstock.com/image-photo/fresh-healthy-food-vegetables-grocery-260nw-1175684464.jpg" style={contentStyle} />
            </div>
        </Carousel>
    );
};
export default AntCarousel;