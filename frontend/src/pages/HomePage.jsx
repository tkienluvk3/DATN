import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const benefits = [
  ['✧', 'Gợi ý theo gu riêng', 'Phong cách, dịp mặc và ngân sách'],
  ['↗', 'Khám phá đa thương hiệu', 'Chọn lọc từ các cửa hàng đối tác'],
  ['♡', 'Lưu lại điều bạn thích', 'Tạo bộ sưu tập của riêng mình'],
  ['⌁', 'Mua sắm minh bạch', 'Giá và hàng hóa tại website đối tác'],
]

const categories = [
  { name: 'Tối giản', subtitle: 'Ít hơn, đúng hơn', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85', query: 'Tối giản' },
  { name: 'Thanh lịch', subtitle: 'Nhẹ nhàng nổi bật', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85', query: 'Thanh lịch' },
  { name: 'Năng động', subtitle: 'Thoải mái mỗi ngày', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', query: 'Năng động' },
]

export default function HomePage({ favorites, toggleFavorite, notify }) {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow"><span /> MÂY STYLIST · PHONG CÁCH CỦA BẠN</p>
          <h1>Mặc điều<br />bạn <em>cảm thấy.</em></h1>
          <p className="hero-description">Tìm cảm hứng, khám phá những món đồ hợp gu<br className="desktop-break" /> và để MÂY gợi ý outfit dành riêng cho bạn.</p>
          <Link className="button button-dark rounded-4" to="/stylist">Thử Stylist AI <Icon name="sparkle" size={18} /></Link>
          <div className="hero-caption"><span>01 / 03</span><span className="caption-line" /><span>YOUR STYLE, YOUR STORY</span></div>
        </div>
        <div className="hero-stamp"><span>FIND<br />YOUR<br />OWN<br />WAY</span><span className="stamp-star">✧</span></div>
      </section>

      <section className="benefits" aria-label="Trải nghiệm tại MÂY">
        {benefits.map(([icon, title, caption]) => <div className="benefit" key={title}><span className="benefit-icon">{icon}</span><div><strong>{title}</strong><span>{caption}</span></div></div>)}
      </section>

      <section className="style-discovery section-wrap">
        <div className="section-heading">
          <div><p className="eyebrow">HÔM NAY BẠN LÀ AI?</p><h2>Chọn một chút <em>cảm hứng.</em></h2></div>
          <Link className="text-link" to="/kham-pha">Khám phá phong cách <Icon name="arrow" size={17} /></Link>
        </div>
        <div className="style-category-grid">
          {categories.map((category, index) => <Link className="style-category-card" to={`/kham-pha?style=${encodeURIComponent(category.query)}`} key={category.name}><img src={category.image} alt={`Phong cách ${category.name}`} loading="lazy" /><span className="style-category-number">0{index + 1}</span><span className="style-category-copy"><strong>{category.name}</strong><small>{category.subtitle}</small></span><span className="style-category-arrow"><Icon name="arrow" size={18} /></span></Link>)}
        </div>
      </section>

      <section className="ai-feature">
        <div className="ai-feature-image" role="img" aria-label="Gợi ý trang phục cá nhân hóa từ MÂY Stylist" />
        <div className="ai-feature-copy"><span className="ai-feature-icon"><Icon name="sparkle" size={20} /></span><p className="eyebrow">MÂY STYLIST · BẢN TRẢI NGHIỆM</p><h2>Một outfit hợp mood,<br /><em>bắt đầu từ bạn.</em></h2><p>Chọn dịp mặc, phong cách yêu thích và ngân sách. MÂY sẽ giúp bạn tìm cảm hứng phối đồ phù hợp — không cần biết bắt đầu từ đâu.</p><Link className="button button-dark" to="/stylist">Khám phá Stylist AI <Icon name="arrow" size={18} /></Link><span className="feature-disclaimer">Trải nghiệm hiện dùng dữ liệu mẫu; AI và API chưa được kết nối.</span></div>
      </section>

      <section className="collection section-wrap" id="new-arrivals">
        <div className="section-heading"><div><p className="eyebrow">ĐƯỢC MÂY CHỌN LỌC</p><h2>Đồ đẹp, <em>mood mới.</em></h2></div><Link className="text-link" to="/kham-pha">Xem tất cả <Icon name="arrow" size={17} /></Link></div>
        <div className="product-grid home-product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)} onToggleFavorite={toggleFavorite} />)}</div>
        <Link className="button button-outline collection-more" to="/kham-pha">Khám phá tất cả sản phẩm <Icon name="arrow" size={18} /></Link>
      </section>

      <section className="story" id="story">
        <div className="story-photo" role="img" aria-label="Phong cách thời trang tối giản với chất liệu tự nhiên" />
        <div className="story-copy"><p className="eyebrow">MỘT CHÚT DỊU DÀNG</p><h2>Để mỗi ngày<br />đều là <em>ngày của bạn.</em></h2><p>MÂY tin rằng phong cách không cần theo một khuôn mẫu nào. Chúng mình giúp bạn khám phá những món đồ và cách phối khiến bạn thấy mình là chính mình.</p><Link className="text-link" to="/stylist">Tìm phong cách của bạn <Icon name="arrow" size={17} /></Link><span className="story-deco">mặc theo cách<br />của riêng bạn</span></div>
      </section>

      <section className="newsletter"><p className="eyebrow">THƯ TỪ MÂY</p><h2>Nhận một chút <em>cảm hứng</em><br />trong hộp thư của bạn.</h2><form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); notify('Đăng ký nhận tin sẽ khả dụng khi dịch vụ backend được kết nối.') }}><label className="sr-only" htmlFor="newsletter-email">Email của bạn</label><input id="newsletter-email" type="email" placeholder="Email của bạn" required /><button type="submit" aria-label="Đăng ký nhận tin"><Icon name="arrow" size={19} /></button></form><span className="newsletter-note">Chỉ gửi những điều bạn sẽ muốn đọc ♡</span></section>
    </main>
  )
}
