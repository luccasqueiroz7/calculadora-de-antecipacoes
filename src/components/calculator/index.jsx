import { api } from "../../services/api";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useContext, useEffect } from "react";
import { CalculatedValueContext } from "../../Providers/calculatedValue";

import { ButtonInvisible } from "./style";

const Calculator = () => {
  const { setCalculatedValue } = useContext(CalculatedValueContext);
  /* 
  useEffect(() => {
    const send = (event) => {
      const key = event.key;
      if (key === "Enter") {
        onSubmitFunction();
      }
    };

    window.addEventListener("keydown", send);

    return () => window.removeEventListener("keydown", send);
  }, [calculatedValue]); */

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
    <div>
      <h1>Simule sua Antecipação</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>
          <h3>Informe o valor da venda*</h3>
          <input type="text" {...register("amount")} />
          {errors.amount?.message}
        </label>
        <label>
          <h3>Em quantas parcelas*</h3>
          <input type="text" {...register("installments")} />
          {errors.installments?.message}
          {/* <p>Máximo de 12 parcelas</p> */}
        </label>
        <label>
          <h3>Informe o percentual de MDR*</h3>
          <input type="text" {...register("mdr")} />
          {errors.mdr?.message}
        </label>
        {/* Fazer sem button */}
        <ButtonInvisible></ButtonInvisible>
      </form>
    </div>
  );
};

export default Calculator;
