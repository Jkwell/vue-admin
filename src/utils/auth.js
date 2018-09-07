import Cookie from 'js-cookie'

const TOKEN_KEY = 'Admin-Token'

export function getToken () {
  return Cookie.get(TOKEN_KEY)
}

export function setToken (val) {
  return Cookie.set(TOKEN_KEY, val)
}

export function removeToken () {
  return Cookie.remove(TOKEN_KEY)
}
