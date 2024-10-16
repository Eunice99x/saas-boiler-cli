import Image from "next/image";
import Link from "next/link";

export default function Features2() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 md:w-1/2 md:pr-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Feature Highlight</h3>
            <p className="text-gray-700 mb-4">
              A detailed explanation of the feature's benefits, usability, and
              how it stands out.
            </p>
            <Link href="/learn-more" passHref>
              <a className="text-blue-600 font-medium">Learn More</a>
            </Link>
          </div>
          <div className="">
            <Image
              src={"https://via.placeholder.com/400"}
              alt="Feature Image"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
