import Image from 'next/image';
import { Icon } from "@iconify/react";

const Footer5 = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              {/* include your logo in src */}
              <Image
                src="https://your-logo-url.com/logo.svg"
                className="h-8 me-3"
                alt="Logo"
                width={32}
                height={32}
              />
              <span
                className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >
                Your Company
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Community Forum
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="#" className="hover:underline">
              Your Company™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="mdi:twitter" className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="mdi:github" className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="mdi:facebook" className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="mdi:linkedin" className="w-4 h-4" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icon icon="mdi:instagram" className="w-4 h-4" />
              <span className="sr-only">Instagram profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer5;
