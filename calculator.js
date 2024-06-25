// Crear un archivo .js que se encargue de solucionar operaciones matematicas basicas
// (suma, resta, multiplicacion, division, raiz cuadrada y elevar a potencia n)
// Cada operación debe ser una función (ejemplo function sum(a,b) { blah blah})
// Si se hace una operacion que no se puede (dividir por cero) deben poder atrapar ese error y
// mostrarlo en consola (recuerden no parar la ejecución de su archivo js capturar el error pero puede continuar operando)

function calculator(){
    function add(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('Error: all parameters must be numbers.')
        }
        else{
            return a + b;
        }
    }
    function subtract(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('Error: all parameters must be numbers.');
        }
        else{
            return a - b;
        }
    }
    function multiplication(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('Error: all parameters must be numbers.');
        }
        else{
            return a * b;
        }
    }
    function division(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('Error: all parameters must be numbers.');
        }
        else if (b === 0){
            throw new Error('Division by zero is not allowed.')
        }
        else{
            return a / b
        }
    }
    return{add, subtract, multiplication, division};
}



const myCalculator = calculator();
console.log(myCalculator.subtract(1, 10.5))
console.log(myCalculator.division(1, 2))