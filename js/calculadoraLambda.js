function convertir(idCampo) {
    console.log('Convertir' + idCampo)
    return parseInt(document.getElementById(idCampo).value);
}

//para el uso de lambda debemos hacerlo con una constante
const sumar = (num1, num2) => num1 + num2;


const restar = (num1, num2) => num1 - num2;


const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => {
    if (num2 != 0) {
        return num1 / num2;
    } else {
        window.alert('No se puede realizar una division por 0')
        return 0;
    }
};


const sumarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelRes').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}

const restarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelRes').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}

const multiplicarNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelRes').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}

const dividirNumeros = () => {
    var numero1 = convertir('idNum1');
    var numero2 = convertir('idNum2');
    document.getElementById('labelRes').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}


function eliminarElemento() {
    document.getElementById('idEliminar').remove;
    console.log(document.getElementById('idEliminar'))
    console.log('test')
}

function insertarElemento() {
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';
}


const conceptosJS = () => {
    var variable1 = 'Dave';
    var variable2 = 1;
    let variable3 = 'Crist';
    let variable4 = 4;
    let variable5 = 6;
    let variable6 = 232656.23;

    console.log(variable1 + ' : ' + typeof (variable1));
    console.log(variable2 + ' : ' + typeof (variable2));
    console.log(variable3 + ' : ' + typeof (variable3));
    console.log(variable4 + ' : ' + typeof (variable4));
    console.log(variable5 + ' : ' + typeof (variable5));
    console.log(variable6 + ' : ' + typeof (variable6));

    //declaracion de arreglos
    const diasSemana = ['Lunes', 'Martes', 'Miercoles']
    console.log(diasSemana)
    console.log(diasSemana[0])
    diasSemana.push('Jueves')
    diasSemana.push('Viernes')
    console.log(diasSemana)

    const diasFinSemana = ['Sabado', 'Doingo'];

    // concatenar vectores

    const diasSem = diasSemana.concat(diasFinSemana);
   diasSem[0] ='prueba';
    console.log(diasSem);

    for (const dia of diasSem) {
        console.log(dia)
    }

    //Declaracion de objetos

    const persona = {
        nombre: 'David',
        apellido: 'Quizhpe',
        edad: '20',
        ciudad: 'Loja'
    }

    console.log(persona);

    const persona2 = {
        nombre: 'David',
        apellido: 'Quizhpe',
        edad: '20',
        ciudad: 'Loja',
        vehiculo : {
            marca:"Chevrolet",
            modelo:"Beat",
            placa:"PCL-9879"
        }
    }

    console.log(persona2);

    //Desestructuracion de arreglos
    const dias2 = ['Lunes', 'Martes', 'Miercoles','Jueves','Viernes'];
    
    const [dia1,dia2,dia3]=dias2;

    console.log(dia1)

    console.log(dia3)


    console.log('----------Desestructuracion de array---------');
    const [d1,d2,d3,d4,d5] = ['Lunes', 'Martes', 'Miercoles','Jueves','Viernes'];

    console.log(d1)
    console.log(d5)

    console.log('----------Desestructuracion de un objeto---------')
    //Desestructuracion de objetos
    const persona3 = {
        nombre: 'David',
        apellido: 'Quizhpe',
        edad: '20',
        ciudad: 'Loja'
    }

    const {
         nombre,ciudad
    }=persona3

    console.log(nombre);
    console.log(ciudad);




    const persona4 = {
        nombre: 'David',
        apellido: 'Quizhpe',
        edad: '20',
        ciudad: 'Loja',
        vehiculo : {
            marca:"Chevrolet",
            modelo:"Beat",
            placa:"PCL-9879"
        }
    }

    const{vehiculo}=persona4;

    console.log(vehiculo);

    const{placa}=vehiculo
    console.log(placa);

console.log('--------Accediendo a atributos---------')
    console.log(persona4.nombre);
    console.log(persona4.apellido);
}