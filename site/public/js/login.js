// Mostrar a senha digitada
function mostrarSenha(){
    var mostrar = document.getElementById('senha')
    if(mostrar.type == 'password'){
        mostrar.type = 'text';
    }else{
        mostrar.type = 'password';
    }
}


