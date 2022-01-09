/*Ingresos totales */
db.ventas.aggregate( {preciototal:{$sum:$precioventa }})