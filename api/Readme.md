# Rutas disponibles

http://localhost:3001/general (entrega el listado completo de vino,con todas sus datos)

http://localhost:3001/general/?name={nombre_vino} (entrega el resultado de la busqueda por nombres de vinos que contenga ese string, pasando el valor por query-params)

http://localhost:3001/varietal (entrega el listado de varietales, almacenados en la DB)

http://localhost:3001/listwinery (entrega el listado de winery, disponibles)

http://localhost:3001/winedetail/{id_vino} (entrega el resultado de consultar un vino, pasando por params el id)

http://localhost:3001/colourtype/{colour_type} (entrega el listado de vinos que cumplan con la condición de colour_type pasado por parámetro)

http://localhost:3001/winery/{winery} (entrega el listado de vinos que cumplan con la condición de winery pasado por parámetro)

http://localhost:3001/listype (entrega el listado de tipos vino, disponibles en la db)