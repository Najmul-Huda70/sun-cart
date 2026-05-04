import ProductCard from "@/Component/ProductCard";
import products from "@/app/lib/products.json";
import { SummerCareTips } from "@/Component/SummerCard";
import { TopBrands } from "@/Component/TopBrands";
export default function Home() {
  return (
    <>
      <div className="hero min-h-[70vh] bg-linear-to-br from-orange-400 via-orange-500 to-yellow-300 mb-12">
        <div className="hero-content text-center">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl">
            <h1 className="text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Summer Sale
            </h1>
            <p className="text-white text-xl font-medium mb-8">
              UP TO{" "}
              <span className="bg-blue-600 px-3 py-1 rounded-lg text-4xl font-bold italic">
                50%
              </span>{" "}
              OFF
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-lg bg-[#1a1c22] hover:bg-black border-none text-white rounded-xl px-12 transition-all hover:scale-105">
                Shop Now
              </button>
              <button className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-orange-500 rounded-xl px-12">
                Hot Deals
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="my-16 mx-10 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <SummerCareTips />
        <TopBrands />
      </section>
    </>
  );
}
