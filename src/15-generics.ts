import { Dog } from "./08-inheritance"
// function getValue(value: unknown) {
//   return value
// }

// function getValue(value: string | number) {
//   return value
// }

function getValue<T>(value: T) {
  const array: T[] = [value]
  return value
}

getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
getValue<number[]>([3, 5, 11]).forEach
// Promise<boolean>, axios.get<string>(...) -> usamos genéricos desde antes!

const fifi = new Dog('fifi', 'nico')
getValue<Dog>(fifi).greeting()
