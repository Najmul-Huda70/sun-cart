// export function TopBrands() {
//   const brands = ["SunGlow", "AquaPure", "BeachBum", "RayBlock"];
//   return (
//     <section className="my-16">
//       <h2 className="text-2xl font-bold mb-6">Top Brands</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {brands.map((brand) => (
//           <div
//             key={brand}
//             className="bg-white border border-gray-100 p-6 rounded-2xl flex justify-center items-center font-bold text-gray-400 grayscale hover:grayscale-0 transition-all hover:border-orange-200 cursor-pointer shadow-sm"
//           >
//             {brand}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";

const brands = [
  "SunGlow",
  "AquaPure",
  "BeachBum",
  "RayBlock",
  "SkinCare+",
  "Oasis",
  "SummerVibe",
  "GlowUp",
];

export default function TopBrands() {
  return (
    <div className="w-full overflow-hidden bg-slate-50 py-4 border-y border-slate-200">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-10 text-slate-700 font-medium text-lg uppercase tracking-wider"
          >
            {brand}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
