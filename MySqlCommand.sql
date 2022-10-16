use e_learning;

select * from categerios;

insert into categerios(name, code) values(' Geomatics Engineering','GE*');

update categerios set name = 'Geomatics Engineering' , code = 'GE' where id = 28;

insert into categerios(name, code) values('Naval Architecture and Marine Engineering','NM');

select * from users;

select * from posts;

alter table posts
drop column featured_image

ALTER TABLE users RENAME COLUMN type TO user_type;

alter table users 
add column mobile_no varchar(10); 


alter table users 
add column address varchar(50); 

create table course(
id int not null AUTO_INCREMENT,
course_img_path varchar(500),
teacher_profile_path varchar(500),
user_full_name varchar(50),
user_id int,

category varchar(50),
course_title varchar(500),
duration_hours int,
duration_min int,
lecture int,
 discount_price decimal,
 original_price decimal,
 rating decimal,
 categerios_id int,
 categerios_code varchar(5),
 PRIMARY KEY (id)
 
);

ALTER TABLE course    
MODIFY rating float; 

ALTER TABLE course    
MODIFY original_price float; 

ALTER TABLE course    
MODIFY discount_price float; 

fOREIGN KEY (user_id) REFERENCES users(id),
 fOREIGN KEY (user_full_name) REFERENCES users(full_name)
show tables

ALTER TABLE users
ADD full_name varchar(50);

alter table users
add type varchar(20);

alter table users
add type_code varchar(5);

update users set full_name = "viren jadhav" where id < 4

update users set full_name = "yashwant yadav" where id > 3

update users set type = "teacher" where id < 4

update users set type = "student" where id > 3

update users set type_code = "tc" where id < 4

update users set type_code = "st" where id > 3


select * from users

insert into course(course_img_path, teacher_profile_path, user_full_name, user_id, category, course_title,
 duration_hours, duration_min, lecture, discount_price, original_price, rating, categerios_id, categerios_code) 
values ("../images/courses-03.jpg", "../images/author-03.jpg", "yashwant yadav", 6, "ME", "Data Science and Machine Learning with Python - Hands On!", 
4, 21, 22, 436.01, 650.01, 4.4, 17, "ME")

RENAME TABLE course TO courses;


ALTER TABLE categerios
ADD ranked int;

select * from courses

update categerios set ranked = 1 where id = 8


update categerios set ranked = 2 where id = 17

update categerios set ranked = 3 where id = 11

update categerios set ranked = 4 where id = 10

update categerios set ranked = 5 where id = 6

update categerios set ranked = 6 where id = 7

update categerios set ranked = 7 where id = 1
update categerios set ranked = 8 where id = 16
update categerios set ranked = 9 where id = 9
update categerios set ranked = 10 where id = 21

update categerios set ranked = 11 where id = 2
update categerios set ranked = 12 where id = 3
update categerios set ranked = 13 where id = 4
update categerios set ranked = 14 where id = 5
update categerios set ranked = 15 where id = 12
update categerios set ranked = 16 where id = 13
update categerios set ranked = 17 where id = 14
update categerios set ranked = 18 where id = 15
update categerios set ranked = 19 where id = 18
update categerios set ranked = 20 where id = 19
update categerios set ranked = 21 where id = 20
update categerios set ranked = 22 where id = 22
update categerios set ranked = 23 where id = 23
update categerios set ranked = 24 where id = 24
update categerios set ranked = 25 where id = 25
update categerios set ranked = 26 where id = 26
update categerios set ranked = 27 where id = 27
update categerios set ranked = 28 where id = 28
update categerios set ranked = 29 where id = 29

select  * from categerios order by ranked ;

SELECT * FROM categerios ORDER BY ranked asc LIMIT 10;

update categerios set ranked = -1 where ranked < 1

select  ranked from categerios where ranked == NULL


select * from courses
update courses set teacher_profile_path=  'author-02.jpg' where id > 4

create table subjects (
id int not null AUTO_INCREMENT,
subject_code varchar(5),
course_id int,
course_code varchar(5),
subject_name varchar(50),
primary key(id)
);
select * from subject
ALTER TABLE subject
ADD FOREIGN KEY (course_code) REFERENCEs courses(categerios_code);

ALTER TABLE subject
DROP FOREIGN key courses(categerios_code);

select * from subjects

select * from categerios order by ranked

select * from courses

insert into subjects  (subject_code, course_id, course_code, subject_name) values("CN", 8,"CS" , "Computer Network")


insert into subjects  (subject_code, course_id, course_code, subject_name) values("DL", 8,"CS" , "Digital Logic")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("COA", 8,"CS" , "Computer Organization and Architecture")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("TOC", 8,"CS" , "Theory of Computation")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("DBMS", 8,"CS" , "Database Management Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("CD", 8,"CS" , "Compiler Design")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("OS", 8,"CS" , "Operating System")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("DS", 8,"CS" , "Data Structures")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("MA", 8,"CS" , "Engineering Mathematics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("ALGO", 8,"CS" , "Programming and Algorithms")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("GA", 8,"CS" , "General Aptitude")

insert into subjects  (subject_code, course_id, course_code, subject_name) values("MA", 17,"ME" , "Engineering Mathematics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("AMD", 17,"ME" , "Applied Mechanics and Design")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("FMT", 17,"ME" , "Fluid Mechanics and Thermal Sciences")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("MMI", 17,"ME" , "Materials,Manufacturing and Industrial Engineering")

insert into subjects  (subject_code, course_id, course_code, subject_name) values("MA", 11,"EE" , "Engineering Mathematics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EC", 11,"EE" , "Electric Circuits")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EF", 11,"EE" , "Electromagnetic Fields")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("SS", 11,"EE" , "Signals and Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EM", 11,"EE" , "Electrical Machines")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("PS", 11,"EE" , "Power Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("CSY", 11,"EE" , "Control Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EEM", 11,"EE" , "Electrical and Electronic Measurements")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("ADE", 11,"EE" , "Analog and Digital Electronics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("PE", 11,"EE" , "Power Electronics")

insert into subjects  (subject_code, course_id, course_code, subject_name) values("MA", 10,"EC" , "Engineering Mathematics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("NSS", 10,"EC" , "Networks, Signals and Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("ED", 10,"EC" , "Electronic Devices")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("CMM", 10,"EC" , "Communications")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("AC", 10,"EC" , "Analog Circuits")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("DCI", 10,"EC" , "Digital Circuits")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("CSY", 10,"EC" , "Control Systems")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EMG", 10,"EC" , "Electromagnetics")

insert into subjects  (subject_code, course_id, course_code, subject_name) values("MA", 6,"CE" , "Engineering Mathematics")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("SE", 6,"CE" , "Structural Engineering")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("GE", 6,"CE" , "Geotechnical Engineering")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("WRE", 6,"CE" , "Water Resources Engineering")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("EEV", 6,"CE" , "Environmental Engineering")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("TE", 6,"CE" , "Transportation Engineering")
insert into subjects  (subject_code, course_id, course_code, subject_name) values("GE", 6,"CE" , "Geomatics Engineering")

select * from subjects

drop table subject

select * from subjects where course_id = 8 and course_code = 'cs'

select * from courses

alter table courses 
add column subject_id int;

alter table courses
add column subject_code varchar(5);

select * from subjects;

select * from courses;

select * from courses where categerios_id = 8 and categerios_code="CS" and subject_id = 5 and subject_code = "DBMS"

update courses set subject_id=5 , subject_code = "DBMS" where id <= 2;


update courses set subject_id=9 , subject_code = "DS" where id <= 4 and id >2;


update courses set subject_id=4 , subject_code = "TOC" where id = 5;



create table course_details(
id int not null AUTO_INCREMENT,
course_detail_img_path varchar(500),
teacher_profile_path varchar(500),
user_full_name varchar(50),
user_id int,

category varchar(50),
course_title varchar(500),
duration_hours int,
duration_min int,
lecture int,
 discount_price decimal,
 original_price decimal,
 rating decimal,
 categerios_id int,
 categerios_code varchar(5),
 PRIMARY KEY (id),
 description varchar(500),
 Curriculum varchar(500),
 Certification varchar(500),
 Rating_desc varchar(500),
 video_link varchar(1000),
 course_id int,
  UNIQUE (course_id)
);

select * from courses

select * from course_details


alter table course_details 
add column subject_id int;

alter table course_details
add column subject_code varchar(5);


ALTER TABLE course_details    
MODIFY rating float; 

ALTER TABLE course_details    
MODIFY original_price float; 

ALTER TABLE course_details    
MODIFY discount_price float; 


insert into course_details '1', 'courses-01.jpg', 'author-01.jpg', 'viren jadhav', '1', 'cs', 'Data Science and Machine Learning with Python - Hands On!', '8', '12', '29', '385', '440', '5', '8', 'CS', 'DBMS', '5'
id, course_img_path, teacher_profile_path, user_full_name, user_id, category, course_title, duration_hours, duration_min, lecture, discount_price, original_price, rating, categerios_id, categerios_code, subject_code, subject_id

insert into course_details ( course_img_path, teacher_profile_path, user_full_name, user_id, category, course_title, duration_hours, duration_min, lecture, discount_price, original_price, rating, categerios_id, categerios_code, subject_code, subject_id)
