import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import { formatPrice } from '../utils/formatPrice.js'

export default function ProductCard({ product, isFavorite = false, onToggleFavorite }) {
  return (
    <article className="product-card">
      <div className={`product-image ${product.tone || 'sand'}`}>
        <Link to={`/san-pham/${product.id}`} aria-label={`Xem ${product.name}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <button
          className={isFavorite ? 'favorite-button is-favorite' : 'favorite-button'}
          type="button"
          aria-label={isFavorite ? `Bỏ yêu thích ${product.name}` : `Yêu thích ${product.name}`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite?.(product.id)}
        >
          <Icon name="heart" size={19} />
        </button>
        <Link className="quick-add" to={`/san-pham/${product.id}`}>Xem chi tiết <Icon name="arrow" size={16} /></Link>
      </div>
      <div className="product-info">
        <div><h3><Link to={`/san-pham/${product.id}`}>{product.name}</Link></h3><p>{product.category} · {product.partner}</p></div>
        <div className="product-price">{formatPrice(product.price)}{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div>
      </div>
      <div className="product-card-foot"><span className="product-style-tag">{product.style}</span><span className="product-card-partner">Gợi ý từ MÂY</span></div>
    </article>
  )
}
