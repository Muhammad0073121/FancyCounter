import React, { useEffect, useState } from "react";
import Title from "./title";
import Count from "./count";
import ResetButton from "./resetButton";
import ButtonsContainer from "./ButtonsContainer";
export default function Card() {
  const [count, setCount] = useState(0);
  const limit = count === 5 ? true : false;

  useEffect(() => {
    const handleEvent = (e) => {
      if (e.code === "Space") {
        setCount((prev) => {
          if (prev < 5) {
            return prev + 1;
          }
          return prev;
        });
      }
    };
    window.addEventListener("keypress", handleEvent);
    return () => {
      window.removeEventListener("keypress", handleEvent);
    };
  }, []);

  return (
    <div className={`card ${limit ? "card--limit" : ""}`}>
      <Title limit={limit} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonsContainer setCount={setCount} limit={limit} />
    </div>
  );
}
