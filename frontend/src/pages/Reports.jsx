import React, { useState } from 'react'
import Layout from '../components/Layout'

const Reports = () => {
  const [reportType, setReportType] = useState('monthly')
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7))

  const reportCards = [
    { icon: '📊', title: 'Monthly Summary', desc: 'Attendance overview for the month', color: '#3b82f6' },
    { icon: '📈', title: 'Attendance Trends', desc: 'Visual analytics & patterns', color: '#8b5cf6' },
    { icon: '👥', title: 'Employee Stats', desc: 'Individual performance metrics', color: '#10b981' },
    { icon: '📉', title: 'Absence Report', desc: 'Track leave & absences', color: '#ef4444' },
  ]

  return (
    <Layout>
      <div>
        {/* Page Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
          <div>
            <h4 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>📊 Reports & Analytics</h4>
            <p className="text-muted small mb-0">Generate comprehensive attendance reports and insights</p>
          </div>
          <div className="d-flex gap-2">
            <input 
              type="month" 
              className="form-control rounded-3" 
              style={{ width: '180px', borderColor: '#93c5fd' }}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            />
            <button className="btn rounded-3 text-white fw-semibold px-4"
              style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
              📥 Download
            </button>
          </div>
        </div>

        {/* Report Type Cards */}
        <div className="row g-4 mb-4">
          {reportCards.map((report, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm rounded-4 h-100"
                style={{ 
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = report.color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                }}>
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: '60px', height: '60px', background: `${report.color}15` }}>
                    <span style={{ fontSize: '2rem' }}>{report.icon}</span>
                  </div>
                  <h6 className="fw-bold mb-1" style={{ color: '#1e3a8a' }}>{report.title}</h6>
                  <p className="small text-muted mb-0">{report.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Report Area */}
        <div className="row g-4">
          {/* Report Filters */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-header bg-white border-0 p-4">
                <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>🎯 Filters</h5>
              </div>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small fw-semibold" style={{ color: '#1e3a8a' }}>Report Type</label>
                  <select className="form-select rounded-3" style={{ borderColor: '#93c5fd' }}
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}>
                    <option value="daily">Daily Report</option>
                    <option value="weekly">Weekly Report</option>
                    <option value="monthly">Monthly Report</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label small fw-semibold" style={{ color: '#1e3a8a' }}>Department</label>
                  <select className="form-select rounded-3" style={{ borderColor: '#93c5fd' }}>
                    <option>All Departments</option>
                    <option>IT</option>
                    <option>HR</option>
                    <option>Sales</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-semibold" style={{ color: '#1e3a8a' }}>Status</label>
                  <select className="form-select rounded-3" style={{ borderColor: '#93c5fd' }}>
                    <option>All Status</option>
                    <option>Present</option>
                    <option>Absent</option>
                    <option>On Leave</option>
                  </select>
                </div>
                <button className="btn w-100 rounded-3 text-white fw-semibold"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
                  Generate Report
                </button>
              </div>
            </div>
          </div>

          {/* Report Display */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-header bg-white border-0 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold mb-0" style={{ color: '#1e3a8a' }}>Report Preview</h5>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary rounded-3">📊 Chart</button>
                    <button className="btn btn-sm btn-outline-primary rounded-3">📋 Table</button>
                  </div>
                </div>
              </div>
              <div className="card-body p-4">
                <div className="text-center py-5 text-muted">
                  <div className="mb-3">
                    <span style={{ fontSize: '4rem', opacity: 0.3 }}>📊</span>
                  </div>
                  <p className="fw-semibold mb-1">No Data Available</p>
                  <p className="small mb-3">Select filters and generate a report to view analytics</p>
                  <button className="btn btn-primary rounded-3 px-4">
                    <span className="me-2">📊</span> Generate Your First Report
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

export default Reports
