import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

export default function WishlistPage({ favorites, toggleFavorite }) {
  const savedProducts = products.filter((product) => favorites.includes(product.id))

  return (
    <main className="wishlist-page section-wrap">
      <div className="shop-intro"><p className="eyebrow">GÓC NHỎ CỦA BẠN</p><h1>Những điều <em>bạn yêu thích.</em></h1><p>Các món đồ bạn lưu sẽ được gom lại tại đây.</p></div>
      {savedProducts.length ? <div className="product-grid shop-product-grid">{savedProducts.map((product) => <ProductCard key={product.id} product={product} isFavorite onToggleFavorite={toggleFavorite} />)}</div> : <div className="shop-empty"><span>♡</span><h2>Danh sách của bạn còn trống</h2><p>Chạm vào biểu tượng trái tim trên sản phẩm để lưu lại món đồ yêu thích.</p><Link className="button button-dark" to="/kham-pha">Khám phá sản phẩm</Link></div>}
    </main>
  )
}
