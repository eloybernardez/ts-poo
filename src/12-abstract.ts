import { Animal, Dog } from "./09-protected";

// Con abstract hacemos que no se puedan crear instancias de una clase pero si de sus clases hijas
const animal = new Animal('Elite')
animal.greeting()

const cheis = new Dog('Cheis', 'Nico')
cheis.greeting()
cheis.woof(2)
