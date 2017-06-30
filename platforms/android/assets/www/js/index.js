// Initialize your app
var myApp = new Framework7();

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

document.addEventListener("deviceready", function () {
    $("#iniciar_sesion").bind("click", iniciar_session);
    $("#cam").bind("click", cam);
    $('#registrar').bind('click', registrar);
    $('#geo').bind('click', geo);
  
});

function iniciar_session () {
    var icon_name = '<i class="f7-icons" style="font-size:14px;">person</i>';

    var rut  = $("#Rut").val();
    var pass = $("#Pass").val();

    if (rut.trim().length > 0 && pass.trim().length > 0) {
        myApp.showPreloader("Iniciando Sesión...");
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {
                rut: rut,
                pass: pass
            },
            url: "http://146.83.196.204:8070/fmunozv/ingresar.php",
            success: function (data, status, xhr) {
                if (data.respuesta) {
                    myApp.alert("Funciona", "SmartAPP");
                    
                    myApp.hidePreloader();
                    myApp.closeModal(".login-screen", true);
                } else {
                    myApp.hidePreloader();
                    myApp.alert("Error en los datos de sesión", "SmartAPP");
                }
            },
            error: function (xhr,status)  {
                myApp.hidePreloader();
                myApp.alert("Error en la Conexión", "SmartAPP");
            }
        });
    } else {
        myApp.alert("No hay datos ingresados", "SmartAPP");
    }
}
function registrar() {

    var nombre  = $("#nombre").val();
    var rut  = $("#rut").val();
    var correo  = $("#correo").val();
    var pass    = $("#pass").val();

    if (nombre.trim().length > 0  && rut.trim().length > 0 && correo.trim().length > 0 && pass.trim().length > 0) {
        myApp.showPreloader("Registrando");
        $.ajax({
            dataType: "json",
            type: "POST",
            data: {
                nombre: nombre,
                rut: rut,
				correo: correo,
                pass: pass
            },
            url: "http://146.83.196.204:8070/fmunozv/registrar.php",
            success: function (data, status, xhr) {
                if (data.respuesta) {
					
					myApp.hidePreloader();
                    myApp.alert("El Usuario ha sido registrado Exitosamente", "Restaurant",function (value){
					window.location = "index.html";
					});
                } else {
                    myApp.hidePreloader();
                    myApp.alert("Error en los datos de sesión", "SmartAPP");
                }
            },
            error: function (xhr,status) {
                myApp.hidePreloader();
                myApp.alert("Error en la Conexión", "SmartAPP");
            }
        });
    } else {
        myApp.alert("Erron faltan datos por ingresar", "SmartAPP");
    }
}
function cam() {
    navigator.camera.getPicture(
        function (photo) {
           
        },
		function (error) {
            
        },
		{
            quality: 100,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            cameraDirection: 1
        }
    );
}


