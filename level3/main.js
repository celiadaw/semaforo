
//------------------VARIABLES Y CONSTANTES----

const container= document.getElementById("container");
const reset = document.getElementById("buttonReset");
 let flag = 0;

const buttonCreate = document.getElementById("buttonCreate");


// REVISAR!!!!!!NO FUNCIONA
// let numberOfColors = document.getElementById("numberOfColors").value; 
numberOfColors=3;
console.log(numberOfColors);//no muestra nada
//estamos recogiendo la etiqueta numberOfcolors...
/*
DONDE RECOGEMOS EL VALOR QUE NOS DAN POR PANTALLA?'

*/
//creamos un array de colores
let colors =[];
let b;
let g ;
let r;
//-------------------------------EVENTOS----------
container.addEventListener("click",changeColor);
buttonCreate.addEventListener("click",createColors);
reset.addEventListener("click",resetear);





//------------------------FUNCIONES---------------
function RGB(r,g,b) { //funcion que devuelve estructura rgb
   
//LE DAMOS UN COLOR ALEATORIO
r = Math.floor(Math.random() * (256 - 0)) + 0;
 g =Math.floor(Math.random() * (256 - 0)) + 0;
b = Math.floor(Math.random() * (256 - 0)) + 0;

    // return "rgb("+r+","+ g+","+ b+")";
    return `rgb(${r},${g},${b})`;
}
function getColorRandom() {//funcion que elige un color random
    //sacamos rgb ,ponemos 256 porque en la docu de mdn pone que excluye el max. 

    return  Math.floor(Math.random() * (256 - 0)) + 0; 
}
 function enableColor(position) {//funcion que enciende
    console.log(position + " esta es la bandera.. la posicion para recoger los elementos que quiero")
    console.log("estoy intentando ver el elemento circle de la posicion" +position+ " es  "+ color[position].circle+ " y el color de ese objeto es " + color[position].color);
    colors[position].
      colors[position].circle.style.backgroundColor(colors[position].color);

}

function disableColor(position) {//funcion que apaga
  
    colors[position].circle.style.backgroundColor("rgb(0,0,0)");
}


function changeColor() {
    console.log("flag al empezar changeColor" + flag);
    flag=1;
    console.log("flag despues de asignar 1 en changeColor" + flag);
    enableColor(flag);
   if(flag==0){

       disableColor(colors.length-1);
             
   } else if(flag==colors.length-1){
      
            flag==0;
     }else{
        disableColor(flag-1);
       flag++;
     }
}


function resetear() {
    disableColor(flag);
    colors=[];
    flag=0;

    
}




console.log(numberOfColors);
console.log(RGB());





//crear funcion crear colores
//vamos añadiendo colores al array Y AÑADIMOS NUEVOS CAMPOS
function createColors () {
let newCircle;
for (let i=0; i<numberOfColors;i++){
    let newColor=RGB();
    console.log(newColor);
   //  let newClass = "circle"+i;
    let newId= "id"+i;
    
    //debemos crear un nuevo div, (circule con clase button y despues añadirle la clase background color con newColor)

    newCircle = document.createElement("div");
    console.log(newCircle);
    newCircle.setAttribute("class", "button");
    newCircle.setAttribute("id", newId);
    //añadimos container
    container.appendChild(newCircle);
   //  newCircle.style.backgroundColor(newColor);

       colors[i]={
        circle: newCircle, 
        color: newColor};
    console.log("posicion 0 del array y lo que hay dentro del objeto " + colors[0].circle +"  2 cosa del objeto" + colors[0].color);
    
   
}

}

