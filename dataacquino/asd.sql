create database GodWine;
use GodWine;

select * from empresa;
CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY auto_increment,
email VARCHAR(100),
senha VARCHAR(30),
telefone VARCHAR(13),
nome VARCHAR(50),
cnpj VARCHAR(15),
data_cadastro DATETIME,
nome_fantasia VARCHAR(60),
representante VARCHAR(40),
fkMatriz INT, FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa)
);

select * from empresa;

CREATE TABLE endereco(
idEndereco INT PRIMARY KEY auto_increment,
sigla CHAR(2),
cidade VARCHAR(60),
logradouro VARCHAR(70),
bairro VARCHAR(70), 
numero INT,
cep CHAR(9),
complemento VARCHAR(80) NULL
);

select * from endereco;

CREATE TABLE vinicola(
idVinicola INT auto_increment,
nome VARCHAR(40),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco),
PRIMARY KEY (idVinicola, fkEmpresa)
);

CREATE TABLE grupo (
idGrupo INT PRIMARY KEY auto_increment,
classe VARCHAR(45),
temp_max FLOAT,
temp_min FLOAT
);

CREATE TABLE armazem(
idArmazem INT auto_increment,
nome VARCHAR(45),
temp_ambiente FLOAT,
umi_max INT,
umi_min INT,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idArmazem, fkEmpresa, fkVinicola)
);

CREATE TABLE tipo(
idTipo INT auto_increment,
tipo VARCHAR(45),
fkGrupo INT, FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idTipo, fkGrupo, fkArmazem,fkVinicola)
);
drop table Sensor_DHT11;
CREATE TABLE Sensor_DHT11(
idSensor INT auto_increment,
`serial` CHAR(12),
`local` VARCHAR(60),

PRIMARY KEY (idSensor)
);

-- fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
-- fkvinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
-- fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
drop table Dados_sensor;
CREATE TABLE Dados_sensor(
idDados_sensor int primary key auto_increment,
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME,
fkSensor int, foreign key (fkSensor) references Sensor_DHT11(idSensor)
);
select 
        *
                  
                    from Dados_sensor;