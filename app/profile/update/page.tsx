"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";
import { InputGroup, Label, TextField } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      alert(error.message);
    } else {
      setShowSuccess(true);
      setTimeout(() => {
        router.push("/profile");
        router.refresh();
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen  bg-white flex flex-col items-center justify-center p-4">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
          <div className="w-72 h-72">
            <DotLottieReact
              src="https://lottie.host/03e855a7-00f3-44a5-bc1c-1a2e302373c2/qT9GaMwnNS.lottie"
              loop={false}
              autoplay
            />
          </div>
          <h2 className="text-2xl font-black text-green-600 mt-4 animate-bounce">
            Profile Updated Successfully!
          </h2>
        </div>
      )}
      <div className="card w-full max-w-md bg-gray-50 shadow-2xl">
        <div className="card-body">
          <h2 className="card-title text-center block text-2xl font-black mb-4">
            Edit Profile
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <TextField className="w-full" name="name">
              <Label>Name</Label>
              <InputGroup>
                <InputGroup.Input
                  placeholder="Enter your name"
                  className="w-full"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputGroup>
            </TextField>
            <TextField className="w-full" name="name">
              <Label>Profile Image URL</Label>
              <InputGroup>
                <InputGroup.Input
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </InputGroup>
            </TextField>

            <div className="card-actions flex-col gap-2 mt-6">
              <button
                type="submit"
                className={`btn btn-primary w-full text-white font-bold ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Information"}
              </button>
              <button
                type="button"
                className="btn btn-ghost w-full"
                onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </form>
          <div className="bg-gray-200 text-center rounded-lg p-2">
            <h3 className="font-bold">Demo Image URL</h3>
            <p>
              https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
