import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ForgetPassword3() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
      <div className="text-center mb-8">
        <Icon
          icon="heroicons-outline:lock-closed"
          className="text-purple-500 text-5xl"
        />
        <h2 className="text-3xl text-white font-semibold mt-4">
          Forgot Password?
        </h2>
        <p className="text-gray-400 mt-2">
          Enter your email to reset your password
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring focus:ring-purple-300"
            placeholder="Your email"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          <Icon icon="mdi:arrow-right-circle-outline" className="mr-2" />
          Reset Password
        </button>
      </form>
      <div className="text-center mt-6">
        <Link href="/login">
          <a className="text-purple-400 hover:underline">Back to Login</a>
        </Link>
      </div>
    </div>
  );
}
