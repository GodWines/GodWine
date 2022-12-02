create database GodWine;
use GodWine;

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

CREATE TABLE endereco(
idEndereco INT PRIMARY KEY auto_increment,
sigla CHAR(2),
cidade VARCHAR(60),
logradouro VARCHAR(70),
bairro VARCHAR(70), 
numero INT unique,
cep CHAR(9),
complemento VARCHAR(80) NULL
);

CREATE TABLE vinicola(
idVinicola INT auto_increment,
nome VARCHAR(40),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco),
PRIMARY KEY (idVinicola, fkEmpresa, fkEndereco)
);
 
CREATE TABLE grupo (
idGrupo INT PRIMARY KEY auto_increment,
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
idArmazem INT auto_increment,
nome VARCHAR(45),
umi_max INT DEFAULT 80,
umi_min INT DEFAULT 60,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idArmazem, fkEmpresa, fkVinicola)
);

CREATE TABLE tipo(
idTipo INT auto_increment,
tipo VARCHAR(45), 
quantidade int,
fkGrupo INT, FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idTipo, fkGrupo, fkArmazem, fkEmpresa, fkVinicola)
);    
    
CREATE TABLE Sensor_DHT11(
idSensor INT auto_increment,
`serial` CHAR(12),
`local` VARCHAR(60),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
PRIMARY KEY (idSensor, fkArmazem, fkVinicola, fkEmpresa)
);

CREATE TABLE Dados_sensor(
idDados_sensor int auto_increment,
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME DEFAULT current_timestamp(),
fkSensor int, foreign key (fkSensor) references Sensor_DHT11(idSensor),
PRIMARY KEY (idDados_sensor, fkSensor)
);

-- Insert Armazem
insert into armazem (nome, fkEmpresa, fkVinicola) values
('GodWine',1,1);

insert  into tipo(tipo, quantidade, fkGrupo, fkArmazem, fkEmpresa, fkVinicola) values
	('Espumante',50,1,1,1,1),
	('Branco Leve',40,1,1,1,1),
	('Branco Encorpado',100,1,1,1,1),
	('Branco Aromático',300,1,1,1,1),
	('Rosê',100,1,1,1,1),
	('Tinto Leve',150,1,1,1,1),
	('Tinto Médio Corpo',100,1,1,1,1),
	('Tinto Médio Corpo',900,1,1,1,1),
	('Tinto Encorpado',500,1,1,1,1),
	('Fortificado',200,1,1,1,1);
    
    
    
INSERT INTO Sensor_DHT11(idSensor, `serial`, `local`, fkEmpresa, fkVinicola, fkArmazem) VALUES
(1,'4nkmzfgFu8h5', 'Localizado no setor esquerdo do armazem', 1, 1, 1),
(2,'9KNWCU93QtS9', 'Localizado no setor esquerdo do armazem', 1, 1, 1),
(3,'3jb5B9EoYvZQ', 'Localizado no setor direito do armazem', 1, 1, 1),
(4,'a2QRKShhig8K', 'Localizado na parte superior do armazem', 1, 1, 1),
(5,'rqV7x9nn3yg9', 'Localizado na setor direito do armazem', 1, 1, 1),
(6,'cUZKh9cm235g', 'Localizado na parte superior do armazem', 1, 1, 1),
(7,'yqqhN93rw9op', 'Localizado na setor direito do armazem', 1, 1, 1),
(8,'Xp4oLPVv9GwT', 'Localizado no setor direito do armazem', 1, 1, 1),
(9,'jR9kJrxp5rRc', 'Localizado na parte superior do armazem', 1, 1, 1);

insert into Dados_sensor(temperatura, umidade, fkSensor) values
(66,75,5);



select * from Dados_sensor dados join Sensor_DHT11 sensor on  dados.fkSensor = sensor.idSensor order by idSensor limit 3;

select t.tipo, t.quantidade, g.classe, avg(g.temp_max, g.temp_min), a.nome, a.umi_max, a.umi_min from tipo as t
join grupo as g on g.idGrupo = t.fkGrupo
join armazem as a on a.idArmazem = t.fkArmazem;

select * from Dados_sensor;

select temperatura, umidade from Dados_sensor order by idDados_sensor desc;
select max(temperatura) as max, min(temperatura) as min from Dados_sensor;

select max(temperatura), min(temperatura) from Dados_sensor;





 -- drop table grupo;
 -- drop table armazem;
 drop table tipo;
 drop table Sensor_DHT11;
 drop table Dados_Sensor;
    
     -- Join da empresa, vinicola e endereço
	select * from empresa as fkEndereco join vinicola as vinicola on fkEndereco.idEmpresa = vinicola.fkEmpresa join endereco as endereco on vinicola.fkEndereco = endereco.idEndereco;

    