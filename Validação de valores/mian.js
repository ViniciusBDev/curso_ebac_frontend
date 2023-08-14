
const formulario = document.getElementById('meuFormulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemDiv = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (isNaN(valorA) || isNaN(valorB)) {
        mensagemDiv.textContent = 'Por favor, insira valores numéricos em ambos os campos.';
    } else if (valorB > valorA) {
        mensagemDiv.textContent = 'Formulário válido! B é maior que A.';
    } else {
        mensagemDiv.textContent = 'Formulário inválido! B deve ser maior que A.';
    }
        });