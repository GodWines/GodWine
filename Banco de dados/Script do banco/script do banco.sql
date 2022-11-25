DROP DATABASE Godwine;
CREATE DATABASE GodWine;
USE GodWine;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
cnpj VARCHAR(30),
data_cadastro DATE,
nome_fantasia VARCHAR(60),
representante VARCHAR(40),
fkMatriz INT, FOREIGN KEY (fkMatriz) REFERENCES empresa(idEmpresa)
);

CREATE TABLE usuario(
idUsuario INT auto_increment,
nome VARCHAR(80),
email VARCHAR(100),
senha VARCHAR(10),
telefone VARCHAR(11),
fkEmpresa INT, FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa),
PRIMARY KEY (idUsuario, fkEmpresa)
);

CREATE TABLE endereco(
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
sigla CHAR(2),
cidade VARCHAR(60),
logradouro VARCHAR(70),
bairro VARCHAR(70), 
numero INT,
cep CHAR(9),
complemento VARCHAR(80) NULL
);

select * from usuario;
select * from endereco;
select * from empresa;

CREATE TABLE vinicola(
idVinicola INT,
nome VARCHAR(40),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco),
PRIMARY KEY (idVinicola, fkEmpresa)
);

CREATE TABLE tipo_vinho (
idTipo_vinho INT AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR(45),
temp_max FLOAT,
temp_min FLOAT
);

CREATE TABLE armazem(
idArmazem INT,
nome VARCHAR(45),
safra DATE,
temp_ambiente FLOAT,
umi_max INT,
umi_min INT,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkTipo_vinho INT, FOREIGN KEY (fkTipo_vinho) REFERENCES tipo_vinho(idTipo_vinho),
PRIMARY KEY (idArmazem, fkEmpresa, fkVinicola)
);

CREATE TABLE Sensor_DHT11(
idSensor INT,
`serial` CHAR(12),
`local` VARCHAR(60),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkvinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
PRIMARY KEY (idSensor, fkArmazem, fkVinicola, fkEmpresa)
);

CREATE TABLE Dados_sensor(
idDados_sensor INT AUTO_INCREMENT,
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkSensor INT, FOREIGN KEY (fkSensor) REFERENCES sensor_DHT11(idSensor),
PRIMARY KEY (idDados_sensor, fkEmpresa, fkVinicola, fkArmazem, fkSensor)
);

INSERT INTO empresa(nome, cnpj, data_cadastro, nome_fantasia, representante, fkMatriz) VALUES
('Chandon brasil','77.637.658/0001-55','2022-08-12', 'Chan', 'Daniel Freitas', NULL),
('Wine','47.877.611/0001-05','2022-08-12', 'vinhedo Wine', 'Paulo Veira', NULL),
('Adegavinhos','58.997.155/0001-99','2005-10-10', 'Wine cruz', 'Vivian Souza', NULL),
('Vinhedo','03.987.156/0003-10','2012-08-07', 'God vinho', 'Victor Luiz', 3),
('Anjos roxo','88.017.100/0001-01','2015-11-03', 'Anjos', 'Maria de Fatima', 1),
('Vinhado','09.088.900/0006-08','2011-08-09', 'Vine wine', 'Sonia Dornelas', 3),
('Vinicolas enzo','01.002.100/0031-01','2015-06-03', 'Enzo wine', 'Mayara Souza', 3),
('Central vinho','69.008.980/0011-01','2015-12-01', 'Bons vinhos', 'Matheus Ribeiro', 1),
('Tintos','55.994.022/0001-08','2000-05-19', 'vinhozinhos', 'Mirian Souza', NULL),
('Bom vinho', '77.668.005/0009-06', '2001-07-10', 'Alonso vinhos', 'Erik Vitor', 9);
 
INSERT INTO usuario(idUsuario, nome, login, senha, telefone, fkEmpresa) VALUES
(1,'Maria Eduarda Bernardino Ettinger','maria123', '1222000', '11989545870', 2),
(1,'Vinicios Garcia Fagundes','vinicios321', '1222001', '11989965348', 3),
(1, 'Matheus Martins','matheus456', '1222002', '11975032153', 6),
(1, 'Pedro Afonso','pedro654', '1222003', '11973155687', 9),
(1, 'Gabriel Vilas Boas','gabriel789', '1222004', '11946813210', 1),
(2,'Alexandra Zangrando','alexandro987', '1222005', '11946786524', 3),
(1, 'Wagner Oliveira','wagner8910', '1222006', '11940028922', 5),
(1, 'Elisa Ribas','elisa1098', '1222007', '11930860352', 7),
(1, 'Felipe de Sousa','felipe135', '1222008', '11989546515', 8),
(1, 'Eduardo Damacedo','eduardo531', '1222009', '11995084633', 4);
 
INSERT INTO endereco(estado, sigla, cidade, logradouro, bairro, numero, cep) VALUES
('São Paulo', 'SP', 'São Paulo', 'Travessa cachoeira benfica', 'Jardim Rodolfo Pirane', '150', '08311-380'),
('São Paulo', 'SP', 'Guarulhos', 'Alameda cruz', 'Cunha souza', '301', '03447-001'),
('São Paulo', 'SP', 'Osasco', 'Rua do Afonso', 'Jururu', '1004', '0777-520'),
('São Paulo', 'SP', 'Santo André', 'Travessa do chico', 'Vila mariana', '500', '08400-100'),
('São Paulo', 'SP', 'São José dos campos', 'Rua chico chavier', 'Afonso lazaro', '2500', '01222-031'),
('São Paulo', 'SP', 'São Bernardo do campo', 'Avenida dos bandeirantes', 'Morro das pedras', '501', '01222-762'),
('Santa Catarina', 'SC', 'Florianópolis', 'Rua tarsizo Amaral', 'campo nobre', '10', '03501-033'),
('Minas Gerais', 'MG', 'Belo horizonte', 'Travessa liberato', 'bairro do queijo', '69', '07515-400'),
('Rio de janeiro', 'RJ', 'Niterói', 'Rua do trigo', 'Bairro roxo', '1033', '31771-305'),
('Rio de janeiro', 'RJ', 'Volta redonda', 'Avenida Souza', 'Central leste', '369', '08531-300');

 
INSERT INTO vinicola(idVinicola, nome, fkEmpresa, fkEndereco) VALUES
(1, 'Malbec', 3, 7),
(1, 'Evino', 4, 1),
(1, 'Vinicola sete', 7, 10),
(2, 'Casal garcia', 4, 6),
(1, 'Concha y toro', 2, 8),
(1, 'Chileno branco', 9, 5),
(1, 'Nordeste branco', 8, 3),
(2, 'Garibaldi', 8, 4),
(2, 'Casal perinni', 3, 7),
(1, 'East rose', 1, 9);

INSERT INTO armazem(idArmazem, nome, safra, temp_ambiente, umi_max, umi_min, fkEmpresa, fkVinicola, fkTipo_vinho) VALUES
(1, 'Sauternes', '2013-10-20', 10, 80, 60, 3, 1, 1),
(1, 'Toscana', '2000-09-25', 20, 80, 60, 4, 1, 4),
(1, 'Pomerol', '2002-07-05', 20, 80, 60, 7, 1, 2),
(1, 'Barca Velha Douro', '2000-07-28', 22, 80, 60, 4, 2, 1),
(1, 'Godvinicola', '1993-07-28', 22, 80, 60, 2, 1, 3),
(1, 'Grande rosê', '2007-07-28', 22, 80, 60, 9, 1, 2),
(1, 'Brilho roxo', '2002-07-28', 22, 80, 60, 8, 1, 4),
(1, 'Bigwine', '2001-07-28', 22, 80, 60, 8, 2, 3),
(1, 'Solene fresco', '1995-07-28', 22, 80, 60, 3, 2, 1),
(1, 'Suzi branco', '2005-07-28', 22, 80, 60, 1, 1, 2);

INSERT INTO tipo_vinho(tipo, temp_max, temp_min) VALUES
('Gelado', 7, 3),
('Frio', 13, 7),
('Temperatura de adega', 16, 13),
('Fresco', 20, 16);

INSERT INTO Sensor_DHT11(idSensor, `serial`, `local`, fkEmpresa, fkVinicola, fkArmazem) VALUES
(1, '9KNWCU93QtS9', 'Localizado no setor esquerdo do armazem', 3, 1, 1),
(1, '3jb5B9EoYvZQ', 'Localizado no setor direito do armazem', 4, 1, 1),
(1, 'a2QRKShhig8K', 'Localizado na parte superior do armazem', 7, 1, 1),
(1, 'rqV7x9nn3yg9', 'Localizado na setor direito do armazem', 4, 2, 1),
(1, 'cUZKh9cm235g', 'Localizado na parte superior do armazem', 2, 1, 1),
(1, 'yqqhN93rw9op', 'Localizado na setor direito do armazem', 9, 1, 1),
(1, 'Xp4oLPVv9GwT', 'Localizado no setor direito do armazem', 8, 1, 1),
(1, 'jR9kJrxp5rRc', 'Localizado na parte superior do armazem', 2, 2, 1),
(1, '4nkmzfgFu8h5', 'Localizado no setor esquerdo do armazem', 3, 2, 1),
(1, 'NdF3a6u6VkMs', 'Localizado na parte superior do armazem', 1, 1, 1);

INSERT INTO Dados_sensor(idDados_sensor, temperatura, umidade, dataTime, fkEmpresa, fkVinicola, fkArmazem, fkSensor) VALUES
(1, 6, 60, '2022-08-15 10:22:55', 3, 1, 1, 1),
(1, 7, 62, '2022-10-15 10:04:55', 4, 1, 1, 1),
(1, 8, 66, '2022-01-23 10:49:55', 7, 1, 1, 1),
(1, 9, 69, '2022-04-04 10:22:55', 4, 2, 1, 1),
(1, 10, 70, '2022-12-07 10:19:55', 2, 1, 1, 1),
(1, 11, 72, '2022-06-30 10:47:55', 9, 1, 1, 1),
(1, 12, 74, '2022-11-02 10:01:55', 8, 1, 1, 1),
(1, 13, 75, '2022-11-02 10:01:55', 2, 2, 1, 1),
(2, 14, 80, '2022-11-02 10:01:55', 3, 1, 1, 1);

 
-- Dados empresa
select * from empresa;

-- Dados usuario
select * from usuario;

-- Dados vinicola
select * from vinicola;

-- Dados endereço
select * from endereco;

-- Dados armazem
select * from armazem;
desc armazem;

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
select * from vinicola join endereco on fkEndereco = idEndereco join empresa on fkEmpresa = idEmpresa;

-- Vinicola e seus armazems
select * from armazem join vinicola on fkVinicola = idVinicola;

-- Armazem e seus tipo de vinho
select armazem.nome, tipo_vinho.tipo from armazem join tipo_vinho on fkTipo_vinho = idTipo_vinho;

-- Armazem e sensor
select * from armazem join Sensor_DHT11 on fkArmazem = idArmazem;

-- Sensores sem armazem
select * from armazem right join Sensor_DHT11 on fkArmazem = idArmazem is null;

-- Armazem sem sensores
select * from armazem left join Sensor_DHT11 on fkArmazem = idArmazem is null;

-- Sensor e dados sensor
select * from Sensor_DHT11 join Dados_sensor on fkSensor = idSensor;

-- Alertas
-- 3C a 7C = Gelado
-- 3C = vermelho
select * from Dados_sensor as dados join Sensor_DHT11 as sens on fkSensor = idSensor 
join armazem as arm on sens.fkArmazem = arm.idArmazem join vinicola as vini on arm.fkVinicola = vini.idVinicola join endereco as ende on fkEndereco = idEndereco;  



 