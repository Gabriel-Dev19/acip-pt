<template>
  <div>
    <div class="container py-xs-40 py-sm-40 py-lg-70 px-lg-40 px-xl-50 d-flex row mx-auto bg-servico">
      <div class="col-lg-7 px-0">
        <h3 class="d-flex text-white">
          <div class="bl-temas mr-2 my-1" /> Para que serve a investigação conjugal
        </h3>
        <p class="text-white mb-0">
          Com certeza é muito difícil chegar até aqui a procura da verdade sobre seu cônjuge,
          sabemos o quanto pode ser difícil duvidar de quem amamos. Mas se você chegou até aqui para
          procurar respostas com certeza existe um motivo, e queremos te ajudar a descobrir a verdade,
          seja ela qual for. Nossa investigação conjugal é detalhada e apoiada por provas 100% aceitas
          legalmente, nos infiltramos de formas discretas no dia a dia da pessoa investigada e coletamos
          todas as informações do que ela está fazendo quando não está com você.
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
        <div class="bl-temas mr-2" /> Como funciona a investigação conjugal
      </h4>
      <p class="fw-500 mt-20">
        Atuando a mais de 20 anos no ramo de investigação privado, garantimos uma
        equipa especializada para elucidar todas as suas dúvidas, acompanharemos
        o dia a dia do alvo e todas as informações coletadas serão passadas para
        você de forma rápida e tudo dentro do mais absoluto sigilo.
      </p>
      <p class="fw-500">
        Você está com dúvidas quanto ao seu relacionamento? As desculpas que seu(a)
        parceiro(a) está lhe dando já não fazem mais sentido? Acabe com essa preocupação
        hoje mesmo! Nós da ACIP Detectives Profissionais estamos prontos para poder ajudar
        você. Entre em contacto conosco, e tire todas as suas dúvidas.
      </p>
      <p class="fw-500">
        A dúvida pode gerar danos emocionais irreparáveis para a sua vida,
        não perca mais tempo, <a href="tel:+5541995190579">ligue agora mesmo.</a>
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
    background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/adulterio.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/adulterio.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/adulterio.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/adulterio.webp) center center no-repeat;
    background-size: cover;
  }
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
</style>
