<template>
  <div>
    <div id="home" class="height-100-vh min-height-600">
      <b-carousel id="carousel-2" fade indicators :interval="10000" class="col-12 h-100 px-0">
        <b-carousel-slide>
          <div class="h-100 bg-slide-1 d-flex justify-content-center align-items-center col-12 px-xs-0">
            <div class="container overflow-hidden d-flex row mx-auto mt-xs-60 mt-sm-70 mt-lg-80 mt-xl-110">
              <div class="col-lg-7 col-xl-6 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white fs-xs-32">
                  Investigação empresarial e contra inteligência
                </h1>
                <p class="mb-0 text-white">
                  Nosso trabalho de investigação empresarial é completo e extremamente detalhista, inclui
                  investigação de funcionários,
                  localização de objetos não identificados, contrainteligência e outros serviços.
                </p>
              </div>
              <div class="col-lg-5 mt-xs-20 mt-sm-30 mt-lg-0 animate__animated animate__fadeInRight px-0 d-flex row mx-auto justify-content-xs-start justify-content-sm-start justify-content-lg-center align-items-center">
                <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn d-xs-flex d-sm-flex py-xs-2 d-xl-none btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
                  Investigação empresarial <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
                <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn d-xs-none d-sm-none d-xl-flex btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
                  Investigação empresarial <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-slide-3 d-flex justify-content-center align-items-center col-12 px-xs-0">
            <div class="container overflow-hidden d-flex row mx-auto mt-xs-60 mt-sm-70 mt-lg-80 mt-xl-110">
              <div class="col-lg-6 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white fs-xs-32">
                  Infidelidade conjugal
                </h1>
                <p class="mb-0 text-white">
                  De uma forma discreta e profissional investigamos o alvo e fornecemos
                  provas legalmente aceitas (imagens, vídeos, documentos e outras provas).
                </p>
              </div>
              <div class="col-lg-6 mt-xs-20 mt-sm-30 mt-lg-0 animate__animated animate__fadeInRight px-0 d-flex row mx-auto justify-content-xs-start justify-content-sm-start justify-content-lg-center align-items-center">
                <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn d-xs-flex py-xs-2 d-sm-flex d-xl-none btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
                  Investigação conjugal <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
                <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn d-xs-none d-sm-none d-xl-flex btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
                  Investigação conjugal <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide>
          <div class="h-100 bg-slide-2 d-flex justify-content-center align-items-center col-12 px-xs-0">
            <div class="container overflow-hidden d-flex row mx-auto mt-xs-60 mt-sm-70 mt-lg-80 mt-xl-110">
              <div class="col-lg-6 animate__animated animate__fadeInLeft px-0">
                <h1 class="text-white fs-xs-32">
                  Localização de pessoas desaparecidas
                </h1>
                <p class="mb-0 text-white">
                  Localizamos pessoas desaparecidas por quaisquer que sejam os motivos em todo Portugal.
                  Tudo será apurado e apresentado a você juntamente com um relatório. Entregaremos
                  tudo em suas mãos!
                </p>
              </div>
              <div class="col-lg-6 mt-xs-20 mt-sm-30 mt-lg-0 animate__animated animate__fadeInRight px-0 d-flex row mx-auto justify-content-xs-start justify-content-sm-start justify-content-lg-center align-items-center">
                <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn d-xs-flex py-xs-2 d-sm-flex d-xl-none btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
                  Localização de pessoas <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
                <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn d-xs-none d-sm-none d-xl-flex btn-amarelo align-items-center fw-500 px-20" @click.prevent="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
                  Localização de pessoas <i class="fa fs-14 ml-2 fw-400 fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import {
  CarouselPlugin
} from '../node_modules/bootstrap-vue/src/components/carousel'
Vue.use(CarouselPlugin)
export default {}
</script>
<style lang="css" scoped>
  .bg-slide-1 {
    background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/fraude.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/fraude.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/fraude.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/fraude.webp) center center no-repeat;
    background-size: cover;
  }

  .bg-slide-2 {
    background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/rastreamento.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/rastreamento.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/rastreamento.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/rastreamento.webp) center center no-repeat;
    background-size: cover;
  }

  .bg-slide-3 {
    background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/adulterio.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/adulterio.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/adulterio.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000c7, #000000ad), url(../assets/img/adulterio.webp) center center no-repeat;
    background-size: cover;
  }
</style>
