let valores = [0, 1, 2];
valores[3] = 6; // adiciona o valor 3 na variável 3
valores.push(7); // adiciona um valor na última array, independente de qual for

valores.length; //ver quantos elementos existem no array valores

valores.sort(); //ordenar os elementos em ordem crescente

console.log(`Nossa Array tem ${valores.length} elementos`);

//imprimir todas as variáveis

for (let pos = 0; pos < valores.length; pos++) {
  console.log(valores[pos]);
}

for (let pos = 0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

valores.indexOf(7); //pesquisar em qual posição está o valor 7

let pos = valores.indexOf(7);
console.log(`O valor está na posição ${pos}`);
