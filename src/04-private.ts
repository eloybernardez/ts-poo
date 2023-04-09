// si no se especifica lo contrario, los métodos y propiedades son públicas
export class MyDate {
  year: number
  month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year
    this.month = month
    this.day = day
  }

  printFormat(): string {
    const day = this.addPadding(this.day)
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
      this.day += amount
    }
    else if (type === 'months') {
      this.month += amount
    }
    else if (type === 'years') {
      this.year += amount
    }
  }

  getDay() {
    return this.day
  }
}

const myDate = new MyDate(1993, 8, 20)
console.log(myDate.printFormat())
// myDate.day = 12
// console.log(myDate.day)

// addPadding no debería ser público
// console.log(myDate.addPadding())
console.log(myDate.getDay())
