import SignInPage from "@/Component/SignInPage";
import { Suspense } from "react";
export default function SignIn() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
          <p className="font-bold text-gray-400">Loading SunCart Auth...</p>
        </div>
      }
    >
      <SignInPage />
    </Suspense>
  );
}
