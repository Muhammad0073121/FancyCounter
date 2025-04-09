import React from "react";

export default function Title({ limit }) {
  return (
    <h1 className="title">
      {limit ? "Buy the pro version for > 5" : "Fancy Counter"}
    </h1>
  );
}
