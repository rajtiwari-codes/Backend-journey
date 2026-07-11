CREATE DATABASE raj;
CREATE DATABASE xyz;
DROP DATABASE xyz;
USE raj;

CREATE TABLE student(
rollno INT ,
name VARCHAR(30),
marks INT
);
INSERT INTO student
value
(101,"raj",76),
(102,"sam",77);
SELECT * FROM student;

CREATE TABLE user(
id INT,
names VARCHAR(20) NOT NULL,
email VARCHAR(59) UNIQUE,
follower INT DEFAULT 5000,
followings INT,
CONSTRAINT CHECK(age >=18)
);
ALTER TABLE user
ADD PRIMARY KEY (id);

CREATE TABLE post(
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO user
(id,names,email,follower,followings)
VALUES
(1,"raj","@rahul",54,87),
(2,"bob","@new.com",87,98),
(3,"eve","@eve.com",78,98);
SELECT names,id FROM user;

INSERT INTO post
(id,content,user_id)
VALUES
(1,"this is me raj",2),
(2,"here is bob",3),
(3,"here is eve",1);
SELECT * FROM post;

