import Link from 'next/link';

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Stay Connected</h3>
          <p className="text-gray-400 mt-2">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-500">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-blue-500">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-blue-500">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-blue-500">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-500">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-500">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-500">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
