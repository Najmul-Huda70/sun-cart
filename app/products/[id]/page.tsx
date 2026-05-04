import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import productsData from "@/app/lib/products.json";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { id } = await params;
  if (!session) {
    redirect(`/auth/signin?callbackUrl=/products/${id}`);
  }

  console.log("params id:", id);

  const product = productsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }
  console.log("id: ", product);
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="text-sm breadcrumbs mb-8 text-gray-500">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Products</li>
            <li className="text-orange-500 font-bold">{product.name}</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-xl">
          {/* Left: Image Gallery */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col justify-center">
            <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2">
              {product.brand}
            </span>
            <h1 className="text-4xl font-black text-[#1a1c22] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
                <span className="text-orange-600 font-bold">
                  ★ {product.rating}
                </span>
              </div>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-green-600 font-medium">
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </div>

            <div className="text-4xl font-black text-blue-600 mb-6">
              ${product.price}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="space-y-4">
              <button className="btn btn-lg bg-orange-500 hover:bg-orange-600 border-none text-white w-full rounded-xl shadow-lg shadow-orange-200">
                Add to Cart — ${product.price}
              </button>
              <button className="btn btn-lg btn-outline border-gray-300 w-full rounded-xl">
                Add to Wishlist
              </button>
            </div>

            {/* Extra Details */}
            <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-gray-400 uppercase text-xs">
                  Category
                </h4>
                <p className="text-[#1a1c22] font-medium">{product.category}</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-400 uppercase text-xs">
                  Shipping
                </h4>
                <p className="text-[#1a1c22] font-medium">
                  Free Summer Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
