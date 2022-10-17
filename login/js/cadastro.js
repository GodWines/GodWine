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
    var mostrar2 = document.getElementById('Mostrar2')
    if(mostrar.type == 'password' && mostrar2.type == 'password'){
        mostrar.type = 'text';
        mostrar2.type = 'text';
    }else{
        mostrar.type = 'password';
        mostrar2.type = 'password'
    }
}
