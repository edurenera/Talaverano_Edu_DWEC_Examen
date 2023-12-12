class Aula {
    constructor(numero, capacidad) {//parametros del constructor de la clase aula
        this.numero = numero;//instanciamiento
        this.capacidad = capacidad;
    }
    presentarMateriales() {//funcion para mostrar
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
    }
}

class Musica extends Aula {//clase musica hereda de aula
    constructor(numero, capacidad, material) {
        super(numero, capacidad)//Lo que heredamos de la calse aula
        this.material = material;//instanciamos un nuevo parámetro NO heredado
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.material}, solamente tenemos ${this.capacidad} plazas`);
    }
}

class Tecno extends Aula {
    constructor(numero,capacidad,cantidadOrde){
        super(numero,capacidad);
        this.cantidadOrde = cantidadOrde;   
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrde} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}

pandereta = new Musica(1,10,"pandereta"); //creamos el objeto  de la clase musica y le damos valores
console.log(pandereta.presentarMateriales());

tecnologia = new Tecno(3,20,30)
console.log(tecnologia.presentarMateriales());

console.log(`polimorfismo`);