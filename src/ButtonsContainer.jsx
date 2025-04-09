import React from "react";
import CountButton from "./countButton";

export default function ButtonsContainer({ setCount, limit }) {
  return (
    <div className="button-container">
      <CountButton type="minus" setCount={setCount} limit={limit} />
      <CountButton type="plus" setCount={setCount} limit={limit} />
    </div>
  );
}
