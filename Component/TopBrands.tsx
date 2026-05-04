export function TopBrands() {
  const brands = ["SunGlow", "AquaPure", "BeachBum", "RayBlock"];
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-6">Top Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand}
            className="bg-white border border-gray-100 p-6 rounded-2xl flex justify-center items-center font-bold text-gray-400 grayscale hover:grayscale-0 transition-all hover:border-orange-200 cursor-pointer shadow-sm"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
