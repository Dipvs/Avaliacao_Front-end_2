function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem) {

    /*

    var mensagem = {
            nome: "nome da pessoa", 
            email: "email informado", 
            mensagem: "a mensagem informada"} 

    */

    var inserir = $.ajax({

        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
    });
}

function validarUsuario(objLoginSenha) {
    return $.ajax({
        url: 'https://app-p2-aab7c7fdddb8.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).then(function(data) {
        return data; // Sucesso: retorna o dado (esperado como booleano)
    }).catch(function() {
        return false; // Falha: retorna false
    });
}