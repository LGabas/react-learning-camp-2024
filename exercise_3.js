/* Crea una función que tome dos números como parámetros y devuelva el resultado de sumarlos.
Utiliza una arrow function para definir la función.*/

const addNumbers = (...numbers) =>{
    let total = 0
    for (index in numbers){
        total += numbers[index]
    }
    return total
};


console.log(addNumbers(1, 2, 3, 4, 5, 1.5, -1, 100));