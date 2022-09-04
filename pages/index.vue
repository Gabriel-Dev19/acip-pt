<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Sobre nós
        </h2>
        <p class="fw-600 mt-4">
          A ACIP DETETIVES PROFISSIONAIS é uma agencia de detetives particulares que nasceu da união de 15 profissionais
          da área de investigação, profissionais estes altamente capacitados e experientes para prestar um serviço
          de qualidade, seja na esfera pessoal ou empresarial.
        </p>
        <p class="fw-600">
          Com mais de 20 anos de experiência e centenas de casos resolvidos, atuamos em todo o território nacional
          e países do Mercosul. Nossos serviços são executados de forma rápida, discreta e tudo dentro do mais absoluto
          sigilo, ajustados de acordo com a necessidade de cada caso e cliente. O grande sucesso que o nosso grupo vem
          obtendo é em função de um trabalho altamente profissional.
        </p>
        <p class="fw-600">
          A ACIP DETETIVES PROFISSIONAIS tem novo conceito de investigação particular e empresarial com qualidade
          e preços justos, proporcionando a você maior credibilidade em nosso trabalho.
        </p>
        <p class="fw-600">
          Devido ao grande número de consultas, desenvolvemos um serviço personalizado de atendimento aos nossos clientes.
          Mantendo-se 24 horas, equipes especializada e pronta para a realização de todos os serviços confiados a nossa agência.
        </p>
        <p class="fw-600">
          Seja qual for o problema que você esteja enfrentando na sua vida pessoal ou nos seus negócios, somos capazes
          de fornecer uma solução rápida e eficaz, não importa o tipo e complexidade do seu caso ou mesmo o lugar
          em que você esteja.
        </p>
      </div>
      <div class="col-12 mt-50 px-0 d-flex row mx-auto">
        <div class="col-xs-6 col-sm-6 col-lg">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-headset text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center mt-3 fs-17 px-lg-30 fw-600">
            Atendimento personalizado
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-user-secret text-amarelo fs-50" />
            </div>
          </div>
          <h6 class="text-center mt-3 fs-17 fw-600">
            Discrição <span class="d-xs-none">total</span> na investigação
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg mt-xs-40 mt-sm-40 mt-lg-0">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-file-invoice text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center col-sm-11 px-0 mx-auto mt-3 fs-17 fw-600">
            Relatório <span class="d-xs-none">completo</span> de provas
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg mt-xs-40 mt-sm-40 mt-lg-0 px-xs-0">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-mobile text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center col-sm-11 px-xs-0 mx-auto mt-3 fs-17 fw-600">
            Celular VIP
          </h6>
        </div>
      </div>
      <div class="col-12 px-xs-0 mt-50">
        <h4 class="text-center fs-xs-20 px-xs-0 col-xl-10 mx-auto fw-600">
          Não perca tempo! Fale com a gente agora mesmo através dos nossos canais de atendimento.
          <span class="d-xs-none">Confie na Acip Detetives para resolver seu problema!</span>
        </h4>
        <div class="d-flex mt-30 justify-content-center row mx-auto">
          <BtnDarkLigueAgora class="col-xs-12 px-xs-0" />
          <BtnDarkFaleNoWhatsapp class="ml-sm-3 mt-xs-10 col-xs-12 px-xs-0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnDarkFaleNoWhatsapp from '../components/buttons/btn-dark-fale-no-whatsapp.vue'
import BtnDarkLigueAgora from '../components/buttons/btn-dark-ligue-agora.vue'
export default {
  head: {
    link: [
      { rel: 'alternate', href: 'https://www.acipdetetives.com.br/', hreflang: 'x-default' },
      { rel: 'alternate', href: 'https://www.acipdetetives.com.br/', hreflang: 'pt-br' },
      { rel: 'alternate', href: 'https://www.acipdetectives.pt/', hreflang: 'pt' }
    ]
  },
  components: { BtnDarkLigueAgora, BtnDarkFaleNoWhatsapp },
  layout: 'LayoutPadrao'
}
</script>

<style lang="css" scoped>
  .bl-temas {
    border-left: 4px solid #2c3e50;
  }
  .div-bolinha-sobre{
    height: 93px;
    width: 93px;
    border-radius: 50%;
    background-color: var(--black_dark);
  }
  .fa-file-invoice{
    margin-left: 3px !important;
  }
</style>
