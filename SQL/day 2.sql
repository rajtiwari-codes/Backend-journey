USE raj;
SHOW COLUMNS FROM user;
SELECT * FROM user;

SELECT names,follower FROM user
WHERE follower>=2;

ALTER TABLE user
ADD COLUMN age INT;

UPDATE user
SET age = 23
WHERE id = 1;
UPDATE user
SET age = 26
WHERE id = 2;
UPDATE user
SET age = 27
WHERE id = 3;

SELECT followings,follower FROM user
WHERE followings > 15 AND follower >20;

SELECT followings,names,age FROM user
WHERE age BETWEEN 25 AND 26;

SELECT followings,follower FROM user
WHERE email IN ("donaltrup@gmail.com","@rahul","@new.com");

SELECT names,age FROM user
WHERE age >25
LIMIT 1;

SELECT names,follower FROM user
ORDER BY follower DESC;

SELECT avg(follower)
 FROM user;
 
 SELECT age,MAX(follower) FROM user
 GROUP BY age
 HAVING MAX(follower) >10;
 
 UPDATE user
 SET follower=4256
 where age =26;
 SET SQL_SAFE_UPDATES=0;
 
 DELETE FROM user
 WHERE age=26;
 
 ALTER TABLE user
 ADD COLUMN subs varchar(50) not null;
 
 ALTER TABLE user
 CHANGE COLUMN  follower followers int default 3000;
 
 TRUNCATE TABLE USER;
 
 CREATE DATABASE IF NOT EXISTS collage;
 USE collage;
 CREATE TABLE teacher(
 id INT primary key,
 name VARCHAR(50),
 subject varchar(60),
 salaery int
 );
 INSERT INTO teacher
 (id,name,subject,salaery)
 VALUES
 (23,"raj","maths",5000),
 (24,"sam","eng",6000),
 (25,"kash","phy",7000),
 (26,"bob","coa",8000);
 
 SELECT * from teacher;
 
 SELECT * FROM teacher
 where salaery >7000;
 
 ALTER TABLE teacher
 CHANGE COLUMN salaery ctc INT ;
 
 UPDATE teacher 
 SET ctc=ctc + ctc * 0.27;
 
 ALTER TABLE teacher
 ADD COLUMN city VARCHAR(50) default"gurugram";
 
 ALTER TABLE teacher
 DROP COLUMN ctc;
 
 CREATE DATABASE IF NOT EXISTS bob;
 USE bob;
 CREATE TABLE bob(
 roll INT primary key,
 name VARCHAR(50),
 city varchar(60),
 marks int
 );
 INSERT INTO bob
 (roll,name,city,marks)
 VALUES
 (110,"adam","delhi",76),
 (108,"bob","mumbai",65),
 (124,"casey","pune",94),
 (112,"duke","pune",80);
 
 SELECT * from bob;
 
 SELECT * FROM bob
 where marks>75;
 
 SELECT DISTINCT CITY 
 FROM bob;
 
 SELECT city ,max(marks)
 FROM bob
 GROUP BY city;
 
 SELECT avg(marks)
 from bob;
 
  ALTER TABLE bob
 ADD COLUMN grade varchar(3);
 
 UPDATE bob 
 SET  grade ="O"
 WHERE marks >= 80;
 
 UPDATE bob 
 SET  grade ="A"
 WHERE marks >= 70 AND marks<=80;
 
 UPDATE bob 
 SET  grade ="0"
 WHERE marks>=60 AND marks<=70;
 

 
 
 
 
 
 


