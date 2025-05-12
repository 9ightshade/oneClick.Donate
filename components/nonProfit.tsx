import Image from "next/image";
import donate from "@/public/donate.png";
export default function NonprofitTemplate() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-sm uppercase font-bold text-blue-500 tracking-wide">
          ABOUT US
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 md:mb-0 max-w-xl">
            We are here to support{" "}
            <span className="text-blue-500">vulnerable</span> communities.
          </h1>

          <button className="bg-blue-500 text-white rounded-full px-6 py-2 font-medium hover:bg-blue-600 transition-colors">
            Donate Now
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-12 mt-12 items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-blue-200 rounded-full w-full aspect-square overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                {/* Hand image placeholder */}
                <div className="relative w-full h-full">
                  <Image
                    src={donate}
                    alt="Hand outstretched in support"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 w-32 h-1 bg-blue-300 mx-auto"></div>
          </div>
        </div>

        {/* Right Side - Categories */}
        <div className="md:w-1/2">
          {/* Category 1 */}
          <div className="flex items-start gap-6 mb-12">
            <div className="bg-blue-500 text-white p-4 rounded-full flex items-center justify-center w-12 h-12 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path d="M10.5 1.875a1.125 1.125 0 0 1 2.25 0v8.219c.517.384.975.892 1.304 1.48.329-.588.787-1.096 1.304-1.48V1.875a1.125 1.125 0 1 1 2.25 0v10.69c0 1.026-.395 2.01-1.11 2.74l-3.26 3.267a1.125 1.125 0 0 1-1.59-1.591l1.726-1.726a3.382 3.382 0 0 0 1.083-2.488 3.382 3.382 0 0 0-6.6 0 3.382 3.382 0 0 0 1.083 2.488l1.726 1.726a1.125 1.125 0 1 1-1.591 1.59l-3.26-3.266a3.93 3.93 0 0 1-1.11-2.74V1.875Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                CATEGORY 1
              </h3>
              <p className="text-gray-600 text-sm">
                Mattis et aliquam fermentum sed sagittis eu elit mattis. Nisi
                eros vel neque vitae lorem molestia.
              </p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="flex items-start gap-6 mb-12">
            <div className="bg-blue-500 text-white p-4 rounded-full flex items-center justify-center w-12 h-12 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                CATEGORY 2
              </h3>
              <p className="text-gray-600 text-sm">
                Mattis et aliquam fermentum sed sagittis eu elit mattis. Nisi
                eros vel neque vitae lorem molestia.
              </p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="flex items-start gap-6">
            <div className="bg-blue-500 text-white p-4 rounded-full flex items-center justify-center w-12 h-12 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                  clipRule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                CATEGORY 3
              </h3>
              <p className="text-gray-600 text-sm">
                Mattis et aliquam fermentum sed sagittis eu elit mattis. Nisi
                eros vel neque vitae lorem molestia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
