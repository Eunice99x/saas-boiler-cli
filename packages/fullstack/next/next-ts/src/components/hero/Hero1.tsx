import Image from "next/image";
import Link from "next/link";

const Hero1 = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center px-4">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your SaaS Solution Starts Here
          </h1>
          <p className="text-lg mb-6">
            Transform your business with our powerful, flexible, and easy-to-use
            platform tailored for modern developers.
          </p>
          <div className="flex space-x-4">
            <Link href="/get-started">
              <a className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                Get Started
              </a>
            </Link>
            <Link href="/features">
              <a className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white font-medium px-6 py-3 rounded-lg transition duration-300">
                Learn More
              </a>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="https://via.placeholder.com/400"
            alt="logo"
            width={150}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero1;
