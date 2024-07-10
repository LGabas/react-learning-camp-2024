/* Crear un archivo .js que se encargue de solucionar operaciones matematicas basicas
(suma, resta, multiplicacion, division, raiz cuadrada y elevar a potencia n)
Cada operación debe ser una función (ejemplo function sum(a,b) { blah blah})
Si se hace una operacion que no se puede (dividir por cero) deben poder atrapar ese error y
mostrarlo en consola (recuerden no parar la ejecución de su archivo js capturar el error pero puede continuar operando)*/

function calculator(){
    function add(a, b){
        try{
            if (typeof a !== 'number' || typeof b !== 'number' ){
                throw new Error('all parameters must be numbers.')
            } else {
                return a + b;
            }
    } catch(error){
        console.log(error)
    }
}
    function subtract(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('all parameters must be numbers.');
        }
        else{
            return a - b;
        }
    }
    function multiplication(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('all parameters must be numbers.');
        }
        else{
            return a * b;
        }
    }
    function division(a, b){
        if (typeof a !== 'number' || typeof b !== 'number' ){
            throw new Error('all parameters must be numbers.');
        }
        else if (b === 0){
            throw new Error('Division by zero is not allowed.')
        }
        else{
            return a / b
        }
    }
    function raise(a, b){
        try{
            if (typeof a !== 'number' || typeof b !== 'number' ){
                throw new Error('all parameters must be numbers.');
            }else{
                return Math.pow(a, b)
            }
        }catch(error){
            console.log(error)
        }
    }
    function squareRoot(a){
        if (typeof a !== 'number'){
            throw new Error('parameter must be number.');
        }
        else if (a < 0){
            throw new Error('Negative numbers are not allowed.')
        }
        else{
            return Math.sqrt(a)
        }
    }
    return{add, subtract, multiplication, division, raise, squareRoot};
}



const myCalculator = calculator();
console.log(myCalculator.add('l', 1))
console.log(myCalculator.subtract(1, 10.5))
console.log(myCalculator.division(1, 0))
console.log(myCalculator.raise(2, 2))
console.log(myCalculator.squareRoot(9))