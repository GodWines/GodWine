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
function verificarCnpj(){
    const cnpj = document.getElementById("empresaCnpj");
    //O Cadastro mantido pela Receita Federal vai lhe entregar 14 dígitos para serem sua identificação empresarial.
    // XX.XXX.XXX/0001-XX.
    // 14 digitos
}
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

//verificar Telefone
function verificarTelefone(){
    const telefone = getElementById("empresaTelefone");

    //Verificar se o campo é nulo
    if(telefone.value = ""){
        mensagem.innerHTML =`<span style="color:red">Digite algo no campo</span>`
        return false;
    }else if(telefone.length < 10 || telefone.length > 11){
        //Mostrar que o telefone é inválido
        return false;
    }else{
        //Cep cadastrado com sucesso
        //11 digitos no máximo
        return true;
    }
}

//verificar Complemento
function verificarComplemento(){
    const complemento = document.getElementById("empresaComplemento");

    //Verificar se o usuário digitou algum complemento
    if(complemento.value == ""){
        //Não fazer nada
        return false;
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

function criarConta(){
        const nomeSocial = document.getElementById("empresaNomeSocial");
        const nomeFantasia = document.getElementById("empresaNomeFantasia");
        const cnpj = document.getElementById("empresaCnpj");
        const representante = document.getElementById("empresaRepresentante");
        const telefone = document.getElementById("empresaTelefone");
        const cep = document.getElementById("empresaCep");
        const cidade = document.getElementById("empresaCidade");
        const uf = document.getElementById("empresaUf");
        const bairro = document.getElementById("empresaBairro");
        const complemento = document.getElementById("empresaComplemento");
        const rua = document.getElementById("empresaRua");
        const numero = document.getElementById("empresaNumero");

        if(nomeSocial.value == "" || nomeFantasia.value == "" || cnpj.value == "" || representante.value == "" || telefone.value == "" || cep.value == "" || cidade.value == "" || uf.value == "" || bairro.value == "" || rua.value == "" || numero.value == ""){
            mensagem.innerHTML = `Você não pode prosseguir com um campo nulo além do complemento!` 
        }
            else if(verificarNomeSocial() == true && verificarNomeFantasia() == true && verificarCnpj() == true && verificarRepresentante() == true && verificarTelefone() == true && verificarCep() == true && verificarComplemento() == false || verificarComplemento() == true && verificarNumero() == true){
                window.location.href = './dashInicial.html'

            }
            
        else{
            mensagem.innerHTML =`<span style="color:red">Verifique os dados inseridos.</span>`
        }
}

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