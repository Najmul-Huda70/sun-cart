import products from "@/app/lib/products.json";
import ProductCard from "@/Component/ProductCard";

const ProductsPage = () => {
  return (
    <main className="min-h-screen bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4">
            Summer Essentials
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get ready for the sun with our premium collection of summer gear.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
