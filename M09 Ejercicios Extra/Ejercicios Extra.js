/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { forEach } = require("../M08 JavaScript Callback/homework");

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var claves = Object.keys(objeto);
   var nuevoArr = []
   claves.forEach(obj =>{
       var auxArr = []
       var texto = obj;
       var val = objeto[obj];
       auxArr.push(texto, val);
       nuevoArr.push(auxArr);
   }
   )
   return nuevoArr
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var nuevoObj = {}
   var letrasSeparadas = string.split('');
   var l = letrasSeparadas.length;
   var abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z']
   abecedario.forEach((letra) =>{
           if (letrasSeparadas.includes(letra)===true){
               var contador = 0
               for (var i=0; i < l; i++){
                   if (letra === letrasSeparadas[i]){
                       contador = contador + 1
                   }
               }
               nuevoObj[letra] = contador;                
           }

       }
   )
   return nuevoObj   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringSeparada = string.split('');
   var mayusculas = [];
   var minusculas = [];
   stringSeparada.forEach((letra)=>{
      if(letra === letra.toUpperCase()){
         mayusculas.push(letra);
      } else {
         minusculas.push(letra);
      }
   }
   )
   var nuevoString = mayusculas.join('') + minusculas.join('');
   return nuevoString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' ');
   var palabrasVolteadas = []
   palabras.forEach((palabra)=>{
       var l = palabra.length;
       var letras = palabra.split('');
       var auxVolteada = [];
       for (i= l - 1; i>=0; i--){
           auxVolteada.push(letras[i])
       }
       palabrasVolteadas.push(auxVolteada.join(''));
   })
   return palabrasVolteadas.join(' ')   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numString = numero.toString();
   if (numString.split("").reverse().join("") === numString){
      return "Es capicua"
   }else{
      return "No es capicua"
   }
  //  fuente: https://stackoverflow.com/a/62697944
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   string = string.replace('a','');
   string = string.replace('b','');
   string = string.replace('c','');
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => { 
      var lenA = a.length; 
      var lenB = b.length; 
      if (lenA < lenB) return -1; 
      if (lenA > lenB) return 1; 
      return 0; 
  }
  );   
  // source: llama2

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var l1 = array1.length;
   var l2 = array2.length;
   var arrEval = [];
   var arrComp = [];
   var nuevoArr=[];
   
   if (l1>=l2){
       arrEval = array2;
       arrComp = array1;
   } else {
       arrEval = array1;
       arrComp = array2;        
   }

   arrEval.forEach((num)=>{
       if(arrComp.includes(num)){
           nuevoArr.push(num)
       }
   })
   return nuevoArr.sort()   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
