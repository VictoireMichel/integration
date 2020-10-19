CREATE TABLE Plants (
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
  	updatedAt datetime NOT NULL
);

CREATE TABLE Users (
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
  CONSTRAINT fk_user_plant FOREIGN KEY (plantId) REFERENCES Plants(id)
);

CREATE TABLE Data (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dataLuminosity int(3) Not NULL,
  dataHumidity int(3) NOT NULL,
  dataTemperature decimal(2,2) NOT NULL,
  timeStamp datetime NOT NULL,
  userId int(4) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  CONSTRAINT fk_data_user FOREIGN KEY (userId) REFERENCES Users(id)
);




