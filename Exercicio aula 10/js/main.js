$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000.00')
    $('#cep').mask('00000-000')

$(document).ready(function() { // função para envio obrigatorio do sobrenome 
    $('#cadastro-form').submit(function(event) {
        var nomeCompleto = $('#nome').val();
        var nomeSobrenome = nomeCompleto.trim().split(' ');

        if (nomeSobrenome.length < 2) {
            alert('Por favor, insira o nome e sobrenome.');
            event.preventDefault(); 
        } else {
            var nome = nomeSobrenome[0];
            var sobrenome = nomeSobrenome.slice(1).join(' ');
        }
    });
});



    $('form-campo').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
    })
})