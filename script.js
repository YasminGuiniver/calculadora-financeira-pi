function calcularFinanceiro() {

    var custoAnual = Number(gastosAnuaisInput.value);
    var anoProjecao = Number(projecaoAnosInput.value);

    var semSistema = custoAnual * anoProjecao;
    var economia = ((17.86 / 100) * semSistema);
    var comSistema = semSistema - economia;

    resultadoDiv.innerHTML = `Sem o nosso sistema, em ${anoProjecao} anos, você gastaria um total de 
    <b>${semSistema.toFixed(2)} reais</b>. No entanto, com o nosso sistema, em uma projeção de 2 anos, 
    você irá gastar apenas <b>${comSistema.toFixed(2)} reais</b>, economizando significativamente 17,86% do valor 
    total (<b>${economia.toFixed(2)} reais</b>).
    <br><br>
    <span>Insira seu e-mail para receber mais informações:</span>
    <div class="emailInputContainer">
        <input type="email" id="emailInput">
        <button class="botaoEnviar">Enviar</button>
    </div>`;
}