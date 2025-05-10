import HeadingTitle from "./title";

const Pricing = () => {
  return (
    <div className="-mt-30 max-lg:px-5 lg:px-30 py-10">
      <HeadingTitle text="Pricing" />
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 p-6">
        {/* Basic Plan */}
        <div className="flex-1 rounded-2xl p-6 bg-white shadow-sm">
          <div>
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-3xl font-bold mb-4">$9/mo</p>
            <ul className="mb-4 space-y-2 text-gray-600">
              <li>Record incoming goods</li>
              <li>Record outgoing goods</li>
              <li>Record profit</li>
            </ul>
          </div>
          <div className="h-[120px]"></div>
          <button className="mt-auto w-full cursor-pointer bg-violet-100 text-black hover:bg-violet-200 py-2 rounded-lg hover:text-violet-700">
            Choose Plan
          </button>
        </div>

        {/* Best Value Plan (Highlighted) */}
        <div className="flex-1 rounded-2xl p-6 shadow-md transform md:-translate-y-4">
          <h2 className="text-xl font-semibold mb-2">Business (Best Value)</h2>
          <p className="text-3xl font-bold mb-4">$19/mo</p>
          <ul className="flex-1 mb-4 space-y-2">
            <li>Record incoming and outgoing goods</li>
            <li>Record profit</li>
            <li>Analyze sales results with CHARTS</li>
            <li>24/7 Support</li>
          </ul>
          <div className="h-[80px]"></div>
          <button className="mt-auto w-full cursor-pointer bg-violet-600 text-white py-2 rounded-lg hover:text-white hover:bg-violet-800">
            Choose Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="flex-1 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Entrepreneur</h2>
          <p className="text-3xl font-bold mb-4">$29/mo</p>
          <ul className="mb-4 space-y-2 text-gray-600">
            <li>Record incoming and outgoing goods</li>
            <li>Record profit</li>
            <li>Analyze sales results with CHARTS</li>
            <li>24/7 Support</li>
            <li>Export data to Excel</li>
            <li>AI Income Prediction</li>
          </ul>
          <div></div>
          <div className="h-[20px]"></div>
          <button className="mt-auto w-full bg-violet-200 text-black cursor-pointer hover:bg-violet-100 py-2 rounded-lg  hover:text-violet-700">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
