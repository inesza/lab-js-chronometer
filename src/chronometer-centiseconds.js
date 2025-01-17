class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => { 
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 10)
  }

  getMinutes() {
    let minutes = Math.floor((this.currentTime / 60)/ 100)
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor((this.currentTime / 100) % 60 ) 
    return seconds
  }

  getCentiseconds() {
    let centiseconds = Math.floor(this.currentTime % 100)
    return centiseconds
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
  }
}
