 create database GODWINE;
 use GODWINE;
 
 -- criação da tabela empresa
 create table empresa(
	idEmpresa int primary key auto_increment,
    nome_empresa varchar(40),
    cnpj varchar(30),
    data_cadastro date,
    nome_fantasia varchar(60),
    representante varchar(40),
    email varchar(80),
    senha varchar(15),
    fkMatriz int, foreign key(fkMatriz) references empresa(idEmpresa) -- Uma Matriz pode ter várias Filiais uma Filial só pode ter uma Matriz
);

-- criação da tabela funcionario
-- Uma empresa pode ter vários funcionários um funcionário pode ter uma empresa.
create table funcionario(
	idFunc int auto_increment,
    nome_func varchar(80),
    setor_func varchar(40),
    login_func varchar(100),
    senha_func varchar(10),
    telefone_fixo char(11),
    telefone_celular char(11),
    fkSupervisor int, foreign key(fkSupervisor) references funcionario(idFunc), -- Um supervisor pode ter vários funcionários mas um funcionário só pode ter um supervisor
    fkEmpresa int, foreign key(fkEmpresa) references empresa(idEmpresa),
    primary key(idFunc, fkSupervisor, fkEmpresa)
);

-- criar tabela endereco
create table endereco(
	idEndereco int primary key auto_increment,
    estado varchar(60),
    sigla char(20),
    cidade varchar(60),
    logradouro varchar(80),
    bairro varchar(60),
    numero varchar(60),
    cep char(8),
    complemento varchar(60)
);

-- criação da tabela vinícola
create table vinicola(
	idVinicola int auto_increment,
    nome_vinicola varchar(40),
    nome_vinho varchar(40),
    tipo_vinho varchar(40),
    ano_vinho year,
    fkEndereco int, foreign key(fkEndereco) references endereco(idEndereco), -- Uma vinícola pode apenas ter um endereço
    fkEmpresa int, foreign key(fkEmpresa) references empresa(idEmpresa), -- Uma empresa pode ter várias vinicolas e uma vinicola só pode ser de uma empresa
    primary key(idVinicola, fkEndereco, fkEmpresa)
);
    
-- criação da tabela armazem
create table armazem(
	idArmazem int auto_increment,
    tipo_vinho varchar(45), -- Um armazem pode ter um tipo de vinhos, e os vinhos podem ter varios armazem
    fkVinicola int, foreign key(fkVinicola) references vinicola(idVinicola), -- Uma vinicola pode ter vários armazéns mas um armazém só 
    fkEmpresa int, foreign key(fkEmpresa) references  empresa(idEmpresa), 
	primary key(idArmazem, fkVinicola, fkEmpresa)
);

-- criação da tabela Sensor
create table sensor(
	idSensor int auto_increment,
    nome_sensor varchar(60),
    local_sensor varchar(60),
    temp_max float,
    temp_min float,
    umi_max float,
    umi_min float,
    fkArmazem int, foreign key(fkArmazem) references armazem(idArmazem),
    fkVinicola int, foreign key(fkvinicola) references armazem(idArmazem),
    fkEmpresa int, foreign key(fkEmpresa) references armazem(idArmazem),
    primary key(idSensor, fkArmazem, fkVinicola, fkEmpresa)
);

-- criação da tabela Dados Sensor
create table dados_sensor(
	idDados_sensor int auto_increment,
    temperatura float,
    umidade float,
    dataTime datetime,
    fkSensor int, foreign key(fkSensor) references Sensor(idSensor), -- Um sensor tem vários dados um dado só tem um sensor
    fkArmazem int, foreign key(fkArmazem) references Sensor(idSensor),
	fkVinicola int, foreign key(fkVinicola) references Sensor(idSensor),
    fkEmpresa int, foreign key(fkEmpresa) references Sensor(idSensor),
    primary key(idDados_sensor, fkSensor, fkArmazem, fkVinicola, fkEmpresa)
);

insert into empresa(nome_empresa, cnpj, data_cadastro, nome_fantasia, representante, email, senha, fkMatriz) values
 ('Chadon brasil','77.637.658/0001-55','2022-08-12', NULL, NULL, 'chadon.brasil@gmail.com', 'chadonBR@', NULL),
 ('Wine','47.877.611/0001-05','2022-08-12', NULL, NULL, 'wine.vinhos@gmail.com', 'wine552', 1),
 ('Adegavinhos','58.997.155/0001-99','2005-10-10', NULL, NULL, 'adega.vinhos@gmail.com', 'adegavinhos123@', NULL),
 ('Vinhedo','03.987.156/0003-10','2012-08-07', NULL, NULL, 'vinhedo.wine@gmail.com', 'vinhedo_37', 3),
 ('Anjos_roxo','88.017.100/0001-01','2015-11-03', NULL, NULL, 'anjos.roxo@gmail.com', 'anjosroxo.51', NULL),
 ('Vinhado','09.088.900/0006-08','2011-08-09', NULL, NULL, 'vinhado.vinhos@gmail.com', 'vinhado666', 4),
 ('Vinicolas enzo','01.002.100/0031-01','2015-06-03', NULL, NULL, 'enzo.vinhos@gmail.com', 'enzovinhos@', NULL),
 ('Central vinho','69.008.980/0011-01','2015-12-01', NULL, NULL, 'central.vinho@gmail.com', 'centralwine135', 5),
 ('Tintos','55.994.022/0001-08','2000-05-19', NULL, NULL, 'vinho.tontos@gmail.com', 'tintos_766', NULL),
 ('Bom vinho', '77.668.005/0009-06', '2001-07-10', NULL, NULL, 'bom.vinho@gmail.com', 'vinhobom.777', 6);
 
 insert into funcionario(nome_func, setor_func, login_func, senha_func, telefone_fixo, telefone_celular, fkSupervisor, fkEmpresa) values
 ('Maria Eduarda Bernardino Ettinger','Financeiro','maria.ettinger@godwine.com','1222000', '447864222', '11985678784', 1, 1),
 ('Vinicios Garcia Fagundes','Administrativo','vinicios.garcia@godwine.com','1222001', '445367822', '11965774352', 1, 2),
 ('Matheus Martins','Marketing','matheus.martins@godwine.com','1222002', '44325677', '1190657732', 2, 3),
 ('Pedro Afonso','Contavel','pedro.afonso@godwine.com','1222003', '44536722', '11942515666', 1, 4),
 ('Gabriel Vilas Boas','Gerente','gabriel.vilas@godwine.com','1222004', '45667382', '12954637277', 3, 5),
 ('Alexandra Zangrando','Recursos Humanos','alexandra.bernardino@godwine.com','1222005', '44657783','1398766543', 4, 6),
 ('Wagner Oliveira','Suporte Tecnico','wagner.oliveira@godwine.com','1222006','47668653', '0859867545', 4, 7),
 ('Elisa Ribas','Agricultura','elisa.ribas@godwine.com','1222007', '46609877', '1197543221', 4, 8),
 ('Felipe de Sousa','Abastecimento','felipe.sousa@godwine.com','1222008', '44567733', '11986994547', 4, 9),
 ('Eduardo Damacedo','Pecuária','eduardo.damacedo2godwine.com','1222009', '44759622', '11964446864', 4, 10);
 
 insert into endereco(logradouro, estado, cidade, sigla, bairro, numero, cep, complemento) values
 
('Travessa cachoeira benfica', 'São Paulo', 'São Paulo', 'SP', 'Jardim Rodolfo Pirane', '150', '0831-380', ''),
('Alameda cruz', 'São Paulo', 'Guararea', 'SP', 'Cunha souza', '301', '0344-001',''),
('Rua do Afonso', 'São Paulo', 'Osasco', 'SP', 'Jururu', '1004', '0777-520', ''),
('Travessa do chico', 'São Paulo', 'Santo André', 'SP', 'Vila mariana', '500', '0840-100', ''),
('Rua chico chavier', 'São Paulo', 'São José dos campos', 'SP', 'Afonso lazaro', '2500', '0122-031', ''),
('Avenida dos bandeirantes', 'São Paulo', 'São Bernardo do campo', 'SP', 'Morro das pedras', '501', '0122-762', ''),
('Rua tarsizo Amaral', 'Santa Catarina', 'Florianópolis', 'SC', 'campo nobre', '10', '0350-033', ''),
('Travessa liberato', 'Minas Gerais', 'Belo horizonte', 'MG', '', '69', '0751-400', 'bairro do queijo'),
('Rua do trigo', 'Rio de janeiro', 'Niterói', 'RJ', 'Bairro roxo', '1033', '3177-305', ''),
('Avenida Souza', 'Rio de janeiro', 'Volta redonda', 'RJ', 'Central leste', '369', '0853-300', '');

insert into vinicola(nome_vinicola, nome_vinho, ano_vinho, fkEndereco, fkEmpresa) values
('Divine Wine', 'Malbec','2000', 1, 2),
('Vinicola 404', 'Evino', '1999', 2, 3),
('O`Nial','Vinicola sete', '2005', 3, 4),
('Kings wine','Casal garcia', '2013', 4, 5),
('Peruanos wines', 'Concha y toro', '1991', 5, 6),
('Texawine', 'Chileno branco', '2009', 6, 7),
('Muy Bueno wine', 'Nordeste branco', '2003', 7, 8),
('Casal Querry', 'Garibaldi', '1997', 8, 9),
('Last rose', 'Casal perinni', '1950', 9, 10);

insert into armazem(tipo_vinho, fkEmpresa, fkVinicola) values

('rose', 1, 5),
('tinto', 2, 1),
('branco', 3, 4),
('espumante', 4, 8),
('gelado', 5, 6),
('sangue de boi', 6, 7);

insert into sensor(nome_sensor, local_sensor, temp_max, temp_min, umi_max, umi_min, fkEmpresa, fkVinicola, fkArmazem) values

('DHT11', NULL, '7', '3', '80', '60', 1, 3, 1),
('DHT11', NULL, '13', '7', '80', '60', 2, 5, 2),
('DHT11', NULL, '16', '13', '80', '60', 3, 2, 3),
('DHT11', NULL, '15', '13', '80', '60', 1, 3, 1),
('DHT11', NULL, '13', '6', '80', '60', 2, 5, 5),
('DHT11', NULL, '20', '16', '80', '60', 4, 6, 4);

INSERT INTO dados_sensor(temperatura, umidade, dataTime, fkSensor, fkArmazem, fkVinicola, fkEmpresa) VALUES

('6', '60', '2022-08-15 10:22:55', 1, 1, 1, 1),
('7', '65', '2022-10-15 10:04:55', 2, 1, 4, 2),
('8', '66', '2022-01-23 10:49:55', 2, 2, 3, 3),
('9', '70', '2022-04-04 10:22:55', 3, 3, 2, 4),
('10', '73', '2022-12-07 10:19:55', 3, 4, 5, 8),
('11', '75', '2022-06-30 10:47:55', 4, 5, 6, 9),
('12', '80', '2022-11-02 10:01:55', 4, 6, 7, 10);





