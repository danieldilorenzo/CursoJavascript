function carregar() {
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  var msg = document.getElementById("msg");
  var img = document.getElementById("img");
  var data = new Date();
  var hora = data.getHours();
  var minuto = data.getMinutes();
  msg.innerHTML = `Agora são ${hora}:${minuto} horas`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpg";
    document.body.style.background = "#e2cd9f";
    //Bom dia
  } else if (hora >= 12 && hora < 19) {
    document.body.style.background = "#b9846f";
    //Boa tarde
  } else {
    document.body.style.background = "#515154";
    //Boa noite
  }
}
