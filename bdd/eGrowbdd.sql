CREATE TABLE plants (
	id int(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name text NOT NULL,
	description text,
	growTime int(3) NOT NULL,
	monthStart text NOT NULL,
	monthEnd text NOT NULL,
	maintenance text,
	soil text NOT NULL,
	watering int(3) NOT NULL,
	picturePath text,
	CONSTRAINT text_monthStart CHECK (monthStart in('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre')),
	CONSTRAINT text_monthEnd CHECK (monthEnd in('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre'))
);
-- /!\ les contraintes sont case insensitives Décembre, décembre et decembre sont considérés pareils
--        => faire attention à votre code qui traitent les données

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
  CONSTRAINT fk_user_plant FOREIGN KEY (plantId) REFERENCES plants(id)
);
