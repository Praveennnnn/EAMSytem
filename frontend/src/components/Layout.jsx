import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserContext } from '../context/ContextProvider'

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { logout, role } = useContext(UserContext)

  const allMenuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard', desc: 'Overview & Stats', roles: ['admin'] },
    // { path: '/register', icon: '👤', label: 'Register', desc: 'Add Employee', roles: ['admin'] },
    { path: '/attendance', icon: '📅', label: 'Attendance', desc: 'Mark Attendance', roles: ['admin', 'employee'] },
    { path: '/reports', icon: '📈', label: 'Reports', desc: 'View Reports', roles: ['admin'] },
    { path: '/employees', icon: '👥', label: 'Employees', desc: 'Manage Staff', roles: ['admin'] },
    { path: '/users', icon: '👤', label: 'Users', desc: 'Create User', roles: ['admin'] },
  ]

  const menuItems = allMenuItems.filter(item => item.roles.includes(role))

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path

  return (
    <div className="d-flex min-vh-100">
      <div 
        className="d-flex flex-column position-relative shadow-lg"
        style={{
          width: collapsed ? '80px' : '280px',
          background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
          transition: 'width 0.3s ease',
          minHeight: '100vh',
        }}>
        
        {/* Header */}
        <div className="p-4 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div className="d-flex align-items-center justify-content-between">
            {!collapsed && (
              <div>
                <h5 className="text-white fw-bold mb-0">EAMS</h5>
                <p className="text-white-50 small mb-0">
                  {role === 'admin' ? 'Admin Portal' : 'Employee Portal'}
                </p>
              </div>
            )}
            {collapsed && (
              <div className="text-center w-100">
                <span className="text-white fw-bold" style={{ fontSize: '1.5rem' }}>E</span>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-grow-1 py-3">
          {menuItems.map((item) => {
            const active = isActive(item.path)
            return (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className="position-relative mx-3 mb-2"
                style={{ cursor: 'pointer' }}>
                <div
                  className="d-flex align-items-center gap-3 px-3 py-3 rounded-3"
                  style={{
                    background: active ? '#3b82f6' : 'transparent',
                    color: active ? '#fff' : 'rgba(255,255,255,0.7)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.background = 'rgba(59,130,246,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.background = 'transparent'
                  }}>
                  <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                  {!collapsed && (
                    <div className="flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="fw-semibold" style={{ fontSize: '0.95rem' }}>{item.label}</div>
                      <div className="small opacity-75" style={{ fontSize: '0.75rem' }}>{item.desc}</div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

     
        <div className="p-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <button
            onClick={handleLogout}
            className="btn w-100 d-flex align-items-center gap-3 px-3 py-3 rounded-3 border-0"
            style={{
              background: 'rgba(239,68,68,0.15)',
              color: '#fca5a5',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239,68,68,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239,68,68,0.15)'
            }}>
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>🚪</span>
            {!collapsed && (
              <span className="fw-semibold" style={{ fontSize: '0.95rem' }}>Logout</span>
            )}
          </button>
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-sm rounded-circle position-absolute shadow-sm"
          style={{
            width: '32px',
            height: '32px',
            background: '#fff',
            border: '2px solid #e2e8f0',
            right: '-16px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            color: '#1e3a8a',
            zIndex: 1000,
          }}>
          {collapsed ? '»' : '«'}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1" style={{ background: 'linear-gradient(160deg, #fffbeb 0%, #dbeafe 100%)' }}>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
