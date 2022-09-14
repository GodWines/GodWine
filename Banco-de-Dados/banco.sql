
create database sprint_1;
use sprint_1;
create table empresa(
id_empresa int primary key auto_increment,
nome_empresa varchar(40),
cnpj varchar(14),
data_cadastro date
);
create table funcionario(
id_func int primary key auto_increment,
nome_func varchar (80),
setor_func varchar(40),
login_func varchar(100),
senha_func char(10)
);
create table vinicola(
id_vinicola int primary key auto_increment,
nome_vinicola varchar(40),
tipo_vinho  varchar(40),
ano_vinho year
);
create table temperatura(
id_temp int primary key auto_increment,
temperatura float,
data_temp datetime 
);

create table umidade(
    id_umidade int primary key auto_increment,
    umidade float,
    data_umi datetime
);

alter table empresa modify column cnpj varchar(30);
 insert into empresa(nome_empresa,cnpj,data_cadastro) values
 ('chadon brasil','77.637.658/0001-55','2022-08-12'),
 ('wine','47.877.611/0001-05','2022-08-12'),
 ('adegavinhos','58.997.155/0001-99','2005-10-10'),
 ('vinhedo','03.987.156/0003-10','2012-08-07'),
 ('anjos_roxo','88.017.100/0001-01','2015-11-03'),
 ('vinhado','09.088.900/0006-08','2011-08-09'),
 ('vinicolas enzo','01.002.100/0031-01','2015-06-03'),
 ('central vinho','69.008.980/0011-01','2015-12-01'),
 ('central vinho','69.008.999/0001-77','2006-02-03'),
 ('tintos','55.994.022/0001-08','2000-05-19');
 select * from empresa;
 
 insert into funcionario(nome_func,setor_func,login_func,senha_func) values
 ('Maria Eduarda Bernardino Ettinger','Financeiro','maria.ettinger@godwine.com','1222000'),
 ('Vinicios Garcia Fagundes','Administrativo','vinicios.garcia@godwine.com','1222001'),
 ('Matheus Martins','Marketing','matheus.martins@godwine.com','1222002'),
 ('Pedro Afonso','Contavel','pedro.afonso@godwine.com','1222003'),
 ('Gabriel Vilas Boas','Gerente','gabriel.vilas@godwine.com','1222004'),
 ('Alexandra Zangrando','Recursos Humanos','alexandra.bernardino@godwine.com','1222005'),
 ('Wagner Oliveira','Suporte Tecnico','wagner.oliveira@godwine.com','1222006'),
 ('Elisa Ribas','Agricultura','elisa.ribas@godwine.com','1222007'),
 ('Felipe de Sousa','Abastecimento','felipe.sousa@godwine.com','1222008'),
 ('Eduardo Damacedo','Pecuária','eduardo.damacedo2godwine.com','1222009');
 select * from funcionario;
 
 insert into temperatura(temperatura,data_temp) values 
('6','2022-08-15 10:22:55'),
('7','2022-10-15 10:04:55'),
('8','2022-01-23 10:49:55'),
('9','2022-04-04 10:22:55'),
('10','2022-12-07 10:19:55'),
('11','2022-06-30 10:47:55'),
('12','2022-11-02 10:01:55');
select * from temperatura;

insert into umidade(umidade,data_umi) values 
(20, '2022-08-15 10:29:55'),
(50, '2022-10-15 10:04:55'),
(55, '2022-01-23 10:49:55'),
(23, '2022-04-04 10:22:55'),
(67, '2022-12-07 10:19:55'),
(54, '2022-06-30 10:47:55'),
(67, '2022-11-02 10:01:55');
select * from umidade;

insert into vinicola(nome_vinicola,tipo_vinho,ano_vinho) values
('malbec', 'tinto','2000'),
('evino', 'tinto', '1999'),
('vinicola sete', 'tinto', '2005'),
('casal garcia', 'branco', '2013'),
('Concha y toro', 'branco', '1991'),
('chileno branco', 'branco', '2009'),
('nordeste branco', 'branco', '2003'),
('garibaldi', 'rose', '1997'),
('casal perinni', 'rose', '1950'),
('east rose', 'rose', '1955');
select * from umidade;
select * from vinicola;
select * from temperatura;
select * from empresa; 
select * from funcionario;
select * from vinicola where nome_vinicola like '%e%';
select * from temperatura where temperatura >= 5;
select * from umidade where umidade >= 40;
select * from empresa where data_cadastro like '%08%';
select * from funcionario where setor_func = 'administrativo';
select concat('Olá ',(select nome_func from funcionario where id_func = 1),', seus vinhos registraram a umidade de ',
(select umidade from umidade where id_umidade =2),'% no dia '
 ,(select data_umi from umidade where data_umi like '%08%')
 ) as 'frase';
 

 select concat('Olá ',(select nome_func from funcionario where id_func = 2),', seus vinhos registraram a umidade de ',
(select umidade from umidade where id_umidade =5),'% e a temperatura ',(select temperatura from temperatura where id_temp = 5),'º C no dia',(select data_umi from umidade where data_umi like '%08%')
 ) as 'frase';
update funcionario set setor_func ='contabil ' where id_func = 4;
select data_umi from umidade where data_umi like '%04%';
select * from umidade order by umidade;
select * from temperatura order by temperatura;

show table status;
