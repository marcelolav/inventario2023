CREATE DATABASE  IF NOT EXISTS `ecom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecom`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ecom
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `idclientes` int NOT NULL AUTO_INCREMENT,
  `nombrecliente` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `cuit` varchar(45) DEFAULT NULL,
  `observaciones` longtext,
  PRIMARY KEY (`idclientes`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'CLIENTE 1','1111-11111','DIRECCION1 ','0001','Texto de observaciones'),(2,'CLIENTE 2','2222-2222','DIRECCION 2','0032','Texto de observaciones'),(3,'CLIENTE 3','3333-33333','DIRECCION 3','33-33333333-3','OBSERVACIONES 3'),(4,'CLIENTE 4','4444-4444','DIRECCION 4','44-44444444-4','OBSERVACIONES 4'),(6,'CLIENTE 5','5555-5555','DIRECCION 5','55-55555555-5','OBSERVACIONES 5');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comprascabecera`
--

DROP TABLE IF EXISTS `comprascabecera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comprascabecera` (
  `idcomprascabecera` int NOT NULL AUTO_INCREMENT,
  `fechacompra` datetime DEFAULT NULL,
  `comprobante_cabecera` decimal(20,0) DEFAULT NULL,
  `idproveedores_cabecera` int DEFAULT NULL,
  `totalcompra` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idcomprascabecera`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comprascabecera`
--

LOCK TABLES `comprascabecera` WRITE;
/*!40000 ALTER TABLE `comprascabecera` DISABLE KEYS */;
/*!40000 ALTER TABLE `comprascabecera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comprasdetalle`
--

DROP TABLE IF EXISTS `comprasdetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comprasdetalle` (
  `idcomprasdetalle` int NOT NULL AUTO_INCREMENT,
  `comprobante_detalle` decimal(20,0) DEFAULT NULL,
  `idproductos_detalle` int DEFAULT NULL,
  `precioproducto` decimal(10,2) DEFAULT NULL,
  `cantidadproducto` int DEFAULT NULL,
  `subtotalproducto` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idcomprasdetalle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comprasdetalle`
--

LOCK TABLES `comprasdetalle` WRITE;
/*!40000 ALTER TABLE `comprasdetalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `comprasdetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproductos` bigint unsigned NOT NULL AUTO_INCREMENT,
  `codigobarra` varchar(60) DEFAULT NULL,
  `nombreproducto` varchar(255) NOT NULL,
  `descripcion` varchar(1024) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `preciocompra` decimal(9,2) DEFAULT NULL,
  `existencia` int DEFAULT NULL,
  `preciorefdolar` decimal(9,2) DEFAULT NULL,
  `rubroid` int DEFAULT NULL,
  PRIMARY KEY (`idproductos`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (10,'0001','PRIMERO','01',100.00,10.00,7,3.50,1),(20,'0002','SEGUNDO','02',200.00,20.00,100,10.80,2),(30,'0003','TERCERO','03',300.00,30.00,9,1.70,3),(40,'0004','CUARTO','04',400.00,40.00,10,20.35,4),(50,'0005','QUINTO','05',500.00,50.00,10,1.25,5),(60,'0006','SEXTO','06',600.00,60.00,10,3.78,6),(70,'0007','SEPTIMO','07',700.00,70.00,10,6.66,1),(80,'0008','OCTAVO','08',800.00,80.00,10,4.56,2),(90,'0009','NOVENO','09',900.00,90.00,10,7.33,3),(100,'0010','DECIMO','10',1000.00,100.00,9,12.50,4);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedores`
--

DROP TABLE IF EXISTS `proveedores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proveedores` (
  `idproveedores` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `referencia` varchar(200) DEFAULT NULL,
  `fechaultimacompra` datetime DEFAULT NULL,
  `totalcompras` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idproveedores`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Tabla de proveedores	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedores`
--

LOCK TABLES `proveedores` WRITE;
/*!40000 ALTER TABLE `proveedores` DISABLE KEYS */;
INSERT INTO `proveedores` VALUES (2,'La Union','LIBERTAD 200','2023-05-31 00:00:00',500000.00),(4,'PEPIPOCHI','ARTICULOS DE KIOSKO','2023-06-19 00:00:00',500000.00);
/*!40000 ALTER TABLE `proveedores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rubros`
--

DROP TABLE IF EXISTS `rubros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rubros` (
  `idrubros` int NOT NULL AUTO_INCREMENT,
  `nombrerubro` varchar(45) NOT NULL,
  PRIMARY KEY (`idrubros`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rubros`
--

LOCK TABLES `rubros` WRITE;
/*!40000 ALTER TABLE `rubros` DISABLE KEYS */;
INSERT INTO `rubros` VALUES (2,'RADIOS'),(3,'LINTERNAS'),(4,'CONTROLES REMOTOS'),(5,'LIBRERIA'),(6,'RELOJES PULSERA'),(7,'RELOJES PARED'),(8,'RELOJES DESPERTADORES');
/*!40000 ALTER TABLE `rubros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicios`
--

DROP TABLE IF EXISTS `servicios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios` (
  `idservicios` int NOT NULL AUTO_INCREMENT,
  `cliente` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `fechaingreso` datetime DEFAULT NULL,
  `articulo` varchar(45) DEFAULT NULL,
  `falla` varchar(200) DEFAULT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `fechasalida` datetime DEFAULT NULL,
  `precioreparacion` decimal(9,2) DEFAULT NULL,
  `reparado` tinyint DEFAULT NULL,
  PRIMARY KEY (`idservicios`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Servicios tecnicos';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios`
--

LOCK TABLES `servicios` WRITE;
/*!40000 ALTER TABLE `servicios` DISABLE KEYS */;
INSERT INTO `servicios` VALUES (3,'JUAN BIRLONGAS','5555-9999','2023-06-13 00:00:00','PRUEBA CAMBIAR PRECIO DE VENTA ACAAAA','FALLA EN TODO','SE REVISARA','1969-12-31 00:00:00',0.00,1),(4,'PERLOTIS','788787','2023-06-14 00:00:00','UN SIFON DRAGP','SE REVENTO LA VALVULA DE LLENADO','SE ENVIA A PROV. se cambia el cabezal completo','2023-06-15 00:00:00',3500.00,1),(5,'Juan Peres','448855698','2023-06-06 00:00:00','PLANCHA ELECTRICA','CABLE ROTO','SE REEMPLAZA EL CABLE ','2023-06-10 00:00:00',800.00,1),(99,'Pepe Chota','115878755','2023-05-06 00:00:00','RADIO AM FM','ANTENA SALIDA','SE REEMPLAZA LA ANTENA X NUEVA','2023-06-15 00:00:00',5503.00,1),(100,'JUAN BIRLONGAS','5555-9999','2023-06-14 00:00:00','PRUEBA CAMBIAR PRECIO DE VENTA ACAAAA','FALLA EN TODO','FSDASADFSADF','2023-06-15 00:00:00',1500.00,1);
/*!40000 ALTER TABLE `servicios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventascabecera`
--

DROP TABLE IF EXISTS `ventascabecera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventascabecera` (
  `idventascabecera` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `comprobante_cabecera` decimal(20,0) DEFAULT NULL,
  `idclientes_cabecera` int DEFAULT NULL,
  `totalventa` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`idventascabecera`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventascabecera`
--

LOCK TABLES `ventascabecera` WRITE;
/*!40000 ALTER TABLE `ventascabecera` DISABLE KEYS */;
INSERT INTO `ventascabecera` VALUES (64,'2023-06-25 00:00:00',78921331321,6,5239.72),(65,'2023-06-15 00:00:00',15487455,2,11121.99),(66,'2023-06-26 00:00:00',12345,6,1800.00),(67,'2023-06-26 00:00:00',234234,2,3000.00),(68,'2023-06-26 00:00:00',333,1,3100.00),(69,'2023-06-26 00:00:00',3333,2,1600.00),(70,'2023-06-22 00:00:00',5556,6,3600.00),(71,'2023-06-22 00:00:00',4544,4,2600.00);
/*!40000 ALTER TABLE `ventascabecera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ventasdetalle`
--

DROP TABLE IF EXISTS `ventasdetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventasdetalle` (
  `idventasdetalle` int NOT NULL AUTO_INCREMENT,
  `comprobante_detalle` decimal(20,0) DEFAULT NULL,
  `idproductos_detalle` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idventasdetalle`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ventasdetalle`
--

LOCK TABLES `ventasdetalle` WRITE;
/*!40000 ALTER TABLE `ventasdetalle` DISABLE KEYS */;
INSERT INTO `ventasdetalle` VALUES (35,78921331321,10,2,100.24,200.48),(36,78921331321,50,8,554.72,4437.76),(37,78921331321,40,4,150.37,601.48),(38,15487455,20,12,201.37,2416.44),(39,15487455,50,15,580.37,8705.55),(40,12345,20,4,200.00,800.00),(41,12345,10,10,100.00,1000.00),(42,0,10,10,100.00,1000.00),(43,234234,20,10,200.00,2000.00),(44,333,10,5,100.00,500.00),(45,333,20,3,200.00,600.00),(46,333,100,2,1000.00,2000.00),(47,3333,10,10,100.00,1000.00),(48,3333,20,3,200.00,600.00),(49,5556,20,3,200.00,600.00),(50,5556,60,5,600.00,3000.00),(51,4544,10,3,100.00,300.00),(52,4544,20,5,200.00,1000.00),(53,4544,100,1,1000.00,1000.00),(54,4544,30,1,300.00,300.00);
/*!40000 ALTER TABLE `ventasdetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vw_comprascabeceraproveedor`
--

DROP TABLE IF EXISTS `vw_comprascabeceraproveedor`;
/*!50001 DROP VIEW IF EXISTS `vw_comprascabeceraproveedor`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_comprascabeceraproveedor` AS SELECT 
 1 AS `idcomprascabecera`,
 1 AS `fecha`,
 1 AS `comprobante_cabecera`,
 1 AS `idproveedores_cabecera`,
 1 AS `totalcompra`,
 1 AS `idproveedores`,
 1 AS `nombre`,
 1 AS `referencia`,
 1 AS `fechaultimacompra`,
 1 AS `totalcompras`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_comprascondetalle`
--

DROP TABLE IF EXISTS `vw_comprascondetalle`;
/*!50001 DROP VIEW IF EXISTS `vw_comprascondetalle`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_comprascondetalle` AS SELECT 
 1 AS `idcomprascabecera`,
 1 AS `fecha`,
 1 AS `comprobante_cabecera`,
 1 AS `idproveedores_cabecera`,
 1 AS `totalcompra`,
 1 AS `idcomprasdetalle`,
 1 AS `comprobante_detalle`,
 1 AS `idproductos_detalle`,
 1 AS `cantidadproducto`,
 1 AS `precioproducto`,
 1 AS `subtotalproducto`,
 1 AS `idproductos`,
 1 AS `codigobarra`,
 1 AS `nombreproducto`,
 1 AS `descripcion`,
 1 AS `precio`,
 1 AS `preciocompra`,
 1 AS `existencia`,
 1 AS `preciorefdolar`,
 1 AS `rubroid`,
 1 AS `idproveedores`,
 1 AS `nombre`,
 1 AS `referencia`,
 1 AS `fechaultimacompra`,
 1 AS `totalcompras`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_existencias`
--

DROP TABLE IF EXISTS `vw_existencias`;
/*!50001 DROP VIEW IF EXISTS `vw_existencias`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_existencias` AS SELECT 
 1 AS `idproductos`,
 1 AS `existencia`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_listaprecios`
--

DROP TABLE IF EXISTS `vw_listaprecios`;
/*!50001 DROP VIEW IF EXISTS `vw_listaprecios`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_listaprecios` AS SELECT 
 1 AS `idproductos`,
 1 AS `codigobarra`,
 1 AS `nombreproducto`,
 1 AS `precio`,
 1 AS `nombrerubro`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_prodrubros`
--

DROP TABLE IF EXISTS `vw_prodrubros`;
/*!50001 DROP VIEW IF EXISTS `vw_prodrubros`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_prodrubros` AS SELECT 
 1 AS `idproductos`,
 1 AS `codigobarra`,
 1 AS `nombreproducto`,
 1 AS `descripcion`,
 1 AS `precio`,
 1 AS `preciocompra`,
 1 AS `existencia`,
 1 AS `preciorefdolar`,
 1 AS `rubroid`,
 1 AS `idrubros`,
 1 AS `nombrerubro`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_ventascabecera_cliente`
--

DROP TABLE IF EXISTS `vw_ventascabecera_cliente`;
/*!50001 DROP VIEW IF EXISTS `vw_ventascabecera_cliente`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_ventascabecera_cliente` AS SELECT 
 1 AS `idventascabecera`,
 1 AS `fecha`,
 1 AS `comprobante_cabecera`,
 1 AS `idclientes_cabecera`,
 1 AS `totalventa`,
 1 AS `idclientes`,
 1 AS `nombrecliente`,
 1 AS `telefono`,
 1 AS `direccion`,
 1 AS `cuit`,
 1 AS `observaciones`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_ventascondetalles`
--

DROP TABLE IF EXISTS `vw_ventascondetalles`;
/*!50001 DROP VIEW IF EXISTS `vw_ventascondetalles`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_ventascondetalles` AS SELECT 
 1 AS `idventascabecera`,
 1 AS `fecha`,
 1 AS `comprobante_cabecera`,
 1 AS `idclientes_cabecera`,
 1 AS `totalventa`,
 1 AS `idventasdetalle`,
 1 AS `comprobante_detalle`,
 1 AS `idproductos_detalle`,
 1 AS `cantidad`,
 1 AS `importe`,
 1 AS `subtotal`,
 1 AS `idproductos`,
 1 AS `codigobarra`,
 1 AS `nombreproducto`,
 1 AS `descripcion`,
 1 AS `precio`,
 1 AS `preciocompra`,
 1 AS `existencia`,
 1 AS `preciorefdolar`,
 1 AS `rubroid`,
 1 AS `idclientes`,
 1 AS `nombrecliente`,
 1 AS `telefono`,
 1 AS `direccion`,
 1 AS `cuit`,
 1 AS `observaciones`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_comprascabeceraproveedor`
--

/*!50001 DROP VIEW IF EXISTS `vw_comprascabeceraproveedor`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_comprascabeceraproveedor` AS select `comprascabecera`.`idcomprascabecera` AS `idcomprascabecera`,`comprascabecera`.`fechacompra` AS `fecha`,`comprascabecera`.`comprobante_cabecera` AS `comprobante_cabecera`,`comprascabecera`.`idproveedores_cabecera` AS `idproveedores_cabecera`,`comprascabecera`.`totalcompra` AS `totalcompra`,`proveedores`.`idproveedores` AS `idproveedores`,`proveedores`.`nombre` AS `nombre`,`proveedores`.`referencia` AS `referencia`,`proveedores`.`fechaultimacompra` AS `fechaultimacompra`,`proveedores`.`totalcompras` AS `totalcompras` from (`comprascabecera` join `proveedores` on((`comprascabecera`.`idproveedores_cabecera` = `proveedores`.`idproveedores`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_comprascondetalle`
--

/*!50001 DROP VIEW IF EXISTS `vw_comprascondetalle`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_comprascondetalle` AS select `comprascabecera`.`idcomprascabecera` AS `idcomprascabecera`,`comprascabecera`.`fechacompra` AS `fecha`,`comprascabecera`.`comprobante_cabecera` AS `comprobante_cabecera`,`comprascabecera`.`idproveedores_cabecera` AS `idproveedores_cabecera`,`comprascabecera`.`totalcompra` AS `totalcompra`,`comprasdetalle`.`idcomprasdetalle` AS `idcomprasdetalle`,`comprasdetalle`.`comprobante_detalle` AS `comprobante_detalle`,`comprasdetalle`.`idproductos_detalle` AS `idproductos_detalle`,`comprasdetalle`.`cantidadproducto` AS `cantidadproducto`,`comprasdetalle`.`precioproducto` AS `precioproducto`,`comprasdetalle`.`subtotalproducto` AS `subtotalproducto`,`productos`.`idproductos` AS `idproductos`,`productos`.`codigobarra` AS `codigobarra`,`productos`.`nombreproducto` AS `nombreproducto`,`productos`.`descripcion` AS `descripcion`,`productos`.`precio` AS `precio`,`productos`.`preciocompra` AS `preciocompra`,`productos`.`existencia` AS `existencia`,`productos`.`preciorefdolar` AS `preciorefdolar`,`productos`.`rubroid` AS `rubroid`,`proveedores`.`idproveedores` AS `idproveedores`,`proveedores`.`nombre` AS `nombre`,`proveedores`.`referencia` AS `referencia`,`proveedores`.`fechaultimacompra` AS `fechaultimacompra`,`proveedores`.`totalcompras` AS `totalcompras` from (((`comprascabecera` join `comprasdetalle` on((`comprasdetalle`.`comprobante_detalle` = `comprascabecera`.`comprobante_cabecera`))) join `productos` on((`comprasdetalle`.`idproductos_detalle` = `productos`.`idproductos`))) join `proveedores` on((`comprascabecera`.`idproveedores_cabecera` = `proveedores`.`idproveedores`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_existencias`
--

/*!50001 DROP VIEW IF EXISTS `vw_existencias`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_existencias` AS select `productos`.`idproductos` AS `idproductos`,`productos`.`existencia` AS `existencia` from `productos` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_listaprecios`
--

/*!50001 DROP VIEW IF EXISTS `vw_listaprecios`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_listaprecios` AS select `productos`.`idproductos` AS `idproductos`,`productos`.`codigobarra` AS `codigobarra`,`productos`.`nombreproducto` AS `nombreproducto`,`productos`.`precio` AS `precio`,`rubros`.`nombrerubro` AS `nombrerubro` from (`productos` join `rubros` on((`productos`.`rubroid` = `rubros`.`idrubros`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_prodrubros`
--

/*!50001 DROP VIEW IF EXISTS `vw_prodrubros`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_prodrubros` AS select `productos`.`idproductos` AS `idproductos`,`productos`.`codigobarra` AS `codigobarra`,`productos`.`nombreproducto` AS `nombreproducto`,`productos`.`descripcion` AS `descripcion`,`productos`.`precio` AS `precio`,`productos`.`preciocompra` AS `preciocompra`,`productos`.`existencia` AS `existencia`,`productos`.`preciorefdolar` AS `preciorefdolar`,`productos`.`rubroid` AS `rubroid`,`rubros`.`idrubros` AS `idrubros`,`rubros`.`nombrerubro` AS `nombrerubro` from (`productos` join `rubros` on((`productos`.`rubroid` = `rubros`.`idrubros`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_ventascabecera_cliente`
--

/*!50001 DROP VIEW IF EXISTS `vw_ventascabecera_cliente`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_ventascabecera_cliente` AS select `ventascabecera`.`idventascabecera` AS `idventascabecera`,`ventascabecera`.`fecha` AS `fecha`,`ventascabecera`.`comprobante_cabecera` AS `comprobante_cabecera`,`ventascabecera`.`idclientes_cabecera` AS `idclientes_cabecera`,`ventascabecera`.`totalventa` AS `totalventa`,`clientes`.`idclientes` AS `idclientes`,`clientes`.`nombrecliente` AS `nombrecliente`,`clientes`.`telefono` AS `telefono`,`clientes`.`direccion` AS `direccion`,`clientes`.`cuit` AS `cuit`,`clientes`.`observaciones` AS `observaciones` from (`ventascabecera` join `clientes` on((`ventascabecera`.`idclientes_cabecera` = `clientes`.`idclientes`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_ventascondetalles`
--

/*!50001 DROP VIEW IF EXISTS `vw_ventascondetalles`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_ventascondetalles` AS select `ventascabecera`.`idventascabecera` AS `idventascabecera`,`ventascabecera`.`fecha` AS `fecha`,`ventascabecera`.`comprobante_cabecera` AS `comprobante_cabecera`,`ventascabecera`.`idclientes_cabecera` AS `idclientes_cabecera`,`ventascabecera`.`totalventa` AS `totalventa`,`ventasdetalle`.`idventasdetalle` AS `idventasdetalle`,`ventasdetalle`.`comprobante_detalle` AS `comprobante_detalle`,`ventasdetalle`.`idproductos_detalle` AS `idproductos_detalle`,`ventasdetalle`.`cantidad` AS `cantidad`,`ventasdetalle`.`importe` AS `importe`,`ventasdetalle`.`subtotal` AS `subtotal`,`productos`.`idproductos` AS `idproductos`,`productos`.`codigobarra` AS `codigobarra`,`productos`.`nombreproducto` AS `nombreproducto`,`productos`.`descripcion` AS `descripcion`,`productos`.`precio` AS `precio`,`productos`.`preciocompra` AS `preciocompra`,`productos`.`existencia` AS `existencia`,`productos`.`preciorefdolar` AS `preciorefdolar`,`productos`.`rubroid` AS `rubroid`,`clientes`.`idclientes` AS `idclientes`,`clientes`.`nombrecliente` AS `nombrecliente`,`clientes`.`telefono` AS `telefono`,`clientes`.`direccion` AS `direccion`,`clientes`.`cuit` AS `cuit`,`clientes`.`observaciones` AS `observaciones` from (((`ventascabecera` join `ventasdetalle` on((`ventasdetalle`.`comprobante_detalle` = `ventascabecera`.`comprobante_cabecera`))) join `productos` on((`ventasdetalle`.`idproductos_detalle` = `productos`.`idproductos`))) join `clientes` on((`ventascabecera`.`idclientes_cabecera` = `clientes`.`idclientes`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-27 21:00:03
