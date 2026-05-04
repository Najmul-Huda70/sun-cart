import React from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Footer() {
  return (
    // Main Wrapper
    <footer className="bg-[#1a1c22] text-gray-300">
      <div className="footer p-10 max-w-7xl mx-auto flex flex-col  items-center md:flex-row md:justify-between">
        <aside>
          <div className="flex items-center gap-1 font-black text-2xl mb-4">
            <span className="text-orange-500">SUN</span>
            <span className="text-white">CART</span>
          </div>
          <p className="max-w-xs opacity-60">
            Providing the best summer essentials since 2026. Your one-stop shop
            for heat-wave survival.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title text-orange-500 opacity-100">
            Contact Info{" "}
          </h6>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>123 Sun Street, Dhaka, Bangladesh</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+880 1234-567890</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>support@suncart.com</span>
            </div>
          </div>
        </nav>

        <nav>
          <h6 className="footer-title text-orange-500 opacity-100">Social</h6>
          <div className="grid grid-flow-col gap-4 mb-5">
            <Link href="#" className="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
          </div>
          <Link href={"#"} className="hover:underline">
            Privacy policy
          </Link>
        </nav>
      </div>

      <div className="footer footer-center p-6 bg-black/30 text-xs border-t border-white/5">
        <p>Copyright © 2026 - All rights reserved by SunCart Ltd</p>
      </div>
    </footer>
  );
}
//  <footer className="bg-base-200 text-base-content rounded">
//       {/* 1. Main Content Grid */}

//       <div className="footer p-10 w-full mx-auto flex flex-col md:flex-row justify-around items-start">
//         {/* Contact Info */}
//         <nav>
//           <h6 className="footer-title text-orange-500 opacity-100">
//             Contact Info
//           </h6>
//           <div className="flex flex-col gap-3">
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-blue-500"
//               >
//                 <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//                 <circle cx="12" cy="10" r="3" />
//               </svg>
//               <span>123 Sun Street, Dhaka, Bangladesh</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-blue-500"
//               >
//                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//               </svg>
//               <span>+880 1234-567890</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-blue-500"
//               >
//                 <rect width="20" height="16" x="2" y="4" rx="2" />
//                 <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//               </svg>
//               <span>support@suncart.com</span>
//             </div>
//           </div>
//         </nav>
//         {/* Social */}
//         <nav>
//           <h6 className="footer-title text-orange-500 opacity-100">
//             Social Links
//           </h6>
//           <div className="flex gap-4">
//             <Link href="#" className="hover:text-blue-600">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//               </svg>
//             </Link>
//             <Link href="#" className="hover:text-pink-500">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                 <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
//               </svg>
//             </Link>
//           </div>
//         </nav>
//       </div>

//       {/* 2. Bottom Copyright Bar (Moved Outside the grid) */}
//       <aside className="footer footer-center p-6 bg-base-300 text-base-content border-t border-base-100">
//         <div className="flex flex-col items-center gap-2">
//           <div className="flex items-center gap-1 font-bold text-lg">
//             <Image src="/logo.png" alt="SunCart" width={24} height={24} />
//             <span className="text-orange-500 ml-1">Sun</span>
//             <span className="text-blue-500">Cart</span>
//           </div>
//           <p className="text-sm opacity-70 font-medium">
//             Copyright © 2026 - All rights reserved by SunCart Ltd
//           </p>
//         </div>
//       </aside>
//     </footer>
