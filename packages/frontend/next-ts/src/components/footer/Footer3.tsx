import Link from 'next/link';

const Footer3 = () => {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p className="mt-2">
              We are dedicated to providing the best services for our clients.
            </p>
            <div className="mt-4">
              <Link href="/about">
                <a className="text-blue-500 hover:underline">Learn More</a>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Useful Links</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/">
                  <a className="hover:text-blue-500">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-blue-500">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="hover:text-blue-500">FAQ</a>
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
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">Instagram</a>
              <a href="#" className="hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer3;
