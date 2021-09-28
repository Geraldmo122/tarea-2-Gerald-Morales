import jquery = require('jquery');
const $:JQueryStatic=jquery;

let formulario:any=document.getElementById("formulario");
let recibido:any=document.getElementById("recibido")
formulario.addEventListener("submit",function(event:any){
        console.log("Hemos recibido sus datos,pronto nos estaremos comunicando con usted")
        recibido.innerHTML="<p>Hemos recibido sus datos,pronto nos estaremos comunicando con usted</p>";
        event.preventDefault();
});

let numerotelefono:any=document.getElementById("telefono");
let mensaje:any=document.getElementById("mensaje")
numerotelefono.addEventListener("change",function(){
    if(numerotelefono>999999999){
        mensaje.innerHTML="<p>El numero tiene que tener 9 digitos</p>";
        mensaje.style.color="Red";
    }
});




