// Initialize your app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener("deviceready", function(){
    $("#iniciar_sesion").bind("click",iniciar_session);
     $("#cam").bind("click",cam);
     $('#registrar').bind('click', registrar);
     $('#geo').bind('click', geo);
     $('#comprar').bind('click', comprar);
});

function iniciar_session(){
    var icon_name = '<i class="f7-icons" style="font-size:14px;">person</i>';
    var icon_mail = '<i class="f7-icons" style="font-size:14px;">email</i>';

    var correo  = $("#username").val();
    var pass    = $("#password").val();

    if(correo.trim().length > 0 && pass.trim().length > 0){
        myApp.showPreloader("Iniciando Sesión...");
        $.ajax({
            dataType: "json",
            type: "POST",
            data:{
                user: correo,
                pass: pass
            },
            url: "http://login-appmovilubb.rhcloud.com/",
            success: function(respuesta){
                if(respuesta.resp === true){
                    $("#nosesion").hide();
                    $("#sesion").show();
                    $("#name").html(icon_name +" "+ respuesta.data.nombre);
                    $("#mail").html(icon_mail +" "+ correo);
                    myApp.hidePreloader();
                    myApp.closeModal(".login-screen", true);
                }else{
                    myApp.hidePreloader();
                    myApp.alert("Error en los datos de sesión", "SmartAPP");
                }
            },
            error: function(){
                myApp.hidePreloader();
                myApp.alert("Error en la Conexión", "SmartAPP");
            }
        });
    }else{
        myApp.alert("No hay datos ingresados", "SmartAPP");
    }
}
function registrar(){

    var nombre  = $("#nombre").val();
    var rut  = $("#rut").val();
    var fnac  = $("#fnac").val();
    var pass    = $("#pass").val();

    if(nombre.trim().length > 0  && pass.trim().length > 0){
        myApp.showPreloader("Registrando");
        $.ajax({
            dataType: "json",
            type: "POST",
            data:{
                user: nombre,
                pass: pass
            },
            url: "http://login-appmovilubb.rhcloud.com/",
            success: function(respuesta){
                if(respuesta.resp === true){
                    myApp.alert("El Usuario ha sido registrado Exitosamente", "SmartAPP");
                }else{
                    myApp.hidePreloader();
                    myApp.alert("Error en los datos de sesión", "SmartAPP");
                }
            },
            error: function(){
                myApp.hidePreloader();
                myApp.alert("Error en la Conexión", "SmartAPP");
            }
        });
    }else{
        myApp.alert("Erron faltal datos por ingresar", "SmartAPP");
    }
}
function cam(){
    navigator.camera.getPicture(
        function(photo){
           
        }, 
        function(error){
            
        }, 
        {
            quality:100,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1
        }
    );
}

