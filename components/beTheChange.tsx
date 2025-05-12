import { HeartIcon, HandRaisedIcon, UserIcon } from '@heroicons/react/24/outline'

const cards = [
  {
    title: 'Help',
    description:
      'Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.',
    icon: <HeartIcon className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
    button: 'Learn More',
    active: false,
  },
  {
    title: 'Donation',
    description:
      'Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.',
    icon: <HandRaisedIcon className="w-10 h-10 text-white mx-auto mb-4" />,
    button: 'Learn More',
    active: true,
  },
  {
    title: 'Volunteer',
    description:
      'Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.',
    icon: <UserIcon className="w-10 h-10 text-blue-500 mx-auto mb-4" />,
    button: 'Learn More',
    active: false,
  },
]

export default function BeTheChangeSection() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Be The <span className="text-blue-500">Change</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisi eros vel neque vitae lorem molestie.
        </p>
      </div>
      {/* Cards */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        {cards.map((card, idx) => (
          <div
            key={card.title}
            className={`
              flex-1 min-w-[260px] max-w-xs rounded-3xl shadow-lg transition
              flex flex-col items-center text-center p-8
              ${card.active
                ? 'bg-blue-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:shadow-xl'
              }
            `}
          >
            {card.icon}
            <h3 className={`font-semibold text-xl mb-2 ${card.active ? 'text-white' : 'text-blue-500'}`}>
              {card.title}
            </h3>
            <p className={`mb-6 text-sm ${card.active ? 'text-blue-100' : 'text-gray-500'}`}>
              {card.description}
            </p>
            <button
              className={`
                mt-auto border-2 rounded-full px-6 py-2 font-medium transition
                ${card.active
                  ? 'border-white text-white hover:bg-white hover:text-blue-500'
                  : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }
              `}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}