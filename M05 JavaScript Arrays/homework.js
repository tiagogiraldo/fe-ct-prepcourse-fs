/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   l = array.length - 1
   return array[l];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArr = []
   var masUno = array.map((num) => {
       nuevoArr.push(num + 1);
   });
   return nuevoArr;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;   
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento) ;   
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var total = 0;
   for (let i = 0; i < arrayOfNums.length; i++){
       total = total + arrayOfNums[i];
   }
   return total;   
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var total = 0;
   var l = resultadosTest.length
   for (let i = 0; i < l; i++){
       total = total + resultadosTest[i];
   }
   return total/l; 
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var maxNum = Math.max.apply(null,arrayOfNums);
   // Acá hay algo raro, debe agregarsele el apply y el null, si no se hace el resultado es NaN.
   // aunque se supone que debería funcionar sin estos otros dos elementos para ES6
   // Al parecer esta solución es inestable o no funciona para arreglos muy grades
   // fuente: https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
   return maxNum;   
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length ===0){
      return 0
  } else if (arguments.length ===1){
      return arguments[0]
  } else{
      var multNum = 1;
      for (let i=0; i < arguments.length; i++){
         multNum = multNum * arguments[i];
      }
      return multNum;
  }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cont = 0;
   for (let i = 0; i < array.length; i++){
      if (array[i]>18){
         cont = cont + 1;
      }
   }
   return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   arrFin = [1,7]
   if (arrFin.includes(numeroDeDia)){
       return "Es fin de semana";
   } else{
       return "Es dia laboral";
   }   
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   numero = num.toString().split('');
   if (numero[0] == 9){
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var a = array[0];
   var valorador = false;
   for (let i=1; i < array.length; i++){
       if (a === array[i]){
           valorador= true;
           a = array[i];
       } else{
           valorador= false;
           break
       }
   }
   return valorador   
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var arrMes =  ["Enero","Marzo", "Noviembre"];
   var arrExt = [];
   var l = array.length;
     //num2.every(num => setOfArray.has(num));
   let evaluador = arrMes.every(mes => array.includes(mes));
   if (evaluador){
       for(let i=0; i < l; i++){
           if(array[i]===arrMes[0]){
               arrExt.push(array[i]);
           }else if(array[i]===arrMes[1]){
               arrExt.push(array[i]);
           }else if(array[i]===arrMes[2]){
               arrExt.push(array[i]);
           }
       }
       return arrExt
   }else{
       return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tab = [];
   for (let i=0; i < 11 ; i++){
       prod = 6 * i;
       tab.push(prod);
   }
   return tab;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var tab = [];
   for (let i=0; i < array.length; i++){
       if(array[i]>100){
         tab.push(array[i]);
      }
   }
   return tab;   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arr = [];
   for (let i=0; i<10;i++){
      if (num!==i){
         num = num + 2;
         arr.push(num);   
         if(i===9){
            return arr;
         }
      }else{
         return "Se interrumpió la ejecución";
         break;
      }
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arr = [];
   for (let i=0; i<10;i++){
      if (i!==5){
         num = num + 2;
         arr.push(num);
      } else{
         continue
      }
   }
   return arr;   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
