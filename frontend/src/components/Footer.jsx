import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark" to="/">MÂY<span>.</span></Link>
          <p>Mặc điều bạn cảm thấy.<br />Khám phá phong cách của riêng bạn.</p>
          <div className="social-links"><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://tiktok.com" aria-label="TikTok">tk</a></div>
        </div>
        <div className="footer-column"><h3>Khám phá</h3><Link to="/kham-pha">Tất cả sản phẩm</Link><Link to="/stylist">Gợi ý outfit AI</Link><Link to="/yeu-thich">Sản phẩm yêu thích</Link></div>
        <div className="footer-column"><h3>Về MÂY</h3><a href="/#story">Câu chuyện của chúng mình</a><a href="mailto:hello@maystudio.vn">Liên hệ hợp tác</a><a href="mailto:hello@maystudio.vn">Trợ giúp & hỗ trợ</a></div>
        <div className="footer-column footer-contact"><h3>Mua sắm có chọn lọc</h3><p>MÂY giới thiệu sản phẩm từ các đối tác thời trang. Giá và tình trạng hàng được xác nhận tại cửa hàng.</p><span className="affiliate-disclosure">Một số liên kết là liên kết tiếp thị liên kết.</span></div>
      </div>
      <div className="footer-bottom"><span>© 2026 MÂY Studio. Mặc theo cách của bạn.</span><span>Thời trang · Công nghệ · Cá tính</span></div>
    </footer>
  )
}
