import Image from 'next/image';
import Link from 'next/link';

export default function Hero3() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://via.placeholder.com/1440x600"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
          layout="fill"
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center py-20 relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Workflow
        </h1>
        <p className="text-lg mb-6 max-w-lg">
          Our SaaS solution streamlines your processes, making your team more
          efficient and productive.
        </p>
        <div className="flex space-x-4">
          <Link href="/get-started">
            <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
              Get Started
            </a>
          </Link>
          <Link href="/demo">
            <a className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition duration-300">
              View Demo
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
