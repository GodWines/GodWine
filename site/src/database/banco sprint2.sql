CREATE DATABASE GODsprint2;

USE GODsprint2;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome_empresa VARCHAR(50),
cnpj VARCHAR(30),
data_cadastro DATE,
nome_fantasia VARCHAR(60),
representante VARCHAR(45),
email VARCHAR(80),
senha VARCHAR(15),
fkMatriz int,
FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa)
);


CREATE TABLE funcionario(
idFunc INT AUTO_INCREMENT,
nome_func VARCHAR(80),
setor_func VARCHAR(45),
login_func VARCHAR(100),
senha_login VARCHAR(10),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa(ifEmpresa),
fkFunc_Supervisor INT,
FOREIGN KEY (fkFunc_supervisor) REFERENCES idFuncionario(idFuncionario),
PRIMARY KEY (idFunc, fkEmpresa)
);


CREATE TABLE endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
logradouro VARCHAR(70),
estado VARCHAR(60),
cidade VARCHAR(60),
sigla VARCHAR(2),
bairro VARCHAR(70), 
numero VARCHAR(20),
complemento VARCHAR(40),
cep CHAR(8),
fkVinicola INT,
FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola)
);


CREATE TABLE vinicola(
idVinucola INT AUTO_INCREMENT,
nome_vinicola VARCHAR(60),
tipo_vinho VARCHAR(40),
ano_vinho YEAR,
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
PRIMARY KEY (idVinicola, fkempresa)
);


CREATE TABLE armazem(
idArmazen INT AUTO_INCREMENT,
tipo_vinho VARCHAR(45),
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT,
FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idArmazem, fkEmpresa, fkVinicola)
);


CREATE TABLE sensor(
idSensor INT AUTO_INCREMENT,
nome_sensor VARCHAR(60),
local_sensor VARCHAR(60),
temperatura_max FLOAT,
temperatura_min FLOAT,
umidade_max FLOAT,
umidade_min FLOAT,
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT,
FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazen INT,
FOREIGN KEY (fkAemazem) REFERENCES armazem(idArmazem),
PRIMARY KEY (idSensor, fkEmpresa, fkVinicola, fkArmazem)
);


CREATE TABLE dados_sensor(
idDados_sensor INT AUTO_INCREMENT,
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME,
fkEmpresa INT,
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT,
FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT,
FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkSensor INT,
FOREIGN KEY (fkSensor) REFERENCES sensor(idSensor),
PRIMARY KEY (idDados_sensor, fkEmpresa, fkVinicola, fkArmazem, fkSensor)
);

