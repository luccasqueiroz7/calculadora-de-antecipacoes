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

      {calculatedValue["1"] && (
        <ul>
          <li>
            <p>Amanhã: </p>
            <span>
              {calculatedValue["1"].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>{" "}
          </li>
          <li>
            <p>Em 15 dias: </p>
            <span>
              {calculatedValue["15"].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>{" "}
          </li>
          <li>
            <p>Em 30 dias: </p>
            <span>
              {calculatedValue["30"].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>{" "}
          </li>
          <li>
            <p>Em 90 dias: </p>
            <span>
              {calculatedValue["90"].toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>{" "}
          </li>
        </ul>
      )}
    </ResultsDiv>
  );
};

export default Results;
