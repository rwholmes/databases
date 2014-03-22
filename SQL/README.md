Sprint: Databases

Team: Rob Holmes and Shane Keller

----------------------------
Attribute names
----------------------------
Same on client, server, and database:

message
username
createdAt
roomname

----------------------------
Useful commands:
----------------------------

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

