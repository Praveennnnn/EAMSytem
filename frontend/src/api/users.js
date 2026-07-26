import API from './axios'

export const USER_ENDPOINTS = {
  createUser: '/users/create-user',
}

export const USER_ROLES = [
  { value: 'admin', label: 'Admin', icon: '🛠️', desc: 'Full system access & management' },
  { value: 'user', label: 'User', icon: '👤', desc: 'Standard portal access' },
]

export function buildCreateUserPayload({
  username,
  firstName,
  lastName,
  email,
  password,
  role,
  isActive = true,
}) {
  return {
    username: username.trim(),
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.trim().toLowerCase(),
    password,
    role: role || 'user',
    isActive,
  }
}

export async function createUser(formValues) {
  const payload = buildCreateUserPayload(formValues)
  const { data } = await API.post(USER_ENDPOINTS.createUser, payload)
  return { payload, data }
}
  