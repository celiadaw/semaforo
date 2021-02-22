
//------------------VARIABLES Y CONSTANTES----

const container= document.getElementById("container");
const reset = document.getElementById("buttonReset");
 let flag = 0;

const buttonCreate = document.getElementById("buttonCreate");


// REVISAR!!!!!!NO FUNCIONA
// let numberOfColors = document.getElementById("numberOfColors").value; //meter en la funcion crear!
// numberOfColors=3;
// console.log(numberOfColors);//no muestra nada
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
 function enableColor(flag) {//funcion que enciende
    let newColor=RGB();
  
    //document.getElementById("id"+position)("style", `backgroundColor:(newColor`);
   let luzQueCambio=document.getAttribute("id"+flag);
  console.log("este es el elemento que quiero ver si cojo bien "+luzQueCambio);
    luzQueCambio.classList.remove("black");

    colors[positions[]].setAttribute("style",`background-color:${newColor}`);
    
     
    
   // document.getElementById("id"+position).style.backgroundColor = newColor;
    

}

function disableColor(flag) {//funcion que apaga
    document.getElementById("id"+flag).classList.add("black");
    // colors[position].circle.style.backgroundColor("rgb(0,0,0)");
}


function changeColor() {
 
let colorsLength=colors.length;
console.log(colorsLength);
// console.log(colors[0].getElementById(`id${flag}`));
console.log(colors[1]);


    enableColor(flag);
console.log("flag es "+flag);
   if(flag==0){

       disableColor(colorsLength-1);
       flag++;
   } else if(flag==colorsLength-1){
      
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
let numberOfColors = document.getElementById("numberOfColors").value;
let positions = [];
for (let i=0; i<numberOfColors;i++){
    let newId= "id"+i;
   //  let newClass = "circle"+i;
   
let numberFlag = newId.slice(-1);
    console.log("numberFlag"+numberFlag);
    //debemos crear un nuevo div, (circule con clase button y despues añadirle la clase background color con newColor)

    newCircle = document.createElement("div");
    console.log("creando nuevo circlo  "+newCircle);
    newCircle.setAttribute("class", "button black");
     newCircle.setAttribute("id", `${newId}`);
    // newCircle.setAttribute("data-id"=`${newId}`);
    // newCircle.dataset("id" , `${newId}`);
    // newCircle.nodeValue("id" , `${newId}`);
    // console.log(document.getElementById(`${newId}`).getAttribute("data-value"));
    //añadimos container
    container.appendChild(newCircle);
    // document.getElementById(newId).("style", `backgroundColor:(newColor)`);
   //  newCircle.style.backgroundColor(newColor);

       colors[i]=newCircle; 
       positions[i]=numberFlag;
       console.log("posición del array "+i+ "con e elemento"+newId);
   
   
}

}

