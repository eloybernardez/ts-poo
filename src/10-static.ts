console.log('Math.PI', Math.PI)
console.log(Math.max(1, 2, 3, 4, 5, 2, 3, 9))

// Si no colocamos static debemos instanciar la clase para poder acceder a PI
class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]) {
    // code
    return numbers.sort((a, b) => b - a)[0]
  }
}

// SIN STATIC
// const math = new MyMath()
// console.log(math.PI)

// CON STATIC
console.log('MyMath.PI', MyMath.PI)
// Sin embargo, podemos modificar su valor
// MyMath.PI = 12
// Si agregamos la propiedad readonly arreglamos esto
const numbers = [1, 2, 3, 55, 5, 2, 3, 9]
console.log("MyMath.max", MyMath.max(1, 2, 3, 4, 5, 2, 3, 9))
console.log("MyMath.max con array", MyMath.max(...numbers))

const negativeNumbers = [-1, -9, -8]

console.log("MyMath.max con array de negativos", MyMath.max(...negativeNumbers))
