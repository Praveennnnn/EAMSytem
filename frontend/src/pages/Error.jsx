import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center" 
      style={{ background: 'linear-gradient(160deg, #fffbeb 0%, #dbeafe 100%)' }}>
      <div className="text-center px-4">
        <div className="mb-4" style={{ fontSize: '120px', lineHeight: 1 }}>🚫</div>
        <h1 className="fw-bold mb-3" style={{ color: '#1e3a8a', fontSize: '2.5rem' }}>Access Denied</h1>
        <p className="text-muted mb-4" style={{ fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto' }}>
          You don't have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button 
            className="btn btn-lg fw-semibold text-white border-0 px-4 py-3 rounded-3"
            style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}
            onClick={() => navigate('/')}>
            🏠 Back to Login
          </button>
        </div>
        <p className="text-muted small mt-4">Employee Attendance Management System</p>
      </div>
    </div>
  )
}

export default Error