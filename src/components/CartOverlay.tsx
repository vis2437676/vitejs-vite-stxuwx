import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

interface CartOverlayProps {
  itemCount: number
}

export default function CartOverlay({ itemCount }: CartOverlayProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className={`fixed bottom-6 right-6 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-24'
    }`}>
      <button className="bg-primary-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-500 flex items-center gap-2">
        <FaShoppingCart className="text-lg" />
        <span className="font-semibold">Cart ({itemCount})</span>
      </button>
    </div>
  )
}