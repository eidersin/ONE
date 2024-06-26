alert('Bem vindo ao jogo do número secreto!');
let escolhaMaquina = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let escolhaNumero = 0;

while (escolhaNumero != escolhaMaquina){
    escolhaNumero = prompt('Escolha um número entre 1 e 100');
    if (escolhaNumero == escolhaMaquina){
        tentativas++
        break;
    } 
    else {
        if (escolhaNumero < escolhaMaquina){
            alert('O número secreto é MAIOR');
        } else {
            alert('O número secreto é MENOR');
        }
        tentativas++
    }
}
let palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
alert('Parabéns você acertou com ' + tentativas + ' ' + palavraTentativa + ', o número era: ' + escolhaMaquina)