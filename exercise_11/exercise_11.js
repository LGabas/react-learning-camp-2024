/*Combina todos los conceptos aprendidos en los ejercicios anteriores para
crear una pequeña aplicación que permita al usuario ingresar su nombre y edad en un formulario.
Al enviar el formulario, la aplicación debe mostrar un mensaje de bienvenida con el nombre y edad ingresados.*/

document.getElementById('welcomeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Mostrar el mensaje de bienvenida
    const welcomeText = document.getElementById('welcomeText');
    welcomeText.textContent = `Hello ${name}. You're ${age} years old.`;

    // Mostrar el mensaje de bienvenida
    document.getElementById('welcomeMessage').style.display = 'block';
  });