const delay = (callback: () => void, ms = 1000) => {
  setTimeout(callback, ms)
}

export default delay
