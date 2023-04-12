export class MyDate {
  constructor(public year: number = 1993, private _month: number = 8, private _day: number = 20) {
  }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount
    }
    else if (type === 'months') {
      this._month += amount
    }
    else if (type === 'years') {
      this.year += amount
    }
  }

  get day() {
    // code
    return this._day
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true
    if (this.year % 100 === 0) return false
    return this.year % 4 === 0
  }

  get month() {
    return this._month
  }

  // setter solo modifican, no devuelven nada
  set month(newMonth: number) {
    if (newMonth >= 1 && newMonth <= 12) {
      this._month = newMonth
    } else {
      throw new Error('month out of range')
    }
  }
}

const myDate = new MyDate(1996, 8, 5)
console.log(myDate.printFormat())
myDate.month = 5
console.log('run', myDate.month)
myDate.month = 13
console.log('esto no debe aparecer', myDate.month)
