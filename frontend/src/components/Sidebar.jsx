const categories = ['Tất cả', 'Áo', 'Quần', 'Váy', 'Đầm', 'Phụ kiện']
const styles = ['Tối giản', 'Thanh lịch', 'Năng động', 'Vintage', 'Smart casual']
const colors = [
  { label: 'Trắng', value: 'white', color: '#f4f1e9' },
  { label: 'Be', value: 'beige', color: '#d9c7a8' },
  { label: 'Đen', value: 'black', color: '#292824' },
  { label: 'Xanh', value: 'blue', color: '#91a9b2' },
  { label: 'Nâu', value: 'brown', color: '#92735b' },
]

export default function Sidebar({ filters, onChange, onReset }) {
  function update(field, value) {
    onChange({ ...filters, [field]: value })
  }

  return (
    <aside className="filter-sidebar" aria-label="Bộ lọc sản phẩm">
      <div className="filter-heading"><div><span className="eyebrow">TÌM MÓN ĐỒ HỢP GU</span><h2>Bộ lọc</h2></div><button type="button" className="filter-reset" onClick={onReset}>Xóa lọc</button></div>
      <fieldset className="filter-group"><legend>Danh mục</legend>{categories.map((category) => <label className="filter-option" key={category}><input type="radio" name="category" checked={filters.category === category} onChange={() => update('category', category)} />{category}</label>)}</fieldset>
      <fieldset className="filter-group"><legend>Phong cách</legend>{styles.map((style) => <label className="filter-option" key={style}><input type="checkbox" checked={filters.styles.includes(style)} onChange={() => update('styles', filters.styles.includes(style) ? filters.styles.filter((item) => item !== style) : [...filters.styles, style])} />{style}</label>)}</fieldset>
      <fieldset className="filter-group"><legend>Màu sắc</legend><div className="filter-colors">{colors.map((color) => <button key={color.value} className={`filter-color${filters.color === color.value ? ' selected' : ''}`} type="button" aria-label={color.label} aria-pressed={filters.color === color.value} style={{ '--swatch-color': color.color }} onClick={() => update('color', filters.color === color.value ? '' : color.value)} />)}</div></fieldset>
      <fieldset className="filter-group"><legend>Ngân sách tối đa</legend><label className="budget-value" htmlFor="budget-range">{Number(filters.maxPrice).toLocaleString('vi-VN')}₫</label><input className="budget-range" id="budget-range" type="range" min="200000" max="2000000" step="50000" value={filters.maxPrice} onChange={(event) => update('maxPrice', Number(event.target.value))} /><div className="budget-limits"><span>200.000₫</span><span>2.000.000₫</span></div></fieldset>
    </aside>
  )
}
