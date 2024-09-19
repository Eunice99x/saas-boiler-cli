import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export const Footer2 = () => {
  const data = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4">
        <ul className="flex flex-wrap justify-between py-8">
          <li className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg uppercase mb-4">About Rapidstack</h4>
            <p className="leading-relaxed mb-4 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vero
              iure optio eaque deleniti magni!
            </p>
            <div className="flex items-center mt-4">
              <p>(x) xxx-xxxx</p>
              <span className="mx-4">or</span>
              <p>email@contact.io</p>
            </div>
          </li>
          <li className="w-full md:w-1/6 mb-8 md:mb-0">
            <h4 className="text-lg uppercase mb-4">Company</h4>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              About
            </p>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              Features
            </p>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              Contact
            </p>
          </li>
          <li className="w-full md:w-1/6 mb-8 md:mb-0">
            <h4 className="text-lg uppercase mb-4">Help</h4>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              Customer Support
            </p>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              Terms & Conditions
            </p>
            <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
              Privacy Policy
            </p>
          </li>
          <li className="w-full md:w-1/6 mb-8 md:mb-0">
            <h4 className="text-lg uppercase mb-4">My Account</h4>
            <Link href="/someroute">
              <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
                Link1
              </p>
            </Link>
            <Link href="/someroute">
              <p className="text-gray-400 cursor-pointer hover:text-gray-300 transition">
                Link2
              </p>
            </Link>
          </li>
          <li className="w-full mt-2">
            <h4 className="text-lg uppercase mb-4 font-bold">
              Download Our Mobile App
            </h4>
            <div className="flex space-x-2">
              <div className="bg-gray-800 p-4 rounded-lg flex items-center cursor-pointer">
                <Image
                  src={"https://cdn-icons-png.flaticon.com/512/299/299406.png"}
                  alt="playstore"
                  width={25}
                  height={25}
                />
                <div className="ml-1 text-sm">
                  <span>Download on the</span>
                  <h5 className="font-normal">Google Play</h5>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center cursor-pointer">
                <Image
                  src={"https://cdn-icons-png.flaticon.com/512/0/747.png"}
                  alt="appstore"
                  width={25}
                  height={25}
                />
                <div className="ml-1 text-sm">
                  <span>Download on the</span>
                  <h5 className="font-normal">App Store</h5>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <hr className="border-gray-700" />
        <div className="flex flex-wrap justify-between items-center py-4">
          <ul className="flex space-x-4">
            <li className="text-2xl text-gray-400 cursor-pointer hover:text-gray-300 transition">
              <BsFacebook />
            </li>
            <li className="text-2xl text-gray-400 cursor-pointer hover:text-gray-300 transition">
              <BsInstagram />
            </li>
            <li className="text-2xl text-gray-400 cursor-pointer hover:text-gray-300 transition">
              <BsTwitter />
            </li>
            <li className="text-2xl text-gray-400 cursor-pointer hover:text-gray-300 transition">
              <BsPinterest />
            </li>
          </ul>
          <div className="text-gray-400">
            <p>RapidStack &copy; {data}. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
