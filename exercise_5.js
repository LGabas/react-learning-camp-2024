/*Utiliza el método filter para filtrar los números pares del array creado en el ejercicio anterior.
Imprime el nuevo array por consola.*/

const numbers = [1, 2, 3, 4, 5, -2, 100, -5];
const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);

console.log(evenNumbers);
