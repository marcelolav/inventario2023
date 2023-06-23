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
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `idcompras` int NOT NULL AUTO_INCREMENT,
  `fechacompra` datetime DEFAULT NULL,
  `comprobante` varchar(45) DEFAULT NULL,
  `idproveedores` int DEFAULT NULL,
  `idproductos` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `preciocompra` decimal(10,2) DEFAULT NULL,
  `preciocompradolar` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idcompras`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Table structure for table `ventascabecera`
--

DROP TABLE IF EXISTS `ventascabecera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventascabecera` (
  `idventascabecera` int NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  `comprobante_cabecera` int DEFAULT NULL,
  `idclientes_cabecera` int DEFAULT NULL,
  `totalventa` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`idventascabecera`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ventasdetalle`
--

DROP TABLE IF EXISTS `ventasdetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ventasdetalle` (
  `idventasdetalle` int NOT NULL AUTO_INCREMENT,
  `comprobante_detalle` varchar(45) DEFAULT NULL,
  `idproductos_detalle` int DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `importe` decimal(10,2) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`idventasdetalle`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
-- Dumping routines for database 'ecom'
--

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

-- Dump completed on 2023-06-22 22:07:47
