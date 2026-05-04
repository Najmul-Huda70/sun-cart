"use client";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const listItem = (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/products"}>Products</Link>
    </li>
    <li>
      <Link href={"/profile"}>My Profile</Link>
    </li>
  </>
);

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;
  const HandleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };
  console.log("session in navbar is:", session);
  return (
    <div className="navbar bg-[#1a1c22] text-white px-4 md:px-8 shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#1a1c22] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {listItem}
          </ul>
        </div>
        <Link
          href={"/"}
          className="btn btn-ghost text-2xl font-black tracking-tighter"
        >
          <span className="text-orange-500">SUN</span>CART
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          {listItem}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-orange-500"></span>
        ) : user ? (
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm opacity-70">
              Welcome, {user.name}
            </span>
            <button
              className="btn btn-sm btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:border-orange-500"
              onClick={HandleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn btn-sm btn-ghost" href={"/auth/signin"}>
              Login
            </Link>
            <Link
              className="btn btn-sm bg-orange-500 border-none text-white hover:bg-orange-600"
              href={"/auth/signup"}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
