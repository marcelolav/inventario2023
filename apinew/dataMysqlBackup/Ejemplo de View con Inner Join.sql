ALTER VIEW vw_ventasConDetalles as 
SELECT 
* FROM 
ventascabecera 
INNER JOIN ventasdetalle ON ventasdetalle.comprobante_detalle = ventascabecera.comprobante_cabecera
inner join productos on ventasdetalle.idproductos_detalle = productos.idproductos
inner join clientes on ventascabecera.idclientes_cabecera = clientes.idclientes
order by ventascabecera.comprobante_cabecera;


