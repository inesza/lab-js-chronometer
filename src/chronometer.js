class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    return (`0${value}`).slice(-2)
  }
  

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
