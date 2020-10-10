function LimiteDeCaracteres(element) {
    let limite = 11;
    let length = element.value.length;
    if (length > limite) {
        element.value = element.value.substr(0, limite);
    }
}

function ValidarCPF(cpf) {
    let listaNumerosCpf = cpf.toString().split("");
    let checkPrimeiroDigito = ValidaDigito(10, listaNumerosCpf);
    let checkSegundoDigito = ValidaDigito(11, listaNumerosCpf);

    AnimacaoValidacao(checkPrimeiroDigito, checkSegundoDigito);
}

function ValidaDigito(repeticoes, listaNumerosCpf)
{
    let primeiro = false;
    let repeticao = 0;
    let valorFinal = 0;
    if(repeticoes == 10) primeiro = true;
    for (repete = repeticoes; repete >= 2; repete--) {
        let valor = listaNumerosCpf[repeticao] * repete;
        valorFinal += valor;
        repeticao++;
    }
    let restoDiv = (valorFinal * 10) % 11;
    if (primeiro && restoDiv == 10) {
        restoDiv = 0;
    }
    let checkDigito = false;
    if (restoDiv == listaNumerosCpf[repeticoes -1]) checkDigito = true;
    return checkDigito;
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

/* Espera o documento ser carregado para acionar a função */
document.addEventListener('load', DOMLoaded());

function DOMLoaded() {
    let input = document.getElementById("inputCPF");
    if(input)
    {
        input.addEventListener("keyup", function (event) {
            if (event.code == "NumpadEnter" || event.code == "Enter") {
                event.preventDefault();
                document.getElementById("botaoCPF").click();
            }
        });
    }
}