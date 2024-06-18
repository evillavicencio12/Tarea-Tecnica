self.addEventListener('message', function(event) {
    let numero = event.data.numero;
    let resultado = Math.pow(numero,3);
    self.postMessage({numero: numero,resultado: resultado});
});