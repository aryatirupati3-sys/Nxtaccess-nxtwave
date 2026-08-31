import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleStartAssessment = () => {
    navigate('/assessment')
  }

  return (
    <div className="home-container">
      <Header onLogout={onLogout} />
      <div className="home-content">
        <div className="assessment-card">
          <img
            src="https://res.cloudinary.com/du7bkxqkv/image/upload/v1631600912/Group_7658_1_xhwhps.png"
            alt="assessment"
            className="assessment-image"
          />
          <h1 className="assessment-title">Welcome to NXT Assess</h1>
          <p className="assessment-description">
            Test your knowledge and skills with our comprehensive assessment platform.
          </p>
          <button className="start-button" onClick={handleStartAssessment}>
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
