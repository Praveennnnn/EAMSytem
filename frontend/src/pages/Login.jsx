import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import { UserContext } from '../context/ContextProvider';

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:3000/auth/login", values)
      .then(res => {
        if (res.data.message === "Login successful") {
          toast.success("Welcome back to EAMS! 👋")
          login(res.data.user)
          const role = res.data.user?.role
          navigate(role === 'admin' ? '/dashboard' : '/attendance')
        } else {
          toast.error(res.data.message || "Invalid credentials")
        }
      })
      .catch(() => toast.error("Server error. Please try again."))
      .finally(() => setLoading(false))
  }

  const features = [
    { icon: '📊', title: 'Real-time Tracking', desc: 'Monitor attendance instantly' },
    { icon: '🎯', title: 'Role Management', desc: 'Admin & employee access' },
    { icon: '📈', title: 'Smart Reports', desc: 'Comprehensive analytics' },
    { icon: '🔒', title: 'Secure Access', desc: 'Protected authentication' },
  ]

  return (
    <div className="container-fluid vh-100 p-0 overflow-hidden" 
      style={{background:'linear-gradient(160deg, #f8fafc 0%, #e0f2fe 100%)'}}>
      <div className="row g-0 h-100">

        {/* Left Panel - Brand & Features */}
        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white px-5 py-5 position-relative overflow-hidden"
          style={{background:'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #3b82f6 100%)'}}>
          
          {/* Decorative circles */}
          <div className="position-absolute rounded-circle" 
            style={{
              width: '400px', 
              height: '400px', 
              background: 'rgba(59,130,246,0.1)',
              top: '-100px',
              right: '-100px',
              filter: 'blur(60px)'
            }}></div>
          <div className="position-absolute rounded-circle" 
            style={{
              width: '300px', 
              height: '300px', 
              background: 'rgba(96,165,250,0.15)',
              bottom: '-80px',
              left: '-80px',
              filter: 'blur(50px)'
            }}></div>

          <div className="position-relative" style={{zIndex: 10}}>
            {/* Logo */}
            <div className="text-center mb-5">
              <div className="rounded-4 p-4 mb-4 d-inline-flex align-items-center justify-content-center shadow-lg"
                style={{background:'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255,255,255,0.2)'}}>
                <span className="display-3 lh-1">👥</span>
              </div>
              <h1 className="fw-bold mb-2" style={{fontSize: '2.2rem', letterSpacing: '-0.5px'}}>
                Employee Attendance
              </h1>
              <h2 className="fw-bold mb-3" style={{fontSize: '2.2rem', letterSpacing: '-0.5px', color: '#60a5fa'}}>
                Management System
              </h2>
              <p className="text-uppercase fw-semibold mb-0" 
                style={{color:'rgba(191,219,254,0.8)', letterSpacing:'3px', fontSize: '0.8rem'}}>
                Smart · Efficient · Secure
              </p>
            </div>

            {/* Features Grid */}
            <div className="row g-3 mb-4">
              {features.map((feature, idx) => (
                <div key={idx} className="col-6">
                  <div className="p-3 rounded-3 h-100"
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span style={{fontSize: '1.5rem'}}>{feature.icon}</span>
                      <span className="fw-semibold" style={{fontSize: '0.9rem'}}>{feature.title}</span>
                    </div>
                    <p className="small mb-0 opacity-75">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="d-flex justify-content-center gap-5 mt-5 pt-4 border-top" 
              style={{borderColor: 'rgba(255,255,255,0.1) !important'}}>
              {[
                {value: '99.9%', label: 'Uptime'},
                {value: '24/7', label: 'Support'},
                {value: '100%', label: 'Secure'}
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="fw-bold mb-1" style={{fontSize: '1.5rem', color: '#60a5fa'}}>
                    {stat.value}
                  </div>
                  <div className="small text-uppercase opacity-75" style={{letterSpacing: '1px', fontSize: '0.7rem'}}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center px-4 py-5">
          <div className="w-100" style={{maxWidth: '480px'}}>
            
            {/* Mobile Logo */}
            <div className="d-lg-none text-center mb-4">
              <div className="rounded-4 p-3 mb-3 d-inline-flex"
                style={{background:'linear-gradient(135deg, #1e3a8a, #3b82f6)'}}>
                <span className="fs-1">👥</span>
              </div>
              <h3 className="fw-bold" style={{color: '#1e3a8a'}}>EAMS Portal</h3>
            </div>

            {/* Login Card */}
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              
              {/* Header */}
              <div className="p-4 text-center">
                <span className="badge rounded-pill px-4 py-2 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
                    color: '#1e3a8a',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '1px'
                  }}>
                  🔐 SECURE LOGIN
                </span>
                <h2 className="fw-bold mb-2" style={{color: '#1e3a8a', fontSize: '1.8rem'}}>
                  Welcome Back
                </h2>
                <p className="text-muted mb-0">Sign in to access your attendance portal</p>
              </div>

              {/* Form */}
              <div className="card-body p-4 pt-0">
                <form onSubmit={handleSubmit}>

                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold mb-2" style={{color:'#1e3a8a'}}>
                      <span className="me-1">👤</span> Username
                    </label>
                    <input 
                      type="text" 
                      className="form-control form-control-lg rounded-3"
                      style={{
                        borderColor:'#cbd5e1', 
                        background:'#f8fafc',
                        transition: 'all 0.2s'
                      }}
                      placeholder="Enter your username" 
                      required
                      value={values.username}
                      onChange={(e) => setValues({ ...values, username: e.target.value })}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6'
                        e.target.style.background = '#fff'
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1'
                        e.target.style.background = '#f8fafc'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label small fw-semibold mb-2" style={{color:'#1e3a8a'}}>
                      <span className="me-1">🔒</span> Password
                    </label>
                    <div className="position-relative">
                      <input 
                        type={showPassword ? 'text' : 'password'}
                        className="form-control form-control-lg rounded-3"
                        style={{
                          borderColor:'#cbd5e1', 
                          background:'#f8fafc',
                          paddingRight: '45px',
                          transition: 'all 0.2s'
                        }}
                        placeholder="Enter your password" 
                        required
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#3b82f6'
                          e.target.style.background = '#fff'
                          e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = '#cbd5e1'
                          e.target.style.background = '#f8fafc'
                          e.target.style.boxShadow = 'none'
                        }}
                      />
                      <button 
                        type="button"
                        className="btn position-absolute"
                        style={{
                          right: '8px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'transparent',
                          border: 'none',
                          fontSize: '1.2rem',
                          padding: '0.25rem 0.5rem'
                        }}
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  {/* Remember & Forgot */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label small text-muted" htmlFor="remember">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="small text-decoration-none fw-semibold" 
                      style={{color: '#3b82f6'}}
                      onClick={(e) => {
                        e.preventDefault()
                        toast.info('Contact your administrator for password reset')
                      }}>
                      Forgot password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="btn btn-lg w-100 rounded-3 text-white fw-semibold shadow-sm border-0"
                    style={{
                      background: loading ? '#94a3b8' : 'linear-gradient(135deg,#1e3a8a,#3b82f6)',
                      padding: '0.85rem',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(30,58,138,0.3)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = ''
                    }}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Signing in...
                      </>
                    ) : (
                      <>
                        <span className="me-2">🚀</span>
                        Sign In to EAMS
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="position-relative my-4">
                  <hr className="m-0" style={{borderColor:'#e2e8f0'}} />
                  <span className="position-absolute top-50 start-50 translate-middle px-3 small fw-semibold"
                    style={{background: '#fff', color: '#64748b'}}>
                    SECURE PORTAL
                  </span>
                </div>

                {/* Security Badges */}
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  {[
                    {icon: '🔒', text: 'SSL Encrypted'},
                    {icon: '🛡️', text: 'Secure Access'},
                    {icon: '✅', text: 'Verified'}
                  ].map((badge, idx) => (
                    <span key={idx} className="badge rounded-pill px-3 py-2 small"
                      style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        border: '1px solid #e2e8f0'
                      }}>
                      <span className="me-1">{badge.icon}</span>
                      {badge.text}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <p className="text-center small mt-4 mb-0" style={{color:'#94a3b8'}}>
                  © 2026 EAMS. All rights reserved.
                </p>
              </div>
            </div>

            {/* Help Text */}
            <div className="text-center mt-4">
              <p className="small text-muted mb-0">
                Need help? Contact your system administrator
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login