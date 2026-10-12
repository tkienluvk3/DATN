import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function Header({ favoritesCount, notify }) {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()
    navigate(`/kham-pha${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="announcement">
        GỢI Ý PHONG CÁCH RIÊNG DÀNH CHO BẠN <span className="announcement-divider">·</span>
        <Link to="/stylist">Thử Stylist AI <Icon name="arrow" size={14} /></Link>
      </div>
      <header className="site-header">
        <button className="icon-button menu-toggle" type="button" aria-label="Mở danh mục" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <Icon name="menu" />
        </button>
        <Link className="wordmark" to="/" aria-label="MÂY trang chủ">MÂY<span>.</span></Link>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Điều hướng chính">
          <NavLink end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/" onClick={closeMenu}>Trang chủ</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/kham-pha" onClick={closeMenu}>Khám phá</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/stylist" onClick={closeMenu}>Stylist AI</NavLink>
          <a className="nav-link" href="/#story" onClick={closeMenu}>Về MÂY</a>
        </nav>
        <div className="header-actions">
          <form className="header-search" role="search" onSubmit={handleSearch}>
            <button type="submit" aria-label="Tìm kiếm"><Icon name="search" size={18} /></button>
            <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Tìm kiếm sản phẩm" placeholder="Tìm sản phẩm..." />
          </form>
          <Link className="icon-button header-favorites" to="/yeu-thich" aria-label={`Sản phẩm yêu thích, ${favoritesCount} sản phẩm`}>
            <Icon name="heart" />
            {favoritesCount > 0 && <span className="cart-count">{favoritesCount}</span>}
          </Link>
          <button className="icon-button account-button" type="button" aria-label="Tài khoản" onClick={() => notify('Tính năng tài khoản sẽ được kết nối khi backend sẵn sàng.')}>
            <Icon name="user" />
          </button>
        </div>
      </header>
    </>
  )
}
