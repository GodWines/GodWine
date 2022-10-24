//Validação do campo Nome
function validarNome(){
    const nome = document.getElementById('Nome');
    msgEntrarEmContato.innerHTML=``;
    //Verificar se o campo é nulo
    if(nome == ""){
        msgEntrarEmContato.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } 
    // Verifica se o nome digitado possui mais de 5 letras
        else if(nome.value.length < 3 || nome.value.length > 100){
            msgEntrarEmContato.innerHTML=`<span style="color:red">Digite um nome com mais de 3 e menos de 100 letras</span>`
            return false;
        } 
            else if(nome.value.indexOf("0") >= 0 || nome.value.indexOf("1") >= 0 || nome.value.indexOf("2") >= 0|| nome.value.indexOf("3") >= 0 || nome.value.indexOf("4") >= 0 || nome.value.indexOf("5") >= 0 || nome.value.indexOf("6") >= 0|| nome.value.indexOf("7") >= 0 || nome.value.indexOf("8") >= 0 || nome.value.indexOf("9") >= 0 || nome.value.indexOf("!") >= 0 || nome.value.indexOf("@") >= 0 || nome.value.indexOf("#") >= 0 || nome.value.indexOf("$") >= 0 || nome.value.indexOf("%") >= 0 || nome.value.indexOf("&") >= 0 || nome.value.indexOf("*") >= 0 || nome.value.indexOf("(") >= 0 || nome.value.indexOf(")") >= 0 || nome.value.indexOf("-") >= 0 || nome.value.indexOf("_") >= 0 || nome.value.indexOf("=") >= 0 || nome.value.indexOf("+") >= 0 || nome.value.indexOf("'") >= 0  || nome.value.indexOf(`"`) >= 0|| nome.value.indexOf("´") >= 0 || nome.value.indexOf("`") >= 0 || nome.value.indexOf("{") >= 0 ||nome.value.indexOf("[") >= 0 || nome.value.indexOf("}") >= 0 || nome.value.indexOf("]") >= 0 || nome.value.indexOf("?") >= 0 || nome.value.indexOf("/") >= 0 || nome.value.indexOf(";") >= 0 || nome.value.indexOf(":") >= 0 ||nome.value.indexOf(">") >= 0 || nome.value.indexOf("<") >= 0 || nome.value.indexOf(",") >= 0 || nome.value.indexOf(".") >= 0 || nome.value.indexOf("¨") >= 0 || nome.value.indexOf("ç") >= 0 || nome.value.indexOf("\ ") >= 0 || nome.value.indexOf("|") >= 0){
            msgEntrarEmContato.innerHTML=`<span style="color:red">Seu nome não pode ter números e nem caracter especial</span>`
            return false;
            }

        //Nome cadastrado
        else {
            msgEntrarEmContato.innerHTML=`<span style="color:green">Nome válido</span>`
            return true;
    }
}


//Verificar se o email é válido
function validarEmail() {
    const email = document.getElementById("Email");
    msgEntrarEmContato.innerHTML=``;
  
    //Verificar se o email está dentro do intervalo de 6 e 85
    if (email.value.length < 6 || email.value.length > 85) {
      msgEntrarEmContato.innerHTML = `<span style='color:red'>Seu email deve ter mais de 6 letras e no máximo 85</span>`;
      return false;
    }
  
      //Verificar se o email não contem nenhum caracter especial que não é aceito
      else if (email.value.indexOf("!") >= 0 ||email.value.indexOf("#") >= 0 ||email.value.indexOf("$") >= 0 ||email.value.indexOf("%") >= 0 ||email.value.indexOf("&") >= 0 ||email.value.indexOf("*") >= 0 ||email.value.indexOf("(") >= 0 ||email.value.indexOf(")") >= 0 ||email.value.indexOf("-") >= 0 ||email.value.indexOf("_") >= 0 ||email.value.indexOf("=") >= 0 ||email.value.indexOf("+") >= 0 ||email.value.indexOf("'") >= 0 ||email.value.indexOf("´") >= 0 ||email.value.indexOf("`") >= 0 ||email.value.indexOf("{") >= 0 ||email.value.indexOf("[") >= 0 ||email.value.indexOf("}") >= 0 ||email.value.indexOf("]") >= 0 ||email.value.indexOf("~") >= 0 ||email.value.indexOf("^") >= 0 ||email.value.indexOf("?") >= 0 ||email.value.indexOf("/") >= 0 ||email.value.indexOf(";") >= 0 ||email.value.indexOf(":") >= 0 ||email.value.indexOf(">") >= 0 ||email.value.indexOf("<") >= 0 ||email.value.indexOf(",") >= 0 ||email.value.indexOf("|") >= 0 ||email.value.indexOf('"') >= 0 ||email.value.indexOf(" ") >= 0 ||email.value.indexOf("¨") >= 0 ||email.value.indexOf("ç") >= 0) {
        msgEntrarEmContato.innerHTML = `<span style='color:red'>Seu email só pode conter letras, números e (.)</span>`;
        return false;
      }
  
      //Verificar se o dominio do email é válido
      else if (email.value.endsWith("@gmail.com") == false &&email.value.endsWith("@sptech.school") == false &&email.value.endsWith("@bandtec.com.br") == false &&email.value.endsWith("@outlook.com") == false &&email.value.endsWith("@outlook.com.br") == false &&email.value.endsWith("@hotmail.com") == false &&email.value.endsWith("@yahoo.com") == false
      ){
        msgEntrarEmContato.innerHTML = `<span style='color:red'>Seu email não tem um dominio válido</span>`;
        return false;
      }
  
      //Mostra na tela que o email é valido
      else {
        msgEntrarEmContato.innerHTML = `<span style='color:green'>Seu email é válido</span>`;
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
function validarTelefone(){
    const tel = document.getElementById("Telefone");
  
    if(tel < 1 ){
        msgEntrarEmContato.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    }
    // Verificar se tem letras maisculas ou minusculas
    else if(tel.value.indexOf("A") >= 0 || tel.value.indexOf("B") >= 0 || tel.value.indexOf("C") >= 0 || tel.value.indexOf("D") >= 0 || tel.value.indexOf("E") >= 0 || tel.value.indexOf("F") >= 0 || tel.value.indexOf("G") >= 0 || tel.value.indexOf("H") >= 0 || tel.value.indexOf("I") >= 0 || tel.value.indexOf("J") >= 0 || tel.value.indexOf("K") >= 0 || tel.value.indexOf("L") >= 0 || tel.value.indexOf("M") >= 0 || tel.value.indexOf("N") >= 0 || tel.value.indexOf("O") >= 0 || tel.value.indexOf("P") >= 0 || tel.value.indexOf("Q") >= 0 || tel.value.indexOf("R") >= 0 || tel.value.indexOf("S") >= 0 || tel.value.indexOf("T") >= 0 || tel.value.indexOf("U") >= 0 || tel.value.indexOf("V") >= 0 || tel.value.indexOf("W") >= 0 || tel.value.indexOf("X") >= 0 || tel.value.indexOf("Y") >= 0 || tel.value.indexOf("Z") >= 0 || tel.value.indexOf("a") >= 0 || tel.value.indexOf("b") >= 0 || tel.value.indexOf("c") >= 0 || tel.value.indexOf("d") >= 0 || tel.value.indexOf("e") >= 0 || tel.value.indexOf("f") >= 0 || tel.value.indexOf("g") >= 0 || tel.value.indexOf("h") >= 0 || tel.value.indexOf("i") >= 0 || tel.value.indexOf("j") >= 0 || tel.value.indexOf("k") >= 0 || tel.value.indexOf("l") >= 0 || tel.value.indexOf("m") >= 0 || tel.value.indexOf("n") >= 0 || tel.value.indexOf("o") >= 0 || tel.value.indexOf("p") >= 0 || tel.value.indexOf("q") >= 0 || tel.value.indexOf("r") >= 0 || tel.value.indexOf("s") >= 0 || tel.value.indexOf("t") >= 0 || tel.value.indexOf("u") >= 0 || tel.value.indexOf("v") >= 0 || tel.value.indexOf("w") >= 0 || tel.value.indexOf("x") >= 0 || tel.value.indexOf("y") >= 0 || tel.value.indexOf("z") >= 0){
        msgEntrarEmContato.innerHTML=`<span style="color:red">Seu telefone não pode ter letras</span>`
        return false;
    }

    //Verificar se tem caracter especial
    else if(tel.value.indexOf("!") >= 0 || tel.value.indexOf("@") >= 0 || tel.value.indexOf("#") >= 0 || tel.value.indexOf("$") >= 0 || tel.value.indexOf("%") >= 0 || tel.value.indexOf("&") >= 0 || tel.value.indexOf("*") >= 0 || tel.value.indexOf("(") >= 0 || tel.value.indexOf(")") >= 0 || tel.value.indexOf("_") >= 0 || tel.value.indexOf("=") >= 0 || tel.value.indexOf("+") >= 0 || tel.value.indexOf("'") >= 0  || tel.value.indexOf(`"`) >= 0|| tel.value.indexOf("´") >= 0 || tel.value.indexOf("`") >= 0 || tel.value.indexOf("{") >= 0 ||tel.value.indexOf("[") >= 0 || tel.value.indexOf("}") >= 0 || tel.value.indexOf("]") >= 0 || tel.value.indexOf("?") >= 0 || tel.value.indexOf("/") >= 0 || tel.value.indexOf(";") >= 0 || tel.value.indexOf(":") >= 0 ||tel.value.indexOf(">") >= 0 || tel.value.indexOf("<") >= 0 || tel.value.indexOf(",") >= 0 || tel.value.indexOf(".") >= 0 || tel.value.indexOf("¨") >= 0 || tel.value.indexOf("ç") >= 0 || tel.value.indexOf("\ ") >= 0 || tel.value.indexOf("|") >= 0 ){
        msgEntrarEmContato.innerHTML=`<span style="color:red">Seu telefone não pode caracter especial</span>`
        return false;
    }

        else if(tel.length >= 13 || tel.value.length <= 13){
            msgEntrarEmContato.innerHTML = `<span style="color:green">Digite um telefone celular válido</span>`
            return true;
        } 
        else{
            return false;
        }
        
}


//Exibir "Entrar em contato"
function entrarEmContato(){
    var nome = document.getElementById('Nome');
    var email = document.getElementById('Email');
    var telefone = document.getElementById('Telefone');
    var msg = document.getElementById('Msg');
    
    //Verifica se os campos foram preenchidos
    if(nome.value == "" || email.value == "" || telefone.value == "" || msg.value == ""){
        msgEntrarEmContato.innerHTML = `<span style='color:red'>Por favor, insira os dados em todos os campos antes de enviar</span>`
    }
     //Exibe a mensagem na tela 
    else{
        msgEntrarEmContato.innerHTML = `Obrigado, em breve entraremos em contato. Por favor, cheque seu email.`
    }
}

//Exibir "Mensagem saiba mais"
function enviarEmail(){
    var email = document.getElementById("saibaMais");

    //Verifica se o campo foi preenchido
    if(email.value == ""){
        msgSaibaMais.innerHTML = `<span style='color:red'>Por favor, digite um texto antes de enviar</span>`;
    } 
    
        else if (email.value.length < 6 || email.value.length > 85) {
        msgSaibaMais.innerHTML = `<span style='color:red'>Desculpe, mas seu email não parece ser válido</span>`;
    } 

    //Verificar se o email não contem nenhum caracter especial que não é aceito
        else if (email.value.indexOf("!") >= 0 || email.value.indexOf("#") >= 0 || email.value.indexOf("$") >= 0 || email.value.indexOf("%") >= 0 || email.value.indexOf("&") >= 0 || email.value.indexOf("*") >= 0 || email.value.indexOf("(") >= 0 || email.value.indexOf(")") >= 0 || email.value.indexOf("-") >= 0 || email.value.indexOf("_") >= 0 || email.value.indexOf("=") >= 0 || email.value.indexOf("+") >= 0 || email.value.indexOf("'") >= 0 || email.value.indexOf("´") >= 0 || email.value.indexOf("`") >= 0 || email.value.indexOf("{") >= 0 || email.value.indexOf("[") >= 0 || email.value.indexOf("}") >= 0 || email.value.indexOf("]") >= 0 || email.value.indexOf("~") >= 0 || email.value.indexOf("^") >= 0 || email.value.indexOf("?") >= 0 || email.value.indexOf("/") >= 0 || email.value.indexOf(";") >= 0 || email.value.indexOf(":") >= 0 || email.value.indexOf(">") >= 0 || email.value.indexOf("<") >= 0 || email.value.indexOf(",") >= 0 || email.value.indexOf("|") >= 0 || email.value.indexOf('"') >= 0 || email.value.indexOf("\ ") >= 0 || email.value.indexOf("¨") >= 0 || email.value.indexOf("ç") >= 0) {
        msgSaibaMais.innerHTML = `<span style='color:red'>Desculpe, mas seu email não parece ser válido</span>`;
    }
    
    //Verificar se o dominio do email é válido
        else if(email.value.endsWith("@gmail.com") == false && email.value.endsWith("@sptech.school") == false && email.value.endsWith("@bandtec.com.br") == false && email.value.endsWith("@outlook.com") == false && email.value.endsWith("@outlook.com.br") == false && email.value.endsWith("@hotmail.com") == false && email.value.endsWith("@yahoo.com") == false){
        msgSaibaMais.innerHTML = `<span style='color:red'>Desculpe, mas seu email não parece ser válido</span>`;
    }

      //Exibe a mensagem na tela
        else{
        msgSaibaMais.innerHTML = `Um email de confirmação será enviado em até 5 minutos. Por favor, cheque seu email. Obrigado!!`
    }
    
}
