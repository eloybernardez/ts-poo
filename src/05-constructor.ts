export class MyDate {
  // En TS, definimos y asignamos los parámetros más facilmente. Si queremos que esto se asigne de esta manera, DEBEMOS DECLARAR SI SON PÚBLICOS O PRIVADOS. De otra forma, los parámetros que enviemos solo serán accesibles dentro del constructor
  constructor(public year: number = 1993, public month: number = 8, private day: number = 20) {
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
console.log(myDate.getDay())

const myDate2 = new MyDate()
console.log('empty constructor () =>', myDate2.printFormat())

const myDate3 = new MyDate(2023)
console.log('(2023) =>', myDate3.printFormat())

const myDate4 = new MyDate(2023, 3)
console.log('(2023,3) =>', myDate4.printFormat())
