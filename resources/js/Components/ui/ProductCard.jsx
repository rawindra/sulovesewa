import { Link, router } from "@inertiajs/react";
import { Button, Card } from "antd";
import React from "react";

const ProductCard = ({ src, product }) => {
  const submit = (e) => {
    e.preventDefault();
    router.post(route('cart.store'), {
      product_id: product.id,
      quantity: 1,
    });
  }

  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={src} className="h-[250px]" />}
    >
      <div className="flex flex-col gap-2 h-[80px] text-center">
        <Link
          href={route("view.product", product)}
          className="m-auto"
          key={product.id}
        >
          <p className="font-semibold text-xs">{product.name}</p>
        </Link>
        <p className="text-orange-500 font-bold">{product.price}</p>
      </div>
      <Button className="w-full bg-orange-500 mt-1 text-white" onClick={submit}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
