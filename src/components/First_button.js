import React from "react";

export default function First_button(props) {
  const { user, saludar } = props;
  const { name = "Anonimo" } = user;
  return (
    <div>
      <button onClick={() => saludar(name)}>Hola</button>
    </div>
  );
}
/* "() => esto le esta indicando a mi boton que debe esperar al click para ejecutar la función, ya que al encontrar
los parentesis de la propiedad ejecuta de una vez la función, y no debe ser así." 
*/
/* const { user, saludar } = props;
Este tipo de lineas me ahorra el tener que poner props. cada vez que quiero llamar una propiedad, sacando 
la información que viene dentro de si y encapsulandola en nuevas variables. 
const { name = "Anonimo" } = user; También, puedo usarlo para sacar información de un objeto, además de permitirme
ponerle valor por default a los atributos del objeto o a las propiedades contenidas en props
*/
