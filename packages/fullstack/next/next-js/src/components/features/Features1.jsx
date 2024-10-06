import Image from 'next/image';

export default function Features1() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image src="/icons/feature.png" alt="Feature 1" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature One</h3>
            <p className="text-gray-600">
              Description of feature one, highlighting its benefits and uses.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image src="/icons/feature.png" alt="Feature 2" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
            <p className="text-gray-600">
              Description of feature two, emphasizing its unique aspects.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image src="/icons/feature.png" alt="Feature 3" width={64} height={64} className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
            <p className="text-gray-600">
              Description of feature three, detailing its advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
