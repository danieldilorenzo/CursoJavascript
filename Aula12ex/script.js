//alert("Olá!");
function hora() {
  var hora = data.getHours();
  var minuto = data.getMinutes();
  if (minuto < 10) {
    minuto = "0" + minuto;
  }
  msg.innerHTML = `Agora são ${hora}:${minuto} horas.`;
}
