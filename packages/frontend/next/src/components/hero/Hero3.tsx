import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Hero3() {
  return (
    <div className="container bg-gray-900 h-screen md:pt-10 lg:pt-0">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center h-full">
        <div className="flex flex-1 flex-col justify-center text-center lg:text-left">
          <h1 className="font-bold mb-5 text-3xl lg:text-5xl uppercase">
            Discover It All on{" "}
            <span className="text-green-500">RapidStack:</span>
          </h1>
          <p className="mb-3 leading-relaxed text-base lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            impedit fugiat voluptas id odio sunt officiis minima ratione. Natus
            quibusdam illo deserunt odit rem esse ipsam, nam accusantium
            expedita optio.
          </p>
          <Link
            href="/someroute"
            className="flex items-center justify-center lg:justify-start mt-3 px-5 py-3 bg-green-500 text-white shadow-md hover:bg-green-300 transition-all duration-300 rounded-lg lg:w-fit w-full"
          >
            Start now <BsArrowRight className="ml-2" />
          </Link>
        </div>
        <Image
          src="https://placehold.co/600x400"
          width={600}
          height={400}
          className="mt-10"
          alt="hero img"
        />
      </div>
    </div>
  );
}
