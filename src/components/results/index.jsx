import { useContext } from "react";
import { CalculatedValueContext } from "../../Providers/calculatedValue";

import { ResultsDiv } from "./style";

const Results = () => {
  const { calculatedValue } = useContext(CalculatedValueContext);
  return (
    <ResultsDiv>
      <h1>
        VOCÊ RECEBERÁ: <hr />
      </h1>

      {/* Refazer com days */}
      {calculatedValue["1"] && (
        <ul>
          <li>
            Amanhã: <span>{calculatedValue["1"]}</span>{" "}
          </li>
          <li>
            Em 15 dias: <span>{calculatedValue["15"]}</span>{" "}
          </li>
          <li>
            Em 30 dias: <span>{calculatedValue["30"]}</span>{" "}
          </li>
          <li>
            Em 90 dias: <span>{calculatedValue["90"]}</span>{" "}
          </li>
        </ul>
      )}
    </ResultsDiv>
  );
};

export default Results;
