//inicializar primero nuestra variable semaforo. 
// vamos a "capturar" lo que queremos
const semaforo =document.getElementById("semaforo");
//utilizamos una "bandera" para saber que color tenermos.
let bandera = 0;
//la bandera va a tener 0 para inicializar cuando cambie de color será 1 verde, 2 naranja y 3 rojo.

// cuando pasan cosas ???
//cuando un usuario hace click encima de nuestro semaforo
semaforo.addEventListener("click",changeColor);
//esto es un evento, semaforo esta "escuchando", en el momento que hacen click en el reacciona
//en el segundo parametro de semaforo lo que vamos a pasarle es una funcion que tiene que realizar cuando se haga click
//después definimos que, cuando se haga click cambie

function changeColor (){
 switch (bandera){
    case 0: 
    bandera++;
    break;
    case 1:
        semaforo.classList.remove("red");
        semaforo.classList.add("green");
        bandera++;
    break;
    case 2:
        semaforo.classList.remove("green");
        semaforo.classList.add("orange");
        bandera++;
    break;
    case 3:
        semaforo.classList.remove("orange");
        semaforo.classList.add("red");
        bandera=1;
    break;



 }

}



