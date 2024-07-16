/*Crea una función que tome un array de números como parámetro y devuelva la suma de todos ellos.
Utiliza el método reduce para implementar la función. */

const numbers = [1, 2, 3, 4, 5, -2, 100, -5];
const addNumbers = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);

console.log(addNumbers);