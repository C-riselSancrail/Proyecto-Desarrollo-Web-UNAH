INSERT INTO `tbl_tipo_lugares` (`CODIGO_TIPO_LUGAR`, `NOMBRE_TIPO_LUGAR`) VALUES (NULL, 'Ciudad'), (NULL, 'Pueblo');

INSERT INTO `tbl_tipo_lugares` (`CODIGO_TIPO_LUGAR`, `NOMBRE_TIPO_LUGAR`) VALUES (NULL, 'Aldea');

INSERT INTO `tbl_tipo_lugares` (`CODIGO_TIPO_LUGAR`, `NOMBRE_TIPO_LUGAR`) VALUES (NULL, 'Departamento');

INSERT INTO `tbl_lugares` (`CODIGO_LUGAR`, `NOMBRE_LUGAR`, `LONGITUD`, `LATITUD`, `CODIGO_TIPO_LUGAR`, `CODIGO_LUGAR_PADRE`) VALUES (NULL, 'Tegucigalpa', '-88.0250015', '15.5041704', '1', NULL), (NULL, 'San Pedro Sula', '-87.20681', '14.0818005', '1', NULL);

INSERT INTO `tbl_lugares` (`CODIGO_LUGAR`, `NOMBRE_LUGAR`, `LONGITUD`, `LATITUD`, `CODIGO_TIPO_LUGAR`, `CODIGO_LUGAR_PADRE`) VALUES (NULL, 'Francisco Morazán', '-87.20681', '14.0818005', '4', NULL), (NULL, 'Puerto Cotés', '-87.9296799', '15.8256197', '1', NULL);

INSERT INTO `tbl_lugares` (`CODIGO_LUGAR`, `NOMBRE_LUGAR`, `LONGITUD`, `LATITUD`, `CODIGO_TIPO_LUGAR`, `CODIGO_LUGAR_PADRE`) VALUES (NULL, 'Cortés', '-88.013611', '15.502778', '4', NULL);

INSERT INTO `tbl_lugares` (`CODIGO_LUGAR`, `NOMBRE_LUGAR`, `LONGITUD`, `LATITUD`, `CODIGO_TIPO_LUGAR`, `CODIGO_LUGAR_PADRE`) VALUES (NULL, 'Choloma', '-87.9530182', '15.61444', '1', '5');

UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '5' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 2; UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '5' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 5;

UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '3' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 3; UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '4' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 4;

UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '3' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 1;

INSERT INTO `tbl_personas` (`CODIGO_PERSONA`, `CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) VALUES (NULL, '2', '1', '1', '1', '1', '1', '1', '1', 'José', 'Gomez', '1992-05-08 00:00:00', '0801-1992-12321', 'Colonia Miraflores', '98075482', 'JoseG@gmail.com'), (NULL, '1', '6', '2', '6', '2', '2', '1', '1', 'María', 'Db', '1988-07-09 00:00:00', '0912-1988-23357', 'Colonia las américas', '90942234', 'MariaDB@gmail.com');

UPDATE `tbl_tipo_identificacion` SET `TIPO_IDENTIFICACION` = 'CEDULA' WHERE `tbl_tipo_identificacion`.`CODIGO_TIPO_IDENTIFICACION` = 1;

INSERT INTO `tbl_tipo_identificacion` (`CODIGO_TIPO_IDENTIFICACION`, `TIPO_IDENTIFICACION`) VALUES (NULL, 'PARTIDA DE NACIMIENTO');

UPDATE `tbl_lugares` SET `CODIGO_LUGAR_PADRE` = '5' WHERE `tbl_lugares`.`CODIGO_LUGAR` = 4;

INSERT INTO `tbl_universidades` (`CODIGO_UNIVERSIDAD`, `NOMBRE_UNIVERSIDAD`, `DIRECCION`, `TELEFONO`) VALUES (NULL, 'Universidad Nacional Autónoma de Honduras', 'Blvd. Suyapa', '2232-5496'), (NULL, 'Universidad Tecnológica Centroamericana', ' frente a Residencial, V-782 Boulevard Kennedy', '2268-1000');

INSERT INTO `tbl_titulos` (`CODIGO_TITULO`, `NOMBRE_TITULO`) VALUES (NULL, 'Licenciatura en Ingeniería en Sistemas'), (NULL, 'Licenciatura en Administración de Empresas');

INSERT INTO `tbl_titulos` (`CODIGO_TITULO`, `NOMBRE_TITULO`) VALUES (NULL, 'Licenciatura en Medicina'), (NULL, 'Maestría en Gestión de Proyectos');

INSERT INTO `tbl_titulos` (`CODIGO_TITULO`, `NOMBRE_TITULO`) VALUES (NULL, 'Doctorado en Gestión de Proyectos'), (NULL, 'Licenciatura en Derecho');

INSERT INTO `tbl_titulos` (`CODIGO_TITULO`, `NOMBRE_TITULO`) VALUES (NULL, 'Maestría en Administración Pública'), (NULL, 'Licenciatura en Química y Farmacia');

INSERT INTO `tbl_personas` (`CODIGO_PERSONA`, `CODIGO_GENERO`, `CODIGO_LUGAR_NACIMIENTO`, `CODIGO_LUGAR_RESIDENCIA`, `CODIGO_MUNICIPIO_NACIMIENTO`, `CODIGO_MUNICIPIO_RESIDENCIA`, `CODIGO_CAMPUS`, `CODIGO_TIPO_IDENTIFICACION`, `CODIGO_ESTADO_CIVIL`, `NOMBRE`, `APELLIDO`, `FECHA_NACIMIENTO`, `IDENTIDAD`, `DIRECCION`, `TELEFONO`, `CORREO_ELECTRONICO`) VALUES (NULL, '1', '6', '1', '6', '1', '1', '1', '2', 'Gracia', 'Villalba', '1978-09-19 00:00:00', '0704197821082', 'Residencial Los Hidalgos', '89926022', 'GraciaV@gail.com'), (NULL, '2', '4', '2', '4', '2', '2', '1', '2', 'Pablo', 'Hernández', '1980-02-21 00:00:00', '0620198068451', 'Colonia La Colina Norte', '98024710', 'PabloH@gmail.com');

INSERT INTO `tbl_cargos` (`CODIGO_CARGO`, `CODIGO_CARGO_SUPERIOR`, `NOMBRE_CARGO`) VALUES (NULL, '1', 'Jefe de Departamento'), (NULL, '1', 'Secretaria de Departamento');

INSERT INTO `tbl_cargos` (`CODIGO_CARGO`, `CODIGO_CARGO_SUPERIOR`, `NOMBRE_CARGO`) VALUES (NULL, '1', 'Coordinador de Carrera'), (NULL, '1', 'Docente');

INSERT INTO `tbl_cargos` (`CODIGO_CARGO`, `CODIGO_CARGO_SUPERIOR`, `NOMBRE_CARGO`) VALUES (NULL, '1', 'Decano de Facultad'), (NULL, NULL, 'Administrativo');

UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '5' WHERE `tbl_cargos`.`CODIGO_CARGO` = 1; UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '5' WHERE `tbl_cargos`.`CODIGO_CARGO` = 5; UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '6', `NOMBRE_CARGO` = 'Administrativo general' WHERE `tbl_cargos`.`CODIGO_CARGO` = 6;

INSERT INTO `tbl_cargos` (`CODIGO_CARGO`, `CODIGO_CARGO_SUPERIOR`, `NOMBRE_CARGO`) VALUES (NULL, NULL, 'Secretaria de VOAE');

UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '7' WHERE `tbl_cargos`.`CODIGO_CARGO` = 6; UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '7' WHERE `tbl_cargos`.`CODIGO_CARGO` = 7;

UPDATE `tbl_cargos` SET `CODIGO_CARGO_SUPERIOR` = '7' WHERE `tbl_cargos`.`CODIGO_CARGO` = 5;

INSERT INTO `tbl_tipo_empleado` (`CODIGO_TIPO_EMPLEADO`, `NOMBRE_TIPO_EMPLEADO`) VALUES (NULL, 'Docente'), (NULL, 'Administrativo');

INSERT INTO `tbl_tipo_empleado` (`CODIGO_TIPO_EMPLEADO`, `NOMBRE_TIPO_EMPLEADO`) VALUES (NULL, 'Soporte Técnico'), (NULL, 'Aseo');

INSERT INTO `tbl_empleados` (`CODIGO_EMPLEADO`, `NUMERO_EMPLEADO`, `SUELDO_BASE`, `CODIGO_TIPO_EMPLEADO`, `CODIGO_CARGO`) VALUES ('', '1992214365', '30000.00', '1, '4'), ('', '1980324312', '40000.00', '2', '1');

UPDATE `tbl_empleados` SET `CODIGO_EMPLEADO` = '3', `NUMERO_EMPLEADO` = '1978214365' WHERE `tbl_empleados`.`CODIGO_EMPLEADO` = 1; UPDATE `tbl_empleados` SET `CODIGO_EMPLEADO` = '4' WHERE `tbl_empleados`.`CODIGO_EMPLEADO` = 2;

UPDATE `tbl_empleados` SET `CONTRASENA` = 'asd567' WHERE `tbl_empleados`.`CODIGO_EMPLEADO` = 3; UPDATE `tbl_empleados` SET `CONTRASENA` = 'asd567' WHERE `tbl_empleados`.`CODIGO_EMPLEADO` = 4;

INSERT INTO `tbl_area_especializaciones` (`CODIGO_ESPECIALIZACION`, `DESCRIPCION`) VALUES (NULL, 'Sistemas Expertos'), (NULL, 'Inteligencia Artificial');

INSERT INTO `tbl_area_especializaciones` (`CODIGO_ESPECIALIZACION`, `DESCRIPCION`) VALUES (NULL, 'Relaciones Diplomáticas'), (NULL, 'Economía Global');

INSERT INTO `tbl_titularidad` (`CODIGO_TITULARIDAD`, `NOMBRE_TITULARIDAD`, `SALARIO_MINIMO`, `SALARIO_MAXIMO`) VALUES (NULL, 'Titular 1', '15000.00', '25000.00'), (NULL, 'Titular 2', '20000.00', '30000.00');

INSERT INTO `tbl_titularidad` (`CODIGO_TITULARIDAD`, `NOMBRE_TITULARIDAD`, `SALARIO_MINIMO`, `SALARIO_MAXIMO`) VALUES (NULL, 'Titular 3', '25000.00', '35000.00'), (NULL, 'Titular 4', '30000.00', '40000.00');

INSERT INTO `tbl_titulos_x_empleado` (`CODIGO_TITULO`, `CODIGO_EMPLEADO`, `CODIGO_UNIVERSIDAD`, `FECHA`, `NUMERO_REGISTRO`) VALUES ('1', '3', '1', '2001-05-24 00:00:00', '2001ABC'), ('4', '4', '2', '2005-07-28 00:00:00', '2005XYZ');

INSERT INTO `tbl_maestros` (`CODIGO_MAESTRO`, `CODIGO_ESPECIALIZACION`, `CODIGO_TITULARIDAD`) VALUES ('3', '2', '2'), ('4', '1', '3');

INSERT INTO `tbl_tipos_periodos` (`CODIGO_TIPO_PERIODO`, `TIPO_PERIODO`) VALUES (NULL, 'Regular'), (NULL, 'Intensivo');

INSERT INTO `tbl_tipos_evaluaciones` (`CODIGO_TIPO_EVALUACION`, `NOMBRE_TIPO_EVALUACION`) VALUES (NULL, 'Normal'), (NULL, 'Extraordinaria');

UPDATE `tbl_tipos_aulas` SET `DESCRIPCION` = 'Aulas con pupitres y pizarra.' WHERE `tbl_tipos_aulas`.`CODIGO_TIPO_AULA` = 1; UPDATE `tbl_tipos_aulas` SET `DESCRIPCION` = 'Aulas con sillas y computadores.' WHERE `tbl_tipos_aulas`.`CODIGO_TIPO_AULA` = 2;

INSERT INTO `tbl_tipo_asignatura` (`CODIGO_TIPO_ASIGNATURA`, `TIPO_ASIGNATURA`) VALUES ('1', 'Presencial'), ('2', 'En línea');

INSERT INTO `tbl_periodos` (`CODIGO_PERIODO`, `NOMBRE_PERIODO`, `FECHA_INICIO`, `FECHA_FIN`, `CODIGO_TIPO_PERIODO`) VALUES (NULL, 'IP-2018', '2018-02-10 00:00:00', '2018-05-18 00:00:00', '1'), (NULL, 'IIP-2018', '2018-06-04 00:00:00', '2018-09-21 00:00:00', '1');

INSERT INTO `tbl_facultades` (`CODIGO_FACULTAD`, `NOMBRE_FACULTAD`, `DESCRIPCION`) VALUES (NULL, 'Ingeniería', 'Facultad donde se imparten todas las carreras de ingeniería.'), (NULL, 'Ciencias Económicas', 'Facultad donde se imparten todas las carreras de economía y carreras afín.');

INSERT INTO `tbl_estados_matricula` (`CODIGO_ESTADO_MATRICULA`, `NOMBRE_ESTADO`, `DESCRIPCION`) VALUES (NULL, 'Matriculada', 'clase matriculada con éxito.'), (NULL, 'En espera', 'Clase en lista de espera por un cupo para ser añadida a las clases matriculadas.');

INSERT INTO `tbl_estados_matricula` (`CODIGO_ESTADO_MATRICULA`, `NOMBRE_ESTADO`, `DESCRIPCION`) VALUES (NULL, 'Cancelada', 'Clase cancelada.'), (NULL, 'Falta de requisitos', 'Faltan requisitos de información personal o pago de matrícula o laboratorio.');

INSERT INTO `tbl_grados` (`CODIGO_GRADO`, `NOMBRE_GRADO`) VALUES (NULL, 'Licenciatura'), (NULL, 'Maestría');

INSERT INTO `tbl_grados` (`CODIGO_GRADO`, `NOMBRE_GRADO`) VALUES (NULL, 'Doctorado'), (NULL, 'Posgrado');

INSERT INTO `tbl_alumnos` (`CODIGO_ALUMNO`, `NUMERO_CUENTA`, `PROMEDIO`, `CONTRASENA`) VALUES ('1', '20131002332', '77', 'asd456'), ('2', '20101003242', '80', 'asd123');

INSERT INTO `tbl_carreras` (`CODIGO_CARRERA`, `CODIGO_AUXILIAR`, `CODIGO_FACULTAD`, `NOMBRE_CARRERA`, `CANTIDAD_ASIGNATURAS`, `CANTIDAD_UNIDADES_VALORATIVAS`, `CODIGO_GRADO`) VALUES (NULL, 'IS', '1', 'Ingeniería en Sistemas', '56', '232', '1'), (NULL, 'IQ', '1', 'Ingeniería Química', '54', '220', '1');

INSERT INTO `tbl_carreras_x_alumnos` (`CODIGO_CARRERA`, `CODIGO_ALUMNO`, `FECHA_REGISTRO_CARRERA`, `PROMEDIO_CARRERA`, `CANTIDAD_CLASES_APROBADAS`) VALUES ('1', '1', '2012-01-14 00:00:00', '70', '30'), ('1', '2', '2010-01-04 00:00:00', '70', '46');

INSERT INTO `tbl_asignaturas` (`CODIGO_ASIGNATURA`, `CODIGO_ALTERNO`, `NOMBRE_ASIGNATURA`, `CANTIDAD_UNIDADES_VALORATIVAS`, `DIAS`, `CODIGO_CARRERA`, `CODIGO_TIPO_ASIGNATURA`) VALUES (NULL, 'IS-702', 'Economía Digital', '5', 'Lunes-Viernes', '1', '1'), (NULL, 'IS-912', 'Sistemas Expertos', '4', 'Lunes-Jueves', '1', '1');

INSERT INTO `tbl_seccion` (`CODIGO_SECCION`, `CODIGO_ALTERNO`, `HORA_INICIO`, `HORA_FIN`, `DIAS`, `CODIGO_AULA`, `CODIGO_ASIGNATURA`, `CODIGO_MAESTRO`, `CODIGO_PERIODO`, `CANTIDAD_CUPOS`) VALUES (NULL, 'IS-912-1000', '2018-02-07 10:00:00', '2018-05-16 11:00:00', 'Lunes-Jueves', '11', '2', '3', '1', '30'), (NULL, 'IS-702-0800', '2018-02-07 08:00:00', '2018-05-18 09:00:00', 'Lunes-Viernes', '14', '1', '4', '1', '30');

INSERT INTO `tbl_asignaturas` (`CODIGO_ASIGNATURA`, `CODIGO_ALTERNO`, `NOMBRE_ASIGNATURA`, `CANTIDAD_UNIDADES_VALORATIVAS`, `DIAS`, `CODIGO_CARRERA`, `CODIGO_TIPO_ASIGNATURA`) VALUES (NULL, 'IS-603', 'Inteligencia Artificial', '4', 'Lunes-Jueves', '1', '1'), (NULL, 'IS-512', 'Bases de datos II', '4', 'Lunes-Jueves', '1', '1');

INSERT INTO `tbl_requisitos` (`CODIGO_ASIGNATURA`, `CODIGO_ASIGNATURA_REQUISITO`, `CODIGO_CARRERA`) VALUES ('2', '3', '1'), ('3', '4', '1');

INSERT INTO `tbl_historial` (`CODIGO_HISTORIAL`, `CODIGO_ALUMNO`, `CODIGO_SECCION`, `CODIGO_PERIODO`, `PROMEDIO`) VALUES (NULL, '1', '1', '1', '72'), (NULL, '1', '2', '1', '77');

ALTER TABLE tbl_maestros ADD CONTRASENA varchar(30);

UPDATE `tbl_maestros` SET `CONTRASENA` = 'asd1234' WHERE `tbl_maestros`.`CODIGO_MAESTRO` = 3; UPDATE `tbl_maestros` SET `CONTRASENA` = 'asd4567' WHERE `tbl_maestros`.`CODIGO_MAESTRO` = 4;

INSERT INTO `tbl_matricula` (`FECHA_MATRICULA`, `CODIGO_SECCION`, `CODIGO_ALUMNO`, `CODIGO_ESTADO_MATRICULA`) VALUES ('2018-01-25 00:00:00', '1', '1', '1'), ('2018-05-28 00:00:00', '3', '2', '2');

INSERT INTO `tbl_seccion` (`CODIGO_SECCION`, `CODIGO_ALTERNO`, `HORA_INICIO`, `HORA_FIN`, `DIAS`, `CODIGO_AULA`, `CODIGO_ASIGNATURA`, `CODIGO_MAESTRO`, `CODIGO_PERIODO`, `CANTIDAD_CUPOS`) VALUES (NULL, 'IS-512', '2018-02-09 11:00:00', '2018-05-19 12:00:00', 'Lunes-Jueves', '12', '3', '3', '2', '30');

UPDATE `tbl_seccion` SET `CODIGO_ALTERNO` = 'IS-512-1100' WHERE `tbl_seccion`.`CODIGO_SECCION` = 3;

INSERT INTO `tbl_detalle_evaluacion` (`CODIGO_HISTORIAL`, `CODIGO_TIPO_EVALUACION`, `VALOR_NOTA`) VALUES ('1', '1', '72'), ('2', '1', '77');













