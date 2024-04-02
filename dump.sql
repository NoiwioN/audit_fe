-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: bibliothek
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `audiobuch`
--

DROP TABLE IF EXISTS `audiobuch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audiobuch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titel` varchar(100) DEFAULT NULL,
  `laenge` int DEFAULT NULL,
  `autor` varchar(100) DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `erscheinungsjahr` year DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `genre_id` (`genre_id`),
  CONSTRAINT `audiobuch_ibfk_1` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audiobuch`
--

LOCK TABLES `audiobuch` WRITE;
/*!40000 ALTER TABLE `audiobuch` DISABLE KEYS */;
INSERT INTO `audiobuch` VALUES (1,'Harry Potter and the Philosopher\'s Stone',30600,'J.K. Rowling',1,1997),(2,'The Hobbit',36900,'J.R.R. Tolkien',1,1937),(3,'1984',35100,'George Orwell',2,1949),(4,'Brave New World',28500,'Aldous Huxley',2,1932),(5,'The Great Gatsby',33000,'F. Scott Fitzgerald',3,1925),(6,'The Notebook',24000,'Nicholas Sparks',3,1996),(7,'Gone Girl',47400,'Gillian Flynn',4,2012),(8,'The Girl on the Train',30300,'Paula Hawkins',4,2015),(9,'The Da Vinci Code',45000,'Dan Brown',5,2003),(10,'The Silent Patient',33300,'Alex Michaelides',5,2019),(11,'To Kill a Mockingbird',42300,'Harper Lee',3,1960),(12,'The Catcher in the Rye',30000,'J.D. Salinger',3,1951),(13,'The Help',42300,'Kathryn Stockett',7,2009),(14,'The Book Thief',44400,'Markus Zusak',7,2005),(15,'Steve Jobs',59400,'Walter Isaacson',8,2011),(16,'Educated',50100,'Tara Westover',8,2018),(17,'The Power of Now',33000,'Eckhart Tolle',9,1997),(18,'How to Win Friends and Influence People',38400,'Dale Carnegie',9,1936),(19,'The Joy of Cooking',51900,'Irma S. Rombauer',10,1931),(20,'Mastering the Art of French Cooking',55200,'Julia Child',10,1961),(25,'0.19171137083166334',115,'Mattias Zurbuchen',1,2000),(26,'0.12028470339513353',115,'Mattias Zurbuchen',1,2000),(35,'Harry Potthead and the Idiots',30600,'J.K. stupid',1,1997);
/*!40000 ALTER TABLE `audiobuch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ausleihe`
--

DROP TABLE IF EXISTS `ausleihe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ausleihe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `audiobuch_id` int DEFAULT NULL,
  `ausleihdatum` date DEFAULT NULL,
  `rueckgabedatum` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `audiobuch_id` (`audiobuch_id`),
  CONSTRAINT `ausleihe_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `ausleihe_ibfk_2` FOREIGN KEY (`audiobuch_id`) REFERENCES `audiobuch` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ausleihe`
--

LOCK TABLES `ausleihe` WRITE;
/*!40000 ALTER TABLE `ausleihe` DISABLE KEYS */;
INSERT INTO `ausleihe` VALUES (1,NULL,1,'2024-02-28','2024-03-10'),(2,NULL,2,'2024-02-28','2024-03-10'),(3,NULL,3,'2024-02-28','2024-03-10'),(4,NULL,4,'2024-02-28','2024-03-10'),(5,NULL,5,'2024-02-28','2024-03-10'),(6,NULL,6,'2024-02-28','2024-03-10'),(7,NULL,7,'2024-02-28','2024-03-10'),(8,NULL,8,'2024-02-28','2024-03-10'),(9,NULL,9,'2024-02-28','2024-03-10'),(10,NULL,10,'2024-02-28','2024-03-10'),(11,NULL,11,'2024-02-28','2024-03-10'),(12,NULL,12,'2024-02-28','2024-03-10'),(13,13,13,'2024-02-28','2024-03-10'),(14,14,14,'2024-02-28','2024-03-10'),(15,15,15,'2024-02-28','2024-03-10'),(16,16,16,'2024-02-28','2024-03-10'),(17,17,17,'2024-02-28','2024-03-10'),(18,18,18,'2024-02-28','2024-03-10'),(19,19,19,'2024-02-28','2024-03-10'),(20,20,20,'2024-02-28','2024-03-10');
/*!40000 ALTER TABLE `ausleihe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Fantasy'),(2,'Science Fiction'),(3,'Romance'),(4,'Thriller'),(5,'Mystery'),(6,'Horror'),(7,'Historical Fiction'),(8,'Biography'),(9,'Self-Help'),(10,'Cookbook'),(11,'Travel'),(12,'Poetry'),(13,'Business'),(14,'Young Adult'),(15,'Children'),(16,'Crime'),(17,'Non-Fiction'),(18,'Art'),(19,'Music'),(20,'Drama');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vorname` varchar(50) DEFAULT NULL,
  `nachname` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `benutzername` varchar(200) DEFAULT NULL,
  `passwort` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (13,'Michael','Schäfer','markus.schaefer@example.com','Mark','$2a$10$Xu0REuLjW8CInAv5deOiCO42ZNK5vlqnCwQblEUBBWUrjPjoefIau'),(14,'Nicole','Koch','nicole.koch@example.com','nicolek','password123'),(15,'Patrick','Bauer','patrick.bauer@example.com','patrickb','pass@word'),(16,'Vanessa','Richter','vanessa.richter@example.com','vanessar','p@ssw0rd'),(17,'Daniel','Klein','daniel.klein@example.com','danielk','admin123'),(18,'Jessica','Wolf','jessica.wolf@example.com','jessicaw','pass1234'),(19,'Kevin','Neumann','kevin.neumann@example.com','kevinn','passw0rd!'),(20,'Lisa','Schwarz','lisa.schwarz@example.com','lisas','password!'),(22,'Julia','Ebner','julia.ebner1@example.com','mattias','$2a$10$2D5SzM.PY8i/XJzbyz0HL.SPfENqFs6W6zKIWjIFlsa40.UGcMXKO'),(23,'Mattias','Zurbuchen','m@m','mattias2','$2a$10$WFYD1rqycEhKCPfyMx7wWeuBwZWQqiutqEEcPX33Tuvt6.wMCpMPC'),(24,'asdkj','asdasd','asdasf','asdgakdjasdj','$2a$10$4spX.nZZ13WffXrEmn6MBuhNaLh/AZr/nAi2etg5LxL7qt8mHsF4S'),(25,'asd','asd','asd','asd','$2a$10$nSqHqIHc8yYZOHTMtn/iSeXHo07LrNn9EsfX3jM10FFMEjZGenFE.'),(26,'Der','Hahn','minecraft@gam.com','derHahn','$2a$10$8eRyMU9W6UBIAgvUPx1KJuFVdWtYMxs5lnsQw7yOc7s/65r5XU0IO'),(27,'Mattias','Form','mine@mine.com','mattias3','$2a$10$PRaneEiodGcHf/tVVaGhXu52/f0y0L.EdwyswirX2H0bIgd6DGIxa'),(28,'att','ias','zu@mail.com','m','$2a$10$OM595k8w2foOaL7BQe11cOvThaz4ROqXT.oJwio0I8ityvP0CUDPW'),(29,'asdf','asdf','admin@admin.ch','asdf','$2a$10$jXd37P0AgdALBrNpAY1QtektpHTFrkbUxCDgGVk7Vd3L7aY9IxW0y'),(44,'asdh','asdg','min@man.com','jsfg','$2a$10$fqAdOoXYBOYdWePp2Apj.OODP2IGs0Ou.tRmTY4vTzFWAzzISEdzG'),(52,'test','benutzer','user@mail.com','0.83559674195086650.3748777366195446','$2a$10$yZn6E/lt3oUswjl1X0jLXeFnTC/ii26QAbR5/PphH5WcoQQbiZ1Fm'),(54,'test','benutzer','user@mail.com','0.128542465941025470.009606048153460334','$2a$10$mSd2C9qcwJsjCi.kuvCih.v2unFQDWO6iGm5S45yA4GDaSlK2lLla'),(57,NULL,NULL,NULL,'frankie','$2a$10$szN1dLfbu00sbAiiUNxJt.XhBfkEoWdqqnkRLlFPd1Q3Hv.GXRlSW');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 11:34:42
