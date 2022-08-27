<template>
  <div>
    <div class="container py-xs-40 py-sm-40 py-lg-70 px-lg-40 px-xl-50 d-flex row mx-auto bg-servico">
      <div class="col-lg-7 px-0">
        <h3 class="d-flex text-white">
          <div class="bl-temas mr-2 my-1" /> Para que serve a investigação empresarial
        </h3>
        <p class="text-white mb-0">
          Faremos uma averiguação completa para saber se sua empresa está sendo monitorada por objetos não
          identificados, ou até mesmo por pessoas infiltradas a mando de terceiros, investigamos todas as
          movimentações da empresa para descobrir possíveis funcionários infiéis, dentre outros métodos
          que usamos para proporcionar um ambiente de trabalho mais tranquilo para você!
        </p>
      </div>
      <div class="col-lg-5 mt-xs-30 mt-sm-30 mt-lg-0 px-0 d-flex align-items-center row mx-auto justify-content-lg-center">
        <div>
          <BtnAmareloFaleNoWhatsapp />
          <BtnAmareloLigueAgora class="mt-10" />
        </div>
      </div>
    </div>
    <div class="container mt-40 px-0">
      <h4 class="d-flex fw-500">
        <div class="bl-temas mr-2" /> Proteja sua empresa!
      </h4>
      <p class="fw-500 mt-20">
        A investigação empresarial é um serviço prestado pelo detetive particular, e tem por objetivo
        investigar possíveis irregularidades no ambiente de trabalho de uma empresa, ou até mesmo
        uma comportamento desleal por parte de seu sócio ou representante. Além disso, a investigação
        empresarial também pode ser solicitada quando um gestor desconfia de má conduta por parte da
        concorrência, interferindo diretamente na saúde financeira do negócio.
      </p>
      <p class="fw-500">
        Nosso método de investigação empresarial, é definido junto com nosso cliente, desta forma iremos
        encontrar um plano de ação adequado para cada caso. Todo o trabalho será apurado dentro do mais
        absoluto sigilo, com o objetivo de sanar as dúvidas do nosso contratante.
      </p>
      <h4 class="d-flex mt-30 fw-500">
        <div class="bl-temas mr-2" /> Investigação de funcionários:
      </h4>
      <p class="fw-500 mt-20">
        Todos sabem que os empresários gerenciam seu negócio com base na confiança em seus funcionários,
        tanto no que diz respeito à sua capacidade profissional quanto à sua integridade e lealdade perante
        a empresa. Entretanto, muitas vezes ocorre algumas mudanças no comportamento de um(s) funcionário(s)
        podem levantar suspeitas, fazendo com que seja necessário investigar o caso mais afundo. É neste momento
        que entra em cena a investigação empresarial.
      </p>
      <p class="fw-500">
        A investigação de funcionários é realizada sempre com o objetivo de buscar provas de uma eventual
        fraude ocorrida, para que possa haver o desligamento do(s) empregado(s) envolvido(s)s, com justa causa,
        sempre que possível, tentando minimizar mais gastos e perdas para a sua empresa.
      </p>
      <p class="fw-500">
        Agende uma reunião conosco e conheça nossas técnicas de trabalho,
        certamente alguma delas vai se enquadrar no seu caso, e iremos lhe ajudar.
      </p>
      <h4 class="d-flex mt-30 fw-500">
        <div class="bl-temas mr-2" /> Investigação de executivos:
      </h4>
      <p class="mt-20 fw-500">
        Muitas vezes ao iniciar um negócio, o empreendedor busca “forças” para que sejam somadas
        com as suas e assim dar início a uma grande parceria. Na grande maioria das vezes, um sócio
        tem conhecimento técnico enquanto o outro é melhor na parte de gestão da organização. Não importa
        o porquê, a relação de uma sociedade empresarial deve ser pautada na confiança.
      </p>
      <p class="fw-500">
        Porém o que ocorre algumas vezes, é que aquela pessoa que você depositou a confiança de certa
        forma passa a lhe trair, ou seja, quem deveria ser um parceiro no crescimento do negócio acaba
        se tornando uma concorrente, cometendo desvios, captação irregular de clientes, furto de objetos,
        revela o segredo da empresa a terceiros
        visando benefício próprio, tudo de forma a causar prejuízo, ou até mesmo, levar a companhia à falência.
      </p>
      <p class="fw-500">
        Nós podemos ajudar você contra este tipo de “parceiro”, <a href="tel:+5541995190579">agende uma reunião conosco</a> que iremos lhe ajudar.
      </p>
      <h4 class="d-flex mt-30 fw-500">
        <div class="bl-temas mr-2" /> Contrainteligência empresarial:
      </h4>
      <p class="mt-20 fw-500">
        A <b>contrainteligência empresarial</b>, ocorre quando há desconfiança por parte do empresário,
        de que empresas concorrentes, funcionários ou sócios estão monitorando sua empresa para obter
        informações sigilosas, que venham a prejudicar os seus negócios.
      </p>
      <p class="fw-500">
        A <b>contraespionagem</b> serve para qualquer empresa, seja no desenvolvimento de um novo projeto
        ou na manutenção de algum segredo ou fórmula secreta. Nosso trabalho é realizado através de uma
        busca por objetos que possam de alguma forma passar as informações confidenciais da sua empresa
        para terceiros, uma vez localizado iremos desativar o objeto logo em seguida.
      </p>
      <p class="fw-500">
        Por isso, qualquer projeto novo que estiver sendo desenvolvido por sua empresa deve ter o máximo
        de sigilo e privacidade, evitando assim que a concorrência desleal se aproveite e o roube. Isso
        se chama contrainteligência, ou seja, é um serviço que busca eliminar das empresas qualquer
        tipo de objeto indesejado, para impedir o vazamento de informações confidenciais da sua empresa.
      </p>
      <p class="fw-500">
        Nossos detetives são devidamente qualificados para poder ajudar você e sua empresa,
        não perca tempo, consulte-nos hoje mesmo.
      </p>
    </div>
  </div>
</template>
<script>
import BtnAmareloFaleNoWhatsapp from '../buttons/btn-amarelo-fale-no-whatsapp'
import BtnAmareloLigueAgora from '../buttons/btn-amarelo-ligue-agora'
export default {
  components: {
    BtnAmareloFaleNoWhatsapp,
    BtnAmareloLigueAgora
  }
}
</script>
<style scoped>
  .bg-servico{
    background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/fraude.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/fraude.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/fraude.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/fraude.webp) center center no-repeat;
    background-size: cover;
  }
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
</style>
