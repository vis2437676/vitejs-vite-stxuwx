import { createContext, useContext, useState, ReactNode } from 'react'

type Mode = 'all' | 'online' | 'offline'
type Category = 'all' | 'wellness' | 'mental' | 'physical' | 'team'

interface ProductContextType {
  selectedMode: Mode
  setSelectedMode: (mode: Mode) => void
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
  addedItems: number[]
  addToCart: (index: number) => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedMode, setSelectedMode] = useState<Mode>('all')
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [addedItems, setAddedItems] = useState<number[]>([])

  const addToCart = (index: number) => {
    if (!addedItems.includes(index)) {
      setAddedItems(prev => [...prev, index])
    }
  }

  return (
    <ProductContext.Provider value={{
      selectedMode,
      setSelectedMode,
      selectedCategory,
      setSelectedCategory,
      addedItems,
      addToCart
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}