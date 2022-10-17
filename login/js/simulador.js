function calcular() {
    quantidade_garrafas = Number(qnt_garrafa.value);
    preco_medio_garrafa = Number(preco_garrafa.value);

    // pegar os 25% que é a porcentagem do garrafas_perdidas 
    var garrafas_perdidas = quantidade_garrafas * 0.25;

    // pegar o garrafas_perdidas e multiplicar pelo valor de garrafa
    var valor_desperdicado = garrafas_perdidas * preco_medio_garrafa; 


    // 25% de disperdicio são reduzidos com os nossos sensores estipuladamente em 3% ao mes 
    var valor_desperdicado_mes = (quantidade_garrafas * 0.03) * preco_medio_garrafa;
    
    var valor_desperdicado_semestre = (((valor_desperdicado - (quantidade_garrafas * 0.03) * preco_medio_garrafa))*6);
    var valor_desperdicado_ano = (((valor_desperdicado - (quantidade_garrafas * 0.03) * preco_medio_garrafa))*12);
    // 25% de disperdicio são reduzidos com os nossos sensores estipuladamente em 3% no semestre
    

    texto_calculo.innerHTML = ` Estipula-se atualmente que o mercado de vinhos há uma perda considerável de <span style="color:red"> 25% </span> nas vinicolas pela falta de controle de temperatura e umidade. <br>
    A cada <span style="color:blue">${quantidade_garrafas}</span> garrafas você perde em média um quarto desse valor que é igual 
    <span style="color:red"> ${garrafas_perdidas}</span>  vinhos que resulta em  <span style="color:red">  ${valor_desperdicado.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span> reais em produtos perdidos. <br>
     Com nossos sensores esses valores  de garrafas perdidas diminuiriam para  <span style="color:blue">  ${(quantidade_garrafas * 0.03)} </span>
      garrafas de vinho, onde economizaria cerca de  <span style="color:green"> ${(valor_desperdicado - (quantidade_garrafas * 0.03) * preco_medio_garrafa).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })} </span> reais no mês. <br>
      Valor economizado no semestre: <span style="color:green">${valor_desperdicado_semestre.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })} <br> </span>
      valor economizado no ano: <span style="color:green">${valor_desperdicado_ano.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}  </span> <br>`

}