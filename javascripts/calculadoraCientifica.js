const pantalla = document.getElementById("pantalla");

function seleccionar(input){

    pantalla.value += input;

}

function calcularArrel(input){

    let valorArrel = Math.sqrt(pantalla.value);

    pantalla.value = valorArrel;

}

function calcularLog(input){

    let valorLog = Math.log10(pantalla.value);

    pantalla.value = valorLog;

}

function calcularCos(input){

    let valorCos = Math.cos(pantalla.value);

    pantalla.value = valorCos;

}

function calcularTan(input){

    let valorTan = Math.tan(pantalla.value);

    pantalla.value = valorTan;

}

function elevarNum(input){

    let valorElevat = (pantalla.value*pantalla.value);

    pantalla.value = valorElevat;

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