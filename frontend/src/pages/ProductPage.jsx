import { Link, useParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'
import { formatPrice } from '../utils/formatPrice.js'

export default function ProductPage({ favorites, toggleFavorite, notify }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) return <main className="container page-not-found"><p className="eyebrow">SẢN PHẨM KHÔNG TÌM THẤY</p><h1>Món đồ này chưa có trong tủ MÂY.</h1><Link className="button button-dark" to="/kham-pha">Khám phá sản phẩm</Link></main>

  const relatedProducts = products.filter((item) => item.id !== product.id && item.style === product.style).slice(0, 3)

  return (
    <main className="product-detail-page container-fluid">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link to="/">Trang chủ</Link><span>/</span><Link to="/kham-pha">Khám phá</Link><span>/</span><span>{product.name}</span></nav>
      <div className="product-detail">
        <div className={`product-detail-image ${product.tone}`}><img src={product.image} alt={product.name} /></div>
        <section className="product-detail-info"><p className="eyebrow">{product.partner.toLocaleUpperCase('vi')} · ĐỐI TÁC MÂY</p><h1>{product.name}</h1><p className="product-detail-style">{product.style} <span>·</span> {product.category}</p><div className="product-detail-price">{formatPrice(product.price)}{product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}</div><p className="product-detail-description">{product.description}</p><div className="detail-note"><Icon name="check" size={17} /> Sản phẩm được cung cấp bởi cửa hàng đối tác.</div><div className="product-detail-actions"><a className="button button-dark" href={product.affiliateUrl} target="_blank" rel="noreferrer" onClick={() => notify('Bạn đang được chuyển tới cửa hàng đối tác.')}>Xem tại cửa hàng đối tác <Icon name="arrow" size={18} /></a><button className={favorites.includes(product.id) ? 'detail-favorite is-favorite' : 'detail-favorite'} type="button" aria-pressed={favorites.includes(product.id)} onClick={() => toggleFavorite(product.id)}><Icon name="heart" size={19} />{favorites.includes(product.id) ? 'Đã lưu' : 'Lưu yêu thích'}</button></div><p className="detail-disclosure">MÂY có thể nhận hoa hồng khi bạn mua hàng qua liên kết đối tác. Giá và tình trạng sản phẩm được xác nhận tại website của cửa hàng.</p></section>
      </div>
      {relatedProducts.length > 0 && <section className="related-products section-wrap"><div className="section-heading"><div><p className="eyebrow">CÓ THỂ BẠN CŨNG THÍCH</p><h2>Cùng phong cách <em>{product.style}.</em></h2></div><Link className="text-link" to="/kham-pha">Khám phá thêm <Icon name="arrow" size={17} /></Link></div><div className="product-grid">{relatedProducts.map((item) => <ProductCard key={item.id} product={item} isFavorite={favorites.includes(item.id)} onToggleFavorite={toggleFavorite} />)}</div></section>}
    </main>
  )
}
