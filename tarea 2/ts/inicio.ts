import jquery = require('jquery');
const $:JQueryStatic=jquery;


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



$("#enviar").on('click', function(event:any){
  if (FormumalarioCorrecto(event)){
      window.location.href = "enviado.html";
  }
});

function FormumalarioCorrecto(event:any){
  let flagRut:boolean = true;
  let flagNombre:boolean = true;
  let flagcheck:boolean=true;
  let flagCelu:boolean=true;
  let flagradio:boolean=true;
  event.preventDefault();
  $("#formulario input").each(function(index){
      let input=$(this);   
       if (input.val() == ""){
          toInvalid(input);
          if (input.attr("id") == "nombreCompleto") flagNombre = false;
          if (input.attr("id") == "rut") flagRut = false;
          if (input.attr("id") == "telefono") flagCelu = false;
          }else{    
            toValid(input);
            if (input.attr("type")=="text"){
              if (input.attr("id") == "rut"){
                if (verificarRut(input.val()) == false){
                  toInvalid(input);
                  flagRut = false;
                }
              }
            } 
            if (input.attr("type")=="number"){
              if(validarCelu(input.val()) == false){
                toInvalid(input);
                flagCelu = false;
              }
            }                
          }       
  });
   
  if ($('input[type=checkbox]:checked').length === 0) {
    alert('Debe seleccionar al menos lenguajes de programacion de un interes y cual de los siguientes cursos les ha tomado mayor dificultad');
    flagcheck=false;
  }
  if ($('input[type=radio]:checked').length === 0) {
    alert('Seleccionar un nivel');
    flagradio=false;
  }
  if ( flagRut == true && flagcheck == true && flagCelu == true && flagradio==true && flagNombre == true){
      return true;
    }
  return false;
}
//rut formato XXXXXXXX-X
function verificarRut(rut:any){
    if (rut.length < 4 || rut.length > 10 || rut[rut.length-2] != "-" || rut.includes(".")) return false;
    return true;
}
//9 digitos
function validarCelu(celu:any){
  if (celu.length >9 || celu.length <9) return false;
  return true;
}
function toInvalid(input:any){
    input.removeClass("is-valid");
    input.addClass("is-invalid");
}

function toValid(input:any){
    input.removeClass("is-invalid");
    input.addClass("is-valid");
}



