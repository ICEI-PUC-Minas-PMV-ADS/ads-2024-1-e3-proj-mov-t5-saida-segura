CREATE DATABASE SchoolDB;

USE SchoolDB;

CREATE TABLE Aluno (
    Matricula int PRIMARY KEY,
    Nome varchar(255),
    Idade int,
    Sala varchar(255),
    Serie int,
    Professor varchar(255),
    id_usuario int,
    Uri varchar(255)
);

CREATE TABLE Usuario (
    Id_usuario int PRIMARY KEY,
    Nome varchar(255),
    Email varchar(255),
    Senha varchar(255),
    Tipo varchar(50),
	Matricula int,
	Img_aluno1 int
);

CREATE TABLE ImagemAluno (
	Img_aluno1 int PRIMARY KEY,
	Uri varchar(255)
);

CREATE TABLE UsuarioEscola (
	id_usuarioEscol int PRIMARY KEY,
	Nome varchar(255),
	Data_saida date,
	Hora_saida time, 
	Email 	varchar (50), 
	Funcao 	varchar (50), 
	Uri 	varchar (50), 
	Matricula 	int, 
	Qr_code 	int
);

CREATE TABLE Responsavel_Autorizado (
	Id_NAutorizado INT PRIMARY KEY, 
	Nome VARCHAR (50), 
	Idade INT,  
	CPF VARCHAR (11),  
	Grau_Parentesco VARCHAR (20),  
	Motivo VARCHAR (100),  
	id_usuario INT,  
	id_usuarioEscol INT,  
	qr_code STRING
);

CREATE TABLE Responsavel_nao_Autorizado (
	Id_Autorizado INT PRIMARY KEY, 
	Nome VARCHAR (50),   
	Grau_Parentesco VARCHAR (20),   
	Motivo STRING,   
	id_usuario INT,   
	id_usuarioEscol INT
);

CREATE TABLE QR_Code (
	Img_Qr INT PRIMARY KEY,    
	Uri STRING
);