var nomeDoUsuario = prompt("Qual o seu nome?");
var valorEmBitCoin = prompt("Quantos BitCoins você possui?");
var cotacaoDoBitCoin = 37289.1;

var valorEmDolar = valorEmBitCoin * cotacaoDoBitCoin;
valorEmDolar = valorEmDolar.toFixed(2);

alert("Olá " + nomeDoUsuario + "!" + " O valor em dolár é: " + valorEmDolar);
