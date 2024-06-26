// ------------   3. Criar uma função que exibe "Olá, mundo!" no console.
// function exibirOla() {
//     console.log("Olá, mundo!");
//   }

//   exibirOla();



// ------------   2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// function exibirOlaNome(nome) {
//     console.log('Olá ' + nome);
//   }

//   exibirOlaNome("Alice");



// ------------   3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
// function calcularDobro(numero) {
//     return numero * 2;
//   }  

//   let resultadoDobro = calcularDobro(5);
//   console.log(resultadoDobro);



// ------------   4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
//   }

//   let media = calcularMedia(4, 7, 10);
//   console.log(media);



// ------------   5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// function encontrarMaior(a, b) {
//     return a > b ? a : b;
//   }

//   let maiorNumero = encontrarMaior(15, 9);
//   console.log(maiorNumero);



// ------------   6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
// function quadrado(numero) {
//     return numero * numero;
//   }
  
//   let resultado = quadrado(2);
//   console.log(resultado); 



// ------------   7. Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
// function calculaIMC(altura, peso) {
//     let imc = peso / (altura * altura);
//     console.log('Seu IMC: ' + imc.toFixed(1));
// }

// calculaIMC(1.80, 70);

// ------------   8. Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
//     return fatorial;
//   
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

// ------------   9. Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
// function converterDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);
//   }
  
//   // Exemplo de uso
//   let valorEmDolar = 50;
//   let valorEmReais = converterDolarParaReal(valorEmDolar);
//   console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);



// ------------   10. Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// function calcularAreaPerimetroSalaRetangular(altura, largura){
//     let area = largura * altura;
//     let perimetro = 2 * (altura + largura);

//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
// }

// let altura = 3;
// let largura = 5;
// calcularAreaPerimetroSalaRetangular(altura, largura);



// ------------   11. Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
  
//   // Exemplo de uso
//   let raio = 4; // em metros
//   calcularAreaPerimetroSalaCircular(raio);

// ------------   12. Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
// function mostrarTabuada(numero){
//     for (let i = 1; i <= 10; i++){
//         let resultado = numero * i
//         console.log(`${numero} x ${i} = ${resultado}`);
//     }
// }
// let numero = 7;
// mostrarTabuada(numero);