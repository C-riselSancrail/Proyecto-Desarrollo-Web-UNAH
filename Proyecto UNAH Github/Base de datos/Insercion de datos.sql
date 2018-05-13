USE unah_db;
/*INSERTAR CAMPUS*/
INSERT INTO tbl_campus(NOMBRE_CAMPUS) VALUES('CIUDAD UNIVERSITARIA');
INSERT INTO tbl_campus(NOMBRE_CAMPUS) VALUES('VALLE DE SULA');
INSERT INTO tbl_campus(NOMBRE_CAMPUS) VALUES('CENTRO LITORAL ATLANTICO');
INSERT INTO tbl_campus(NOMBRE_CAMPUS) VALUES('CENTRO LITORAL PACIFICO');
INSERT INTO tbl_campus(NOMBRE_CAMPUS) VALUES('CENTRO LITORAL OCCIDENTAL');
SELECT * FROM tbl_campus;
/*INSERTAR EDIFICIOS segun edificios*/
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS MEDICAS', 'H1','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS SOCIALES', 'A1','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('INGENIERIA', 'B2','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS JURIDICAS', 'A2','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('PSICOLOGIA', 'F1','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('ADMINISTRATIVO', 'ALMA-MATER','1');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS MEDICAS', 'H1','2');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS SOCIALES', 'A1','2');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('INGENIERIA', 'B2','2');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS JURIDICAS', 'A2','2');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('PSICOLOGIA', 'F1','2');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS MEDICAS', 'H1','3');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS SOCIALES', 'A1','3');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('INGENIERIA', 'B2','3');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS JURIDICAS', 'A2','3');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('PSICOLOGIA', 'F1','3');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS MEDICAS', 'H1','4');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS SOCIALES', 'A1','4');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('INGENIERIA', 'B2','4');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS JURIDICAS', 'A2','4');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('PSICOLOGIA', 'F1','4');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS MEDICAS', 'H1','5');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS SOCIALES', 'A1','5');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('INGENIERIA', 'B2','5');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('CIENCIAS JURIDICAS', 'A2','5');
INSERT INTO tbl_edificios(NOMBRE_EDIFICIO, ALIAS_EDIFICIO, CODIGO_CAMPUS) VALUES('PSICOLOGIA', 'F1','5');
SELECT * FROM tbl_edificios;
/*INSERTAR TIPO DE AULAS*/
INSERT INTO tbl_tipos_aulas(TIPO_AULA) VALUES('SALON-DE-CALSE');
INSERT INTO tbl_tipos_aulas(TIPO_AULA) VALUES('LABORATORIO'); 
SELECT * FROM tbl_tipos_aulas;
/*INSERTAR AULAS*/
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','1');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','1');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','1');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','1');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','1');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','2');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','2');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','2');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','2');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','2');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','3');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','3');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','3');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','3');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','3');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','4');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','4');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','4');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','4');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','4');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','5');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','5');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','5');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','5');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','5');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','7');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','7');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','7');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','7');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','7');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','8');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','8');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','8');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','8');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','8');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','9');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','9');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','9');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','9');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','9');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','10');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','10');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','10');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','10');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','10');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('111','1','11');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('112','1','11');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('113','1','11');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('114','1','11');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('115','1','11');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','12');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','12');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','12');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','12');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','12');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','13');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','13');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','13');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','13');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','13');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','14');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','14');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','14');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','14');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','14');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','15');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','15');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','15');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','15');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','15');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','16');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','16');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','16');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','16');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','16');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','17');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','17');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','17');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','17');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','17');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','18');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','18');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','18');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','18');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','18');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','19');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','19');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','19');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','19');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','19');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','20');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','20');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','20');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','20');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','20');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','21');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','21');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','21');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','21');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','21');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','22');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','22');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','22');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','22');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','22');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','23');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','23');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','23');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','23');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','23');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','24');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','24');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','24');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','24');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','24');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','25');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','25');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','25');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','25');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','25');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('101','1','26');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('102','1','26');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('103','1','26');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('104','1','26');
INSERT INTO tbl_aulas(NUMERO_AULA,CODIGO_TIPO_AULA,CODIGO_EDIFICIO) VALUES('105','1','26');
/*INSERT EN TABLA GENERO*/
INSERT INTO tbl_generos (NOMBRE_GENERO, ABREVIATURA) VALUES('FEMENINO','F');
INSERT INTO tbl_generos (NOMBRE_GENERO, ABREVIATURA) VALUES('MASCULINO','M');
SELECT*FROM tbl_generos;
/*INSERTAR EN ESTADOS CIVILES*/
INSERT INTO tbl_estados_civiles(NOMBRE_ESTADO_CIVIL) VALUES('SOLTERO');
INSERT INTO tbl_estados_civiles(NOMBRE_ESTADO_CIVIL) VALUES('CASADO');
SELECT * FROM tbl_estados_civiles;
/*INSERT tipos de identificacion*/
INSERT INTO tbl_tipo_identificacion(TIPO_IDENTIFICACION) VALUES('ORGINAL');
INSERT INTO tbl_tipo_identificacion(TIPO_IDENTIFICACION) VALUES('PASAPORTE');
SELECT * FROM tbl_tipo_identificacion;