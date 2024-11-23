import { useProduct } from '../context/ProductContext'
import ProductFilters from './ProductFilters'
import ProductCard from './ProductCard'
import CartOverlay from './CartOverlay'
import { products } from '../data/products'

export default function ProductList() {
  const { selectedMode, selectedCategory, addedItems } = useProduct()

  const filteredProducts = products.filter(product => {
    const modeMatch = selectedMode === 'all' || product.mode === selectedMode
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    return modeMatch && categoryMatch
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
          Wellness Activities
        </h2>
        
        <div className="flex gap-8">
          <ProductFilters />
          
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CartOverlay itemCount={addedItems.length} />
    </div>
  )
}