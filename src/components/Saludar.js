import React from "react";

export default function Saludar(props) {
  return (
    <div>
      <h1>
        Hola {props.user.name}, tienes {props.user.age} años y te gusta el color{" "}
        {props.user.color} y tu trabajo es {props.user.job}
      </h1>
    </div>
  );
}
