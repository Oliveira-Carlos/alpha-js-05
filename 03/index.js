// Função que exibe um valor entre o mínimo e o máximo colocado pelo usuário

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);

function clicar() {

    let text1 = parseInt(document.querySelector("#text1").value);

    let result = document.querySelector("#result");

    let imggame = document.querySelector("#img1");

    switch (text1) {
        case 1:
            imggame.src ='./assets/cod-bo3.png';
            break ;

        case 2:
            imggame.src ='./assets/cyberpunk2077.png';
            break;

        case 3:
            imggame.src ='./assets/gta-V.png';
            break;

        case 4:
            imggame.src ='./assets/dark-soulsIII.png';
            break;

        case 5:
            imggame.src ='./assets/elden-ring.png';
            break;

        default:
            result.innerHTML = 'não encontrado'
            break;
    }

    document.querySelector('#img2').innerHTML = 'Para efetivar  a compra e baixar o jogo basta colocar o numero do seu cartão de crédito, data de validade e código de segurança (AQUI É SEGURO! CONFIA!)';

}