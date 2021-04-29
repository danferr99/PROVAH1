const { Router, request } = require("express");
const { validate } = require("../validations/validations");
const { ClienteValidationRules } = require("../validations/clienteValidations");
const services = require("../services/clienteService");

const routes = Router();

routes.post("/", ClienteValidationRules(), validate, (request, response) => {
  const {nome, cpf, idade, salarioBruto, qtdeDependentes, empregado, tempoEmprego, restSerasa} = request.body;
  const novocliente = {nome, cpf, idade, salarioBruto, qtdeDependentes, empregado, tempoEmprego, restSerasa};
  const retornoCliente = services.credito(novocliente);
  return response.status(201).json({ retornoCliente });
});

module.exports = routes;