//Se um dos valores não for passado, ele será
//considerado como 0 e a função não irá falhar
function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

let result = soma(10 + 5);
console.log(result);
