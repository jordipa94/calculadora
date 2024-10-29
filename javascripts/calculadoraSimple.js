const pantalla = document.getElementById("pantalla"); 

function seleccionar(input){

    pantalla.value += input;

}

function llimpiarPantalla(){
    
    pantalla.value = " ";
    
}

function calcular(){

    try{
        pantalla.value = eval(pantalla.value);
    }catch(error){
        pantalla.value = "ERROR";
    }
}