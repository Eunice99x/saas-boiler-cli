export default function Pricing2() {
  return (
    <div className="container">
      <div className="flex bg-[#1f2937] w-3/4 mx-auto rounded-md">
        <div className="p-4 w-2/3">
          <span>Choose a pricing plan:</span>
          <ul className="flex text-center bg-blue-600 rounded-md justify-evenly my-4">
            <li className="border-r-2 hover:bg-blue-300 hover:rounded-l-md w-full h-full p-2">
              Starter
            </li>
            <li className=" hover:bg-blue-300 w-full h-full p-2">Standard</li>
            <li className="border-l-2 hover:bg-blue-300 hover:rounded-r-md w-full h-full p-2">
              Premium
            </li>
          </ul>
          <p className="mb-2">Starter details:</p>
          <p className="text-gray-400">
            Plan pricing starts at 250 contacts. Select your audience size to
            calculate your price. The monthly email send limit for Standard
            plans is 12 times your maximum contact count.*.
          </p>
        </div>
        <div className="p-4 w-1/3 border-l">
          <span>Starter plan</span>
          <p className="text-gray-400">Starts at</p>
          <h3 className="text-4xl font-bold">$49</h3>
          <button className="bg-blue-600 p-2 my-2 rounded-md w-full">
            Buy now
          </button>
          <p className="text-gray-400">
            *To see the monthly email send limit included with your specific
            plan, click Calculate my price. If your plan's contact or email send
            limit is exceeded, you will be charged for overages.
          </p>
        </div>
      </div>
    </div>
  );
}
