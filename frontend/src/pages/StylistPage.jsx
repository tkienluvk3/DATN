import { useMemo, useState } from 'react'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const styleOptions = ['Tối giản', 'Thanh lịch', 'Năng động', 'Vintage', 'Smart casual']

export default function StylistPage({ favorites, toggleFavorite }) {
  const [preferences, setPreferences] = useState({ occasion: 'Đi làm', style: 'Tối giản', budget: '800000' })
  const [submitted, setSubmitted] = useState(false)

  const suggestions = useMemo(() => {
    const budget = Number(preferences.budget)
    const matching = products.filter((product) => product.style === preferences.style && product.price <= budget)
    return (matching.length ? matching : products.filter((product) => product.price <= budget)).slice(0, 3)
  }, [preferences])

  function update(field, value) {
    setPreferences((current) => ({ ...current, [field]: value }))
  }

  return (
    <main className="stylist-page">
      <section className="stylist-hero"><div><p className="eyebrow"><Icon name="sparkle" size={15} /> MÂY STYLIST · THỬ NGAY</p><h1>Hôm nay bạn muốn<br /><em>mặc như thế nào?</em></h1><p>Chia sẻ một chút về ngày của bạn. MÂY sẽ tìm những gợi ý phối đồ hợp với phong cách và ngân sách bạn chọn.</p></div><div className="stylist-hero-image" role="img" aria-label="Thời trang phong cách cá nhân" /></section>
      <div className="stylist-content">
        <form className="stylist-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
          <div className="stylist-form-heading"><span>01</span><div><h2>Bắt đầu từ cảm hứng</h2><p>Chọn điều phù hợp với bạn hôm nay.</p></div></div>
          <fieldset className="stylist-field"><legend>Bạn sẽ đi đâu?</legend><div className="choice-grid">{['Đi làm', 'Cà phê', 'Dạo phố', 'Dịp đặc biệt'].map((occasion) => <button key={occasion} type="button" className={preferences.occasion === occasion ? 'choice-chip selected' : 'choice-chip'} aria-pressed={preferences.occasion === occasion} onClick={() => update('occasion', occasion)}>{occasion}</button>)}</div></fieldset>
          <fieldset className="stylist-field"><legend>Phong cách bạn yêu thích</legend><div className="choice-grid">{styleOptions.map((style) => <button key={style} type="button" className={preferences.style === style ? 'choice-chip selected' : 'choice-chip'} aria-pressed={preferences.style === style} onClick={() => update('style', style)}>{style}</button>)}</div></fieldset>
          <label className="stylist-field budget-field">Ngân sách cho một món đồ<select value={preferences.budget} onChange={(event) => update('budget', event.target.value)}><option value="500000">Dưới 500.000₫</option><option value="800000">Dưới 800.000₫</option><option value="1200000">Dưới 1.200.000₫</option><option value="2000000">Linh hoạt</option></select></label>
          <button className="button button-dark stylist-submit" type="submit">Gợi ý outfit cho mình <Icon name="sparkle" size={18} /></button>
          <p className="demo-note">Bản trải nghiệm dùng quy tắc và dữ liệu sản phẩm mẫu. Chưa kết nối mô hình AI hay tài khoản cá nhân.</p>
        </form>
        <aside className="stylist-aside"><span className="stylist-aside-mark">“</span><p>Phong cách đẹp nhất là phong cách khiến bạn cảm thấy là chính mình.</p><span>MÂY STYLIST</span><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=850&q=85" alt="Cảm hứng thời trang cá nhân" loading="lazy" /></aside>
      </div>
      {submitted && <section className="stylist-results section-wrap"><div className="section-heading"><div><p className="eyebrow">GỢI Ý DÀNH CHO BẠN · {preferences.occasion.toLocaleUpperCase('vi')}</p><h2>Một chút <em>{preferences.style.toLocaleLowerCase('vi')}.</em></h2></div></div><p className="stylist-result-description">MÂY đã chọn những món đồ theo phong cách {preferences.style.toLocaleLowerCase('vi')} và ngân sách của bạn. Đây là gợi ý tham khảo từ dữ liệu mẫu.</p><div className="product-grid">{suggestions.map((product) => <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)} onToggleFavorite={toggleFavorite} />)}</div></section>}
    </main>
  )
}
