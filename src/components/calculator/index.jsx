import { api } from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext } from "react";
import { CalculatedValueContext } from "../../Providers/calculatedValue";

import { ButtonInvisible, CalculatorDiv } from "./style";

const Calculator = () => {
  const { setCalculatedValue } = useContext(CalculatedValueContext);

  const formSchema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Insira um número")
      .required("Valor obrigatório")
      .min(1000, "Valor mínimo de 1000"),
    installments: yup
      .number()
      .typeError("Insira um número")
      .required("Parcelas obrigatórias")
      .positive("Insira um número positivo")
      .integer("Insira um número inteiro")
      .max(12, "Máximo de 12 parcelas "),
    mdr: yup.number().typeError("Insira um número").required("MDR obrigatório"),
    // days opcional
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    // Refazer com days
    api
      .post("", data)
      .then((response) => setCalculatedValue(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <CalculatorDiv>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <h3>Informe o valor da venda *</h3>
          <input type="number" {...register("amount")} />
          {errors.amount?.message}
        </label>
        <label>
          <h3>Em quantas parcelas *</h3>
          <input type="number" {...register("installments")} />
          {errors.installments?.message}
        </label>
        <label>
          <h3>Informe o percentual de MDR *</h3>
          <input type="number" {...register("mdr")} />
          {errors.mdr?.message}
        </label>
        {/* Fazer sem button */}
        <ButtonInvisible></ButtonInvisible>
      </form>
    </CalculatorDiv>
  );
};

export default Calculator;
