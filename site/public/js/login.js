// Mostrar a senha digitada
function mostrarSenha(){
    var mostrar = document.getElementById('Senha')
    if(mostrar.type == 'password'){
        mostrar.type = 'text';
    }else{
        mostrar.type = 'password';
    }
}

  //Botão continuar - Verificar se todos os campos foram preenchidos corretamente
  function validarCampos() {
    
    var email = document.getElementById('Email');
    var senha = document.getElementById('Senha');

    //Verifica se o usuário preencheu todos os campos
    if(email.value == "" || senha.value == ""){
      msgErro.innerHTML = `<span style='color:red'>Você deve preencher todos os campos antes de logar.</span>`;
    }
    
    //Redireciona o cliente para a próxima página de cadastro
    else{
      window.location.href = './dashInicial.html'
    }
  }