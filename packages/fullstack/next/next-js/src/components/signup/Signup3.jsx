import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Signup3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log("Sign up attempt", {
      name,
      email,
      password,
      passwordConfirmation,
    });
  };

  return (
    <div className="max-w-md w-full space-y-8 relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 -rotate-6 rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 rotate-6 rounded-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg transform skew-y-0 rotate-3 rounded-3xl opacity-50"></div>

      {/* Form container */}
      <div className="relative bg-gray-800 shadow-xl rounded-3xl p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Join Our Community
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
              sign in to your account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="password-confirm" className="sr-only">
                Confirm Password
              </label>
              <input
                id="password-confirm"
                name="password-confirm"
                type="password"
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm bg-gray-700"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded bg-gray-700"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                I agree to the{" "}
                <a
                  href="#"
                  className="font-medium text-purple-400 hover:text-purple-300"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Icon
                  icon="mdi:rocket-launch"
                  className="h-5 w-5 text-purple-500 group-hover:text-purple-400"
                />
              </span>
              Create Account
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
              >
                <Icon icon="mdi:google" className="h-5 w-5" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
              >
                <Icon icon="mdi:facebook" className="h-5 w-5" />
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-gray-400 hover:bg-gray-600"
              >
                <Icon icon="mdi:twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
