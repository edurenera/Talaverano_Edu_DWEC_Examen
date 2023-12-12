/* En el Directorio if-op-logicos tiene la estructura básica de un HTML, deberá crear un fichero llamado script.js, 
enlazarlo al archivo HTML y crear el siguiente programa:
Escribirá una función llamada saludarSegunHora(), en ella deberá instanciar un objeto de la clase Date() que es un objeto predefinido de 
JavaScript, este objeto tiene un método llamado getHours() que devuelve la hora actual en formato numérico.
Deberá programar una serie de sentencias condicionales que saluden al usuario según sea la hora:  5 – 12 “buenos días”; 12 – 18 “buenas 
tardes” y lo demás “buenas noches”.
El saludo se debe escribir sobre el documento HTML utilizando JavaScript dentro de etiquetas de párrafo. */
function saludarSegunHora() {
    const horaActual = new Date().getHours();//objeto de la clase date con el método getHours
  
    let saludo;//variable vacía
  
    if (horaActual >= 5 && horaActual < 12) {//comprobacion del rengo de hora en el que estamos
      saludo = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {//''''''''''''''''''''''''''''''''''
      saludo = '¡Buenas tardes!';
    } else {
      saludo = '¡Buenas noches!';
    }
  
    // Mostrar el saludo en el documento HTML
    document.getElementById('saludo').innerText = saludo;
  }
  
  // Llamar a la función al cargar la página
  saludarSegunHora();