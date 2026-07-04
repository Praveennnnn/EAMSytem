import React, { useState } from 'react'
import Layout from '../components/Layout'

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterRole, setFilterRole] = useState('all')

  return (
    <Layout>
      <div>
        {/* Page Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
          <div>
            <h4 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>👥 Employee Management</h4>
            <p className="text-muted small mb-0">View, search, and manage all registered employees</p>
          </div>
          <button className="btn rounded-3 text-white fw-semibold px-4"
            style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
            <span className="me-2">➕</span> Add Employee
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-3 d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', background: '#dbeafe' }}>
                  <span style={{ fontSize: '1.5rem' }}>👥</span>
                </div>
                <div>
                  <h4 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>0</h4>
                  <p className="text-muted small mb-0">Total Employees</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-3 d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', background: '#f3e8ff' }}>
                  <span style={{ fontSize: '1.5rem' }}>🛠️</span>
                </div>
                <div>
                  <h4 className="fw-bold mb-0" style={{ color: '#7c3aed' }}>0</h4>
                  <p className="text-muted small mb-0">Admins</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-3 d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', background: '#dcfce7' }}>
                  <span style={{ fontSize: '1.5rem' }}>👤</span>
                </div>
                <div>
                  <h4 className="fw-bold mb-0" style={{ color: '#16a34a' }}>0</h4>
                  <p className="text-muted small mb-0">Regular Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4">
            <div className="row g-3">
              <div className="col-md-8">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0" style={{ borderColor: '#93c5fd' }}>
                    🔍
                  </span>
                  <input 
                    type="text" 
                    className="form-control border-start-0" 
                    placeholder="Search by name, email, or employee ID..."
                    style={{ borderColor: '#93c5fd' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <select 
                  className="form-select rounded-3" 
                  style={{ borderColor: '#93c5fd' }}
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value)}>
                  <option value="all">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Employee List */}
        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-header bg-white border-0 p-4">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>Employee Directory</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-primary rounded-3">📥 Import</button>
                <button className="btn btn-sm btn-outline-primary rounded-3">📤 Export</button>
              </div>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="text-center py-5 text-muted">
              <div className="mb-3">
                <span style={{ fontSize: '4rem', opacity: 0.3 }}>👥</span>
              </div>
              <p className="fw-semibold mb-1">No Employees Registered</p>
              <p className="small mb-3">Start by adding your first employee to the system</p>
              <button className="btn btn-primary rounded-3 px-4">
                <span className="me-2">➕</span> Register First Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Employees
