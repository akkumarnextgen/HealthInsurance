import React, { useContext } from "react";
import tick from "./tick.jpg";
import InsuranceContext from "../../../Context/InsuranceContext";

const PageFour = () => {
  const { insuranceData } = useContext(InsuranceContext);
  return (
    <div
      className="mw5 bg-white pa2-ns mt5 dib text-center"
      style={{ maxWidth: "30%", maxHeight: "30%" }}>
      <img
        src={tick}
        className="h3 w3 m-auto"
        title="success icon"
        alt="tick-icon"
      />
      <div className="center">
        <h3 className="">
          Thank you for your interest,{" "}
          <span className="text-[#2153ac] font-bold">{insuranceData.name}</span>
          !
        </h3>
      </div>
      <p style={{ color: "#C0C0C0" }}>
        We will get back to you shortly at your email id {insuranceData.email}{" "}
        for proceeding with your policy!
      </p>
    </div>
  );
};

export default PageFour;
