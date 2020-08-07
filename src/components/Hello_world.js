import React from "react";

export default function Hello_world() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Nicolas</h2>
    </div>
  );
}

/*
Se puede exportar de dos formas
export default Hello_world; 
Con esa linea al final del componente
o
export default function Hello_world() {
Antesediendolo al nombre de la funcion    

Todo archivo de componente puede tener varias
funciones, pero solo puede tener un "export default"
El resto de funciones debe llevar solo export
*/
