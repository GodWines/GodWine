-- SQL Server
USE GodWine;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY IDENTITY(1,1),
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
idEndereco INT PRIMARY KEY IDENTITY(1,1),
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
idVinicola INT IDENTITY(1,1),
nome VARCHAR(40),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkEndereco INT, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco),
PRIMARY KEY (idVinicola, fkEmpresa)
);

CREATE TABLE grupo (
idGrupo INT PRIMARY KEY IDENTITY(1,1),
classe VARCHAR(45),
temp_max FLOAT,
temp_min FLOAT
);

CREATE TABLE armazem(
idArmazem INT IDENTITY(1,1),
nome VARCHAR(45),
temp_ambiente FLOAT,
umi_max INT,
umi_min INT,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idArmazem, fkEmpresa, fkVinicola)
);

CREATE TABLE tipo(
idTipo INT IDENTITY(1,1),
tipo VARCHAR(45),
fkGrupo INT, FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
PRIMARY KEY (idTipo, fkGrupo, fkArmazem,fkVinicola)
);

CREATE TABLE Sensor_DHT11(
idSensor INT IDENTITY(1,1),
`serial` CHAR(12),
`local` VARCHAR(60),
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkvinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
PRIMARY KEY (idSensor, fkArmazem, fkVinicola, fkEmpresa)
);

CREATE TABLE Dados_sensor(
idDados_sensor INT IDENTITY(1,1),
temperatura FLOAT,
umidade FLOAT,
dataTime DATETIME,
fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa),
fkVinicola INT, FOREIGN KEY (fkVinicola) REFERENCES vinicola(idVinicola),
fkArmazem INT, FOREIGN KEY (fkArmazem) REFERENCES armazem(idArmazem),
fkSensor INT, FOREIGN KEY (fkSensor) REFERENCES sensor_DHT11(idSensor),
PRIMARY KEY (idDados_sensor, fkEmpresa, fkVinicola, fkArmazem, fkSensor)
);

INSERT INTO empresa(email, senha, telefone, nome, cnpj, data_cadastro, nome_fantasia, representante, fkMatriz) VALUES
('BrandaoBrasil@Gmail.com','4mBFrdJA','19-2481-4277','Bradao brasil','77637658/000155','2022-08-12', 'Brad', 'Fernando Brandão', NULL);
 
 
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

INSERT INTO grupo(grupo, temp_max, temp_min) VALUES
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

insert into Tipo values
(null,'Espumante',1,1,1,1),
(null,'Branco Leve',1,1,1,1),
(null,'Branco Encorpado',2,2,1,1),
(null,'Branco Aromático',2,2,1,1),
(null,'Rosê',2,2,1,1),
(null,'Tinto Leve',3,3,1,1),
(null,'Tinto Médio Corpo',3,3,1,1),
(null,'Tinto Médio Corpo',4,4,1,1),
(null,'Tinto Encorpado',4,4,1,1),
(null,'Fortificado',4,4,1,1);
