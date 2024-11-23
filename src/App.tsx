import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductProvider } from './context/ProductContext'
import ProductList from './components/ProductList'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </ProductProvider>
    </Router>
  )
}