// Função que exibe um valor entre o mínimo e o máximo colocado pelo usuário

let button = document.querySelector("#btn");

button.addEventListener("click", clicar);

function clicar() {
    let data = new Date(document.querySelector('#date1').value);
    data.setHours(+ 24);
    let result1 = document.querySelector('#result1');
    let result2 = document.querySelector('#result2');
    let result3 = document.querySelector('#result3');
    let result4 = document.querySelector('#result4');
    let result5 = document.querySelector('#result5');
    let result6 = document.querySelector('#result6');
    let weekdays = data.getDay();
    let day = data.getDate();
    let month = data.getMonth();
    let year = data.getFullYear();
    let milissegundos = data.getTime()

    if (isNaN(data)) {
        result1.innerHTML = 'Data inválida'
    } else {

        result1.innerHTML = `Dia: ${day}`;
        result2.innerHTML = `Mês: ${month + 1}`;
        result3.innerHTML = `Ano: ${year}`;
        result6.innerHTML = `Milissegundos: ${milissegundos}`;

        switch (weekdays) {
            case 0:
                result4.innerHTML = 'Domingo'
                break;
            case 1:
                result4.innerHTML = 'Segunda-Feira'
                break;
            case 2:
                result4.innerHTML = 'Terça-Feira'
                break;
            case 3:
                result4.innerHTML = 'Quarta-Feira'
                break;
            case 4:
                result4.innerHTML = 'Quinta-Feira'
                break;
            case 5:
                result4.innerHTML = 'Sexta-Feira'
                break;
            case 6:
                result4.innerHTML = 'Sábado'
                break;
        }

        switch (month) {
            case 0:
                result5.innerHTML = 'Janeiro'
                break;
            case 1:
                result5.innerHTML = 'Fevereiro'
                break;
            case 2:
                result5.innerHTML = 'Março'
                break;
            case 3:
                result5.innerHTML = 'Abril'
                break;
            case 4:
                result5.innerHTML = 'Maio'
                break;
            case 5:
                result5.innerHTML = 'Junho'
                break;
            case 6:
                result5.innerHTML = 'Julho'
                break;
            case 7:
                result5.innerHTML = 'Agosto'
                break;
            case 8:
                result5.innerHTML = 'Setembro'
                break;
            case 9:
                result5.innerHTML = 'Outubro'
                break;
            case 10:
                result5.innerHTML = 'Novembro'
                break;
            case 11:
                result5.innerHTML = 'Dezembro'
                break;
        }
    }
}