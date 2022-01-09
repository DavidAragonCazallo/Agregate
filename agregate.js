/*Ingresos totales */

db.ventas.aggregate( 
    {$sum:"$precioventa" })

    db.ventas.aggregate( [
        { $match: {vendedor: "Rocio" } },
        { $sum: { $sum: "$precioventa" } } 
     ] )




     db.ventas.aggregate(
        [
         { group:
              {
                vendedor: "Rocio" },
                totalAmount: { $sum: { $multiply: [ "$precioventa", "$unidades" ] } }
               
              }   
        ]
     )

    