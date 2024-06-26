let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado')
};

function verificaAlert(){
    alert('Eu amo JS')
};

function verificaPrompt(){
    let cidadeNascimento = prompt('Escreva o nome de uma cidade do Brasil')
    alert('Estive em ' + cidadeNascimento + ' e lembrei de você.')
};

function somaNumeros(){
    let numeroUm = parseInt(prompt('Digite o primeiro número para somar: '));
    let numeroDois = parseInt(prompt('Digite o segundo número para somar: '));
    let soma = (numeroUm + numeroDois);
    alert('A soma de ' + numeroUm + ' + ' + numeroDois + ' é = ' + soma)
};