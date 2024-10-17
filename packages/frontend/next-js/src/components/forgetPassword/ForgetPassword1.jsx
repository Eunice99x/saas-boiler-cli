import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ForgetPassword1() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset link sent to:', email);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Forgot Password</h2>
        <p className="text-sm text-gray-600 mt-2">
          Enter your email to reset your password
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-indigo-200"
            placeholder="you@example.com"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
        >
          <span className="inline-flex items-center">
            <Icon icon="mdi:send" className="mr-2" />
            Send Reset Link
          </span>
        </button>
      </form>
      <div className="text-center mt-4">
        <Link href="/login">
          <a className="text-sm text-indigo-500 hover:underline">
            Back to Login
          </a>
        </Link>
      </div>
    </div>
  );
}
