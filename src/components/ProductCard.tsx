import { FaShoppingCart, FaCheck } from 'react-icons/fa'
import { useProduct } from '../context/ProductContext'
import { products } from '../data/products'

interface ProductCardProps {
  product: typeof products[number]
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addedItems, addToCart } = useProduct()
  const isAdded = addedItems.includes(index)

  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium ${
          product.mode === 'online' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {product.mode}
        </span>
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
            {product.title}
          </h3>
        </div>
        <p className="mt-5 text-sm leading-6 text-gray-600">
          {product.description}
        </p>
      </div>
      <button
        onClick={() => addToCart(index)}
        className={`mt-4 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 flex items-center gap-2 ${
          isAdded
            ? 'bg-green-600 hover:bg-green-500'
            : 'bg-primary-600 hover:bg-primary-500'
        }`}
      >
        {isAdded ? (
          <>
            Added
            <FaCheck className="text-sm" />
          </>
        ) : (
          <>
            Add to Cart
            <FaShoppingCart className="text-sm" />
          </>
        )}
      </button>
    </article>
  )
}