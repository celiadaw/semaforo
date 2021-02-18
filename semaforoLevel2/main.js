//he capturado cada circulo del semaforo 
const circleGreen =document.getElementById("circleGreen");
const circleOrange =document.getElementById("circleOrange");
const circleRed =document.getElementById("circleRed");

// a continuación declaramos container porque quiero capturar al div que contiene todos los colores para que el usuario haga click ahi
const container= document.getElementById("container");
//vuelvo a tener una bandera para saber en que circulo me tengo que situar
let flag = 0;

container.addEventListener("click",changeColor);

// //voy a crear objetos 
// let semaforo=
// [
//     {   flag : 1,
//         color: circleGreen,
//         claseColor: "green",

//     },
//     {   flag : 2,
//         color: circleOrange,
//         claseColor: "orange",

//     },
//     {   flag : 3,
//         color: circleRed,
//         claseColor: "red",

//     }




// ]
//ahora tenemos 3 circulos, tendremos que hacer una función a cada uno que apague o encienda según corresponda

// function disableColor (color,claseColor) {

// }

// function enableColor (color,claseColor) {
// // esto nos vale para los tres colores, tendremos que saber el color que estamos utilizando y si lo tenemos que encender o apagar

//     color.classList.add("claseColor");

// }



// function enableColor (color, enable,claseColor){
//     if (!enable){
//         enable= true;
//         color.classList.remove(claseColor);

//     }

// }

// function disableColor (color, enable,claseColor){
//     if (enable){
//         enable= false;
//         color.classList.remove(claseColor);

//     }

// }

function changeColor() {
    

 switch (flag){
    case 0: 
    flag++;
    break;
    case 1:
        
        circleRed.classList.remove("red")
         circleGreen.classList.add("green");
         flag++;
    break;
    case 2:
        circleGreen.classList.remove("green");
        circleOrange.classList.add("orange");
        flag++;
    break;
    case 3:
        circleOrange.classList.remove("orange");
        circleRed.classList.add("red");
        flag=1;
    break;

 }
}
//get elements by className -- se puede usar para este ejercicio.



