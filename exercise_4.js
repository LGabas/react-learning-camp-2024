/*Crea un array de números y utiliza el método map para duplicar cada número del array.
Luego, imprime el nuevo array por consola.*/

const numbers = [1, 2, 3, 4, 5, -2, 100, -5];
const duplicatedNumbers = numbers.map(numbers => numbers*2);

console.log(duplicatedNumbers);

