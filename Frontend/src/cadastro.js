// Mostrar a senha digitada
function mostrarSenha(){
    var mostrar1 = document.getElementById('senha')
    var mostrar2 = document.getElementById('confirmaSenha')
    if(mostrar1.type == 'password'){
        mostrar1.type = 'text';
        mostrar2.type = 'text';
    }else{
        mostrar1.type = 'password';
        mostrar2.type = 'password';
    }   
}



function validarSenha(){

var senha = document.getElementById("senha")
var confirmaSenha = document.getElementById("confirmaSenha");

  if(senha.value != confirmaSenha.value) {
    alert("senha errada")
  }
  else{
    window.location.href = 'dados.html'
  }
}