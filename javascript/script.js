function LimiteDeCaracteres(element) {
    let limite = 11;
    if (element.value.length > limite) {
        element.value = element.value.substr(0, limite);
    }
}

function ValidarCPF(cpf) {
    let listaNumerosCpf = cpf.toString().split("");
    console.log(cpf);
    console.log(listaNumerosCpf);
    let checkPrimeiroDigito = false;
    let checkSegundoDigito = false;

    /*Primeiro Numero*/
    let repeticaoPrimeiroDigito = 0;
    let primeiroValorFinal = 0;
    for (repeticao = 10; repeticao >= 2; repeticao--) {
        let valor = listaNumerosCpf[repeticaoPrimeiroDigito] * repeticao;
        primeiroValorFinal += valor;
        repeticaoPrimeiroDigito++;
        console.log(valor);
    }
    let restoDivPrimeiroNumero = (primeiroValorFinal * 10) % 11;
    if (restoDivPrimeiroNumero == 0.10) {
        restoDivPrimeiroNumero = 0;
    }
    if (restoDivPrimeiroNumero == listaNumerosCpf[9]) checkPrimeiroDigito = true;
    console.log(restoDivPrimeiroNumero);

    /*Segundo Numero*/
    let repeticaoSegundoDigito = 0;
    let segundoValorFinal = 0;
    for (repeticao = 11; repeticao >= 2; repeticao--) {
        let valor = listaNumerosCpf[repeticaoSegundoDigito] * repeticao;
        segundoValorFinal += valor;
        repeticaoSegundoDigito++;
        console.log(valor);
    }
    let restoDivSegundoNumero = (segundoValorFinal * 10) % 11;
    if (restoDivSegundoNumero == listaNumerosCpf[10]) checkSegundoDigito = true;
    console.log(restoDivSegundoNumero);


    if (checkSegundoDigito && checkPrimeiroDigito) {
        alert("Valido!");
    } else {
        alert("Não é valido.");
    }
}