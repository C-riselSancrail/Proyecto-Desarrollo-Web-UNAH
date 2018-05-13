var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var mysql = require("mysql");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"unah_db"
});
conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log(' correcta.');
   }
});

var conexion1 = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"unah_db"
});
conexion1.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log(' correcta.');
   }
});

var conexion2 = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"unah_db"
});
conexion2.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log(' correcta.');
   }
});


//Midleware de seguridad
function verificarAutenticacion(peticion, respuesta, next){
	if(peticion.session.usuario)
		return next();
	else
		respuesta.send("ERROR, ACCESO NO AUTORIZADO");
}

app.use(express.static("public"));
app.use(session({secret:"ASDFE$%#%",resave:true, saveUninitialized:true}));


//app.use(session({secret:'Hola',resave:true,saveUninitialized:true}));

app.use(cookieParser());

//var publicAdmin = express.static("public-admin");

/*
app.use(function(peticion,respuesta,next){
	if (peticion.session.usuario)
		publicAdmin(peticion,respuesta,next);
	else
		return next();
});*/

var publicAdmin = express.static("public-admin");
var publicDocente = express.static("public-docente");
var publicEstudiantes = express.static("public-estudiantes");
var publicJefesDpto = express.static("public-jefesDpto");
app.use(
    function(peticion,respuesta,next){
        if (peticion.session.usuario){
            if (peticion.session.codigo)
                publicEstudiantes(peticion,respuesta,next);
            else if (peticion.session.cargo == 1)
                publicJefesDpto(peticion,respuesta,next);
                 else if (peticion.session.cargo == 4)
                 	publicDocente(peticion,respuesta,next);
                      else if (peticion.session.cargo == 6)
                      	publicAdmin(peticion,respuesta,next);
        }
        else
            return next();
    }
);



app.get("/",function(peticion, respuesta){
});

/*----------------------------------------------Módulo Login----------------------------------------*/

app.post("/init", function(peticion, respuesta){
	if(peticion.body.usuario && sha1(peticion.body.pass)){
	    conexion1.query(
	    	"SELECT CODIGO_ALUMNO, CONTRASENA, NUMERO_CUENTA FROM `tbl_alumnos` WHERE NUMERO_CUENTA = ? AND CONTRASENA = ? ",
	    	//"SELECT CODIGO_ALUMNO, NUMERO_CUENTA FROM `tbl_alumnos` WHERE CODIGO_ALUMNO = 1 OR 2" posible consulta para redireccionar a la pagina estudiantes
			//"SELECT usuario_id FROM usuario where username = ? and password = ? ",
			[peticion.body.usuario,peticion.body.pass],
			function(err, filas, campos){
				if (filas.length>0){
					//throw err; //si hay un error, lanza la excepción
	    			peticion.session.usuario = filas[0].NUMERO_CUENTA;
       				peticion.session.pass = sha1(filas[0].CONTRASENA);
       				peticion.session.codigo = filas[0].CODIGO_ALUMNO;
					respuesta.send(JSON.stringify(filas));
					console.log(filas);
					
				}else{
						conexion2.query(
	    					"SELECT CODIGO_EMPLEADO, CODIGO_TIPO_EMPLEADO, CODIGO_CARGO, NUMERO_EMPLEADO, CONTRASENA FROM `tbl_empleados` WHERE NUMERO_EMPLEADO = ? AND CONTRASENA =?",
	    					//"SELECT CODIGO_ALUMNO, NUMERO_CUENTA FROM `tbl_alumnos` WHERE CODIGO_ALUMNO = 1 OR 2" posible consulta para redireccionar a la pagina estudiantes
							//"SELECT usuario_id FROM usuario where username = ? and password = ? ",
							[peticion.body.usuario,peticion.body.pass],
							function(err, filas, campos){
								if (filas.length>0){
									//throw err; //si hay un error, lanza la excepción
	    							peticion.session.usuario = filas[0].NUMERO_EMPLEADO;
       								peticion.session.pass = sha1(filas[0].CONTRASENA);
       								peticion.session.cargo = filas[0].CODIGO_CARGO;
									respuesta.send(JSON.stringify(filas));
									console.log(filas);
					
								}else{
					
									respuesta.send(JSON.stringify(filas));
									console.log("Login Fallido");
								}
							}
							);

					//respuesta.send(JSON.stringify(filas));
					//console.log("Login Fallido");
				}
			}
		);
		}else{
			peticion.session.destroy();
			respuesta.send({status:0,mensaje:"401 Acceso no autorizado"});
		}

});

app.get("/logout", function(peticion, respuesta){
		peticion.session.destroy();
		respuesta.sendFile(__dirname+"/public/index.html");
});

app.get("/obtener_sesion", function(peticion, respuesta){
   respuesta.send("Valor de la variable de sesion almacenado: " + peticion.session.usuario + " - " + peticion.session.pass + " - " + peticion.session.codigo);
});


/*------------------------------------Módulo Registrar (Docentes, Estudiantes y Empleados)--------------------------------------*/

app.post("/registrar_estudiante", function(peticion, respuesta){
		console.log("registro de estudiante");
		/*
		conexion.query(
		    "SELECT nombreInmueble, precio, Descripcion, estado FROM inmueble_caracteristicas INNER JOIN inmueble ON inmueble_caracteristicas.Inmueble_Caracteristicas_id = inmueble.Inmueble_Caracteristicas_Inmueble_Caracteristicas_id INNER JOIN estado ON inmueble.estado_idestado = estado.idestado INNER JOIN inmueblexinmueble_categoria ON inmueble.Inmueble_id = inmueblexinmueble_categoria.Inmueble_Inmueble_id WHERE Ciudad_Ciudad_id=? AND precio=? AND inmueblexinmueble_categoria.Inmueble_Categoria_Inmueble_Categoria_id=?",
			[peticion.body.codigo_ciudad,peticion.body.precio,peticion.body.categoria_inmueble],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(filas));
			}
		);*/
		var codigoPersona;
		var numeroCuenta = peticion.body.numeroCuenta;
		var promedio = peticion.body.promedio;
		var contrasena = peticion.body.contrasena;

		//Primero guardar datos de persona y luego datos de alumno
		conexion.query(
		//INSERT INTO `tbl_personas` (`CODIGO_PERSONA`, `CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) VALUES (NULL, '2', '1', '1', '1', '1', '1', '1', '1', 'José', 'Gomez', '1992-05-08 00:00:00', '0801199212321', 'Colonia Miraflores', '98075482', 'JoseG@gmail.com'), (NULL, '1', '6', '2', '6', '2', '2', '1', '1', 'María', 'Db', '1988-07-09 00:00:00', '0912198823357', 'Colonia las américas', '90942234', 'MariaDB@gmail.com');
		"INSERT INTO `tbl_personas` (`CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) "+
		"VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
		[
			peticion.body.sexo,
			peticion.body.nacimiento,
			peticion.body.residencia,
			peticion.body.municipioNacimiento,
			peticion.body.municipioResidencia,
			peticion.body.campus,
			peticion.body.tipoId,
			peticion.body.estadoCivil,
			peticion.body.primerNombre,
			peticion.body.primerApellido,
			peticion.body.fechaNacimiento,
			peticion.body.identidad,
			peticion.body.direccion,
			peticion.body.phone,
			peticion.body.email,
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				console.log("valor de resultado.insertId: " + resultado.insertId);
				conexion.query("INSERT INTO `tbl_alumnos`(`CODIGO_ALUMNO`, `NUMERO_CUENTA`, `PROMEDIO`, `CONTRASENA`) VALUES (?,?,?,?)",
					[resultado.insertId, numeroCuenta, promedio, contrasena],
					function(errorSelect, informacion, campos){
						if (errorSelect) throw errorSelect;
						conexion.end();
						respuesta.send(informacion);
						console.log("Alumno registrado exitosamente");		
					}
				);
			}
			
		});

});


//UPDATE `tbl_personas` SET `TELEFONO` = '9807-5482' WHERE `tbl_personas`.`CODIGO_PERSONA` = 1; UPDATE `tbl_personas` SET `TELEFONO` = '9094-2234' WHERE `tbl_personas`.`CODIGO_PERSONA` = 2; UPDATE `tbl_personas` SET `TELEFONO` = '8992-6022' WHERE `tbl_personas`.`CODIGO_PERSONA` = 3; UPDATE `tbl_personas` SET `TELEFONO` = '9802-4710' WHERE `tbl_personas`.`CODIGO_PERSONA` = 4;



app.post("/registrar_empleado", function(peticion, respuesta){
		console.log("registro de empleado");
		
		
		var numeroEmpleado = peticion.body.numeroEmpleado;
		var sueldoBase = peticion.body.sueldoBase;
		var contrasena = peticion.body.contrasena;
		var tipoEmpleado = peticion.body.tipoEmpleado;
		var cargo = peticion.body.cargo;

		//Primero guardar datos de persona y luego datos de empleado
		conexion.query(
		//INSERT INTO `tbl_personas` (`CODIGO_PERSONA`, `CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) VALUES (NULL, '2', '1', '1', '1', '1', '1', '1', '1', 'José', 'Gomez', '1992-05-08 00:00:00', '0801199212321', 'Colonia Miraflores', '98075482', 'JoseG@gmail.com'), (NULL, '1', '6', '2', '6', '2', '2', '1', '1', 'María', 'Db', '1988-07-09 00:00:00', '0912198823357', 'Colonia las américas', '90942234', 'MariaDB@gmail.com');
		"INSERT INTO `tbl_personas` (`CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) "+
		"VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
		[
			peticion.body.sexo,
			peticion.body.nacimiento,
			peticion.body.residencia,
			peticion.body.municipioNacimiento,
			peticion.body.municipioResidencia,
			peticion.body.campus,
			peticion.body.tipoId,
			peticion.body.estadoCivil,
			peticion.body.primerNombre,
			peticion.body.primerApellido,
			peticion.body.fechaNacimiento,
			peticion.body.identidad,
			peticion.body.direccion,
			peticion.body.phone,
			peticion.body.email,
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				console.log("valor de resultado.insertId: " + resultado.insertId);
				conexion.query("INSERT INTO `tbl_empleados`(`CODIGO_EMPLEADO`, `NUMERO_EMPLEADO`, `SUELDO_BASE`, `CODIGO_TIPO_EMPLEADO`, `CODIGO_CARGO`, `CONTRASENA`) VALUES (?,?,?,?,?,?)",
					[resultado.insertId, numeroEmpleado, sueldoBase, tipoEmpleado, cargo, contrasena],
					function(errorSelect, informacion, campos){
						if (errorSelect) throw errorSelect;
						conexion.end();
						respuesta.send(informacion);
						console.log("Empleado registrado exitosamente");		
					}
				);
			}
			
		});

});


app.post("/mostrar_empleados", function(peticion, respuesta){
console.log("Mostrar Empleados");
	conexion.query(
		    "SELECT CODIGO_EMPLEADO, NUMERO_EMPLEADO, CODIGO_TIPO_EMPLEADO, CODIGO_CARGO  FROM `tbl_empleados`",
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log(JSON.stringify(filas));
			}
		);
});


app.post("/registrar_docente", function(peticion, respuesta){
	console.log("registro de docente");

	conexion.query(
		"INSERT INTO `tbl_maestros`(`CODIGO_MAESTRO`, `CODIGO_ESPECIALIZACION`, `CODIGO_TITULARIDAD`) "+
		"VALUES (?,?,?)", 
		[
			peticion.body.codigoEmpleado,
			peticion.body.codigoEspecializacion,
			peticion.body.titularidad,
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				respuesta.send(resultado);
			}
			else
			{
				throw error;
			}
			
		});
});

app.post("/mostrar_carreras", function(peticion, respuesta){
console.log("Mostrar Empleados");
	conexion.query(
		    "SELECT `CODIGO_CARRERA`, `NOMBRE_CARRERA`, `CANTIDAD_ASIGNATURAS`, `CANTIDAD_UNIDADES_VALORATIVAS` FROM `tbl_carreras`",
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log(JSON.stringify(filas));
			}
		);
});


app.post("/cambiar_carrera", function(peticion, respuesta){
	console.log("cambio carrera");


		var numeroCuenta = peticion.body.numeroCuenta;
		var carreraActual = peticion.body.carreraActual;
		var nuevaCarrera = peticion.body.nuevaCarrera;
		
		//Primero buscar el código del alumno con el número de cuenta
		conexion.query(
		
		"SELECT `CODIGO_ALUMNO` FROM `tbl_alumnos` WHERE NUMERO_CUENTA = ?", 
		[
			peticion.body.numeroCuenta,
		],
		function(error, resultado){
			//if (resultado.affectedRows==0){
				console.log("CODIGO ALUMNO: " + resultado[0].CODIGO_ALUMNO);
				//console.log("valor de resultado.insertId: " + resultado.insertId);
				conexion.query("UPDATE `tbl_carreras_x_alumnos` SET `CODIGO_CARRERA`=?,`FECHA_REGISTRO_CARRERA`=sysdate() WHERE CODIGO_CARRERA=? AND CODIGO_ALUMNO=?",
					[nuevaCarrera, carreraActual, resultado[0].CODIGO_ALUMNO],
					function(errorSelect, informacion, campos){
						if (errorSelect) throw errorSelect;
						conexion.end();
						respuesta.send(informacion);
						console.log("Cambio de carrera exitoso");		
					}
				);
			//}
			
		});

});


app.post("/cambiar_contrasena", function(peticion, respuesta){
	console.log("Cambiar Contraseña");
	conexion.query("UPDATE `tbl_alumnos` SET `CONTRASENA`=? WHERE CONTRASENA=? AND NUMERO_CUENTA=?",
		    [peticion.body.contrasenaNueva, peticion.body.contrasenaActual, peticion.body.numeroCuenta],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log("Cambio de contraseña exitoso");
			}
		);
});


app.post("/cambiar_centroRegional", function(peticion, respuesta){
	console.log("Cambiar Centro Regional");
	conexion.query("UPDATE `tbl_personas` SET `CODIGO_CAMPUS`=? WHERE CORREO_ELECTRONICO=? AND CODIGO_CAMPUS=?",
		    [peticion.body.campusNuevo, peticion.body.emailRegional, peticion.body.campusActual],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log("Cambio de centro regional exitoso");
			}
		);
});


/*------------------------------------Módulo Matrícula (Adicionar, Cancelar y Forma03)--------------------------------------*/


app.post("/mostrar_forma", function(peticion, respuesta){
console.log("Mostrar Forma03");
	conexion.query(
		    "SELECT tbl_asignaturas.CODIGO_ALTERNO, tbl_asignaturas.NOMBRE_ASIGNATURA, tbl_asignaturas.CANTIDAD_UNIDADES_VALORATIVAS, tbl_seccion.CODIGO_ALTERNO, tbl_seccion.HORA_INICIO, tbl_seccion.HORA_FIN, tbl_aulas.NUMERO_AULA, tbl_edificios.ALIAS_EDIFICIO, tbl_periodos.NOMBRE_PERIODO FROM `tbl_asignaturas` INNER JOIN `tbl_seccion` ON tbl_asignaturas.CODIGO_ASIGNATURA=tbl_seccion.CODIGO_ASIGNATURA INNER JOIN tbl_aulas ON tbl_seccion.CODIGO_AULA=tbl_aulas.CODIGO_AULA INNER JOIN tbl_edificios ON tbl_aulas.CODIGO_EDIFICIO=tbl_edificios.CODIGO_EDIFICIO INNER JOIN tbl_periodos ON tbl_seccion.CODIGO_PERIODO=tbl_periodos.CODIGO_PERIODO",
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log(filas);
			}
		);
});



app.post("/mostrar_clasesMatricula", function(peticion, respuesta){
console.log("Mostrar clases");
	conexion.query(
		    "SELECT tbl_carreras.NOMBRE_CARRERA, tbl_asignaturas.NOMBRE_ASIGNATURA, tbl_asignaturas.CANTIDAD_UNIDADES_VALORATIVAS, tbl_seccion.CODIGO_ALTERNO, tbl_seccion.HORA_INICIO, tbl_seccion.HORA_FIN, tbl_aulas.NUMERO_AULA, tbl_edificios.ALIAS_EDIFICIO, tbl_periodos.NOMBRE_PERIODO FROM `tbl_asignaturas` INNER JOIN `tbl_seccion` ON tbl_asignaturas.CODIGO_ASIGNATURA=tbl_seccion.CODIGO_ASIGNATURA INNER JOIN tbl_aulas ON tbl_seccion.CODIGO_AULA=tbl_aulas.CODIGO_AULA INNER JOIN tbl_edificios ON tbl_aulas.CODIGO_EDIFICIO=tbl_edificios.CODIGO_EDIFICIO INNER JOIN tbl_periodos ON tbl_seccion.CODIGO_PERIODO=tbl_periodos.CODIGO_PERIODO INNER JOIN tbl_carreras ON tbl_asignaturas.CODIGO_CARRERA=tbl_carreras.CODIGO_CARRERA",
			function(err, filas, campos){
				if (filas.affectedRows!=0){
				respuesta.send(filas);
				console.log(filas);
			    }
			}
		);
});


app.post("/adicionar_clase", function(peticion, respuesta){
	console.log("registro de docente");

	var estado =1;
	conexion.query(
		"INSERT INTO `tbl_matricula`(`FECHA_MATRICULA`, `CODIGO_SECCION`, `CODIGO_ALUMNO`, `CODIGO_ESTADO_MATRICULA`) VALUES (sysdate(),?,?,?)", 
		[
			peticion.body.seccion,
			peticion.session.codigo,
			estado,
		],
		function(error, resultado){
			if (resultado.affectedRows==1){
				respuesta.send(resultado);
			}
			else
			{
				throw error;
			}
			
		});
});


app.post("/cancelarAsig", function(peticion, respuesta){
console.log("Mostrar clases a cancelar");
	conexion.query(
		    "DELETE FROM `tbl_matricula` WHERE CODIGO_SECCION=?",
			[
				
				peticion.body.seccion,
			],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(filas);
				console.log(JSON.stringify(filas));
			}
		);
});
























app.listen(3000);