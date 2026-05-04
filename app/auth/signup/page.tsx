"use client";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import {
  Button,
  Form,
  Input,
  FieldError,
  Description,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import { useState } from "react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="20px"
    height="20px"
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);
export default function SignUpPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    const { name, email, password } = Object.fromEntries(formData.entries());
    const { error } = await authClient.signUp.email({
      name: name as string,
      email: email as string,
      password: password as string,
    });

    if (error) {
      setErrorMsg(error.message || "Registration failed");
      return;
    }
    router.push("/auth/signin");
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-100 border border-gray-100">
        <h1 className="text-2xl font-black text-[#1a1c22] mb-6 text-center">
          Create Account
        </h1>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {errorMsg && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100">
              {errorMsg}
            </div>
          )}

          <TextField isRequired className="w-full" name="name">
            <Label>Name</Label>
            <InputGroup>
              <InputGroup.Input
                placeholder="Enter your name"
                className="w-full"
                type="text"
              />
            </InputGroup>
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value: string) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>
            <InputGroup>
              <InputGroup.Input
                placeholder="Enter your email"
                className="w-full"
                type="text"
              />
            </InputGroup>
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value: string) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                placeholder="Enter your password"
                className="w-full max-w-full"
                type={isVisible ? "text" : "password"}
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="bg-orange-500 text-white w-full text-xl font-bold h-10 rounded-xl mt-2"
          >
            Register
          </Button>
        </Form>

        <div className="my-6 w-full flex justify-center items-center gap-4">
          <span className="text-gray-400 text-xs font-bold uppercase">OR</span>
        </div>

        <Button
          onPress={() =>
            authClient.signIn.social({ provider: "google", callbackURL: "/" })
          }
          className="w-full h-10 text-gray-800 rounded-xl font-bold bg-white border-2 border-gray-100 hover:bg-gray-50"
        >
          <GoogleIcon /> Register with Google
        </Button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-orange-500 font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
