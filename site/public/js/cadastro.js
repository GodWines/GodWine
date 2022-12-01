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
    else if (email.value.indexOf("@") == 0 || email.value.endsWith("@gmail.com") == false &&email.value.endsWith("@sptech.school") == false &&email.value.endsWith("@bandtec.com.br") == false &&email.value.endsWith("@outlook.com") == false &&email.value.endsWith("@outlook.com.br") == false &&email.value.endsWith("@hotmail.com") == false &&email.value.endsWith("@yahoo.com") == false
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

    //Verificar se a senha possui alguma letra minuscula.
    else if ( password.value.indexOf("a") < 0  &&  password.value.indexOf("b") < 0  &&  password.value.indexOf("c") < 0  &&  password.value.indexOf("d") < 0  &&  password.value.indexOf("e") < 0  &&  password.value.indexOf("f") < 0  &&  password.value.indexOf("g") < 0  &&  password.value.indexOf("h") < 0  &&  password.value.indexOf("i") < 0  &&  password.value.indexOf("j") < 0  &&  password.value.indexOf("k") < 0  &&  password.value.indexOf("l") < 0  &&  password.value.indexOf("m") < 0  &&  password.value.indexOf("n") < 0  &&  password.value.indexOf("o") < 0  &&  password.value.indexOf("p") < 0  &&  password.value.indexOf("q") < 0  &&  password.value.indexOf("r") < 0  &&  password.value.indexOf("s") < 0  &&  password.value.indexOf("t") < 0  &&  password.value.indexOf("u") < 0  &&  password.value.indexOf("v") < 0  &&  password.value.indexOf("w") < 0  &&  password.value.indexOf("x") < 0  &&  password.value.indexOf("y") < 0  && password.value.indexOf("z") < 0 ){
      msgErro.innerHTML = `<span style='color:red'>Sua senha é fraca</span>`;
    return false;
    }

    // Verificar se tem letras maisculas 
    else if(password.value.indexOf("A") < 0 && password.value.indexOf("B") < 0 && password.value.indexOf("C") < 0 && password.value.indexOf("D") < 0 && password.value.indexOf("E") < 0 && password.value.indexOf("F") < 0 && password.value.indexOf("G") < 0 && password.value.indexOf("H") < 0 && password.value.indexOf("I") < 0 && password.value.indexOf("J") < 0 && password.value.indexOf("K") < 0 && password.value.indexOf("L") < 0 && password.value.indexOf("M") < 0 && password.value.indexOf("N") < 0 && password.value.indexOf("O") < 0 && password.value.indexOf("P") < 0 && password.value.indexOf("Q") < 0 && password.value.indexOf("R") < 0 && password.value.indexOf("S") < 0 && password.value.indexOf("T") < 0 && password.value.indexOf("U") < 0 && password.value.indexOf("V") < 0 && password.value.indexOf("W") < 0 && password.value.indexOf("X") < 0 && password.value.indexOf("Y") < 0 && password.value.indexOf("Z") < 0){
      msgErro.innerHTML = `<span style='color:yellow'>Sua senha é mediana</span>`;
    return false;
    }
    
    //Verificar se a senha possui algum caracter especial.
    else if (password.value.indexOf("!") < 0 && password.value.indexOf("@") < 0 && password.value.indexOf("#") < 0 && password.value.indexOf("$") < 0 && password.value.indexOf("%") < 0 && password.value.indexOf("&") < 0 && password.value.indexOf("*") < 0 && password.value.indexOf("(") < 0 && password.value.indexOf(")") < 0 && password.value.indexOf("-") < 0 && password.value.indexOf("_") < 0 && password.value.indexOf("=") < 0 && password.value.indexOf("+") < 0 && password.value.indexOf("'") < 0 && password.value.indexOf("´") < 0 && password.value.indexOf("`") < 0 && password.value.indexOf("{") < 0 && password.value.indexOf("[") < 0 && password.value.indexOf("}") < 0 && password.value.indexOf("]") < 0 && password.value.indexOf("~") < 0 && password.value.indexOf("^") < 0 && password.value.indexOf("?") < 0 && password.value.indexOf("/") < 0 && password.value.indexOf(";") < 0 && password.value.indexOf(":") < 0 && password.value.indexOf(">") < 0 && password.value.indexOf("<") < 0 && password.value.indexOf(",") < 0 && password.value.indexOf("|") < 0 && password.value.indexOf('"') < 0  && password.value.indexOf(".") < 0 && password.value.indexOf("ç") < 0 ) {
      msgErro.innerHTML=`<span style="color:yellow">Sua senha está ficando forte</span>`
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

// Botão continuar - Verificar se todos os campos foram preenchidos corretamente
function validarSenha() {
  const email = document.getElementById("Email");
  const senha = document.getElementById("senha");
  const confirmaSenha = document.getElementById("confirmaSenha");

  //Verifica se o usuário preencheu todos os campos
  if (email.value == "" || senha.value == "" || confirmaSenha.value == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Erro! Cadastro Inválido'
    })
  }
    //Verifica se algum campo digitado é inválido
    else if(validarEmail() == false || validarForcaSenha() == false || validarConfirmarSenha() == false){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Erro! Cadastro Inválido'
      })
    }

    //Redireciona o cliente para a próxima página de cadastro
    else {
      localStorage.setItem('email', email.value);
      localStorage.setItem('senha', senha.value);
      window.location.href = "./dados.html";
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Cadastro Realizado com Sucesso!'
      })
    }
    }
      