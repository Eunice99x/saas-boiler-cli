import Link from 'next/link';

export default function Hero2() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255, 255, 255, 0.1)"
            d="M0,192L30,181.3C60,171,120,149,180,128C240,107,300,85,360,64C420,43,480,21,540,21C600,21,660,43,720,53.3C780,64,840,64,900,74.7C960,85,1020,107,1080,128C1140,149,1200,171,1260,181.3L1320,192L1380,192L1440,192L1440,320L1380,320C1320,320,1260,320,1200,320C1140,320,1080,320,1020,320C960,320,900,320,840,320C780,320,720,320,660,320C600,320,540,320,480,320C420,320,360,320,300,320C240,320,180,320,120,320C60,320,30,320,0,320Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4 relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate Your Business
          </h1>
          <p className="text-lg mb-6">
            Join thousands of developers and businesses using our powerful
            platform to streamline their operations.
          </p>
          <div className="flex space-x-4">
            <Link href="/get-started">
              <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-300">
                Get Started
              </a>
            </Link>
            <Link href="/features">
              <a className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                Discover Features
              </a>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Hero Image"
            className="rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
