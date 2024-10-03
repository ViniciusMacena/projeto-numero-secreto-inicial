alert('Bem vindo ao jogo do número secreto!');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1) ;
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
  if(chute == numeroSecreto){
    break;
  } else{
      if(chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
      } else {
        alert(`O número secreto e maior que ${chute}`);
      }
      // tentativa = tentativa + 1;
      tentativas++;
  }
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou!! O número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



