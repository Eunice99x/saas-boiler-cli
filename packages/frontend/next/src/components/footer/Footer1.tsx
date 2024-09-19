import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
    const info = [
        "Address: 123 xxx-xxxx",
        "Call Us: (x) xxx-xxxx",
        "Email: email@contact.com",
      ];
    
      const accountLinks = ["Link1", "Link2", "Link3"];
    
      const usefulLinks = [<Link href="about">About Us</Link>, <Link href="contact">Contact</Link>];
    
      const helpCenterLinks = [
        <Link href="/policy">Privacy Policy</Link>,
        <Link href="/terms">Terms of Use</Link>,
      ];
      const social = [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />, <FaXTwitter />];
      const date = new Date().getFullYear();
  return (
    <div className="container">
    <ul className="flex pt-12 flex-wrap flex-col lg:flex-row items-center justify-between border-b pb-6">
    <li className="self-start">
      <div className="flex self-start items-center mb-4 w-fit cursor-pointer">
        {/* <Image src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} width={100} height={100} alt="icon"/> */}
        <div className="ml-1">
          <div className="text-xl font-bold ">RapidStack</div>
        </div>
      </div>
      {info.map((x, id) => (
        <p
          key={id}
          className="my-2  duration-300  cursor-pointer"
        >
          {x}
        </p>
      ))}
      <div className="w-full">
        <input
          type="email"
          className="border p-2 w-full outline-none bg-white"
          
          placeholder="Enter your email address"
        />
        <button  className="bg-white text-black py-2 px-4 mt-1">
          Subscribe
        </button>
      </div>
    </li>
    <li className="self-start">
      <h1 className="font-bold text-xl  mb-2 lg:mb-4">Account</h1>
      {accountLinks.map((x, id) => (
        <p
          key={id}
          className=" duration-300  cursor-pointer my-2"
        >
          {x}
        </p>
      ))}
    </li>
    <li className="self-start">
      <h1 className="font-bold text-xl  mb-2 lg:mb-4">Useful links</h1>
      {usefulLinks.map((x, id) => (
        <p
          key={id}
          className=" duration-300  cursor-pointer my-2"
        >
          {x}
        </p>
      ))}
    </li>
    <li className="self-start">
      <h1 className="font-bold text-xl  mb-2 lg:mb-4">Help Center</h1>
      {helpCenterLinks.map((x, id) => (
        <p
          key={id}
          className=" duration-300  cursor-pointer my-2"
        >
          {x}
        </p>
      ))}
    </li>
  </ul>
  <div className="py-6 flex flex-col gap-y-4 md:flex-row md:gap-y-0 items-center justify-between">
      <div className="">
        &copy; {date}, All rights reserved
      </div>
      <div>
        {/* <img src={payment} alt="payment img" /> */}
      </div>
      <ul className="flex gap-4">
        {social.map((x, id) => (
          <li
            key={id}
            className="text-2xl text-white p-2 rounded-full cursor-pointer"
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}