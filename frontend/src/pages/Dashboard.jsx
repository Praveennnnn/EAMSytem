import React from 'react'
import Layout from '../components/Layout'

const Dashboard = () => {
  const stats = [
    { icon: '👥', label: 'Total Employees', value: '0', color: '#3b82f6', bg: '#dbeafe' },
    { icon: '✅', label: 'Present Today', value: '0', color: '#22c55e', bg: '#dcfce7' },
    { icon: '❌', label: 'Absent Today', value: '0', color: '#ef4444', bg: '#fee2e2' },
    { icon: '⏰', label: 'On Leave', value: '0', color: '#f59e0b', bg: '#fef3c7' },
  ]

  return (
    <Layout>
      <div>
        {/* Page Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>📊 Dashboard Overview</h4>
          <p className="text-muted small mb-0">Real-time attendance monitoring and statistics</p>
        </div>

        {/* Stats Grid */}
        <div className="row g-4 mb-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm rounded-4 h-100"
                style={{ transition: 'transform 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: '60px', height: '60px', background: stat.bg }}>
                      <span style={{ fontSize: '1.8rem' }}>{stat.icon}</span>
                    </div>
                    <div className="flex-grow-1">
                      <h2 className="fw-bold mb-1" style={{ color: stat.color }}>{stat.value}</h2>
                      <p className="text-muted small mb-0">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts & Activity */}
        <div className="row g-4">
          {/* Recent Activity */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>📋 Recent Activity</h5>
              </div>
              <div className="card-body p-4">
                <div className="text-center py-5 text-muted">
                  <div className="mb-3">
                    <span style={{ fontSize: '4rem', opacity: 0.3 }}>📊</span>
                  </div>
                  <p className="fw-semibold mb-1">No Recent Activity</p>
                  <p className="small mb-0">Activity will appear here once employees start marking attendance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>⚡ Quick Actions</h5>
              </div>
              <div className="card-body p-3">
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-light rounded-3 d-flex align-items-center gap-3 p-3 text-start border-0"
                    style={{ background: '#f8fafc' }}>
                    <span style={{ fontSize: '1.5rem' }}>👤</span>
                    <div>
                      <div className="fw-semibold" style={{ color: '#1e3a8a', fontSize: '0.9rem' }}>Register Employee</div>
                      <div className="small text-muted">Add new staff member</div>
                    </div>
                  </button>
                  <button className="btn btn-light rounded-3 d-flex align-items-center gap-3 p-3 text-start border-0"
                    style={{ background: '#f8fafc' }}>
                    <span style={{ fontSize: '1.5rem' }}>📅</span>
                    <div>
                      <div className="fw-semibold" style={{ color: '#1e3a8a', fontSize: '0.9rem' }}>Mark Attendance</div>
                      <div className="small text-muted">Record daily attendance</div>
                    </div>
                  </button>
                  <button className="btn btn-light rounded-3 d-flex align-items-center gap-3 p-3 text-start border-0"
                    style={{ background: '#f8fafc' }}>
                    <span style={{ fontSize: '1.5rem' }}>📊</span>
                    <div>
                      <div className="fw-semibold" style={{ color: '#1e3a8a', fontSize: '0.9rem' }}>View Reports</div>
                      <div className="small text-muted">Generate analytics</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
