import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header3 = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" passHref>
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="https://www.fmt.se/wp-content/uploads/2023/02/logo-placeholder-image.png"
              width={150}
              height={50}
              alt="logo"
            />
            <span className="self-center text-2xl font-bold">BrandName</span>
          </a>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
          <Link href="/" passHref>
            <a className="hover:text-blue-400 transition duration-300">Home</a>
          </Link>
          <Link href="/services" passHref>
            <a className="hover:text-blue-400 transition duration-300">
              Services
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className="hover:text-blue-400 transition duration-300">About</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden md:inline-block text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition duration-300"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="inline-flex md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-gray-800 p-4">
          <ul className="space-y-4">
            <li>
              <Link href="/" passHref>
                <a className="block py-2 text-white hover:text-blue-400">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services" passHref>
                <a className="block py-2 text-white hover:text-blue-400">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="block py-2 text-white hover:text-blue-400">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="block py-2 text-white hover:text-blue-400">
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="block w-full text-left py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header3;
