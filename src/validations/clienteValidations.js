const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfvalidations");

const ClienteValidationRules = () => {
  return [
    body("idade").notEmpty().withMessage("é obrigatório informar a idade"),
    body("idade").isFloat({min:15,max:Infinity}).withMessage("Idade não pode ser menor que 16"),
    body("cpf").notEmpty().withMessage("CPF obrigatório"),
    body("cpf")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF é inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
    body("salarioBruto").notEmpty().withMessage("é obrigatório informar o salário"),
    body("salarioBruto").isFloat({min:0, max:Infinity}).withMessage("Salário deve ser maior ou igual a 0"),
    body("qtdeDependentes").isFloat({min:0,max:Infinity}).withMessage("Dependentes deve ser maior ou igual a 0")
  ];
};

module.exports = {
  ClienteValidationRules,
};
