import React from "react";
import spin from "./Spinner-5.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spin} alt="loading" />
    </div>
  );
}
export default Spinner;
