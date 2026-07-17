import React, { useState, useContext } from 'react'
import Layout from '../components/Layout'
import { UserContext } from '../context/ContextProvider'

const Attendance = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [searchTerm, setSearchTerm] = useState('')
  const { role, user } = useContext(UserContext)

  return (  
    <Layout>
      <div>
        {/* Page Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
          <div>
            <h4 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>📅 Mark Attendance</h4>
            <p className="text-muted small mb-0">
              {role === 'employee' 
                ? `Welcome ${user?.username}! Mark your attendance for the day` 
                : 'Record and track employee attendance for the selected date'}
            </p>
          </div>
          <div className="d-flex gap-2">
            <input 
              type="date" 
              className="form-control rounded-3" 
              style={{ width: '180px', borderColor: '#93c5fd' }}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            {role === 'admin' && (
              <button className="btn rounded-3 text-white fw-semibold px-4"
                style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
                📊 Export
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Bar - Admin Only */}
        {role === 'admin' && (
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0" style={{ borderColor: '#93c5fd' }}>
                      🔍
                    </span>
                    <input 
                      type="text" 
                      className="form-control border-start-0" 
                      placeholder="Search employees by name or ID..."
                      style={{ borderColor: '#93c5fd' }}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-2">
                    <select className="form-select rounded-3" style={{ borderColor: '#93c5fd' }}>
                      <option>All Departments</option>
                      <option>IT</option>
                      <option>HR</option>
                      <option>Sales</option>
                    </select>
                    <select className="form-select rounded-3" style={{ borderColor: '#93c5fd' }}>
                      <option>All Status</option>
                      <option>Present</option>
                      <option>Absent</option>
                      <option>Leave</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attendance Table */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>
                {role === 'employee' ? 'My Attendance' : 'Employee List'}
              </h5>
              <span className="badge rounded-pill px-3 py-2"
                style={{ background: '#dbeafe', color: '#1e40af' }}>
                0 {role === 'employee' ? 'Records' : 'Employees'}
              </span>
            </div>
          </div>
          <div className="card-body p-4">
            {role === 'employee' ? (
              <div className="text-center py-5">
                <div className="mb-4">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #dbeafe, #bfdbfe)' }}>
                    <span style={{ fontSize: '3rem' }}>👤</span>
                  </div>
                  <h5 className="fw-bold mb-2" style={{ color: '#1e3a8a' }}>Welcome, {user?.username}!</h5>
                  <p className="text-muted mb-4">Mark your attendance for today</p>
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn btn-lg rounded-3 text-white fw-semibold px-5 py-3 shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)' }}>
                    <span className="me-2">✅</span> Check In
                  </button>
                  <button className="btn btn-lg btn-outline-danger rounded-3 fw-semibold px-5 py-3">
                    <span className="me-2">🚪</span> Check Out
                  </button>
                </div>
                <div className="mt-4 pt-4 border-top">
                  <p className="small text-muted mb-2">Today's Status</p>
                  <div className="d-flex gap-4 justify-content-center">
                    <div>
                      <span className="small text-muted">Check In:</span>
                      <div className="fw-bold" style={{ color: '#1e3a8a' }}>--:--</div>
                    </div>
                    <div>
                      <span className="small text-muted">Check Out:</span>
                      <div className="fw-bold" style={{ color: '#1e3a8a' }}>--:--</div>
                    </div>
                    <div>
                      <span className="small text-muted">Hours:</span>
                      <div className="fw-bold" style={{ color: '#1e3a8a' }}>0h 0m</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-5 text-muted">
                <div className="mb-3">
                  <span style={{ fontSize: '4rem', opacity: 0.3 }}>👥</span>
                </div>
                <p className="fw-semibold mb-1">No Employees Found</p>
                <p className="small mb-3">Register employees first to start marking attendance</p>
                <button className="btn btn-primary rounded-3 px-4"
                  onClick={() => window.location.href = '/register'}>
                  <span className="me-2">👤</span> Register Employee
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Attendance
