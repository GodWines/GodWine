create database godwine;

use godwine;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY IDENTITY(1,1),
email VARCHAR(100) unique,
senha VARCHAR(30),
telefone VARCHAR(13),
nome VARCHAR(50),
cnpj VARCHAR(15),
data_cadastro DATETIME,
nome_fantasia VARCHAR(60),
representante VARCHAR(40),
fkMatriz INT, FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa)
);

CREATE TABLE endereco(
idEndereco INT PRIMARY KEY IDENTITY(1,1),
sigla CHAR(2),
cidade VARCHAR(60),
logradouro VARCHAR(70),
bairro VARCHAR(70), 
numero INT,
cep CHAR(9),
complemento VARCHAR(80) NULL
);

CREATE TABLE vinicola(
idVinicola INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(40),
fkEmpresa INT NOT NULL, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT NOT NULL unique, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco)
);
 
CREATE TABLE grupo (
idGrupo INT PRIMARY KEY IDENTITY(1,1),
classe VARCHAR(45), constraint chkVinho check (classe in('Gelado','Frio','Adega','Fresco')),
temp_max FLOAT,
temp_min FLOAT
);

INSERT INTO grupo(classe, temp_max, temp_min) VALUES
('Gelado', 7, 3),
('Frio', 13, 7),
('Adega', 16, 13),
('Fresco', 20, 16);

CREATE TABLE armazem(
idArmazem INT PRIMARY KEY IDENTITY(1,1),
nome VARCHAR(45),
umi_max INT DEFAULT 80,
umi_min INT DEFAULT 60,
fkEmpresa INT NOT NULL,
fkVinicola INT NOT NULL, 
FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE tipo(
idTipo INT IDENTITY(1,1),
tipo VARCHAR(45), 
quantidade int,
fkGrupo INT, 
fkArmazem INT, 
FOREIGN KEY (fkGrupo) references grupo(idGrupo),
FOREIGN KEY (fkArmazem)references armazem(idArmazem),
PRIMARY KEY(idTipo,fkGrupo,fkArmazem)
);    

CREATE TABLE sensor_DHT11(
idSensor INT PRIMARY KEY IDENTITY(1,1),
nomeSerial CHAR(12),
nomeLocal VARCHAR(60),
fkArmazem INT NOT NULL,
 FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem)
);

CREATE TABLE dados_sensor(
idDados_sensor int IDENTITY(1,1),
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME DEFAULT current_timestamp,
fkSensor int, foreign key (fkSensor) references sensor_DHT11(idSensor),
PRIMARY KEY (idDados_sensor, fkSensor)
);

DELIMITER $$
CREATE PROCEDURE inserirEmpresa (in 
inEmail VARCHAR(100),
inSenha VARCHAR(30),
inTelefone VARCHAR(13),
inNome VARCHAR(50),
inCnpj VARCHAR(15),
inNome_fantasia VARCHAR(60),
inRepresentante VARCHAR(40),
inSigla CHAR(2),
inCidade VARCHAR(60),
inLogradouro VARCHAR(70),
inBairro VARCHAR(70), 
inNumero INT,
inCep CHAR(9),
inComplemento VARCHAR(80),
vinicolaNome VARCHAR(40))
BEGIN
  INSERT INTO empresa (email, senha, telefone, nome, cnpj, data_cadastro, nome_fantasia, representante) VALUES (inEmail, inSenha, inTelefone, inNome, inCnpj, CURRENT_TIMESTAMP,inNome_fantasia , inRepresentante);
  INSERT INTO endereco(sigla, cidade, logradouro, bairro, numero, cep, complemento) values(inSigla,inCidade,inLogradouro,inBairro,inNumero,inCep,inComplemento);
  INSERT INTO vinicola (nome, fkEmpresa, fkEndereco) VALUES (vinicolaNome, (select count(idEmpresa) as fkEmpresa from empresa), (select count(idEndereco) as fkEndereco from endereco));
END$$
DELIMITER ;

call inserirEmpresa('edu@aaagmail.com','123','1111','1111','1111','1111','1111','22','222','2222','222',2,'222','2222','vincola');

