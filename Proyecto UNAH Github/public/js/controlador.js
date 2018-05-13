/*------------------------Validar campos----------------------------*/
function validarCorreo(etiquetaEmail) {
    var patron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(patron.test(String(etiquetaEmail.value).toLowerCase())){
		etiquetaEmail.classList.remove("is-invalid");
    	etiquetaEmail.classList.add("is-valid");
    }else{
    	etiquetaEmail.classList.remove("is-valid");
    	etiquetaEmail.classList.add("is-invalid");
    }
}


function validarContrasena(etiqueta){
	if (etiqueta.value.length <7){
		alert("Ingrese una Contraseña con más de 6 caracteres");
		etiqueta.classList.remove("is-valid");
		etiqueta.classList.add("is-invalid");
	}
	else{
		etiqueta.classList.remove("is-invalid");
		etiqueta.classList.add("is-valid");
	}
}

function validarContrasena1(etiqueta){
	if (etiqueta.value.length <6){
		alert("Ingrese una Contraseña con más de 6 caracteres");
		etiqueta.classList.remove("is-valid");
		etiqueta.classList.add("is-invalid");
	}
	else{
		etiqueta.classList.remove("is-invalid");
		etiqueta.classList.add("is-valid");
	}
}





/*--------------------------------------------MÓDULOS DE LOGIN Y REGISTROS-----------------------------------------------------*/
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
			if(respuesta.length == 1){ //Diferenciar entre estudiantes, docentes, jefes de departamento o adminstrativo
				if (respuesta[0].CODIGO_ALUMNO) {
					alert("access" + " " + JSON.stringify(respuesta[0].CODIGO_ALUMNO));
					
					window.location.href = "/Estudiantes.html";
				}
				else{
					alert("access" + " " + JSON.stringify(respuesta[0].CODIGO_EMPLEADO));
						if (respuesta[0].CODIGO_CARGO == 4) {
							window.location.href = "/Docentes.html";
						}
						else {
							if (respuesta[0].CODIGO_CARGO == 1) {
								window.location.href = "/JefesDpto.html";
							}
							else {
								if (respuesta[0].CODIGO_CARGO == 6) {
									window.location.href = "/Administrativo.html";
								}
							}
						}
				}
				
			}else
			    {
				alert("ERROR: Ingrese sus datos correctamente");
				return false;
			    }
		}
	});

});


//Registrar Estudiante
$("#btnRA").click(function(){
	
	var parametros = 
	    "primerNombre="+$("#pname-form1-1i").val()+"&"+
	    "primerApellido="+$("#plastname-form1-1i").val()+"&"+
	    "nacimiento="+$("select[name=listaLugaresNacimiento]").val()+"&"+
	    "residencia="+$("select[name=listaLugaresResidencia]").val()+"&"+
	    "municipioNacimiento="+$("select[name=listaMunicipioNacimiento]").val()+"&"+
	    "municipioResidencia="+$("select[name=listaMunicipioResidencia]").val()+"&"+
	    "campus="+$("select[name=campus]").val()+"&"+
	    "estadoCivil="+$("select[name=estadoCivil]").val()+"&"+
	    "contrasena="+$("#password-form1-1i").val()+"&"+
	    "email="+$("#email-form1-1i").val()+"&"+
	    "phone="+$("#phone-form1-1i").val()+"&"+
	    "direccion="+$("#direccion-form1-1i").val()+"&"+
	    "sexo="+$("input[name='rbt-genero']:checked").val()+"&"+
	    "identidad="+$("#txt-identidad").val()+"&"+
	    "tipoId="+$("select[name=tipoIdentificacion]").val()+"&"+
	    "fechaNacimiento="+$("#dateRE").val()+"&"+
	    "numeroCuenta="+$("#numeroCuenta").val()+"&"+
		"promedio="+$("#promedio").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/registrar_estudiante",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Alumno registrado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos del Estudiante y verifique los datos ingresados");
				return false;
			    }
		}
	});

});

//INSERT INTO `tbl_empleados`(`CODIGO_EMPLEADO`, `NUMERO_EMPLEADO`, `SUELDO_BASE`, `CODIGO_TIPO_EMPLEADO`, `CODIGO_CARGO`, `CONTRASENA`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6])


//Registrar Empleado
$("#btnRE").click(function(){
	
	var parametros = 
	    "primerNombre="+$("#pnameE-form1-1i").val()+"&"+
	    "primerApellido="+$("#plastnameE-form1-1i").val()+"&"+
	    "nacimiento="+$("select[name=listaLugaresNacimientoE]").val()+"&"+
	    "residencia="+$("select[name=listaLugaresResidenciaE]").val()+"&"+
	    "municipioNacimiento="+$("select[name=listaMunicipioNacimientoE]").val()+"&"+
	    "municipioResidencia="+$("select[name=listaMunicipioResidenciaE]").val()+"&"+
	    "campus="+$("select[name=campusE]").val()+"&"+
	    "estadoCivil="+$("select[name=estadoCivilE]").val()+"&"+
	    "contrasena="+$("#passwordE-form1-1i").val()+"&"+
	    "email="+$("#emailE-form1-1i").val()+"&"+
	    "phone="+$("#phoneE-form1-1i").val()+"&"+
	    "direccion="+$("#direccionE-form1-1i").val()+"&"+
	    "sexo="+$("input[name='rbt-generoE']:checked").val()+"&"+
	    "identidad="+$("#txt-identidadE").val()+"&"+
	    "tipoId="+$("select[name=tipoIdentificacionE]").val()+"&"+
	    "fechaNacimiento="+$("#dateREE").val()+"&"+
	    "numeroEmpleado="+$("#numeroEmpleado").val()+"&"+
	    "tipoEmpleado="+$("select[name=tipoEmpleado]").val()+"&"+
	    "cargo="+$("select[name=cargo]").val()+"&"+
		"sueldoBase="+$("#sueldoBase").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/registrar_empleado",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Empleado registrado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos del Empleado y verifique los datos ingresados");
				return false;
			    }
		}
	});

});

//Mostrar Empleados
$("#btnMostrarEmpleados").click(function(){
	
	$.ajax({
		url:"/mostrar_empleados",
		method:"POST",
		data:"",
		success:function(respuesta){
			
			for(var i=0; i<respuesta.length;i++){
				if (i % 2) {
					$("#tblDatosE").append(
					'<tbody>'+
    					'<tr class="table">'+
      						'<th id="tableEmpleados1" scope="row">'+respuesta[i].CODIGO_EMPLEADO+'</th>'+
    				  		'<td>'+respuesta[i].NUMERO_EMPLEADO+'</td>'+
  				    		'<td>'+respuesta[i].CODIGO_TIPO_EMPLEADO+'</td>'+
			    	  		'<td>'+respuesta[i].CODIGO_CARGO+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}
  				else
  				{
  					$("#tblDatosE").append(
					'<tbody>'+
    					'<tr class="table-info">'+
      						'<th id="tableEmpleados1" scope="row">'+respuesta[i].CODIGO_EMPLEADO+'</th>'+
    				  		'<td>'+respuesta[i].NUMERO_EMPLEADO+'</td>'+
  				    		'<td>'+respuesta[i].CODIGO_TIPO_EMPLEADO+'</td>'+
			    	  		'<td>'+respuesta[i].CODIGO_CARGO+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}

                /*
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
				*/

    		}

		}
	});
});



////Registrar Docente
$("#btnRD").click(function(){
	
	var parametros = 
	    "codigoEmpleado="+$("#codigoEmpleado").val()+"&"+
	    "codigoEspecializacion="+$("select[name=codigoEspecializacion]").val()+"&"+
	    "titularidad="+$("select[name=titularidad]").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/registrar_docente",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Docente registrado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos del Docente y verifique los datos ingresados");
				return false;
			    }
		}
	});

});



/*---------------------------------MÓDULOS DE CAMBIO DE CARRERA, CENTRO REGIONAL Y CONTRASEÑA----------------------------------*/

//Mostrar Carreras
$("#btnMostrarCarreras").click(function(){
	
	$.ajax({
		url:"/mostrar_carreras",
		method:"POST",
		data:"",
		success:function(respuesta){
			
			for(var i=0; i<respuesta.length;i++){
				if (i % 2) {
					$("#tblDatosCarrera").append(
					'<tbody>'+
    					'<tr class="table">'+
      						'<th id="tableCarreras1" scope="row">'+respuesta[i].CODIGO_CARRERA+'</th>'+
    				  		'<td>'+respuesta[i].NOMBRE_CARRERA+'</td>'+
  				    		'<td>'+respuesta[i].CANTIDAD_ASIGNATURAS+'</td>'+
			    	  		'<td>'+respuesta[i].CANTIDAD_UNIDADES_VALORATIVAS+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}
  				else
  				{
  					$("#tblDatosCarrera").append(
					'<tbody>'+
    					'<tr class="table-info">'+
      						'<th id="tableCarreras2" scope="row">'+respuesta[i].CODIGO_CARRERA+'</th>'+
    				  		'<td>'+respuesta[i].NOMBRE_CARRERA+'</td>'+
  				    		'<td>'+respuesta[i].CANTIDAD_ASIGNATURAS+'</td>'+
			    	  		'<td>'+respuesta[i].CANTIDAD_UNIDADES_VALORATIVAS+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}

                
    		}

		}
	});
});


//Cambio de Carrera
$("#btnCambioCarrera").click(function(){
	
	var parametros = 
	    "numeroCuenta="+$("#numeroCuentaCambioCarrera-form1-3j").val()+"&"+
	    "carreraActual="+$("#carreraActual-form1-3j").val()+"&"+
	    "nuevaCarrera="+$("#nuevaCarrera-form1-3j").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/cambiar_carrera",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Cambio de carrera realizado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos del Alumno y Carrera, luego verifique los datos ingresados");
				return false;
			    }
		}
	});

});

//Cambio de Contraseña
$("#btnCambiarPassword").click(function(){
	
	var parametros = 
	    "numeroCuenta="+$("#numeroCuentaCambioContrasena-form1-2l").val()+"&"+
	    "contrasenaActual="+$("#contrasenaActual-form1-2l").val()+"&"+
	    "contrasenaNueva="+$("#contrasenaNueva-form1-2l").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/cambiar_contrasena",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Cambio de contraseña realizado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos del Alumno, luego verifique los datos ingresados");
				return false;
			    }
		}
	});

});


//Cambio de Centro Regional
$("#btnCambioRegional").click(function(){
	
	var parametros = 
	    "emailRegional="+$("#emailRegional-form1-3i").val()+"&"+
	    "campusActual="+$("select[name=campusR]").val()+"&"+
	    "campusNuevo="+$("select[name=campusRe]").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/cambiar_centroRegional",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Cambio de centro regional realizado");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente sus datos Alumno, luego verifique los datos ingresados");
				return false;
			    }
		}
	});

});


/*------------------------------------Módulo Matrícula (Adicionar, Cancelar y Forma03)--------------------------------------*/


//Mostrar Forma03
$("#btn_VerForma03").click(function(){
	
	$.ajax({
		url:"/mostrar_forma",
		method:"POST",
		data:"",
		success:function(respuesta){
			
			if (respuesta.length != 0) {
				alert(respuesta[0].tbl_periodos.NOMBRE_PERIODO);
			    for(var i=0; i<respuesta.length;i++){
					$("#tblDatosForma03").append(
					'<tbody>'+
    					'<tr>'+
      						'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].CODIGO_ALTERNO+'</td>'+
              				'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].NOMBRE_ASIGNATURA+'</td>'+
              				'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].tbl_seccion.CODIGO_ALTERNO+'</td>'+
              				'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].HORA_INICIO+'</td>'+
            				'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].HORA_FIN+'</td>'+
           				 	'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].ALIAS_EDIFICIO+'</td>'+
         			    	'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].NUMERO_AULA+'</td>'+
         			    	'<td class="body-item mbr-fonts-style display-7">'+respuesta[i].CANTIDAD_UNIDADES_VALORATIVAS+'</td>'+
           				    '<td class="body-item mbr-fonts-style display-7">'+respuesta[i].NOMBRE_PERIODO+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
    			}
    		}
 
		}
	});
});


//Mostrar Clases
$("#btn_mostrarClases").click(function(){
	
	$.ajax({
		url:"/mostrar_clasesMatricula",
		method:"POST",
		data:"",
		success:function(respuesta){
			
			//for(var i=0; i<respuesta.length;i++){
					$("#tblAdiciones").append(
					'<tbody>'+
    					'<tr>'+
    					    '<td class="">'+
    					    '<center>'+Departamentos+'</center>'+
                  			'<select multiple class="form-control">'+
                  			'<option >'+respuesta[0].NOMBRE_CARRERA+'</option>'+
                  			'<option >'+respuesta[0].NOMBRE_CARRERA+'</option>'+
                  			'<option >'+respuesta[0].NOMBRE_CARRERA+'</option>'+
             			 	'</select>'+
                			'</td>'+

							'<td class="">'+
                  				'<center>'+Asignaturas+'</center>'+
                 			 	'<select multiple class="form-control">'+
                	 			'<option>'+respuesta[1].NOMBRE_ASIGNATURA+'</option>'+
                 		 		'<option>'+respuesta[1].NOMBRE_ASIGNATURA+'</option>'+
                 		 		'<option>'+respuesta[1].NOMBRE_ASIGNATURA+'</option>'+
                 		 		'<option>'+respuesta[1].NOMBRE_ASIGNATURA+' </option>'+
             					'</select>'+
              		 		'</td>'+
              				'<td class="">'+
                  			'<center>'+Secciones+'</center>'+
                 		 	'<select multiple class="form-control">'+
                  			'<option >'+respuesta[0].CODIGO_ALTERNO+'</option>'+
                 		 	'<option >'+respuesta[0].CODIGO_ALTERNO+'</option>'+
                  			'<option >'+respuesta[0].CODIGO_ALTERNO+'</option>'+
                		  	'<option >'+respuesta[0].CODIGO_ALTERNO +'</option>'+
             				'</select>'+
             		   		'</td>'+
             		 	'</tr>'+	
  					'</tbody>'
					);
  				
               

                
    		//}

		}
	});
});


//Matricular
$("#btn_matricular").click(function(){
	
	var parametros = 
	    "depto="+$("select[name=depto]").val()+"&"+
	    "asig="+$("select[name=asig]").val()+"&"+
	    "seccion="+$("select[name=seccion]").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/adicionar_clase",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Clase registrada");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente los datos de las clases y verifique los datos ingresados");
				return false;
			    }
		}
	});

});



//Mostrar Clases Cancelar
$("#btnMostrarClass").click(function(){
	
	$.ajax({
		url:"/mostrar_class",
		method:"POST",
		data:"",
		success:function(respuesta){
			
			for(var i=0; i<respuesta.length;i++){
				if (i % 2) {
					$("#tblDatosCancelar").append(
					'<tbody>'+
    					'<tr class="table">'+
      						'<th id="tableCarreras1" scope="row">'+respuesta[i].FECHA_MATRICULA+'</th>'+
    				  		'<td>'+respuesta[i].CODIGO_SECCION+'</td>'+
  				    		'<td>'+respuesta[i].CODIGO_ALUMNO+'</td>'+
			    	  		'<td>'+respuesta[i].CODIGO_ESTADO_MATRICULA+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}
  				else
  				{
  					$("#tblDatosCarrera").append(
					'<tbody>'+
    					'<tr class="table-info">'+
      						'<th id="tableCarreras2" scope="row">'+respuesta[i].FECHA_MATRICULA+'</th>'+
    				  		'<td>'+respuesta[i].CODIGO_SECCION+'</td>'+
  				    		'<td>'+respuesta[i].CODIGO_ALUMNO+'</td>'+
			    	  		'<td>'+respuesta[i].CODIGO_ESTADO_MATRICULA+'</td>'+
    					'</tr>'+
  					'</tbody>'
					);
  				}

                
    		}

		}
	});
});

//Cambio de Centro Regional
$("#btnCancelarClase").click(function(){
	
	var parametros = 
	    "asigna="+$("#asig-form1-3t").val()+"&"+
	    "seccion="+$("#seccion-form1-3t").val()+"&"+
	    "periodo="+$("#periodo-form1-3t]").val();

	alert("informacion a enviar al ajax: " + parametros);

	$.ajax({
		url:"/cancelarAsig",
		data:parametros,
		method:"POST",
		dataType:"JSON",
		success:function(respuesta){
			if(respuesta.length != 0){
				alert("Cancelación realizada");
				
				/*for(var i=0; i<respuesta.length;i++){
                
       			$("#dlresultados").append("<dt>" + respuesta[i].nombreInmueble + "</dt>"+ "<dd>" + respuesta[i].precio + "</dd>" +
       			 "<dd>" + respuesta[i].Descripcion + "</dd>" +"<dd>" + respuesta[i].estado + "</dd>" + "<br>");
					
    			}*/

			}else
			    {
				alert("Digite correctamente sus datos Alumno, luego verifique los datos ingresados");
				return false;
			    }
		}
	});

});



















/*-----------------------------------------------FIN DEL CÓDIGO DEL PROYECTO---------------------------------------------------*/
//NO APLICA A ESTE PROYECTO, EL CÓDIGO TAL CUAL ESTÁ :-p


/*
$(window).load(function() {
    alert("Adios");
});
*/

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





