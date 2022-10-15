// Validar email digitado
function verificarEmail(){
    var frase = (document.getElementById('email')).value;
        if (frase.indexOf("@") > -1) {
           alert('tem arromba');
        } else {
           alert('não arromba');
        }
    }

// Mostrar a senha digitada
function mostrarSenha(){
    var mostrar = document.getElementById('Mostrar')
    if(mostrar.type == 'password'){
        mostrar.type = 'text';
    }else{
        mostrar.type = 'password';
    }
}
