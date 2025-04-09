import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, limit }) {
  const handleClick = () => {
    if (type === "minus") {
      setCount((prev) => (prev === 0 ? 0 : prev - 1));
    } else {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <button disabled={limit} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
