import React from "react";

const ProductPage = (): React.ReactElement => {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 m-8">
        Our Products
      </h1>
      <p className="text-center text-gray-600 mb-16">
        Browse our selection of world-class, our products that will
        change your life!
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({
  title,
  description,
  price,
  image,
}: {
  title: string;
  description: string;
  price: string;
  image: string;
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <p className="text-lg font-bold text-gray-800 mt-4">{price}</p>
    <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
      Buy Now
    </button>
  </div>
);

const products = [
  {
    id: 1,
    title: "Quantum Coffee Maker",
    description:
      "Brew coffee faster than light with our revolutionary technology.",
    price: "$999.99",
    image: "https://via.placeholder.com/300x200?text=Quantum+Coffee+Maker",
  },
  {
    id: 2,
    title: "AI-Powered Pencil Sharpener",
    description: "Sharpens pencils with precision using machine learning.",
    price: "$199.99",
    image: "https://via.placeholder.com/300x200?text=AI+Pencil+Sharpener",
  },
  {
    id: 3,
    title: "Invisible Headphones",
    description: "Experience sound without the hassle of visible headphones.",
    price: "$299.99",
    image: "https://via.placeholder.com/300x200?text=Invisible+Headphones",
  },
  {
    id: 4,
    title: "Self-Flying Drone",
    description: "A drone that flies itself and brings you snacks.",
    price: "$499.99",
    image: "https://via.placeholder.com/300x200?text=Self-Flying+Drone",
  },
  {
    id: 5,
    title: "Anti-Gravity Shoes",
    description: "Walk on air with our zero-gravity footwear.",
    price: "$699.99",
    image: "https://via.placeholder.com/300x200?text=Anti-Gravity+Shoes",
  },
  {
    id: 6,
    title: "Telepathic Keyboard",
    description: "Type with your mind, no hands required!",
    price: "$899.99",
    image: "https://via.placeholder.com/300x200?text=Telepathic+Keyboard",
  },
];

export default ProductPage;
