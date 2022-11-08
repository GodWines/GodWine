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

  
// modal
function mostrarModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "flex";
}

function fecharModal() {
  var divModal = document.getElementById("div_modal");
  divModal.style.display = "none";
}

//função entrar
function entrar() {
  aguardar();

  var emailVar = email_input.value;
  var senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
      cardErro.style.display = "block"
      mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
      finalizarAguardar();
      return false;
  }
  else {
      setInterval(sumirMensagem, 5000)
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));

              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nome;
              sessionStorage.ID_USUARIO = json.id;

              setTimeout(function () {
                  window.location = "./dashboard/cards.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
              finalizarAguardar(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none"
}


