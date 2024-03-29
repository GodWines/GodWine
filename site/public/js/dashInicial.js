function simulacaoAlerta(){
    inbox.innerHTML = `
    <a href="./dashboard/1arm-dashboard.html" class="mensagem">
    <div class="envio">
        <img src="./assets/logo.png" alt="" class="imgLogo" />
        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
    </div>
    <div id="forma" >
        <div class="balao">
            <div class="statusMensagem">
                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                <span class="textoPoppins subTexto">Alerta: O armazem-1 esta com a temperatura ou umidade em zona de perigo</span>
            </div>
            <div class="bolinha verde"style="background-color: #e2b024;"></div>
        </div>
        <div class="triangulo"></div>
    </div>
</a>

<a href="./dashboard/2arm-dashboard.html"  class="mensagem">
    <div class="envio">
        <img src="./assets/logo.png" alt="" class="imgLogo" />
        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
    </div>
    <div id="forma" >
        <div class="balao">
            <div class="statusMensagem">
                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                <span class="textoPoppins subTexto">Alerta: O armazem-2 esta com a temperatura ou umidade em zona de perigo</span>
            </div>
            <div class="bolinha verde"style="background-color: #e2b024;"></div>
        </div>
        <div class="triangulo"></div>
    </div>
</a>

<a href="./dashboard/3arm-dashboard.html"  class="mensagem">
    <div class="envio">
        <img src="./assets/logo.png" alt="" class="imgLogo" />
        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
    </div>
    <div id="forma" >
        <div class="balao">
            <div class="statusMensagem">
                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                <span class="textoPoppins subTexto">Alerta: O armazem-3 esta com a temperatura ou umidade em zona de perigo</span>
            </div>
            <div class="bolinha verde"style="background-color: #e2b024;"></div>
        </div>
        <div class="triangulo"></div>
    </div>
</a>
    `

    visaoGeral.innerHTML = `
    <span class="textoPoppins subTitulo amarelo textoVisaoGeral">Visão Geral: </span>
                <div class="informacoes">
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Quantidade de armazéns</span>
                        <span class="textoPoppins subTitulo numero amarelo">10</span>
                    </div>
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Tipos Monitorados</span>
                        <span class="textoPoppins subTitulo numero amarelo">4</span>
                    </div>
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Sensores por armazém</span>
                        <span class="textoPoppins subTitulo numero amarelo">3</span>
                    </div>
                    <div class="statusAlerta" style="background-color: #e2b024;">
                        <span class="textoPoppins subTitulo preto">Status:</span>
                        <img class="imgStatus" src="./assets/telaDashboard/statusAlerta.png" alt="">
                    </div>
                </div>

    `
}
var dataAntiga1 = 0 
var dataAntiga2 = 0 
var dataAntiga3 = 0 
var dataAntiga4 = 0 
function Alerta(fkSensor, dataAtual){
    
    inbox.innerHTML += `
    <a href="./dashboard/${fkSensor}arm-dashboard.html" class="mensagem">
    <div class="envio">
        <img src="./assets/logo.png" alt="" class="imgLogo" />
        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
    </div>
    <div id="forma" >
        <div class="balao">
            <div class="statusMensagem">
                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                <span class="textoPoppins subTexto">Alerta as ${dataAtual}: O armazem-${fkSensor} esta com a temperatura ou umidade em zona de perigo</span>
            </div>
            <div class="bolinha verde"style="background-color: #e2b024;"></div>
        </div>
        <div class="triangulo"></div>
    </div>
</a>`
}

function mudarAtencao(){
    visaoGeral.innerHTML = `
<span class="textoPoppins subTitulo amarelo textoVisaoGeral">Visão Geral: </span>
            <div class="informacoes">
                <div class="blocoInfo">
                    <span class="textoPoppins subTitulo">Quantidade de armazéns</span>
                    <span class="textoPoppins subTitulo numero amarelo">4</span>
                </div>
                <div class="blocoInfo">
                    <span class="textoPoppins subTitulo">Tipos Monitorados</span>
                    <span class="textoPoppins subTitulo numero amarelo">4</span>
                </div>
                <div class="blocoInfo">
                    <span class="textoPoppins subTitulo">Sensores por armazém</span>
                    <span class="textoPoppins subTitulo numero amarelo">3</span>
                </div>
                <div class="statusAlerta" style="background-color: #e2b024;">
                    <span class="textoPoppins subTitulo preto">Status:</span>
                    <img class="imgStatus" src="./assets/telaDashboard/statusAlerta.png" alt="">
                </div>
            </div>

`
}

function Erro(fkSensor, dataAtual){
    inbox.innerHTML += `
    <a href="./dashboard/${fkSensor}arm-dashboard.html" class="mensagem">
    <div class="envio">
        <img src="./assets/logo.png" alt="" class="imgLogo" />
        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
    </div>
    <div id="forma" >
        <div class="balao">
            <div class="statusMensagem">
                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                <span class="textoPoppins subTexto">Critico ${dataAtual}: O armazem-${fkSensor} esta com a temperatura ou umidade em zona critica</span>
            </div>
            <div class="bolinha verde"style="background-color: red;"></div>
        </div>
        <div class="triangulo"></div>
    </div>
</a>`
}
function mudarErro(){
    visaoGeral.innerHTML = `
    <span class="textoPoppins subTitulo amarelo textoVisaoGeral">Visão Geral: </span>
                <div class="informacoes">
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Quantidade de armazéns</span>
                        <span class="textoPoppins subTitulo numero amarelo">4</span>
                    </div>
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Tipos Monitorados</span>
                        <span class="textoPoppins subTitulo numero amarelo">4</span>
                    </div>
                    <div class="blocoInfo">
                        <span class="textoPoppins subTitulo">Sensores por armazém</span>
                        <span class="textoPoppins subTitulo numero amarelo">3</span>
                    </div>
                    <div class="statusAlerta" style="background-color: red;">
                        <span class="textoPoppins subTitulo preto">Status:</span>
                        <img class="imgStatus" src="./assets/telaDashboard/statusErro.png" alt="">
                    </div>
                </div>

    `
}

function mudarBom(){
    inbox.innerHTML = `
    <div class="mensagem">
                    <div class="envio">
                        <img src="./assets/logo.png" alt="" class="imgLogo" />
                        <span class="textoPoppins subTitulo">GOD<span class="amarelo">WINE</span></span>
                    </div>
                    <div id="forma" >
                        <div class="balao">
                            <div class="statusMensagem">
                                <span class="textoPoppins subTitulo amarelo">Mensagem:</span>
                                <span class="textoPoppins subTexto">Tudo OK no momento</span>
                            </div>
                            <div class="bolinha verde"></div>
                        </div>
                        <div class="triangulo"></div>
                    </div>
                </div>
    `

    visaoGeral.innerHTML = `
    <span class="textoPoppins subTitulo amarelo textoVisaoGeral">Visão Geral: </span>
    <div class="informacoes">
        <div class="blocoInfo">
            <span class="textoPoppins subTitulo">Quantidade de armazéns</span>
            <span class="textoPoppins subTitulo numero amarelo">4</span>
        </div>
        <div class="blocoInfo">
            <span class="textoPoppins subTitulo">Tipos Monitorados</span>
            <span class="textoPoppins subTitulo numero amarelo">4</span>
        </div>
        <div class="blocoInfo">
            <span class="textoPoppins subTitulo">Sensores por armazém</span>
            <span class="textoPoppins subTitulo numero amarelo">3</span>
        </div>
        <div class="statusAlerta">
            <span class="textoPoppins subTitulo preto">Status:</span>
            <img class="imgStatus" src="./assets/telaDashboard/statusOK.png" alt="">
        </div>
    </div>
    `
}