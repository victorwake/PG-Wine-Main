export const   formControl = input => {
    
    const urlRegExp = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/;
    const stringPlace = /^[A-Z\s].*/
    const yearRegExp = /^(19[0-9][0-9]|20[0-2][0-9])$/;  //funciona
    const stringRegExp = /^[A-Z0-9].*/;   //funciona
    const alcRegExp = /^(5(\.0{1})?|[6-9](\.\d{1})?|1[0-9](\.\d{1})?|20(\.0{1}?)?)$/ ; //funciona
    const volRegExp =  /^(750|1500|3000)$/;
    const priceRegExp = /^([3-9][0-9]{2}|[1-9][0-9]{3}|[1-9][0-9]{4}|[1-8][0-9]{5}|9[0]{5})$/;
    const bodegaREgExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)\.[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$/

    let err = {}; 

    if (!input.name) {
        err.name = 'Ingrese un nombre válido';
      } else if (!stringRegExp.test(input.name)) {
        err.name = 'El nombre debe iniciar con mayúscula o un número';
      }


      if(!input.color_type) {
        err.color_type = 'Ingresar una región'
      }else if(!stringPlace.test(input.color_type)){
        err.color_type = 'Ingrese una región'
      }

    //  if(input.color_type !== 'Blanco' || 
    //    input.color_type !== 'Tinto'  || 
    //    input.color_type !== 'Rosado' ||
    //    input.color_type !== 'Espumante'
    // )
    
    
       if (!input.winery) {
        err.winery = 'Ingrese un nombre válido';
      } else if (!stringRegExp.test(input.winery)) {
        err.winery = 'El nombre debe iniciar con mayúscula o un número';
      }
   
    if(!input.price) {
        err.price = 'El precio es obligatorio';
    }else if(!priceRegExp.test(input.price)){
        err.price = 'El precio está fuera de rango'
    }
    
    if(!input.alcohol) {
        err.alcohol = 'La graduación alcohólica debe ser provista ';
    }else if (!alcRegExp.test(input.alcohol)){
         err.alcohol = 'La graduación debe ser entre 5° y 20°'
    }

    if(!input.volume) {
        err.volume = 'Insertar el volumen en cm3';
    }else if(!volRegExp.test(input.volume)){
        err.volume = 'Insertar volumenes de 750, 1500 o 3000 cm3' 
    }
    if (!input.varietal) {
        err.varietal = 'Ingrese un nombre válido';
      } else if (!stringRegExp.test(input.varietal)) {
        err.varietal = '';
      }
    if (!input.year) {
          err.year = 'Ingrese el año de elaboración ';
        } else if (!yearRegExp.test(input.year) || input.year > 2023) {
          err.year = 'El año debe estar comprendido entre 1900 y 2023';
        }
    
        if(!input.province) {
          err.province = 'Ingresar una región'
        }else if(!stringPlace.test(input.province)){
          err.province = 'Ingrese una región'
        }
    // if(!input.province === 'value') {
    //       err.province = 'Seleccionar una provincia'   
    //   }  
    //   else if(
    //     input.province !== 'Tierra del Fuego' ||
    //     input.province !== 'Chubut' ||
    //     input.province !== 'Santa Cruz' ||
    //     input.province !== 'Rio Negro' ||
    //     input.province !== 'Neuquén' ||
    //     input.province !== 'La Pampa' ||
    //     input.province !== 'Buenos Aires' ||
    //     input.province !== 'San Luis' ||
    //     input.province !== 'Córdoba' ||
    //     input.province !== 'Mendoza' ||
    //     input.province !== 'San Juan' ||
    //     input.province !== 'Santa Fe' ||
    //     input.province !== 'Misiones' ||
    //     input.province !== 'Formosa' ||
    //     input.province !== 'Corrientes' ||
    //     input.province !== 'Santiago del Estero' ||
    //     input.province !== 'Tucumán' ||
    //     input.province !== 'Jujuy' ||
    //     input.province !== 'Salta' ||
    //     input.province !== 'Chaco' ||
    //     input.province !== 'Catamarca'
    //     )

    if(!input.region) {
          err.region = 'Ingresar una región'
        }else if(!stringPlace.test(input.region)){
          err.region = 'Ingrese una región'
        }

    if(!input.url){
          err.url = 'Ingrese la URL de la bodega' 
        }else if(!bodegaREgExp.test(input.url)){
          err.url = 'La URL no es válida'
    }

    if(!input.image){
          err.image = 'Ingrese la imagen del producto' 
        }else if(!urlRegExp.test(input.image)){
          err.image = 'La URL no es válida'
   }

    if(!input.description) {
          err.description = 'Por favor brindar una descripción del vino'
        }else if(input.description.length > 2000){
          err.description = 'La descripción no puede superar los 500 caracteres'
        }
   


    return err; 
};