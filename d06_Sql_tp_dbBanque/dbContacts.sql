USE master
GO
DROP DATABASE IF EXISTS dbContacts
GO
CREATE DATABASE dbContacts
GO


USE dbContacts
GO

DROP TABLE IF EXISTS Contacts
DROP TABLE IF EXISTS Utilisateurs
DROP TABLE IF EXISTS Adresses

CREATE TABLE Adresses(

	Id_Adresse int PRIMARY KEY CLUSTERED IDENTITY(0,1),
	Ville char(20) NOT NULL, 
	Pays char(20) NOT NULL ,
)

INSERT Adresses VALUES ('Ottawa','Canada')
INSERT Adresses VALUES ('Montreal','Canada')
INSERT Adresses VALUES ('Montreal','Canada')
INSERT Adresses VALUES ('Toronto','Canada')

CREATE TABLE Contacts(
	
	Id int NOT NULL PRIMARY KEY CLUSTERED IDENTITY(1,1),
	Nom varchar(20) NOT NULL,
	Prenom varchar(20) NOT NULL,
	Tel1 varchar(13) NULL,

)

INSERT Contacts VALUES ('Fossi','William','4387416247')
INSERT Contacts VALUES ('Youta','Dave','4385463698')
INSERT Contacts VALUES ('Kameni','Gaddyel','4383514547')

CREATE TABLE Utilisateurs(
	
	Id int NOT NULL PRIMARY KEY CLUSTERED IDENTITY(0,1),
	Nom varchar(10) NOT NULL,
	code varchar(10) NOT NULL,
)

INSERT Utilisateurs VALUES ('William','wnf258')
INSERT Utilisateurs VALUES ('Dave','swa698')