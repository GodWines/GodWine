function validarNome(){
    const nome = document.getElementById('Nome');

    //Verificar se o campo é nulo
    if(nome == ""){
        msgEntrarEmContato.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    } 
    // Verifica se o nome digitado possui mais de 5 letras
        else if(nome.value.length < 3 || nome.value.length > 100){
            msgEntrarEmContato.innerHTML=`<span style="color:red">Digite um nome  com mais de 3 e menos de 100 letras</span>`
            return false;
        } 
            else if(nome.value.indexOf("0") >= 0 || nome.value.indexOf("1") >= 0 || nome.value.indexOf("2") >= 0|| nome.value.indexOf("3") >= 0 || nome.value.indexOf("4") >= 0 || nome.value.indexOf("5") >= 0 || nome.value.indexOf("6") >= 0|| nome.value.indexOf("7") >= 0 || nome.value.indexOf("8") >= 0 || nome.value.indexOf("9") >= 0 || nome.value.indexOf("!") >= 0 || nome.value.indexOf("@") >= 0 || nome.value.indexOf("#") >= 0 ||nome.value.indexOf("$") >= 0 ||nome.value.indexOf("%") >= 0 ||nome.value.indexOf("&") >= 0 ||nome.value.indexOf("*") >= 0 ||nome.value.indexOf("(") >= 0 ||nome.value.indexOf(")") >= 0 ||nome.value.indexOf("-") >= 0 ||nome.value.indexOf("_") >= 0 ||nome.value.indexOf("=") >= 0 ||nome.value.indexOf("+") >= 0 ||nome.value.indexOf("'") >= 0 ||nome.value.indexOf("´") >= 0 ||nome.value.indexOf("`") >= 0 ||nome.value.indexOf("{") >= 0 ||nome.value.indexOf("[") >= 0 ||nome.value.indexOf("}") >= 0 ||nome.value.indexOf("]") >= 0 ||nome.value.indexOf("~") >= 0 ||nome.value.indexOf("^") >= 0 ||nome.value.indexOf("?") >= 0 ||nome.value.indexOf("/") >= 0 ||nome.value.indexOf(";") >= 0 ||nome.value.indexOf(":") >= 0 ||nome.value.indexOf(">") >= 0 ||nome.value.indexOf("<") >= 0 ||nome.value.indexOf(",") >= 0 ||nome.value.indexOf("|") >= 0 ||nome.value.indexOf('"') >= 0 ||nome.value.indexOf(" ") >= 0 ||nome.value.indexOf("¨") >= 0 ||nome.value.indexOf("ç") >= 0){
            msgEntrarEmContato.innerHTML=`<span style="color:red">Seu nome não pode ter letras e nem caracter especial</span>`
            return false;
            }

        //Nome cadastrado
        else {
            msgEntrarEmContato.innerHTML=`<span style="color:green">Nome  valido</span>`
            return true;
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

  
 