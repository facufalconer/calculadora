/*function mensajeç(){
         return 'mensaje desde la funcion';

}
var facu =mensajeç();
console.log(facu);*/
/*var sumar = function (a,b,c=3){
    return a + b + c;

}

var result = sumar(4,5,8);
var restul1 = sumar(3,7);
console.log(result);
console.log(restul1);*/

//funcns recursib

/*var factorial = function(n){
    if((n == 0) || (n == 1))
       return 1;
    else
    return(n * factorial(n -1));
}

console.log( factorial(4));*/


//arreglos

var nombres = ['grover','carlos','ana','lusia'];
var vegetal = new Array('tomate','caca','papa');

/*console.log(nombres[3]);
console.log(vegetal[1]);

nombres[0] = 'jose';
vegetal[2] = 'nabo';

console.log(nombres[0]);
console.log(vegetal[2]);*/

/*console.log(nombres.length);
for(var i = 0; i <= nombres.length -1; i++){
    console.log(nombres[i]);
}

vegetal.forEach(function(elemento,indice){
    console.log(elemento,indice);
})*/

console.log(nombres);
nombres.push('pedro');
console.log(nombres);
nombres.unshift('lusi');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('carlos');
console.log(pos);

nombres.splice(1,2);
console.log(nombres);
