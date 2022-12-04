var emailUsuario = ""
var passwordUsuario = ""

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
    emailUsuario = email.value;
    passwordUsuario = senha.value;
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
  
  function cadastrar() {
    aguardar();
  
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const email = document.getElementById("Email");
    const senha = document.getElementById("senha");
    const confirmaSenha = document.getElementById("confirmaSenha");
  
    var emailVar = email.value;
    var senhaVar = senha.value;
    var confirmacaoSenhaVar = confirmaSenha.value;
  
    if (emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
  
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }
  
    // Enviando o valor da nova input
    fetch("/empresa/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
            
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });
  
    return false;
  }
  
  function sumirMensagem() {
    cardErro.style.display = "none"
  }


//verificar Nome Social
function verificarNomeSocial(){
    const nomeSocial = document.getElementById("empresaNomeSocial");
    
    //Verificar se o campo é nulo
    if(nomeSocial == ""){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } 
    // Verifica se o nome social digitado possui mais de 5 letras
        else if(nomeSocial.value.length < 5 || nomeSocial.value.length > 100){
            mensagem.innerHTML=`<span style="color:red">Digite um nome social com mais de 5 e menos de 100 letras</span>`
            return false;
        } 
        //Nome social cadastrado
        else {
            mensagem.innerHTML=`<span style="color:green">Nome social valido</span>`
            return true;
    }
}

//verificar NomeFantasia
function verificarNomeFantasia(){
    const nomeFantasia = document.getElementById("empresaNomeFantasia");
  

    //Verificar se o campo é nulo
    if(nomeFantasia.value == ""){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } 
    // Verifica se o nome fantasia digitado possui mais de 5 letras
        else if(nomeFantasia.value.length < 5 || nomeFantasia.value.length > 100){
            mensagem.innerHTML=`<span style="color:red">Digite um nome fantasia com mais de 5 e menos de 100 letras</span>`
                return false;
        }
        //Nome fantasia cadastrado
        else {
            mensagem.innerHTML=`<span style="color:green">Nome fantasia valido</span>`
            return true;
    }
}
//verificar Cnpj    
// function verificarCnpj(){
//     const cnpj = document.getElementById("empresaCnpj");
//     O Cadastro mantido pela Receita Federal vai lhe entregar 14 dígitos para serem sua identificação empresarial.
//     XX.XXX.XXX/0001-XX.
//     14 digitos
// }
//verificar Representante
function verificarRepresentante(){
    const representante = document.getElementById("empresaRepresentante");
    
    //Verificar se o campo é nulo
    if(representante.value == ""){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } 
    // Verifica se o nome do representante digitado possui mais de 3 letras
        else if(representante.value.length < 3 || representante.value.length > 100){
            mensagem.innerHTML=`<span style="color:red">Digite o nome do representante com mais de 5 e menos de 100 letras</span>`
                return false;
        }
        //Nome do representante cadastrado
        else {
            mensagem.innerHTML=`<span style="color:green">Nome do representante valido</span>`
            return true;
    }
}

//Validar Telefone (campo)
function formatar(mascara, documento){
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i)
    
    if (texto.substring(0,1) != saida){
              documento.value += texto.substring(0,1);
    }
    
  } 

//Validar Telefone (verificar se existe letras ou caracters especiais)
function verificarTelefone(){
    const tel = document.getElementById("empresaTelefone");
  
    if(tel < 1 ){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    }
    // Verificar se tem letras maisculas ou minusculas
    else if(tel.value.indexOf("A") >= 0 || tel.value.indexOf("B") >= 0 || tel.value.indexOf("C") >= 0 || tel.value.indexOf("D") >= 0 || tel.value.indexOf("E") >= 0 || tel.value.indexOf("F") >= 0 || tel.value.indexOf("G") >= 0 || tel.value.indexOf("H") >= 0 || tel.value.indexOf("I") >= 0 || tel.value.indexOf("J") >= 0 || tel.value.indexOf("K") >= 0 || tel.value.indexOf("L") >= 0 || tel.value.indexOf("M") >= 0 || tel.value.indexOf("N") >= 0 || tel.value.indexOf("O") >= 0 || tel.value.indexOf("P") >= 0 || tel.value.indexOf("Q") >= 0 || tel.value.indexOf("R") >= 0 || tel.value.indexOf("S") >= 0 || tel.value.indexOf("T") >= 0 || tel.value.indexOf("U") >= 0 || tel.value.indexOf("V") >= 0 || tel.value.indexOf("W") >= 0 || tel.value.indexOf("X") >= 0 || tel.value.indexOf("Y") >= 0 || tel.value.indexOf("Z") >= 0 || tel.value.indexOf("a") >= 0 || tel.value.indexOf("b") >= 0 || tel.value.indexOf("c") >= 0 || tel.value.indexOf("d") >= 0 || tel.value.indexOf("e") >= 0 || tel.value.indexOf("f") >= 0 || tel.value.indexOf("g") >= 0 || tel.value.indexOf("h") >= 0 || tel.value.indexOf("i") >= 0 || tel.value.indexOf("j") >= 0 || tel.value.indexOf("k") >= 0 || tel.value.indexOf("l") >= 0 || tel.value.indexOf("m") >= 0 || tel.value.indexOf("n") >= 0 || tel.value.indexOf("o") >= 0 || tel.value.indexOf("p") >= 0 || tel.value.indexOf("q") >= 0 || tel.value.indexOf("r") >= 0 || tel.value.indexOf("s") >= 0 || tel.value.indexOf("t") >= 0 || tel.value.indexOf("u") >= 0 || tel.value.indexOf("v") >= 0 || tel.value.indexOf("w") >= 0 || tel.value.indexOf("x") >= 0 || tel.value.indexOf("y") >= 0 || tel.value.indexOf("z") >= 0){
        mensagem.innerHTML=`<span style="color:red">Seu telefone não pode ter letras</span>`
        return false;
    }

    //Verificar se tem caracter especial
    else if(tel.value.indexOf("!") >= 0 || tel.value.indexOf("@") >= 0 || tel.value.indexOf("#") >= 0 || tel.value.indexOf("$") >= 0 || tel.value.indexOf("%") >= 0 || tel.value.indexOf("&") >= 0 || tel.value.indexOf("*") >= 0 || tel.value.indexOf("(") >= 0 || tel.value.indexOf(")") >= 0 || tel.value.indexOf("_") >= 0 || tel.value.indexOf("=") >= 0 || tel.value.indexOf("+") >= 0 || tel.value.indexOf("'") >= 0  || tel.value.indexOf(`"`) >= 0|| tel.value.indexOf("´") >= 0 || tel.value.indexOf("`") >= 0 || tel.value.indexOf("{") >= 0 ||tel.value.indexOf("[") >= 0 || tel.value.indexOf("}") >= 0 || tel.value.indexOf("]") >= 0 || tel.value.indexOf("?") >= 0 || tel.value.indexOf("/") >= 0 || tel.value.indexOf(";") >= 0 || tel.value.indexOf(":") >= 0 ||tel.value.indexOf(">") >= 0 || tel.value.indexOf("<") >= 0 || tel.value.indexOf(",") >= 0 || tel.value.indexOf(".") >= 0 || tel.value.indexOf("¨") >= 0 || tel.value.indexOf("ç") >= 0 || tel.value.indexOf("\ ") >= 0 || tel.value.indexOf("|") >= 0 ){
        mensagem.innerHTML=`<span style="color:red">Seu telefone não pode caracter especial</span>`
        return false;
    }
        else if(tel.length >= 13 || tel.value.length <= 13){
            mensagem.innerHTML = `<span style="color:green">Digite um telefone celular válido</span>`
            return true;
        } 
        else{
            return false;
        }
}

//verificar Complemento
function verificarComplemento(){
    const complemento = document.getElementById("empresaComplemento");

    //Verificar se o usuário digitou algum complemento
    if(complemento.value == ""){
        //Não fazer nada
        return true;
    } 

    //Complemento cadastrado com sucesso
        else{
        mensagem.innerHTML =`<span style="color:green">Complemento valido</span>`        
        return true;
    }
}

//verificar Numero
function verificarNumero(){
    const numero = document.getElementById("empresaNumero");

    //Verificar se o campo é nulo   
    if(numero.value == ""){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } else if(numero.value <9){
        mensagem.innerHTML =`<span style="color:red">Número inválido</span>`
        return false;
    }
    else{
        //Numero cadastrado
        mensagem.innerHTML =`<span style="color:green">Numero valido</span>`        
        return true;
    }
}

// function criarConta(){
//         const nomeSocial = document.getElementById("empresaNomeSocial");
//         const nomeFantasia = document.getElementById("empresaNomeFantasia");
//         const cnpj = document.getElementById("empresaCnpj");
//         const representante = document.getElementById("empresaRepresentante");
//         const telefone = document.getElementById("empresaTelefone");
//         const cep = document.getElementById("empresaCep");
//         const cidade = document.getElementById("empresaCidade");
//         const uf = document.getElementById("empresaUf");
//         const bairro = document.getElementById("empresaBairro");
//         const complemento = document.getElementById("empresaComplemento");
//         const rua = document.getElementById("empresaRua");
//         const numero = document.getElementById("empresaNumero");

//         if(nomeSocial.value == "" || nomeFantasia.value == "" || cnpj.value == "" || representante.value == "" || telefone.value == "" || cep.value == "" || cidade.value == "" || uf.value == "" || bairro.value == "" || rua.value == "" || numero.value == ""){
//             mensagem.innerHTML = `Você não pode prosseguir com um campo nulo além do complemento!` 
//         }
//             else if(verificarNomeSocial() == true && verificarNomeFantasia() == true && verificarRepresentante() == true && verificarTelefone() == true && verificarComplemento() == true && verificarNumero() == true){
//                 window.location.href = './login.html'

//             }
            
//         else{
//             mensagem.innerHTML =`<span style="color:red">Verifique os dados inseridos.</span>`
//         }
// }

// API DO CEP

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('empresaRua').value=("");
    document.getElementById('empresaBairro').value=("");
    document.getElementById('empresaCidade').value=("");
    document.getElementById('empresaUf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('empresaRua').value=(conteudo.logradouro);
    document.getElementById('empresaBairro').value=(conteudo.bairro);
    document.getElementById('empresaCidade').value=(conteudo.localidade);
    document.getElementById('empresaUf').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('empresaRua').value="...";
        document.getElementById('empresaBairro').value="...";
        document.getElementById('empresaCidade').value="...";
        document.getElementById('empresaUf').value="...";
       

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

function criarConta() {
    aguardar();
  
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    const nomeSocial = document.getElementById("empresaNomeSocial");
    const nomeFantasia = document.getElementById("empresaNomeFantasia");
    const cnpj = document.getElementById("empresaCnpj");
    const representante = document.getElementById("empresaRepresentante");
    const telefone = document.getElementById("empresaTelefone");
    const cep = document.getElementById("empresaCep");
    const uf = document.getElementById("empresaUf");
    const nomeVinicola = document.getElementById("empresaVinicola")
    const empresaCidade = document.getElementById("empresaCidade");
    const bairro = document.getElementById("empresaBairro");
    const complemento = document.getElementById("empresaComplemento");
    const rua = document.getElementById("empresaRua");
    const numero = document.getElementById("empresaNumero");
  
    var nomeSocialVar = nomeSocial.value;
    var nomeFantasiaVar =nomeFantasia.value;
    var cnpjVar = cnpj.value;
    var representanteVar = representante.value;
    var telefoneVar = telefone.value;
    var cepVar = cep.value;
    var ufVar = uf.value;
    var nomeVinicolaVar = nomeVinicola.value;
    var bairroVar = bairro.value;
    var empresaCidadeVar = empresaCidade.value;
    var complementoVar = complemento.value;
    var ruaVar = rua.value;
    var numeroVar = numero.value;
    var emailVar = emailUsuario;
    var senhaVar = passwordUsuario;



    if (nomeSocialVar == "" || nomeFantasiaVar == "" || cnpjVar == "" || representanteVar == "" || telefoneVar == "" || cepVar == "" || ufVar == "" || nomeVinicolaVar == "" || bairroVar == "" || complementoVar == "" || ruaVar == "" || numeroVar == "" || empresaCidade == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
  
        finalizarAguardar();
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }
  
    // Enviando o valor da nova input
    fetch("/empresa/cadastrarEmpresa", {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js

            nomeSocialServer : nomeSocialVar,
            nomeFantasiaServer : nomeFantasiaVar,
            cnpjServer : cnpjVar,
            representanteServer : representanteVar,
            telefoneServer : telefoneVar,
            cepServer : cepVar,
            ufServer : ufVar,
            nomeVinicolaServer: nomeVinicolaVar,
            empresaCidadeServer : empresaCidadeVar,
            bairroServer : bairroVar,
            complementoServer : complementoVar,
            ruaServer : ruaVar,
            numeroServer : numeroVar,
            emailServer : emailVar,
            senhaServer : senhaVar
            
        })
    }).then(function (resposta) {
  
        console.log("resposta: ", resposta);
  
        if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
                window.location = "login.html";
            }, "2000")
            
            limparFormulario();
            finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });
  
    return false;
  }
  
  function sumirMensagem() {
    cardErro.style.display = "none"
  }