//Login
$("#btn_iniciar_sesion_modal").click(function(){
	
	var parametros = "usuario="+$("#txt_nombre_usuario_modal").val()+"&"+
	                 "pass="+$("#txt_contrasenia_modal").val();
	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/init",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length == 1){
				alert("access" + " " + JSON.stringify(respuesta[0].usuario_id));
				//codigo_usuario_guardado = respuesta[0].codigo_usuario;
				//var parametros2 = respuesta[0].codigo_usuario-1;
				window.location = "/busqueda-general.html";
				//$("#email_usuario").append($("#txt-usuario").val());

			}else
			    {
				alert("error");
				return false;
			    }
		}
	});

});



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





