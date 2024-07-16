import { Button, Card } from "antd";
import React from "react";

const ProductCard = ({ src, name, price }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={src} className="h-[250px]" />}
    >
      <div className="flex flex-col gap-2 h-[80px] text-center">
        <p className="font-semibold text-xs">{name}</p>
        <p className="text-orange-500 font-bold">{price}</p>
      </div>
      <Button className="w-full bg-orange-500 mt-1 text-white">
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
