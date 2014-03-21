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

 -- Table 'users'

 DROP TABLE IF EXISTS `users`;

 CREATE TABLE `users` (
   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   `username` VARCHAR(20) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- Table 'messages'

 DROP TABLE IF EXISTS `messages`;

 CREATE TABLE `messages` (
   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   `body` VARCHAR(160) NULL DEFAULT NULL,
   `user_id` INTEGER NULL DEFAULT NULL,
   `send_time` DATETIME NULL DEFAULT NULL,
   `room_id` INTEGER NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- Table 'rooms'

 DROP TABLE IF EXISTS `rooms`;

 CREATE TABLE `rooms` (
   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
   `name` VARCHAR(15) NULL DEFAULT NULL,
   PRIMARY KEY (`id`)
 );

 -- Foreign Keys

 ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
 ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);

 -- Table Properties

 -- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
 -- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
 -- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

 -- Test Data

 -- INSERT INTO `users` (`id`,`username`) VALUES
 -- ('','');
 -- INSERT INTO `messages` (`id`,`body`,`user_id`,`send_time`,`room_id`) VALUES
 -- ('','','','','');
 -- INSERT INTO `rooms` (`id`,`name`) VALUES
 -- ('','');

