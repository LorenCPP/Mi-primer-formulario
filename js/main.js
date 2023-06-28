//tarea//
console.log('¡hola mundo!')
let num1 = 50;
let num2 = 10;
let saludo = '¡Hola!';
let nombreCurso = 'Código LATAM';

let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMultiplicacion = num1 * num2;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(saludo + 'Esto es ' + nombreCurso);

//Realización de Formulario//

let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameImput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function(){
    nameImput.style.maxHeight = "0"
    title.innerHTML ="Login";
    signUp.classList.add("disable");
    signUp.classList.remove("disable");

}
signUp.onclick = function(){
    nameImput.style.maxHeight = "60px"
    title.innerHTML ="Registro";
    signUp.classList.remove("disable");
    signUp.classList.add("disable");

}