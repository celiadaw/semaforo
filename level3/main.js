
//------------------VARIABLES Y CONSTANTES----

const container= document.getElementById("container");
const reset = document.getElementById("buttonReset");
 let flag = 0;






// REVISAR!!!!!!
let numberOfColors = document.getElementById("numberOfColors").value;
//estamos recogiendo la etiqueta numberOfcolors...
/*
DONDE RECOGEMOS EL VALOR QUE NOS DAN POR PANTALLA?'

*/
//creamos un array de colores
let colors =[];
   

//LE DAMOS UN COLOR ALEATORIO
let r =getColorRandom();
let g =getColorRandom();
let b = getColorRandom();


//-------------------------------EVENTOS----------
container.addEventListener("click",changeColor);
reset.addEventListener("click",resetear);





//------------------------FUNCIONES---------------
function RGB(r,g,b) { //funcion que devuelve estructura rgb
   
    return rgb(r, g, b);
}
function getColorRandom() {//funcion que elige un color random
    //sacamos rgb ,ponemos 256 porque en la docu de mdn pone que excluye el max. 
    return  Math.floor(Math.random() * (256 - 0)) + 0; 
}
 function enableColor(position) {//funcion que enciende
      colors[position].newCircle.style.backgroundColor(colors[position].newColor);

}

function disableColor(position) {//funcion que apaga
  
    colors[position].newCircle.style.backgroundColor(rgb(0,0,0));
}


function changeColor() {
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









//-----------------------MAIN--------------------
//vamos añadiendo colores al array Y AÑADIMOS NUEVOS CAMPOS
for (let i=0; i<numberOfColors-1;i++){
    let newColor=RGB();
   //  let newClass = "circle"+i;
    let newId= "id"+i;
    //debemos crear un nuevo div, (circule con clase button y despues añadirle la clase background color con newColor)
    let  newCircle = document.createElement("div");
    newCircle.setAttribute("class", "button");
    newCircle.setAttribute("id", newId);
   //  newCircle.style.backgroundColor(newColor);
    colors[colors.lastIndexOf]={newCircle, newColor};
    

}
 
//RESET

console.log(numberOfColors);