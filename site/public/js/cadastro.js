//Verificar se o email é válido
function validarEmail() {
  const email = document.getElementById("Email");
  msgErro.innerHTML = ``;

  //Verificar se o email está dentro do intervalo de 6 e 85
  if (email.value.length < 6 || email.value.length > 85) {
    msgErro.innerHTML = `<span style='color:red'>Seu email deve ter mais de 6 letras e no máximo 85</span>`;
    return false;
  }

    //Verificar se o email não contem nenhum caracter especial que não é aceito
    else if (email.value.indexOf("!") >= 0 ||email.value.indexOf("#") >= 0 ||email.value.indexOf("$") >= 0 ||email.value.indexOf("%") >= 0 ||email.value.indexOf("&") >= 0 ||email.value.indexOf("*") >= 0 ||email.value.indexOf("(") >= 0 ||email.value.indexOf(")") >= 0 ||email.value.indexOf("-") >= 0 ||email.value.indexOf("_") >= 0 ||email.value.indexOf("=") >= 0 ||email.value.indexOf("+") >= 0 ||email.value.indexOf("'") >= 0 ||email.value.indexOf("´") >= 0 ||email.value.indexOf("`") >= 0 ||email.value.indexOf("{") >= 0 ||email.value.indexOf("[") >= 0 ||email.value.indexOf("}") >= 0 ||email.value.indexOf("]") >= 0 ||email.value.indexOf("~") >= 0 ||email.value.indexOf("^") >= 0 ||email.value.indexOf("?") >= 0 ||email.value.indexOf("/") >= 0 ||email.value.indexOf(";") >= 0 ||email.value.indexOf(":") >= 0 ||email.value.indexOf(">") >= 0 ||email.value.indexOf("<") >= 0 ||email.value.indexOf(",") >= 0 ||email.value.indexOf("|") >= 0 ||email.value.indexOf('"') >= 0 ||email.value.indexOf(" ") >= 0 ||email.value.indexOf("¨") >= 0 ||email.value.indexOf("ç") >= 0) {
      msgErro.innerHTML = `<span style='color:red'>Seu email só pode conter letras, números e (.)</span>`;
      return false;
    }

    //Verificar se o dominio do email é válido
    else if (email.value.endsWith("@gmail.com") == false &&email.value.endsWith("@sptech.school") == false &&email.value.endsWith("@bandtec.com.br") == false &&email.value.endsWith("@outlook.com") == false &&email.value.endsWith("@outlook.com.br") == false &&email.value.endsWith("@hotmail.com") == false &&email.value.endsWith("@yahoo.com") == false
    ) {
      msgErro.innerHTML = `<span style='color:red'>Seu email não tem um dominio válido</span>`;
      return false;
    }

    //Mostra na tela que o email é valido
    else {
      msgErro.innerHTML = `<span style='color:green'>Seu email é válido</span>`;
      return true;
  }
}

//Verificar se a senha digitada é forte
function validarForcaSenha() {
  const password = document.getElementById("senha");
  msgErro.innerHTML = ``;

  //Verificar se a senha possui mais de 7 caracters
  if (password.value.length <= 7) {
    msgErro.innerHTML = `<span style='color:red'>Sua senha é muito fraca</span>`;
    return false;
  }

    //Verificar se a senha possui algum caracter especial
    else if (password.value.indexOf("!") < 0 && password.value.indexOf("@") < 0 && password.value.indexOf("#") < 0 && password.value.indexOf("$") < 0 && password.value.indexOf("%") < 0 && password.value.indexOf("&") < 0 && password.value.indexOf("*") < 0 && password.value.indexOf("(") < 0 && password.value.indexOf(")") < 0 && password.value.indexOf("-") < 0 && password.value.indexOf("_") < 0 && password.value.indexOf("=") < 0 && password.value.indexOf("+") < 0 && password.value.indexOf("'") < 0 && password.value.indexOf("´") < 0 && password.value.indexOf("`") < 0 && password.value.indexOf("{") < 0 && password.value.indexOf("[") < 0 && password.value.indexOf("}") < 0 && password.value.indexOf("]") < 0 && password.value.indexOf("~") < 0 && password.value.indexOf("^") < 0 && password.value.indexOf("?") < 0 && password.value.indexOf("/") < 0 && password.value.indexOf(";") < 0 && password.value.indexOf(":") < 0 && password.value.indexOf(">") < 0 && password.value.indexOf("<") < 0 && password.value.indexOf(",") < 0 && password.value.indexOf("|") < 0 && password.value.indexOf('"') < 0 && password.value.indexOf("\ ") < 0 && password.value.indexOf(".") < 0 && password.value.indexOf("ç") < 0 ) {
      msgErro.innerHTML = `<span style='color:yellow'>Sua senha é mediana</span>`;
      return false;
    }

    //Mostra na tela que a senha é forte
    else {
      msgErro.innerHTML = `<span style='color:green'>Sua senha é forte</span>`;
      return true;
  }
}

//Verificar se a senha digitada no repetir senha é igual a primeira senha digitada
function validarConfirmarSenha() {
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");
  msgErro.innerHTML = ``;

  //Verifica se as senhas são diferentes
  if (senha.value != confirmaSenha.value) {
    msgErro.innerHTML = `<span style='color:red'>Suas senhas não coincidem</span>`;
    return false;
  }

    //Mostra na tela que as senhas são iguais
    else {
      msgErro.innerHTML = `<span style='color:green'>Suas senhas coincidem</span>`;
      return true;
  }
}

// Caixa checkbox - Mostrar a senha digitada
function mostrarSenha() {
  const mostrar1 = document.getElementById("senha");
  const mostrar2 = document.getElementById("confirmaSenha");

  // Se o botão for selecionado, ele mostrará a senha
  if (mostrar1.type == "password") {
    mostrar1.type = "text";
    mostrar2.type = "text";
  }

    // Se o botão for desselecionado, ele esconderá a senha
    else {
      mostrar1.type = "password";
      mostrar2.type = "password";
  }
}

//Botão continuar - Verificar se todos os campos foram preenchidos corretamente
function validarSenha() {
  const email = document.getElementById("Email");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");

  //Verifica se o usuário preencheu todos os campos
  if (email.value == "" || senha.value == "" || confirmaSenha.value == "") {
    msgErro.innerHTML = `<span style='color:red'>Você deve preencher todos os campos antes de seguir para a próxima tela.</span>`;
  }
    //Verifica se algum campo digitado é inválido
    else if(validarEmail() == false || validarForcaSenha() == false || validarConfirmarSenha() == false){
      msgErro.innerHTML = `<span style='color:red'>Um dos seus campos é inválido.</span>`;
    }

    //Redireciona o cliente para a próxima página de cadastro
    else {
      window.location.href = "./dados.html";
    }
}