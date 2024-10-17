import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

export default function ForgetPassword2() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent:', email);
  };

  return (
    <div className="relative w-full max-w-md px-8 py-6 bg-white shadow-lg rounded-lg">
      {/* Background Accent Circles */}
      <div className="absolute top-0 left-0 bg-indigo-300 w-32 h-32 rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 bg-blue-300 w-24 h-24 rounded-full -z-10"></div>

      <div className="text-center">
        <Icon
          icon="fluent:key-reset-24-regular"
          className="text-indigo-500 text-6xl mb-4 animate-bounce"
        />
        <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
        <p className="text-sm text-gray-500">We’ll send a reset link to your email</p>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          <Icon icon="mdi:email-send" className="inline-block mr-2" />
          Send Link
        </button>
      </form>

      <div className="text-center mt-4">
        <a href="/login" className="text-indigo-500 hover:underline">
          Go Back to Login
        </a>
      </div>
    </div>
  );
}
