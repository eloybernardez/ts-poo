export abstract class Animal {
  // con protected tenemos los beneficios de private pero con acceso en las subclases
  constructor(protected name: string) {
  }
  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log('dooo')
  }
}

export class Dog extends Animal {
  // al enviar name sin public, le decimos que solo queremos recibir el nombre y no volver a definirlo. Para esto a super le enviamos este parámetro
  constructor(name: string, public owner: string) {
    // super <=> constructor de la clase padre, Animal
    super(name)
  }
  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`)
    }
    this.doSomething() // podemos usarlo en la subclase
  }

  // polimorfismo: modifico el método de la clase padre
  move() {
    console.log("I've moved again!")
    // si buscara usar el de la clase padre
    super.move()
  }
}

const cheis = new Dog('Cheis', 'Nico')

cheis.woof(1)
// cheis.doSomething() no podemos acceder al método al ponerle protected
cheis.move()
