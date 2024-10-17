import Link from 'next/link';

const Footer2 = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold">Connect With Us</h3>
            <p className="text-gray-400 mt-2">
              Join our community for exclusive updates.
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 rounded-l-lg border border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800"
              />
              <button className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:w-1/3 mb-6 md:mb-0 text-center">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-400">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-blue-400">About</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-blue-400">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-blue-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:w-1/3 text-center">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
