import { useRef, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import StylistPage from './pages/StylistPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import './App.css'
import './pages.css'

function AppContent() {
  const [favorites, setFavorites] = useState([])
  const [notice, setNotice] = useState('')
  const noticeTimer = useRef(null)

  function notify(message) {
    setNotice(message)
    window.clearTimeout(noticeTimer.current)
    noticeTimer.current = window.setTimeout(() => setNotice(''), 2800)
  }

  function toggleFavorite(productId) {
    const alreadySaved = favorites.includes(productId)
    notify(alreadySaved ? 'Đã xóa khỏi danh sách yêu thích.' : 'Đã lưu vào danh sách yêu thích.')
    setFavorites((current) => {
      return alreadySaved
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    })
  }

  const sharedProps = { favorites, toggleFavorite, notify }

  return (
    <div className="storefront">
      <Header favoritesCount={favorites.length} notify={notify} />
      <Routes>
        <Route path="/" element={<HomePage {...sharedProps} />} />
        <Route path="/kham-pha" element={<ShopPage {...sharedProps} />} />
        <Route path="/stylist" element={<StylistPage {...sharedProps} />} />
        <Route path="/san-pham/:productId" element={<ProductPage {...sharedProps} />} />
        <Route path="/yeu-thich" element={<WishlistPage {...sharedProps} />} />
        <Route path="*" element={<main className="container page-not-found"><p className="eyebrow">404 · KHÔNG TÌM THẤY</p><h1>Trang này đang đi tìm outfit của mình.</h1><Link className="button button-dark" to="/">Về trang chủ</Link></main>} />
      </Routes>
      <Footer />
      {notice && <div className="toast storefront-toast" role="status">{notice}</div>}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
