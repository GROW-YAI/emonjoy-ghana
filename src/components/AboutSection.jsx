import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, Leaf, ShieldCheck, Users } from "lucide-react";
import productImage1 from "../assets/images/new product.jpg";
import productImage2 from "../assets/images/np2.jpg";

const products = [
  {
    id: 1,
    image: productImage1,
    name: "500ml",
    price: "189ghc",
    link: "https://paystack.com/buy/organic-pesticide-mjgjmp",
  },
  {
    id: 2,
    image: productImage2,
    name: "1ltr",
    price: "375ghc",
    link: "https://paystack.com/buy/eco-friendly-pest-repellent-fzrdxc",
  },
  
];

export default function ProductSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          🌿 Our Premium Organic Products
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
        We create 100% organic/natural solutions that are practically non-toxic, eco-friendly, safe for your health, plants and environment, yet highly effective. From protecting your crops against pests and diseases to keeping your home free from all crawling and flying insects, our natural pesticides, fungicides, and household insecticides give you a chemical-free way to protect what matters most; your health, your harvest, and your environment.
        </p>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
  {products.map((product, index) => (
    <motion.div
      key={product.id}
      className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all w-full sm:w-80"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="w-full aspect-square mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {product.name}
      </h3>
      
      <p className="text-green-600 font-bold text-2xl mb-6">
        {product.price}
      </p>
      
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-auto inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Buy Now
      </a>
    </motion.div>
  ))}
</div>



        {/* Product Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[ 
            { icon: <CheckCircle className="text-green-600 w-8 h-8" />, title: "Effective & Reliable", text: "Proven to control pests and ensure healthier crops." },
            { icon: <ShieldCheck className="text-green-600 w-8 h-8" />, title: "Safe & Non-Toxic", text: "Formulated with natural ingredients, safe for farmers and consumers." },
            { icon: <Users className="text-green-600 w-8 h-8" />, title: "Empowering Farmers", text: "Affordable pricing to help farmers boost productivity sustainably." },
            { icon: <Leaf className="text-green-600 w-8 h-8" />, title: "Eco-Friendly", text: "Biodegradable and free from harsh chemicals, preserving the environment." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
