import API from './axios'

export const AUTH_ENDPOINTS = {
  login: '/users/login-user',
}

export function buildLoginPayload({ username, password }) {
  return {
    username: username.trim(),
    password,
  }
}

export async function loginUser(formValues) {
  const payload = buildLoginPayload(formValues)
  const { data } = await API.post(AUTH_ENDPOINTS.login, payload)
  return { payload, data }
}

export function normalizeAuthUser(data) {
  const user = data?.data ?? data?.user ?? data
  return {
    ...user,
    token: data?.token ?? user?.token ?? null,
  }
}

export function getPostLoginRoute(role) {
  return role === 'admin' ? '/dashboard' : '/attendance'
}
