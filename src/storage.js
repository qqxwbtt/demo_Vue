export default {
  fetch (key) {
    return window.JSON.parse(window.localStorage.getItem(key))
  },
  save (key, value) {
    window.localStorage.setItem(key, value)
  }
}
