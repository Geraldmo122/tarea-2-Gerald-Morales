define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var formulario = document.getElementById("formulario");
    var recibido = document.getElementById("recibido");
    formulario.addEventListener("submit", function (event) {
        console.log("Hemos recibido sus datos,pronto nos estaremos comunicando con usted");
        recibido.innerHTML = "<p>Hemos recibido sus datos,pronto nos estaremos comunicando con usted</p>";
        event.preventDefault();
    });
    var numerotelefono = document.getElementById("telefono");
    var mensaje = document.getElementById("mensaje");
    numerotelefono.addEventListener("change", function () {
        if (numerotelefono > 999999999) {
            mensaje.innerHTML = "<p>El numero tiene que tener 9 digitos</p>";
            mensaje.style.color = "Red";
        }
    });
});
