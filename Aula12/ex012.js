var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas`);
if (agora <= 12) {
  console.log("Bom dia");
}
if (agora == 12 && hora <= 19) {
  console.log("Boa tarde");
}
if (agora > 19 && hora <= 24) {
  console.log("Boa noite");
}
