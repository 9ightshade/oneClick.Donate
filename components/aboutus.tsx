import Image from 'next/image'
import { HeartIcon, LightBulbIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import hand from '@/public/donate.png'
export default function SupportSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex-1">
          <p className="text-xs text-blue-600 font-bold tracking-widest uppercase mb-2">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We are here to support{' '}
            <span className="text-blue-600">vulnerable</span> communities.
          </h1>
        </div>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
          Donate Now
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-48 md:w-80 md:h-60 overflow-hidden rounded-b-full bg-blue-100 flex items-end">
            <Image
              src={hand}
              alt="Helping Hand"
              fill
              className="object-cover object-bottom"
              priority
            />
          </div>
        </div>
        {/* Right: Categories */}
        <div className="flex-1 flex flex-col gap-8">
          <CategoryCard
            icon={<HeartIcon className="w-8 h-8 text-white" />}
            title="Category 1"
            description="Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie."
          />
          <CategoryCard
            icon={<LightBulbIcon className="w-8 h-8 text-white" />}
            title="Category 2"
            description="Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie."
          />
          <CategoryCard
            icon={<UserGroupIcon className="w-8 h-8 text-white" />}
            title="Category 3"
            description="Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie."
          />
        </div>
      </div>
    </section>
  )
}

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CategoryCard({ icon, title, description }: CategoryCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-blue-600 rounded-full p-3 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-lg mb-1 uppercase">{title}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  )
}