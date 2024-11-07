const pantalla = document.getElementById("pantalla");
//const maxLlargada = 5;

function seleccionar(input){

    pantalla.value += input;

    // LLARGA MAXIMA DE 5 DIGITS.

    /*if(pantalla.value.length<maxLlargada){
        pantalla.value += input;
    }else{
        alert("Llargada maxima de 5 digits.");
    }*/
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

function borrarDigit(){

    pantalla.value = pantalla.value.slice(0,-1);

}