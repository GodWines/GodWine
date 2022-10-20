//Verificar se o email é válido
function validarEmail() {
  var email = Email.value
  
  //Verificar se o email está dentro do intervalo de 6 e 85
  if (email.length < 6 || email.length > 85) {
    emailValido.innerHTML = `<span style='color:red'>Seu email deve ter mais de 6 letras e no máximo 85</span>`;
  } 
  
  //Verificar se o email não contem nenhum caracter especial que não é aceito
  else if (email.indexOf("!") >= 0 || email.indexOf("#") >= 0 || email.indexOf("$") >= 0 || email.indexOf("%") >= 0 || email.indexOf("&") >= 0 || email.indexOf("*") >= 0 || email.indexOf("(") >= 0 || email.indexOf(")") >= 0 || email.indexOf("-") >= 0 || email.indexOf("_") >= 0 || email.indexOf("=") >= 0 || email.indexOf("+") >= 0 || email.indexOf("'") >= 0 || email.indexOf("´") >= 0 || email.indexOf("`") >= 0 || email.indexOf("{") >= 0 || email.indexOf("[") >= 0 || email.indexOf("}") >= 0 || email.indexOf("]") >= 0 || email.indexOf("~") >= 0 || email.indexOf("^") >= 0 || email.indexOf("?") >= 0 || email.indexOf("/") >= 0 || email.indexOf(";") >= 0 || email.indexOf(":") >= 0 || email.indexOf(">") >= 0 || email.indexOf("<") >= 0 || email.indexOf(",") >= 0 || email.indexOf("|") >= 0 || email.indexOf('"') >= 0 || email.indexOf("\ ") >= 0 || email.indexOf("¨") >= 0 || email.indexOf("ç") >= 0) {
    emailValido.innerHTML = `<span style='color:red'>Seu email só pode conter letras, números e (.)</span>`;
  }
  
  //Verificar se o dominio do email é válido
  else if(email.endsWith("@gmail.com") == false && email.endsWith("@sptech.school") == false && email.endsWith("@bandtec.com.br") == false && email.endsWith("@outlook.com") == false && email.endsWith("@outlook.com.br") == false && email.endsWith("@hotmail.com") == false && email.endsWith("@yahoo.com") == false){
    emailValido.innerHTML = `<span style='color:red'>Seu email não tem um dominio válido</span>`;
  }

  //Mostra na tela que o email é valido
  else {
    emailValido.innerHTML = `<span style='color:green'>Seu email é válido</span>`;
  }
}



//Verificar se a senha digitada é forte
function validarForcaSenha() {
  var password = senha.value;

  //Verificar se a senha possui mais de 7 caracters
  if (password.length <= 7) {
    forcaSenha.innerHTML = `<span style='color:red'>Sua senha é muito fraca</span>`;
  } 
  
  //Verificar se a senha possui algum caracter especial
  else if (password.indexOf("!") < 0 && password.indexOf("@") < 0 && password.indexOf("#") < 0 && password.indexOf("$") < 0 && password.indexOf("%") < 0 && password.indexOf("&") < 0 && password.indexOf("*") < 0 && password.indexOf("(") < 0 && password.indexOf(")") < 0 && password.indexOf("-") < 0 && password.indexOf("_") < 0 && password.indexOf("=") < 0 && password.indexOf("+") < 0 && password.indexOf("'") < 0 && password.indexOf("´") < 0 && password.indexOf("`") < 0 && password.indexOf("{") < 0 && password.indexOf("[") < 0 && password.indexOf("}") < 0 && password.indexOf("]") < 0 && password.indexOf("~") < 0 && password.indexOf("^") < 0 && password.indexOf("?") < 0 && password.indexOf("/") < 0 && password.indexOf(";") < 0 && password.indexOf(":") < 0 && password.indexOf(">") < 0 && password.indexOf("<") < 0 && password.indexOf(",") < 0 && password.indexOf("|") < 0 && password.indexOf('"') < 0 && password.indexOf("\ ") < 0 && password.indexOf(".") < 0 && password.indexOf("ç") < 0 ) {
    forcaSenha.innerHTML = `<span style='color:yellow'>Sua senha é mediana</span>`;
  } 
  
  //Mostra na tela que a senha é forte
  else {
    forcaSenha.innerHTML = `<span style='color:green'>Sua senha é forte</span>`;
  }
}



//Verificar se a senha digitada no repetir senha é igual a primeira senha digitada
function validarConfirmarSenha() {
  var senha = document.getElementById("senha");
  var confirmaSenha = document.getElementById("confirmaSenha");
  
  //Verificar se os campos foram preenchidos
  if( senha.value == "" || confirmaSenha.value == ""){
    msgErro.innerHTML = `<span style='color:red'>Você deve preencher todos os campos antes de seguir para a próxima tela.</span>`;
  }
  
  //Verifica se as senhas são diferentes
  else if (senha.value != confirmaSenha.value) {
    senhasIguais.innerHTML = `<span style='color:red'>Suas senhas não coincidem</span>`;
  } 

  //Mostra na tela que as senhas são iguais
  else {
    senhasIguais.innerHTML = `<span style='color:green'>Suas senhas coincidem</span>`; 
  }
}



// Caixa checkbox - Mostrar a senha digitada
function mostrarSenha() {
  var mostrar1 = document.getElementById('senha');
  var mostrar2 = document.getElementById('confirmaSenha');

  // Se o botão for selecionado, ele mostrará a senha
  if (mostrar1.type == 'password') {
    mostrar1.type = 'text';
    mostrar2.type = 'text';
  } 

  // Se o botão for desselecionado, ele esconderá a senha
  else {
    mostrar1.type = 'password';
    mostrar2.type = 'password';
  }
}

  //Botão continuar - Verificar se todos os campos foram preenchidos corretamente
  function validarSenha() {
    
    var email = document.getElementById('Email');;
    var senha = document.getElementById('senha');
    var confirmaSenha = document.getElementById('confirmaSenha');

    //Verifica se o usuário preencheu todos os campos
    if(email.value == "" || senha.value == "" || confirmaSenha.value == ""){
      msgErro.innerHTML = `<span style='color:red'>Você deve preencher todos os campos antes de seguir para a próxima tela.</span>`;
    }
    
    //Verifica se as senhas são iguais
    else if (senha.value != confirmaSenha.value){
      msgErro.innerHTML = `<span style='color:red'>Suas senhas não coincidem.</span>`;
    }

    //Redireciona o cliente para a próxima página de cadastro
    else{
      window.location.href = './dados.html'
    }
  }

 