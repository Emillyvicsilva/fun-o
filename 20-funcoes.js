function calcularMedia(avaliacoes); {
   for (let i = 0; i < avaliacoes.length; i++) {
    soma += avaliacoes[i];
   }
   return soma/avaliacoes.length;
}

let avaliacoes = [7.8, 9.2, 6.5, 8.1, 7.3];

let mediaArredondada = Math.round(calcularMedia(avaliacoes));
console.log("Media arredondada:", mediaArredondada);

let mediaArredondadaParaCima = Math.ceil(calcularMedia(avaliacoes))
console.log("MediaArredondada para cima")