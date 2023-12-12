/* Creará un fichero con el nombre DatosGitHub.js
Utilizará los datos y formará una cadena JASON con lo siguiente:
Login, id, email y public_repos.  
Esa información le servirá como parámetro de entrada para el constructor de una clase que denominará DatosGitHub, 
la información será asignada como atributos de la clase, recuerde que debe transformar la cadena a objeto JavaScript usando el método parse.
Defina un único método para la clase llamado datosRecibidos() el cual mostrará por consola la información de cada atributo en una cadena 
formateada y concatenada usando la estructura ${` … `}.
Instancie el objeto con el nombre: datosGitHubInstancia con la cadena JASON que recolectó.
Se espera la salida de tipo:
El Usuario de GitHub ______ tiene un id________ cuyo correo es ___________ y tiene ______ repositorios públicos.
Si al invocar el método datosRecibidos() algún dato venía null desde GitHub adiciónelo al objeto y ejecute de nuevo el método.
Utilice Node.js para ejecutar el programa, haga una captura de pantalla con el comando, péguela aquí e inclúyala al repositorio.
 */


jsoninfo ={ //Cadena jason
  nombre: "edurenera",
  id: "82966974",
  email: "edurenera@gmail.com",
  public_repos: "6"
} 
jsonString = JSON.stringify(jsoninfo);
class DatosGitHub{
  constructor(jsonString){//la cadena es el parámetro de entrada del constructor
    this.jsonString = JSON.parse(jsoninfo);//Transformo la cadena de texto
    this.nombre = this.jsonString.nombre;
    this.id = this.jsonString.id;
    this.email = this.jsonString.email;
  }
  


datosRecibidos(){//funcion mostrar datos
  console.log(`El Usuario de GitHub ${this.nombre} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios publicados`);
}
}
let datosGitHubInstancia = new DatosGitHub(jsonString);
datosGitHubInstancia.datosRecibidos();


