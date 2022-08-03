
String.prototype.replaceAt=function(index, character) {
     return this.substring(0, index) + character + this.substring(index+character.length); 
};
let palabras = ['casa','perro','gato','ciudad'];
let palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = '';

document.querySelector('.palabra__ahorcado').innerHTML = palabraConGuiones;
document.querySelector('.campo__texto').focus();

document.querySelector('.boton__letra').addEventListener('click', () =>{
    let letra = document.querySelector('.campo__texto').value;
    let fallo = true;
    for(var i = 0;i<palabra.length;i++){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            fallo = false;
        }
    } 
    if (fallo) {
        contadorFallos++
        document.querySelector('.imagen__ahorcado').style.backgroundPosition = -(200*contadorFallos) + 'px 0';
        if (contadorFallos == 4) {
            document.querySelector('.perdedor').style.display = 'flex';
        }
    }else{
        if (palabraConGuiones.indexOf('_') <0) {
            document.querySelector('.ganador').style.display = 'flex';
        }
    }
    document.querySelector('.palabra__ahorcado').innerHTML = palabraConGuiones;
    document.querySelector('.campo__texto').value = '';
    document.querySelector('.campo__texto').focus();

});













