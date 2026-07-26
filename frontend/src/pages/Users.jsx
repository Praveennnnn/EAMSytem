import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Layout from '../components/Layout'
import { USER_ROLES, createUser } from '../api/users'

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: '',
  isActive: true,
}

const Users = () => {
  const [values, setValues] = useState(initialValues)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const set = (field) => (e) => setValues({ ...values, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await createUser(values)
      toast.success('User account created successfully! 👤')
      setValues(initialValues)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create user. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    setValues(initialValues)
    navigate('/dashboard')
  }

  const handleReset = () => {
    setValues(initialValues)
  }

  return (
    <Layout>
      <div>
        {/* Page Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>👤 User Management</h4>
          <p className="text-muted small mb-0">Create and manage user accounts for the attendance system</p>
        </div>

        <div className="row g-4">
          {/* User Form */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-header bg-white border-0 p-4"
                style={{ background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)' }}>
                <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>📝 User Information</h5>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>

                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                      <span className="me-1">🏷️</span> Username
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      style={{ borderColor: '#93c5fd' }}
                      placeholder="e.g. Jhon"
                      required
                      autoComplete="username"
                      value={values.username}
                      onChange={set('username')}
                    />
                  </div>

                  {/* First Name + Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                        <span className="me-1">👤</span> First Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        style={{ borderColor: '#93c5fd' }}
                        placeholder="e.g. John"
                        required
                        value={values.firstName}
                        onChange={set('firstName')}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                        <span className="me-1">👤</span> Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        style={{ borderColor: '#93c5fd' }}
                        placeholder="e.g. Doe"
                        required
                        value={values.lastName}
                        onChange={set('lastName')}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                      <span className="me-1">✉️</span> Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-3"
                      style={{ borderColor: '#93c5fd' }}
                      placeholder="john@gmail.com"
                      required
                      autoComplete="email"
                      value={values.email}
                      onChange={set('email')}
                    />
                  </div>

                  {/* Role selector */}
                  <div className="mb-3">
                    <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                      <span className="me-1">🎭</span> Select Role
                    </label>
                    <div className="d-flex gap-3">
                      {USER_ROLES.map((roleOption) => {
                        const selected = values.role === roleOption.value
                        return (
                          <div
                            key={roleOption.value}
                            onClick={() => setValues({ ...values, role: roleOption.value })}
                            className="flex-fill rounded-3 p-3 d-flex align-items-center gap-3"
                            style={{
                              cursor: 'pointer',
                              border: selected ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                              background: selected ? '#dbeafe' : '#fff',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              if (!selected) e.currentTarget.style.borderColor = '#93c5fd'
                            }}
                            onMouseLeave={(e) => {
                              if (!selected) e.currentTarget.style.borderColor = '#e5e7eb'
                            }}>
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                              style={{
                                width: '45px',
                                height: '45px',
                                background: selected ? '#3b82f6' : '#f1f5f9',
                                transition: 'all 0.2s',
                              }}>
                              <span style={{ fontSize: '1.3rem' }}>{selected ? '✓' : roleOption.icon}</span>
                            </div>
                            <div className="flex-grow-1">
                              <div className="fw-semibold" style={{ color: selected ? '#1e40af' : '#475569', fontSize: '0.9rem' }}>
                                {roleOption.label}
                              </div>
                              <div className="small" style={{ color: '#64748b', fontSize: '0.75rem' }}>
                                {roleOption.desc}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    <input
                      type="text"
                      value={values.role}
                      required
                      readOnly
                      style={{ opacity: 0, position: 'absolute', pointerEvents: 'none', width: 0, height: 0 }}
                    />
                  </div>

                  {/* Active status */}
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="isActive"
                        checked={values.isActive}
                        onChange={(e) => setValues({ ...values, isActive: e.target.checked })}
                      />
                      <label className="form-check-label small fw-semibold" htmlFor="isActive" style={{ color: '#1e3a8a' }}>
                        Active account
                      </label>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label small fw-semibold mb-2" style={{ color: '#1e3a8a' }}>
                      <span className="me-1">🔒</span> Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control rounded-start-3"
                        style={{ borderColor: '#93c5fd' }}
                        placeholder="password123"
                        required
                        minLength={6}
                        autoComplete="new-password"
                        value={values.password}
                        onChange={set('password')}
                      />
                      <button
                        type="button"
                        className="btn border"
                        style={{ borderColor: '#93c5fd', background: '#f8fafc', borderRadius: '0 0.5rem 0.5rem 0' }}
                        onClick={() => setShowPassword((p) => !p)}>
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                    <small className="text-muted">Minimum 6 characters required</small>
                  </div>

                  {/* Submit Buttons */}
                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn fw-semibold flex-grow-1 py-2 rounded-3 text-white border-0"
                      style={{ background: loading ? '#94a3b8' : 'linear-gradient(135deg,#1e40af,#3b82f6)' }}>
                      {loading
                        ? <><span className="spinner-border spinner-border-sm me-2" role="status" />Creating User...</>
                        : <><span className="me-2">✅</span> Create User Account</>}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-3 px-4"
                      onClick={handleReset}>
                      🔄 Reset
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary rounded-3 px-4"
                      onClick={handleCancel}>
                      ✕ Cancel
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="col-lg-4">
            {/* Tips Card */}
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-header bg-white border-0 p-4"
                style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)' }}>
                <h6 className="fw-bold mb-0" style={{ color: '#92400e' }}>💡 User Creation Tips</h6>
              </div>
              <div className="card-body p-4">
                <ul className="list-unstyled mb-0 small">
                  <li className="mb-2 d-flex gap-2">
                    <span>✓</span>
                    <span>Choose a unique username for login</span>
                  </li>
                  <li className="mb-2 d-flex gap-2">
                    <span>✓</span>
                    <span>Provide a valid email address</span>
                  </li>
                  <li className="mb-2 d-flex gap-2">
                    <span>✓</span>
                    <span>Use strong passwords with 6+ characters</span>
                  </li>
                  <li className="d-flex gap-2">
                    <span>✓</span>
                    <span>Keep inactive accounts disabled until setup is complete</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Card */}
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4">
                <h6 className="fw-bold mb-3" style={{ color: '#1e3a8a' }}>📊 Quick Stats</h6>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small text-muted">Total Users</span>
                  <span className="fw-bold" style={{ color: '#3b82f6' }}>0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small text-muted">Active Accounts</span>
                  <span className="fw-bold" style={{ color: '#10b981' }}>0</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="small text-muted">Pending Setup</span>
                  <span className="fw-bold" style={{ color: '#f59e0b' }}>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users
