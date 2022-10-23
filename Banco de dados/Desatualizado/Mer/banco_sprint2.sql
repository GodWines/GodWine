CREATE DATABASE GodWine;

USE GodWine;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
cnpj VARCHAR(30),
data_cadastro DATE,
nome_fantasia VARCHAR(60),
representante VARCHAR(40),
fkMatriz INT,
FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa)
);


CREATE TABLE usuario(
idUsuario INT,
nome VARCHAR(80),
setor VARCHAR(40),
login VARCHAR(100),
senha VARCHAR(10),
telefone varchar(11),
fkEmpresa INT,
foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (idUsuario,fkEmpresa)
);

CREATE TABLE vinicola(
idVinicola INT,
nome VARCHAR(40),
fkEmpresa INT,
foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (idVinicola,fkEmpresa),
fkEndereco int,
foreign key (fkEndereco) references endereco(idEndereco)
);

CREATE TABLE endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
estado VARCHAR(60),
sigla VARCHAR(2),
cidade VARCHAR(60),
logradouro VARCHAR(70),
bairro VARCHAR(70), 
numero VARCHAR(20),
cep CHAR(8),
complemento VARCHAR(40) default
);


CREATE TABLE armazem(
idArmazem INT,
nome VARCHAR(45),
safra date,
temp_ambiente varchar(45),
umi_max float,
umi_min float,
fkVinicola INT,
foreign key (fkVinicola) references vinicola(idVinicola),
primary key (idArmazem,fkVinicola),
fktipo_vinho_idTipo_vinho int,
foreign key (fktipo_vinho_idTipo_vinho) references tipo_vinho(idTipo_vinho)
);

CREATE TABLE tipo_vinho (
idTipo_vinho INT AUTO_INCREMENT,
tipo varchar(45),
temp_max float,
temp_min float
);


CREATE TABLE Sensor_DHT11(
idSensor INT,
serial VARCHAR(60),
local_sensor VARCHAR(60),
fkArmazem_idArmazem int,
foreign key (fkArmazem_idArmazem) references armazem(idArmazem),
primary key (idSensor,fkArmazem_idArmazem),
fkArmazem_vinicola_idVinicola int,
foreign key (fkArmazem_vinicola_idVinicola) references vinicola(idVinicola),
fkArmazem_vinicola_fkEmpresa int,
foreign key (fkArmazem_vinicola_fkEmpresa) references empresa(idEmpresa)
);


CREATE TABLE Dados_sensor(
idDados_sensor INT,
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME,
fkSensor_Armazem_vinicola_fkEmpresa INT,
foreign key (Sensor_Armazem_vinicola_fkEmpresa) references empresa(idEmpresa),
fkSensor_Armazem_vinicola_idVinicola INT,
foreign key (Sensor_Armazem_vinicola_idVinicola) references vinicola(idVinicola),
fkSensor_Armazem_vinicola_idArmazem INT,
foreign key (Sensor_Armazem_vinicola_idArmazem) references armazem(idArmazem),
fkSensor INT, foreign key (fkSensor) references Sensor(idSensor),
primary key (idDados_sensor,fkSensor)
);

INSERT INTO empresa(nome, cnpj, data_cadastro, nome_fantasia, representante, fkMatriz) VALUES
 
INSERT usuario(nome, setor, login, senha, telefone, fkEmpresa) VALUES
 
INSERT INTO endereco( estado, sigla, cidade, logradouro, bairro, numero, cep, complemento) VALUES
 
INSERT INTO vinicola(nome, fkEmpresa, fkEndereco) VALUES

INSERT INTO armazem(nome, safra, temp_ambiente, umi_max, umi_min, fkVinicola, fktipo_vinho_idTipo_vinho) VALUES

INSERT INO tipo_vinho(idTipo_vinho, tipo, temp_max, temp_min) VALUES

INSERT INTO Sensor_DHT11(serial, local, fkArmazem_idArmazem, fkArmazem_vinicola_idVinicola, fkArmazem_vinicola_fkEmpresa) VALUES

INSERT INTO Dados_sensor(temperatura, umidade, dataTime, fkSensor_Armazem_vinicola_fkEmpresa, fkSensor_Armazem_vinicola_idVinicola, fkSensor_Armazem_vinicola_idArmazem, fkSensor) VALUES
 
-- Dados empresa
select * from empresa;

-- Dados usuario
select * from usuario;

-- Dados vinicola
select * from vinicola;

-- Dados endereço
select * from endereço;

-- Dados armazem
select * from armazem;

-- Dados tipo_vinho
select * from tipo_vinho;

-- Dados Sensor
select * from Sensor_DHT11;

-- Dados Dados_sensor
select * from Dados_sensor;

-- Quais matrizes fazem parte das filiais
select * from empresa as matriz join empresa as filial on filial.fkMatriz = matriz.idEmpresa;

-- Empresa que não tem matrizes
select * from empresa as matriz right join empresa as filial on filial.fkMatriz = matriz.idEmpresa is null;

-- Empresa que possuem matrizes
select * from empresa as matriz left join empresa as filial on filial.fkMatriz = matriz.idEmpresa;

-- Usuarios que fazem parte da empresa
select * from empresa join usuario on idEmpresa = fkEmpresa;

-- Usuarios que não faz parte de empresa
select * from empresa right join usuario on fkEmpresa = idEmpresa is null;

-- Vinicola e seus endereços e empresas
select * from empresa join endereço on fkEndereco = idEndereco join empresa on fkEmpresa = idEmpresa;

-- Vinicola e seus armazems
select * from armazem join vinicola on fkVinicola = idVinicola;

-- Armazem e seus tipo de vinho
select armazem.tipo_vinho,tipo_vinho.idTipo_vinho from armazem join tipo_vinho on fktipo_vinho_idTipo_vinho = idTipo_vinho;

-- Armazem e sensor
select * from armazem join Sensor_DHT11 on fkArmazem_idArmazem = idArmazem;

-- Sensores sem armazem
select * from armazem right join Sensor_DHT11 on fkArmazem_idArmazem = idArmazem is null;

-- Armazem sem sensores
select * from armazem left join Sensor_DHT11 on fkArmazem_idArmazem = idArmazem is null;

-- Sensor e dados sensor
select * from Sensor_DHT11 join Dados_sensor on fkSensor_idSensor = idSensor;

-- Alertas
-- 3C a 7C = Gelado
-- 3C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 3),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;

dados,sens,arm,vini,end
-- 4C = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 4),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
-- 6C = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 6),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
-- 7C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 7),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 7C a 13C = Frio
-- 7C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 7),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 8,5 = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 8.5),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 11,5 = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 11.5),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 13C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 13),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 

-- 13C a 16C = Temp de Adega
-- 13C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 13),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 13.75 = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 13.75),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 15.25 = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 15.25),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 16 = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 16),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 

-- 16C a 20C = Fresco
-- 16C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 16),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 17C = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura <= 17),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 19C = amarelo
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está apresentando problemas na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 19),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
-- 20C = vermelho
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura da vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where temperatura >= 20),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;

-- 60% a 80% = umidade
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na umidade na vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where umidade <= 60),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 
select concat('Seu Armazem ', arm.idArmazem,' na vinicola ', vini.nome,', ', vini.idVinicola , ' localizado no endereço ', end.logradouro,', ', end.bairro,', ', end.numero,', ', end.cep,', ' end.complemento,'. Está em estado de alerta crítico na temperatura na vinicola do sensor ', sens.serial,', ', sens.idSensor,' localizado no ', local,' recebendo dados de ', (select * from Dados_sensor where umidade >= 80),'C isso pode acabar prejudicando seus produtos.') as 'Alert' from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor_idSensor = idSensor join armazem as arm on fkArmazem_idArmazem= idArmazem join vinicola as vini on fkVinicola = idVinicola join endereco as end on fkEndereco = idEndereco;
 


