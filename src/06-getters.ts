export class MyDate {
  constructor(public year: number = 1993, public month: number = 8, private _day: number = 20) {
  }

  printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
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
      this.month += amount
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


}

const myDate = new MyDate(1996, 8, 5)
console.log(myDate.printFormat())
// getter: hacemos que la variable privada sea accesible pero no modificable
console.log(myDate.day)
console.log('1996', myDate.isLeapYear)

const myDate2 = new MyDate(1993, 8, 5)
console.log('1993', myDate2.isLeapYear)

const myDate3 = new MyDate(2000, 8, 5)
console.log('2000', myDate3.isLeapYear)

const myDate4 = new MyDate(2004, 8, 5)
console.log('2004', myDate4.isLeapYear)
