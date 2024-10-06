import Link from 'next/link';

const Footer4 = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col items-start">
          <h3 className="text-3xl font-bold">Join Our Community</h3>
          <p className="mt-2">
            Get the latest updates and news directly to your inbox.
          </p>
          <div className="flex mt-4 w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-around">
          <div className="flex flex-col">
            <h4 className="font-semibold text-lg">Resources</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/blog">
                  <a className="hover:text-blue-400">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:text-blue-400">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a className="hover:text-blue-400">Support</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/about">
                  <a className="hover:text-blue-400">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="hover:text-blue-400">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-blue-400">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        <p className="text-xs mt-2">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer4;
