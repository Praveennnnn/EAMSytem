import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

const initialValues = { name: '', email: '', password: '' }

const Users = () => {
  const [values, setValues] = useState(initialValues)
  const [createdUser, setCreatedUser] = useState(null)
  const navigate = useNavigate()

  const updateValue = (field) => (event) => {
    setValues((currentValues) => ({ ...currentValues, [field]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password,
    }

    setCreatedUser(payload)
    setValues(initialValues)
  }

  const handleCancel = () => {
    setValues(initialValues)
    setCreatedUser(null)
    navigate('/dashboard')
  }

  return (
    <Layout>
      <div className="mx-auto" style={{ maxWidth: '680px' }}>
        <div className="mb-4">
          <h1 className="h3 fw-bold mb-1" style={{ color: '#1e3a8a' }}>User Management</h1>
          <p className="text-muted mb-0">Create an account for a new user.</p>
        </div>

        <div className="card border-0 shadow-sm rounded-4">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="user-name">Name</label>
                <input
                  id="user-name"
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="John Doe"
                  value={values.name}
                  onChange={updateValue('name')}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold" htmlFor="user-email">Email</label>
                <input
                  id="user-email"
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="john@example.com"
                  value={values.email}
                  onChange={updateValue('email')}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold" htmlFor="user-password">Password</label>
                <input
                  id="user-password"
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter a password"
                  value={values.password}
                  onChange={updateValue('password')}
                  required
                  minLength="8"
                  autoComplete="new-password"
                />
                <div className="form-text">Use at least 8 characters.</div>
              </div>

              <div className="d-flex flex-column-reverse flex-sm-row justify-content-end gap-2">
                <button type="button" className="btn btn-outline-secondary px-4" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary px-4">
                  Create User
                </button>
              </div>
            </form>

            {createdUser && (
              <div className="alert alert-success mt-4 mb-0" role="status">
                <strong>User details saved locally.</strong>
                <div className="small mt-1">Payload ready: {JSON.stringify(createdUser)}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users
