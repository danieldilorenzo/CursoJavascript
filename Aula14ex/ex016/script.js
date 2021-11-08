function contar() {
  let inicio = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
    alert("Erro, verifique se todos os campos estão com algum valor");
  } else {
    res.innerHTML = "Contando...<br> ";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (i < f) {
      // contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) res.innerHTML += `${c} \u{1F449} `;
    }
  }
  res.innerHTML += `\u{1F3C1}`;
}
