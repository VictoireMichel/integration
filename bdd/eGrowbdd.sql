CREATE TABLE plants (
	id int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name text NOT NULL,
	description text,
	growTime int(3) NOT NULL,
	monthStart int(2) NOT NULL,
	monthEnd int(2) NOT NULL,
	maintenance text,
	soil text NOT NULL,
	luminosity int(1) NOT NULL,
	picturePath text,
	humidity int(1) NOT NULL,
  	createdAt datetime NOT NULL,
  	updatedAt datetime NOT NULL,


CREATE TABLE users (
  id int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  mail text NOT NULL,
  password text NOT NULL,
  firstName text NOT NULL,
  lastName text NOT NULL,
  needWater boolean NOT NULL default(false),
  daycount int(5) NOT NULL default(0),
  learningMode boolean NOT NULL default(true),
  plantId int(4),
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  CONSTRAINT fk_user_plant FOREIGN KEY (plantId) REFERENCES plants(id)
);
