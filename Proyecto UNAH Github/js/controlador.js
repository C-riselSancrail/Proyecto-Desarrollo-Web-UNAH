//Login
$("#btnLogin").click(function(){
	
	var parametros = "usuario="+$("#txt_nombre_usuario").val()+"&"+
	                 "pass="+$("#txt_contrasenia").val();
	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/init",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length == 1){
				alert("access" + " " + JSON.stringify(respuesta[0].codigo_alumno));
				//codigo_usuario_guardado = respuesta[0].codigo_usuario;
				//var parametros2 = respuesta[0].codigo_usuario-1;
				if (respuesta[0].codigo_alumno == 1 ) {
					
				window.location.href = "/Estudiantes.html";
				}
				
			}else
			    {
				alert("error");
				return false;
			    }
		}
	});

});


//NO APLICA A ESTE PROYECTO, EL CÓDIGO TAL CUAL ESTÁ :-p
//Buscar propiedades
$("#btn-buscar").click(function(){
	
	var parametros = 
	    "codigo_ciudad="+$("#slc-Ciudad").val()+"&"+
	    "categoria_inmueble="+$("#slc-categoriaInmueble").val()+"&"+
		"precio="+$("#txt-precio").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/BuscarInmuebles",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("encontrado");
				for(var i=0; i<respuesta.length;i++){

       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}

			}else
			    {
				alert("Inmueble No encontrado, verifique los datos ingresados");
				return false;
			    }
		}
	});

});





