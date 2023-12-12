//En el Directorio datos-estudiante deberá crear un script que pregunte su nombre, apellidos, 
//su edad y el ciclo formativo que cursa. Los mostrará en la página web. Cada dato debe ser preguntado en una ventana
//emergente distinta y mostrarlo en una línea distinta, en el campo del ciclo deberá mostrar el texto por defecto “DAW”.

let edad = parseInt(prompt("Dime tu edad"));//pasa la cadena edad a entero
let ciclo = prompt("Que cilo Formativo cursas","Daw")//pide al usuario

document.write(`Tu edad es: ${edad}\n`);//escribe en la pagina

document.write(`Y estudias el ciclo: ${ciclo}`)

