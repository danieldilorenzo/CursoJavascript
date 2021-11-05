function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    Number(fano.value) < 1880
  ) {
    alert("[ERRO] Verifique a data e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    // res.innerHTML = `Idade calculada, ${idade} anos.`;
    var genero = "";
    if (fsex[0].checked) {
      genero = "homem";

      genero = "mulher";
    }
    res.style.textAlign = "center";
    res.innerHTML = `Sistema detectou ${genero} com ${idade} anos.`;
  }
}
