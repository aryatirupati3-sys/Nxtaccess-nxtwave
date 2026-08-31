import { useNavigate } from 'react-router-dom'
import './index.css'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/login')
  }

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <img
          src="/notfound.svg"
          alt="not found"
          className="not-found-image"
        />
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-description">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button className="go-home-button" onClick={handleGoHome}>
          Go to Login
        </button>
      </div>
    </div>
  )
}

export default NotFound
