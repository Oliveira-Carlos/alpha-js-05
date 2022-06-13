// Função que exibe um valor entre o mínimo e o máximo colocado pelo usuário

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);

function clicar() {

    let text1 = parseInt(document.querySelector("#text1").value);

    let result = document.querySelector("#result");

    //Verifica se o valor é um número inteiro

    if (text1 === "" || isNaN(text1)) {
        result.innerHTML = "O valor inserido não é válido, por favor insira um número";
    }

    // Se for um número executa e exibe o valor por extenso:

    else {
        switch (text1) {
            case 1:
                result.innerHTML = 'um'
                break;

            case 2:
                result.innerHTML = 'dois'
                break;

            case 3:
                result.innerHTML = 'três'
                break;

            case 4:
                result.innerHTML = 'quatro'
                break;

            case 5:
                result.innerHTML = 'cinco'
                break;

            case 6:
                result.innerHTML = 'seis'
                break;

            case 7:
                result.innerHTML = 'sete'
                break;

            case 8:
                result.innerHTML = 'oito'
                break;

            case 9:
                result.innerHTML = 'nove'
                break;


            case 10:
                result.innerHTML = 'dez'
                break;

            default:
                result.innerHTML = 'Número inválido'
                break;
        }
    }

}