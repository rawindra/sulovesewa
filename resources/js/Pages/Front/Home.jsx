import CategoryNavWithSlider from "@/Components/ui/CategoryNav";
import ProductCard from "@/Components/ui/ProductCard";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head, Link } from "@inertiajs/react";

const Home = ({ app, categories, products, cartItems, sliders }) => {
  return (
    <FrontLayout cartItems={cartItems}>
      <Head title="Home" />
      <CategoryNavWithSlider categories={categories} sliders={sliders} />
      <div className="text-2xl mt-8 text-orange-500 font-bold h-10 p-1 text-center">
        <h3>OUR PRODUCTS</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3 p-6">
        {products.data.map((product) => (

          <ProductCard
            src={app.storage_url + "/" + product.image}
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </FrontLayout>
  );
};

export default Home;
