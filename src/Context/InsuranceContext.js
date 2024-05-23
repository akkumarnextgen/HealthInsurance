import React, { createContext, useState } from "react";

const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
  const [insuranceData, setInsuranceData] = useState({
    name: "",
    email: "",
  });

  const updateInsuranceData = (newData) => {
    setInsuranceData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <InsuranceContext.Provider value={{ insuranceData, updateInsuranceData }}>
      {children}
    </InsuranceContext.Provider>
  );
};

export default InsuranceContext;
