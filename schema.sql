-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS heroes_db;
-- Creates the "todolist" database --
CREATE DATABASE heroes_db;

USE heroes_db;

CREATE TABLE name(
	id INT NOT NULL AUTO_INCREMENT,
	user VARCHAR(45) NULL,
	PRIMARY KEY (id)
);