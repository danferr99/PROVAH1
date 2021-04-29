module.exports.credito = (novocliente) => {
    var retorno
    if(novocliente.Idade < 18){
        retorno = {
            Mensagem:"Limite de crédito RECUSADO!!"
        }
    }
    else if(novocliente.restSerasa == true && novocliente.empregado == false){
        retorno = {
            Mensagem:"Limite de crédito RECUSADO!!"
        }
    }
    else if(novocliente.restSerasa == true && novocliente.empregado == true && novocliente.tempoEmprego < 6){
        retorno = {
            Mensagem:"Limite de crédito RECUSADO!!"
        }
    }
    else if(novocliente.restSerasa == true && novocliente.empregado == true && novocliente.tempoEmprego >= 6 && novocliente.tempoEmprego < 12){
        retorno = {
            Mensagem:"Limite de 10% do salário disponível", 
            Limite: this.Limite(novocliente.salarioBruto, 10)
        }
    }
    else if(novocliente.restSerasa == true && novocliente.empregado == true && novocliente.tempoEmprego >= 12){
        retorno = {
            Mensagem:"Limite de 20% do salário disponível", 
            Limite: this.Limite(novocliente.salarioBruto, 20)
        }
    } 
    else if(novocliente.restSerasa == false && novocliente.empregado == false){
        retorno = {
            Mensagem:"Limite de crédito RECUSADO!!"
        }
    }
    else if(novocliente.restSerasa == false && novocliente.empregado == true && novocliente.tempoEmprego < 6){
        retorno = {
            Mensagem:"Limite de 10% do salário disponível",
            Limite: this.Limite(novocliente.salarioBruto, 10)
        }
    }
    else if(novocliente.restSerasa == false && novocliente.empregado == true && novocliente.tempoEmprego >= 6 && novocliente.tempoEmprego < 12){
        retorno = {
            Mensagem:"Limite de 20% do salário disponível", 
            Limite: this.Limite(novocliente.salarioBruto, 20)
        }
    }
    else if(novocliente.restSerasa == false && novocliente.empregado == true && novocliente.tempoEmprego > 12){
        retorno = {
            Mensagem:"Limite de 30% do salário disponível",
            Limite: this.Limite(novocliente.salarioBruto, 30)
        }
    }
    return retorno;
};

module.exports.Limite = (salario, porcentagem) =>{
    return (salario * (porcentagem/100))
}