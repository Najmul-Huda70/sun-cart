import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <>
      <div
        key={product.id}
        className="group bg-[#1a1c22] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/5"
      >
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-white/5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Optional Category Tag */}
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            {product.category}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-1 group-hover:text-orange-400 transition-colors">
            {product.name}
          </h3>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-1.5">
              <span className="text-orange-400 text-sm">★</span>
              <span className="text-gray-400 text-sm font-medium">
                {product.rating}
              </span>
            </div>
            <div className="text-2xl font-black text-blue-400">
              ${product.price}
            </div>
          </div>

          {/* Action Button */}
          <Link
            href={`/products/${product.id}`}
            className="btn btn-block bg-orange-500 hover:bg-orange-600 border-none text-white font-bold rounded-xl transition-all active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
