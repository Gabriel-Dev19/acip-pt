<template>
  <div>
    <div class="container py-xs-40 py-sm-40 py-lg-70 px-lg-40 px-xl-50 d-flex row mx-auto bg-servico">
      <div class="col-lg-7 px-0">
        <h3 class="d-flex text-white">
          <div class="bl-temas mr-2 my-1" /> Para que serve a localização de pessoas desaparecidas
        </h3>
        <p class="text-white mb-0">
          A Acip Detectives Profissionais fornece o mais completo serviço de localização de pessoas desaparecidas
          do Brasil. Depois de encontrar o alvo, fornecemos a pessoa que solicitou a investigação
          um dossiê completo contendo todas as informações do investigado como morada,
          local de trabalho, relacionamentos, círculo de amizades, atividades que a pessoa costuma
          fazer, dentre outras informações pessoais sobre o investigado.
        </p>
      </div>
      <div class="col-lg-5 px-0 mt-xs-30 mt-sm-30 mt-lg-0 d-flex align-items-center row mx-auto justify-content-lg-center">
        <div>
          <BtnAmareloFaleNoWhatsapp />
          <BtnAmareloLigueAgora class="mt-10" />
        </div>
      </div>
    </div>
    <div class="container mt-40 px-0">
      <h4 class="d-flex fw-500">
        <div class="bl-temas mr-2" /> Localização completa e detalhada!
      </h4>
      <p class="fw-500 mt-20">
        Procurar por alguém que está desaparecido há um certo tempo ou mesmo que de uma hora
        para hora sumiu sem deixar nenhum rastro é certamente muito angustiante, principalmente
        quando se trata de um ente querido. Nosso trabalho é baseado primeiramente no respeito
        a dor que o cliente vem passando, analisamos cada caso isoladamente, para entendermos
        todo o contexto da situação e assim montamos uma estratégia para a <b>localização da pessoa</b>.
      </p>
      <p class="fw-500">
        Para que o caso possua um final feliz, o cliente precisará trabalhar em conjunto com os detectives,
        fornecendo pistas, documentos que ajudem na <b>localização da pessoa</b>. Trabalhamos sempre com o objetivo
        de encontrar em até 24 horas a pessoa, pois como dizem: As primeiras 48 horas são muito
        importantes para se ter sucesso.
      </p>
      <p class="fw-500">
        A ACIP DETECTIVES PROFISSIONAIS conta com detectives especializados e capacitados para ajudar
        você na busca do seu ente querido. Não deixe para amanhã, entre em contacto conosco hoje mesmo,
        que iremos lhe ajudar!
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
    background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/localizacao-de-pessoas.webp) bottom center no-repeat;
    -o-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/localizacao-de-pessoas.webp) bottom center no-repeat;
    -moz-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/localizacao-de-pessoas.webp) bottom center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/localizacao-de-pessoas.webp) bottom center no-repeat;
    background-size: cover;
  }
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
</style>
