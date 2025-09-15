function atualizarContador() {
  const dataFinal = new Date("2025-09-21T11:00:00"); // Data alvo
  const agora = new Date();
  const diferencaEmMilissegundos = dataFinal - agora;

  const titulo = document.querySelector(".titulo h2");
  const resultado = document.getElementById("resultado");

  // Se a data do evento ainda não passou
  if (diferencaEmMilissegundos > 0) {
    titulo.innerText = "💓 O grande dia em:";
    const segundosTotais = Math.floor(diferencaEmMilissegundos / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;

    resultado.innerText = `${diasTotais} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  } else {
    // Se a data do evento já passou
    titulo.innerText = "💓 O grande dia há:";

    // Calcula a diferença de tempo que já se passou
    const diferencaAbsoluta = Math.abs(diferencaEmMilissegundos);
    const segundosTotais = Math.floor(diferencaAbsoluta / 1000);
    const minutosTotais = Math.floor(segundosTotais / 60);
    const horasTotais = Math.floor(minutosTotais / 60);
    const diasTotais = Math.floor(horasTotais / 24);

    const segundos = segundosTotais % 60;
    const minutos = minutosTotais % 60;
    const horas = horasTotais % 24;

    resultado.innerText = `${diasTotais} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
  }
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função imediatamente para exibir o valor assim que a página carregar
atualizarContador();

