    //Función que me retorna un numero aleatorio entre el 1 y 128 
    export const getRandomDimensión = () => {
      //0=> 0.99999999 (0*126 === 0 => 125.999999 * 0 === 0 => 125 === 1 => 126)
      return Math.floor (Math.random() * 126) + 1
    }

    