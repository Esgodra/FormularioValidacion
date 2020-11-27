//************************************************ Elementos de la pagina  *************************************************************** */

var txtNombre;
var txtApellido;
var txtTelefono;
var txtCorreo;
var txtFecha;
var cbGenero;
var btnAceptar;
var btnLimpiar;

//************************************************************ Funciones generales ********************************************************************/
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState != 'loading')
                fn();
        });
    }
};

//Metodo para quitar los hijos de un elemento DOM HTML
HTMLElement.prototype.empty = function () {
    while (this.firstChild) {
        this.removeChild(this.firstChild);
    }
};

//Crea la referencia de los elementos HTML
function instaciarElementos() {
    txtNombre = document.getElementById("txtNombre");
    txtApellido = document.getElementById("txtApellido");
    txtCorreo = document.getElementById("txtCorreo");
    txtTelefono = document.getElementById("txtTelefono");
    txtFecha = document.getElementById("txtFecha");
    cbGenero = document.getElementById("cbGenero");
    btnAceptar = document.getElementById("btnAceptar");
    btnLimpiar = document.getElementById("btnLimpiar");
}

//Crea los eventos para los elementos HTML
function crearEventos(){
    txtNombre.onchange = () =>{
        txtNombre.classList.remove("is-invalid");
    }
    txtApellido.onchange = () =>{
        txtApellido.classList.remove("is-invalid");
    }
    txtCorreo.onchange = () =>{
        txtCorreo.classList.remove("is-invalid");
    }
    txtTelefono.onchange = () =>{
        txtTelefono.classList.remove("is-invalid");
    }
    txtFecha.onchange = () =>{
        txtFecha.classList.remove("is-invalid");
    }
    cbGenero.onchange = () =>{
        cbGenero.classList.remove("is-invalid");
    }
    btnAceptar.onclick = () =>{
        validarCampos();
    }
    btnLimpiar.onclick = () =>{
        limpiar();
    }
}

function validarCampos(){
    if(txtNombre.value != ""){
        if(!tieneNumeros(txtNombre.value)){
            if(txtApellido.value != "")
            {
                if(!tieneNumeros(txtApellido.value))
                {
                    if(txtCorreo.value != "")
                    {
                        if(validarEmail(txtCorreo.value))
                        {
                            if(txtTelefono.value != "")
                            {
                                if(txtTelefono.value.length == 8 )
                                {
                                    if(txtFecha.value != "")
                                    {
                                        if(cbGenero.value > 0)
                                        {
                                            btnLimpiar.hidden = false;
                                            txtNombre.classList.add("is-valid")
                                            txtApellido.classList.add("is-valid")
                                            txtCorreo.classList.add("is-valid")
                                            txtTelefono.classList.add("is-valid")
                                            txtFecha.classList.add("is-valid")
                                            cbGenero.classList.add("is-valid")
                                        }
                                        else
                                        {
                                            Swal.fire("¡Info!", "Debe seleccionar su genero", "info");
                                            cbGenero.classList.add("is-invalid"); 
                                        }
                                    }
                                    else
                                    {
                                        Swal.fire("¡Info!", "Debe ingresar su fecha de nacimiento", "info");
                                        txtFecha.classList.add("is-invalid"); 
                                    }
                                }
                                else
                                {
                                    Swal.fire("¡Info!", "El numero de telefono ingresado esta incompleto o es demasiado largo, valor admitido: 8 digitos", "info");
                                    txtTelefono.classList.add("is-invalid"); 
                                }
                            }
                            else
                            {
                                Swal.fire("¡Info!", "Debe ingresar un numero de telefono", "info");
                                txtTelefono.classList.add("is-invalid"); 
                            }
                        }   
                        else
                        {
                            Swal.fire("¡Info!", "El correo ingresado no es valido", "info");
                            txtCorreo.classList.add("is-invalid"); 
                        } 
                    }
                    else
                    {
                        Swal.fire("¡Info!", "Debe ingresar su correo", "info");
                        txtCorreo.classList.add("is-invalid"); 
                    }
                }
                else
                {
                    Swal.fire("¡Info!", "El apellido no puede contener numeros", "info");
                    txtApellido.classList.add("is-invalid"); 
                }
            }
            else
            {
                Swal.fire("¡Info!", "Debe ingresar un apellido", "info");
                txtApellido.classList.add("is-invalid"); 
            }
        }
        else
        {
            Swal.fire("¡Info!", "El nombre no puede contener numeros", "info");
            txtNombre.classList.add("is-invalid"); 
        }      
    }
    else
    {
        Swal.fire("¡Info!", "Debe ingresar un nombre", "info");
        txtNombre.classList.add("is-invalid"); 
    }

}

function tieneNumeros(texto){
    var numeros="0123456789";
       for(i = 0; i < texto.length; i++){
          if (numeros.indexOf(texto.charAt(i),0) != -1){
             return true;
          }
       }
       return false;
}

function validarEmail(valor) {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
        return true;
    } else {
        return false;
    }
}

function limpiar(){
    txtNombre.value = "";
    txtApellido.value = "";
    txtCorreo.value = "";
    txtTelefono.value = "";
    txtFecha.value = "";
    cbGenero.value = 0;
    btnLimpiar.hidden = true;
    txtNombre.classList.remove("is-valid")
    txtApellido.classList.remove("is-valid")
    txtCorreo.classList.remove("is-valid")
    txtTelefono.classList.remove("is-valid")
    txtFecha.classList.remove("is-valid")
    cbGenero.classList.remove("is-valid")
}


//Funcion que se ejecuta al terminar de cargar la página
window.ready(() => {
    // -- **************************** Elementos de la Página **************************** -- //
    instaciarElementos();

    //Crea todos los eventos de los elementos HTML
    crearEventos();
});