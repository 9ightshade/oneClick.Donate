"use client";
import Image from 'next/image'
import { useState } from 'react'
import kids from "@/public/kids.png";

const categories = [
  { label: 'All' },
  { label: 'Category 1' },
  { label: 'Category 2' },
  { label: 'Category 3' },
]

const cards = [
  {
    id: 1,
    category: 'Category 1',
    title: 'Ensuring medicine for all the children.',
    image: kids,
    progress: 50,
  },
  {
    id: 2,
    category: 'Category 1',
    title: 'Ensuring medicine for all the children.',
    image: kids,
    progress: 66,
  },
  {
    id: 3,
    category: 'Category 2',
    title: 'Ensuring medicine for all the children.',
    image: kids,
    progress: 43,
  },
]

export default function CategoriesSection() {
  const [selected, setSelected] = useState('All')

  const filteredCards =
    selected === 'All'
      ? cards
      : cards.filter(card => card.category === selected)

  return (
    <section className="w-full bg-white py-12 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Help us <span className="text-blue-600">save</span> the world
        </h2>
        <p className="text-gray-500 mb-8">
          Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.
        </p>
      </div>
      {/* Categories Tabs */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap gap-6 md:gap-10 font-medium items-center">
          {categories.map(cat => (
            <button
              key={cat.label}
              onClick={() => setSelected(cat.label)}
              className={`relative pb-2 transition-colors ${
                selected === cat.label
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {cat.label}
              {selected === cat.label && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-600 rounded"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredCards.map(card => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition hover:shadow-xl"
          >
            <div className="w-full h-44 relative rounded-xl overflow-hidden mb-4">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="w-full px-2">
              <span className="text-xs text-gray-400 font-semibold uppercase">
                {card.category}
              </span>
              <h3 className="font-semibold text-gray-900 text-base mt-1 mb-2 leading-tight">
                {card.title}
              </h3>
              {/* Progress Bar */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-1 bg-blue-600 rounded-full"
                    style={{ width: `${card.progress}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  {card.progress}%
                </span>
              </div>
              {/* Button */}
              <button className="w-full border border-blue-600 text-blue-600 font-medium rounded-full py-2 transition hover:bg-blue-600 hover:text-white">
                Donate Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
