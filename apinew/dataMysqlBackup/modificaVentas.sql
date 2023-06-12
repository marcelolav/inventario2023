ALTER TABLE `ecom`.`ventas` 
ADD COLUMN `preciosubtotal` DECIMAL(9,2) NULL AFTER `preciounitario`,
CHANGE COLUMN `producto` `idproducto` INT NULL DEFAULT NULL ,
CHANGE COLUMN `precio` `preciounitario` DECIMAL(9,2) NULL DEFAULT NULL ;
