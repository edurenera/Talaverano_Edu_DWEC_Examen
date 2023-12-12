
    function CuentaBancaria(nombre, dni, saldo = 0) {//creo el prototipo
        this.nombre = nombre;
        this.dni = dni;
        this.saldo = saldo;
        this.numeroCuenta = 'ES' + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
      }
      
      CuentaBancaria.prototype.mostrarDatos = function() {//funcion para mostrar la info
        console.log(`Nombre: ${this.nombre}\nDNI: ${this.dni}\nNúmero de Cuenta: ${this.numeroCuenta}\nSaldo: ${this.saldo}€`);
      };
      
      CuentaBancaria.prototype.realizarIngreso = function(monto) {
        if (monto > 0) {//para añadir saldo
          this.saldo += monto;
          console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€`);
        } else {
          console.log('El monto del ingreso debe ser un número positivo.');
        }
      };
      
      CuentaBancaria.prototype.realizarRetiro = function(monto) {
        if (monto > 0 && this.saldo >= monto) {//retirar saldo sin que pueda llegar a negativo
          this.saldo -= monto;
          console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€`);
        } else {
          console.log('No es posible realizar el retiro. Verifique el monto ingresado o su saldo disponible.');
        }
      };
      
      CuentaBancaria.prototype.realizarTransferencia = function(cuentaDestino, monto) {
        if (monto > 0 && this.saldo >= monto) {
          this.saldo -= monto;
          cuentaDestino.realizarIngreso(monto);//realizamos la transferencia a la cuenta destino
          console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}€`);
        } else {
          console.log('No es posible realizar la transferencia. Verifique el monto ingresado o su saldo disponible.');
        }
      };
      
      // Instanciación de dos objetos para realizar pruebas
      const cuenta1 = new CuentaBancaria('Juan Camilo', '12345678A', 1000);
      const cuenta2 = new CuentaBancaria('Edu Talaverano', '87654321B', 500);
      
      //Llamando métodos
      cuenta1.mostrarDatos();
      console.log('--------------------------------------------------------------');
      cuenta2.mostrarDatos();
      console.log('Ingreso realizado. Nuevo saldo: 600€');
      cuenta2.realizarIngreso(100);
      cuenta2.realizarTransferencia(cuenta1, 300);
      console.log('--------------------------------------------------------------');
      cuenta1.mostrarDatos();
      console.log('--------------------------------------------------------------');
      cuenta2.mostrarDatos();