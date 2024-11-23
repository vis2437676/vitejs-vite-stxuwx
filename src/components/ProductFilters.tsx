import { useProduct } from '../context/ProductContext'

export default function ProductFilters() {
  const { selectedMode, setSelectedMode, selectedCategory, setSelectedCategory } = useProduct()

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Filters</h3>
        
        <div className="mb-6">
          <h4 className="font-medium mb-3">Choose mode</h4>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="mode"
                value="all"
                checked={selectedMode === 'all'}
                onChange={(e) => setSelectedMode(e.target.value as any)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2">All</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="mode"
                value="online"
                checked={selectedMode === 'online'}
                onChange={(e) => setSelectedMode(e.target.value as any)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2">Online</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="mode"
                value="offline"
                checked={selectedMode === 'offline'}
                onChange={(e) => setSelectedMode(e.target.value as any)}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2">Offline</span>
            </label>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Choose category</h4>
          <div className="space-y-2">
            {['all', 'wellness', 'mental', 'physical', 'team'].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category as any)}
                  className="h-4 w-4 rounded text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-2 capitalize">{category}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}