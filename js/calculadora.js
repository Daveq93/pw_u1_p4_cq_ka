function sumar(num1,num2){
    return num1+ num2;
  }

  function restar(num1,num2){
    return num1 - num2;
  }

  function multiplicar(num1,num2){
    return num1 * num2;
  }
  function dividir(num1,num2){

       if (num2!=0){
          return num1 / num2;
       }else{
          console.log('no se puede divir para cero')
          return 0;
       }
  }

  function sumarNumeros(){
      var numero1 = convertir('idNum1');
      var numero2 = convertir('idNum2');
      document.getElementById('labelRes').innerHTML = 'Resultado: '+sumar(numero1,numero2);
  }

  function restarNumeros(){
      var numero1 = convertir('idNum1');
      var numero2 = convertir('idNum2');
      document.getElementById('labelRes').innerHTML = 'Resultado: '+restar(numero1,numero2);
  }

  function multiplicarNumeros(){
      var numero1 = convertir('idNum1');
      var numero2 = convertir('idNum2');
      document.getElementById('labelRes').innerHTML = 'Resultado: '+multiplicar(numero1,numero2);
  }

  function dividirNumeros(){
      var numero1 = convertir('idNum1');
      var numero2 = convertir('idNum2');
      document.getElementById('labelRes').innerHTML = 'Resultado: '+dividir(numero1,numero2);
  }

  function convertir(idCampo){
      return parseInt(document.getElementById(idCampo).value);
  }


  function eliminarElemento(){
    document.getElementById('idEliminar').remove;
    console.log(document.getElementById('idEliminar'))
    console.log('test')
  }

  function insertarElemento(){
    document.getElementById('elemento').innerHTML='<strong>Importante</strong>';
  }
