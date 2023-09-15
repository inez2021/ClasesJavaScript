//alert('Hello world!')
//nombre = prompt('Ingrese su nombre')

nom = 'Ana';

// Tipos: numericos, texto, booleanos, arreglos
// Numeros: naturales, enteros, reales, racionales, irracionales, complejos

n = 500000;
nom = 'Pepe';
//String - Cadena
r = "nom";
nombre = '';

nombre = 'Buenas noches ' + nombre;

//alert(nombre);

//n = parseInt( prompt('Ingrese un numero'));
//m = parseInt(prompt('Ingrese otro numero'));
/*
rescatar valor ingresado por usuario -> '5'
convertir cadena a entero -> 5
asignar valor a n
*/
//resultado = n + m;
//alert('La suma es:' + resultado);

//TODO: Estructuras de control (condicionales y bucles)

//tipo de dato booleano -> bool
abierto = true; // false

alert(!abierto);
//true -> 'true', false -> 'false'
//45 -> '45', 0 -> '0'

abierto = !abierto;

x = 5;


y = x + 1;

alert(5 > 3);

// afuera esta lloviendo o es de noche?
// Si


edad = parseInt(prompt('Cuantos anios tiene?'));

/*
if(edad < 18){
    alert('lo sentimos');

}else{
    if(edad > 65){
        alert('Se ha establecido');
    }
    alert('Bienvenido');
}
*/
if(edad >=18){
    if(edad > 65){
        alert('Se ha establecido');
    }
    alert('Bienvenido');
}else{
    alert('lo sentimos');
}



alert('LISTO');




d = parseInt(prompt('Ingrese un numero de dia de la semana?'));

if(d == 1){
    console.log('Lunes');
}else{
    if(d == 2){
        console.log('Martes');
    }else{
        if(d == 3){
            console.log('Miercoles');
        }else{
            if(d == 4){
                console.log('Jueves');
            }else{
                if(d == 5){
                    console.log('Viernes');
                }else{
                    if(d == 6){
                        console.log('Sabado');
                    }else{
                        console.log('Domingo');                            console.log('Martes');   
                    }     
                }
            }
        }
    }
}
