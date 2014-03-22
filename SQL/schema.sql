DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/

 -- Globals
 -- ---

 -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
 -- SET FOREIGN_KEY_CHECKS=0;

 -- Table 'messages'

 DROP TABLE IF EXISTS `messages`;

 CREATE TABLE `messages` (
   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   `body` VARCHAR(160) NULL DEFAULT NULL,
   `send_time` DATETIME NULL DEFAULT NULL,
   `username` VARCHAR(20) NULL DEFAULT NULL,
   `roomname` VARCHAR(15) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `text_color` VARCHAR(160) NULL DEFAULT NULL,
  `signature` DATETIME NULL DEFAULT NULL,
  `username` VARCHAR(20) NULL DEFAULT NULL,
  `roomname` VARCHAR(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
 );

 -- Table Properties

 -- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

 -- Test Data

 -- INSERT INTO `messages` (`id`,`body`,`username`,`send_time`,`roomname`) VALUES
 -- ('','','','','');

