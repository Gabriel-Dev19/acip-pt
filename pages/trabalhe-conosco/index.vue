<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Trabalhe conosco
        </h2>
        <p class="fw-600 mt-4">
          Aos nossos alunos do nosso curso de detetive particular, oferecemos preferências nas oportunidades de trabalho.
          Após a aprovação no curso e emissão do seu certificado você poderá fazer parte da nossa equipe de trabalho.
        </p>
        <p class="fw-600">
          Você que já trabalha como detetive particular em qualquer cidade do Brasil e deseja se tornar um prestador de
          serviços para nossa agência faça contato pelo e-mail: acipdetetives@gmail.com
        </p>
        <h2 class="d-flex mt-30 py-0">
          <div class="bl-temas mr-10 my-1" /> Requisitos
        </h2>
        <p class="fw-600 mt-4">
          - Ser idôneo;
        </p>
        <p class="fw-600">
          - Ser habilitado carro/moto;
        </p>
        <p class="fw-600">
          - Possuir veículo em boas condições de uso;
        </p>
        <p class="fw-600">
          - Ter habilidades para se sair de qualquer situação;
        </p>
        <p class="fw-600">
          - Ser ágil;
        </p>
        <p class="fw-600">
          - Ter disponibilidade de viajar;
        </p>
        <h2 class="d-flex mt-30 py-0">
          <div class="bl-temas mr-10 my-1" /> Vantagens
        </h2>
        <p class="fw-600 mt-4">
          - Ampliar consideravelmente o seu volume de negócios na região;
        </p>
        <p class="fw-600">
          -  Ter acesso a informações privilegiadas e técnicas de investigações avançadas;
        </p>
        <p class="fw-600">
          -  Ter ampla divulgação na internet e mídias sociais locais;
        </p>
        <p class="fw-600">
          - Treinamento desde o atendimento ao cliente até a confecção de relatórios.
        </p>
        <h2 class="d-flex mt-30 py-0">
          <div class="bl-temas mr-10 my-1" /> Porquê a ACIP Detetives?
        </h2>
        <p class="fw-600 mt-4">
          Atuamos à mais de 20 anos no mercado de Investigação Particular, atuando com sucesso
          em todas as tarefas que recebemos, possuímos a melhor equipe de profissionais do mercado,
          com experiência em diversas funções e segmentos.
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
import BtnDarkFaleNoWhatsapp from '../../components/buttons/btn-dark-fale-no-whatsapp.vue'
import BtnDarkLigueAgora from '../../components/buttons/btn-dark-ligue-agora.vue'
export default {
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
