let log = console.log;

function LimiteDeCaracteres(element) {
    let limite = 11;
    let length = element.value.length;
    if (length > limite) {
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

    AnimacaoValidacao(checkPrimeiroDigito, checkSegundoDigito);
}

function AnimacaoValidacao(checkPrimeiroDigito, checkSegundoDigito) {
    let cpfImagem = document.getElementById("imagemCPF");
    if (checkSegundoDigito && checkPrimeiroDigito) {
        cpfImagem.classList.add("flip-vertical-left");
        setTimeout(() => { 
            cpfImagem.src = "imagens/CPF-VALIDO.svg"; 
            document.getElementById("conteudo").style.background = "linear-gradient(0deg,  #379b44 5%, #50b94d 100%)"; 
        }, 200);
        
    } else {
        cpfImagem.classList.add("flip-vertical-right");
        setTimeout(() => { 
            cpfImagem.src = "imagens/CPF-INVALIDO.svg";
            document.getElementById("conteudo").style.background = "linear-gradient(0deg, #913232 5%, #b94d4d 100%)";
        }, 200);
        
    }
    setTimeout(function () {
        cpfImagem.style.animation = "none";
        cpfImagem.style.animation = '';
    }, 10);
    setTimeout(function () {
        cpfImagem.className = "shadow-drop-2-bottom";
    }, 800);
}

document.addEventListener('load', DOMLoaded());

function DOMLoaded() {
    let input = document.getElementById("inputCPF");
    if(input)
    {
        input.addEventListener("keyup", function (event) {
            if (event.code == "NumpadEnter" || event.code == "Enter") {
                console.log("Deu certo!");
                event.preventDefault();
                document.getElementById("botaoCPF").click();
            }
        });
    }
}