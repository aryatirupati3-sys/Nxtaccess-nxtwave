import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header-content">
        <button className="logo-button" onClick={handleLogoClick}>
          <img
            src="/logo.svg"
            alt="website logo"
            className="header-logo"
          />
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
