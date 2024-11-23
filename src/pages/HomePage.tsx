import { Link } from 'react-router-dom'
import { products } from '../data/products'
import StatsSection from '../components/StatsSection'

export default function HomePage() {
  const featuredActivities = products.slice(0, 4)
  const featuredPrograms = products.slice(2, 6)

  const banners = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
      title: "Physical Wellness"
    },
    {
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      title: "Mental Health"
    },
    {
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=500&q=80",
      title: "Team Activities"
    },
    {
      image: "https://images.unsplash.com/photo-1565843708714-52ecf69ab81f?w=500&q=80",
      title: "Work-Life Balance"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F8FBFF] overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                <span className="text-[#FF8A00]">Raise</span> your workplace health<br />quotient with
              </h1>
              <div className="mb-6">
                <img 
                  src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/logo.png" 
                  alt="Wellsure @work" 
                  className="h-8"
                />
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Enabling complete healthcare for your employees!
              </p>
              <button className="bg-[#0066CC] text-white px-8 py-3 rounded font-medium hover:bg-blue-700 transition-colors">
                Schedule a Demo
              </button>
              <div className="mt-8 text-sm text-gray-600">
                Event execution within 7 days
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {banners.map((banner, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-gray-900">{banner.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Wellness Activities Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Wellness Activities
            </h2>
            <Link 
              to="/products"
              className="text-primary-600 hover:text-primary-500 font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Wellness Programs
            </h2>
            <Link 
              to="/products"
              className="text-primary-600 hover:text-primary-500 font-semibold"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center">
            {[1, 2, 3, 4, 5].map((partner) => (
              <div key={partner} className="flex justify-center">
                <div className="h-12 w-32 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}