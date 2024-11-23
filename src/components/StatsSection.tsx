import { FaSmile, FaUsers, FaCheckCircle, FaHeartbeat } from 'react-icons/fa'

const stats = [
  {
    value: '85%',
    label: 'Employee Satisfaction',
    icon: FaSmile,
    animation: 'fade-right'
  },
  {
    value: '8k',
    label: 'Active Users',
    icon: FaUsers,
    animation: 'fade-up'
  },
  {
    value: '100k+',
    label: 'Sessions Completed',
    icon: FaCheckCircle,
    animation: 'fade-up'
  },
  {
    value: '75%',
    label: 'Stress Reduction',
    icon: FaHeartbeat,
    animation: 'fade-left'
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0066CC] to-[#0052a3]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white/10 backdrop-blur-sm">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}