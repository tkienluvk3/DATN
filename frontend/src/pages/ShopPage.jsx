import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Sidebar from '../components/Sidebar.jsx'
import { products } from '../data/products.js'

const initialFilters = { category: 'Tất cả', styles: [], color: '', maxPrice: 2000000 }

export default function ShopPage({ favorites, toggleFavorite }) {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => ({
    ...initialFilters,
    styles: searchParams.get('style') ? [searchParams.get('style')] : [],
  }))
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortOrder, setSortOrder] = useState('recommended')
  const query = searchParams.get('q')?.trim().toLocaleLowerCase('vi') || ''

  const visibleProducts = useMemo(() => products.filter((product) => {
    const matchesQuery = !query || `${product.name} ${product.category} ${product.style} ${product.partner}`.toLocaleLowerCase('vi').includes(query)
    const matchesCategory = filters.category === 'Tất cả' || product.category === filters.category
    const matchesStyle = filters.styles.length === 0 || filters.styles.includes(product.style)
    const matchesColor = !filters.color || filters.color === product.color
    return matchesQuery && matchesCategory && matchesStyle && matchesColor && product.price <= filters.maxPrice
  }).sort((first, second) => {
    if (sortOrder === 'price-ascending') return first.price - second.price
    if (sortOrder === 'price-descending') return second.price - first.price
    return 0
  }), [filters, query, sortOrder])

  return (
    <main className="shop-page container-fluid">
      <div className="shop-intro"><p className="eyebrow">TỦ ĐỒ MÂY · KHÁM PHÁ CÓ CHỌN LỌC</p><h1>Tìm món đồ <em>hợp bạn.</em></h1><p>Từ những thương hiệu bạn yêu, đến phong cách bạn muốn thử.</p></div>
      <button type="button" className="mobile-filter-toggle" aria-expanded={mobileFiltersOpen} onClick={() => setMobileFiltersOpen((open) => !open)}><Icon name="filter" size={18} /> Bộ lọc & phong cách</button>
      <div className="shop-layout">
        <div className={mobileFiltersOpen ? 'shop-sidebar is-open' : 'shop-sidebar'}><Sidebar filters={filters} onChange={setFilters} onReset={() => setFilters(initialFilters)} /></div>
        <section className="shop-results" aria-label="Danh sách sản phẩm">
          <div className="shop-results-heading"><div><h2>{query ? `Kết quả cho “${searchParams.get('q')}”` : 'Món đồ dành cho bạn'}</h2><span>{visibleProducts.length} sản phẩm</span></div><label className="sort-control">Sắp xếp<select aria-label="Sắp xếp sản phẩm" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}><option value="recommended">MÂY gợi ý</option><option value="price-ascending">Giá: thấp đến cao</option><option value="price-descending">Giá: cao đến thấp</option></select></label></div>
          {visibleProducts.length > 0 ? <div className="product-grid shop-product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} isFavorite={favorites.includes(product.id)} onToggleFavorite={toggleFavorite} />)}</div> : <div className="shop-empty"><span>☁</span><h2>Chưa tìm thấy món đồ phù hợp</h2><p>Hãy thử nới rộng bộ lọc hoặc tìm một phong cách khác nhé.</p><button type="button" className="button button-outline" onClick={() => setFilters(initialFilters)}>Xóa bộ lọc</button></div>}
        </section>
      </div>
    </main>
  )
}
