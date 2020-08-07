import React, { useState } from "react";

export default function (props) {
  const turnS = () => {
    props.changeS((value) => !value);
    props.changeC((value) => value + 1);
  };
  return (
    <div>
      <button onClick={() => turnS(props.changeS)}>Encendido/Apagado</button>
    </div>
  );
}
