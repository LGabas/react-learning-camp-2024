/*Crea una función que tome un número como parámetro y simule un error si el número es negativo.
Utiliza try-catch para manejar el error e imprimir un mensaje de error por consola.*/

function evaluateNumber(num){
    try{
        if (num < 0){
            throw new Error("Negative numbers are not allowed.")
        } else{
            return num
        }
    }catch(error){
        console.log(error)
    }
}

let number = -1

console.log(evaluateNumber(number))