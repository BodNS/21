/* 1.1 First, create next tables
- Group (id, name)
- Student (id, fullname, age, email)
The relationship is 1-M */
CREATE TABLE Groupp
(
id           serial PRIMARY KEY,
name        varchar(64) NOT NULL
);

CREATE TABLE Student
(
id           serial PRIMARY KEY,
fullname        varchar(64) NOT NULL,
age integer,
email  varchar(64) NOT NULL UNIQUE,
id_group integer REFERENCES Groupp (id) ON DELETE SET NULL ON UPDATE CASCADE
);

INSERT INTO Groupp (name)
VALUES ('Group1'),
        ('Group2'),
        ('Group3'),
        ('Group4'),
        ('Group5');

INSERT INTO Student (fullname, age, email, id_group)
VALUES ('fullname1', 21, 'qwe1@qw.qw', 1),
        ('fullname2', 22, 'qwe2@qw.qw', 2),
        ('fullname3', 20, 'qwe@3qw.qw', 3),
        ('fullname4', 25, 'qwe4@qw.qw', 4),
        ('fullname5', 28, 'qwe5@qw.qw', 5),
        ('fullname6', 21, 'qwe6@qw.qw', 1),
        ('fullname7', 18, 'qwe7@qw.qw', 2),
        ('fullname8', 17, 'qwe8@qw.qw', 3),
        ('fullname9', 21, 'qwe9@qw.qw', 4),
        ('fullname10', 18, 'qweq@qw.qw', 5),
        ('fullname11', 16, 'qwe@aqw.qw', 1);

/* 1.2 SQL-queries

- get the student with id=3

SELECT fullname, age, email, name
FROM Student AS S JOIN groupp AS G ON G.id = S.id_group
WHERE S.id = 3;

- get groups and its number of students 
SELECT G.name, COUNT (S.id_group) AS "Kolvo_stud"
FROM Student AS S JOIN groupp AS G ON G.id = S.id_group
GROUP BY G.name
ORDER BY G.name;

- get adults (age >= 18)
SELECT fullname, age, email, name
FROM Student AS S JOIN groupp AS G ON G.id = S.id_group
WHERE S.age >= 18;

- update email of the student with id=3
UPDATE Student
SET email = 'qwerty@qw.rt'
WHERE id = 3;

- delete the student with id=3
DELETE FROM Student
WHERE id = 3;

- ** find the group which has max number of students  */
SELECT gr.name
FROM (SELECT G.name, count(S.id_group) AS kol_stud
   FROM Student AS S JOIN groupp AS G ON G.id = S.id_group 
   GROUP BY G.name
   ORDER BY kol_stud DESC
   ) AS gr
LIMIT 1
;



