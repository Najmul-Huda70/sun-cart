"use client";
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending)
    return (
      <div className="flex justify-center p-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (!session)
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="card w-full max-w-sm bg-gray-50 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <h2 className="card-title text-2xl font-black text-slate-800">
              Access Denied
            </h2>
            <p className="text-slate-500 mt-2">
              You need to be logged in to view your profile and manage your
              account settings.
            </p>

            <div className="card-actions w-full mt-6 flex flex-col gap-2">
              <Link
                href="/auth/signin"
                className="btn btn-primary w-full text-white font-bold"
              >
                Login Now
              </Link>
              <Link href="/auth/signup" className="btn btn-ghost w-full">
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

  const { user } = session;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-gray-50 shadow-xl">
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image
                width={1000}
                height={1000}
                className="rounded-full"
                src={
                  user.image ||
                  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop"
                }
                alt="Profile"
              />
            </div>
          </div>
          <h2 className="card-title text-2xl">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>

          <div className="card-actions w-full mt-6">
            <Link
              href="/profile/update"
              className="btn btn-primary w-full text-white font-bold"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
