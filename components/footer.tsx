import Image from "next/image";
import delivery from "@/public/person.png";
export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#5B8DF6]">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-16 md:py-24">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be A Part Of Our Journey
          </h1>
          <p className="text-white text-base md:text-lg mb-8">
            Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros
            vel neque vitae lorem molestie. Mattis et aliquam fermentum sed
            sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md outline-none border-none flex-1"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
              Submit
            </button>
          </form>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-blue-200 flex items-center justify-center shadow-lg">
            <Image
              src={delivery}
              alt="Delivery"
              width={220}
              height={260}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative Curve */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full">
          <path fill="#fff" d="M0,0 C480,90 960,0 1440,90 L1440,120 L0,120 Z" />
        </svg>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 px-6 md:px-24">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          {/* Footer Links */}
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              About
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Donation
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Blog
            </a>
            <a href="#" className="text-[#5B8DF6] hover:underline font-medium">
              Contact
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6 text-[#5B8DF6] hover:text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.013 3.676 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.324 21.128 22 17.013 22 12" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                className="w-6 h-6 text-[#5B8DF6] hover:text-pink-600"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.385 3.678 1.366 2.697 2.347 2.443 3.459 2.384 4.74.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.313 2.393 1.294 3.374.981.981 2.093 1.235 3.374 1.294C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.281-.059 2.393-.313 3.374-1.294.981-.981 1.235-2.093 1.294-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.313-2.393-1.294-3.374-.981-.981-2.093-1.235-3.374-1.294C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6 text-[#5B8DF6] hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.176.013.352.013.528 0 5.386-4.099 11.6-11.6 11.6-2.306 0-4.452-.676-6.258-1.844.322.038.644.051.98.051 1.917 0 3.682-.655 5.086-1.758-1.793-.032-3.306-1.216-3.825-2.843.25.038.506.064.772.064.372 0 .732-.051 1.073-.143-1.872-.377-3.282-2.029-3.282-4.017v-.051c.552.307 1.186.491 1.86.512a4.075 4.075 0 0 1-1.817-3.397c0-.749.202-1.452.553-2.057 2.013 2.468 5.025 4.088 8.431 4.263-.07-.299-.107-.611-.107-.936 0-2.25 1.823-4.073 4.073-4.073 1.172 0 2.234.496 2.978 1.292.93-.183 1.803-.522 2.59-.99-.305.951-.951 1.748-1.793 2.25.827-.099 1.614-.318 2.347-.644-.548.819-1.24 1.542-2.037 2.119z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-400 text-sm">
          <div>© 2022 ABC. All rights reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
