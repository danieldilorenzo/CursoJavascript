var idade = 88;
if (idade < 16) {
  console.log(`Com ${idade} anos, você é menor de idade e não pode votar.`);
}
if (idade >= 16 && idade < 18) {
  console.log(`Com ${idade} anos, você é menor de idade , mas pode votar.`);
} else if (idade >= 18 && idade == 65) {
  console.log(`Com ${idade} anos, você deve votar.`);
} else if (idade > 65) {
  console.log(`Com ${idade} anos, você pode escolher se quer votar.`);
}
