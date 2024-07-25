import Image from "next/image";

function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-[80%] mx-auto pb-60">
        <div className="flex flex-col items-center">
          <Image alt="5Review" src="/5ReviewBlack.svg" width={100} height={29} />
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 !leading-[1.4]">
            Enter your email for updates 
          </h3>
        </div>
        <div className="w-full mt-10">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="block h-14 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
          />
          <button
            type="button"
            className="block mt-6 h-14 w-full px-6 py-3 leading-none font-semibold rounded-lg text-white bg-gray-900 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
