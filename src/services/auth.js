export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

export const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const fakehandleLogin = ({ username, password }) => {
  if (username === `admin` && password === `pass`) {
    return setUser({
      username: `admin`,
      name: `Admin`,
      email: `admin@example.org`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  // to safeguard the localstorage called in the getuser fucntion
  if (!isBrowser) return false 
  const user = getUser()

  if (user) return !!user.username
}

export const logout = callback => {
  if (!isBrowser) return
  setUser({})
  callback()
}

export const setLanguage = (language) => {
  console.log(language);
  window.localStorage.setItem("lan", language);
  window.location.reload();
  
}

export const getLanguage = () =>
  isBrowser() && window.localStorage.getItem("lan")
    ? window.localStorage.getItem("lan")
    : null