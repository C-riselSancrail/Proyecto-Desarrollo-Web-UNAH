var express = require("express");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var sha1 = require("sha1");
var mysql = require("mysql");

var app = express();
var urlEncodeParser = bodyParser.urlencoded({extended:false});
var urlEncodedParser = bodyParser.urlencoded({extended:false});

var conexion = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"miventa"
});
conexion.connect(function(error){
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

app.use(session({secret:'Hola',resave:true,saveUninitialized:true}));

app.use(cookieParser());
app.use(express.static("public"));
var publicAdmin = express.static("public-admin");

app.use(function(peticion,respuesta,next){
	if (peticion.session.usuario)
		publicAdmin(peticion,respuesta,next);
	else
		return next();
});

app.get("/",function(peticion, respuesta){
});

/*----------------------------------------------Inicio correcto----------------------------------------*/

app.post("/init", urlEncodeParser, function(peticion, respuesta){
	if(peticion.body.usuario && sha1(peticion.body.pass)){
	    peticion.session.usuario = peticion.body.usuario;
       	peticion.session.pass = sha1(peticion.body.pass);
	    conexion.query(
			"SELECT usuario_id FROM usuario where username = ? and password = ? ",
			[peticion.body.usuario,peticion.body.pass],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(filas));
				console.log(filas);
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

/*----------------------------------------------Buscar propiedades----------------------------------------*/
app.post("/BuscarInmuebles", urlEncodeParser, function(peticion, respuesta){
console.log("buscar inmuebles");
	conexion.query(
		    "SELECT nombreInmueble, precio, Descripcion, estado FROM inmueble_caracteristicas INNER JOIN inmueble ON inmueble_caracteristicas.Inmueble_Caracteristicas_id = inmueble.Inmueble_Caracteristicas_Inmueble_Caracteristicas_id INNER JOIN estado ON inmueble.estado_idestado = estado.idestado INNER JOIN inmueblexinmueble_categoria ON inmueble.Inmueble_id = inmueblexinmueble_categoria.Inmueble_Inmueble_id WHERE Ciudad_Ciudad_id=? AND precio=? AND inmueblexinmueble_categoria.Inmueble_Categoria_Inmueble_Categoria_id=?",
			[peticion.body.codigo_ciudad,peticion.body.precio,peticion.body.categoria_inmueble],
			function(err, filas, campos){
				if (err) throw err;
				respuesta.send(JSON.stringify(filas));
			}
		);
});
//SELECT precio, Descripcion, estado FROM inmueble_caracteristicas INNER JOIN inmueble ON inmueble_caracteristicas.Inmueble_Caracteristicas_id = inmueble.Inmueble_Caracteristicas_Inmueble_Caracteristicas_id INNER JOIN estado ON inmueble.estado_idestado = estado.idestado WHERE Ciudad_Ciudad_id=?






app.listen(3000);