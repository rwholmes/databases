Sprint: Databases

Team: Rob Holmes and Shane Keller

----------------------------
Sprint status
----------------------------
Finished basic requirements and section 2 extra credit
Specs difficult to reconcile with our code. None pass, though
app has all desired functionality.

----------
Libraries
----------
MongoDb:  * See documentation at https://github.com/christkv/node-mongodb-native#readme


----------------------------
Attribute names
----------------------------
Same on client, server, and database. Be careful when changing any of
these names, as code in multiple files is dependent on these names.

message
username
createdAt
roomname


----------------------------
Useful commands:
----------------------------
---start new server
mysql server.stop
mysql server.start

---run sql as root
mysql -u root

show databases;
USE chat;
show tables;

---show contents
DESCRIBE messages

---insert entry (obj with k-v pairs) with keys as fields
INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'

---alter column name. Note; requires running DROP on table!
ALTER TABLE messages CHANGE send_time createdAt datetime;

----show column names
SHOW COLUMNS FROM messages

-----------------------
Lessons:
-----------------------
--
Problem: Sequelize cannot create a new database. You must do that manually first. Sequelize can only modify the structure of an existing database.

Takeaway: Don't assume that a framework does anything it doesn't explicitly say it does. We assumed that Sequelize could create a new database. Even if it does, if you're getting a bug, assume documentation is wrong.
