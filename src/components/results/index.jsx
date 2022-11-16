import { useContext } from "react";
import { CalculatedValueContext } from "../../Providers/calculatedValue";

import { ResultsDiv } from "./style";

const Results = () => {
  const { calculatedValue } = useContext(CalculatedValueContext);
  return (
    <ResultsDiv>
      <h1>VOCÊ RECEBERÁ:</h1>
      {/* Refazer com days */}
      {calculatedValue["1"] && (
        <>
          <p>Amanhã: {calculatedValue["1"]}</p>
          <p>Em 15 dias: {calculatedValue["15"]}</p>
          <p>Em 30 dias: {calculatedValue["30"]}</p>
          <p>Em 90 dias: {calculatedValue["90"]}</p>
        </>
      )}
    </ResultsDiv>
  );
};

export default Results;
