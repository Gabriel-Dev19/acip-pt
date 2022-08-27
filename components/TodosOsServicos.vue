<template>
  <div class="mt-xs-30 mt-sm-50">
    <div class="d-flex row mx-auto">
      <div class="col-lg-4 px-0 shadow d-flex height-div-servicos position-relative bg-investigacao-empresarial-servicos">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Investigação empresarial
          </h5>
          <p class="fs-15 text-white">
            Investigamos desvio de conduta de funcionários, vazamento de
            informações, desvios financeiros e muito mais.
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
              Investigação empresarial <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Investigação empresarial
            </h4>
            <p class="fs-15 fw-500 mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg my-xs-3 my-sm-3 my-lg-0 mx-lg-3 px-0 shadow d-flex height-div-servicos position-relative bg-investigacao-conjugal-servicos">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Investigação conjugal
          </h5>
          <p class="fs-15 text-white">
            Está com dúvidas quanto ao seu relacionamento? Nós iremos te ajudar a saber
            toda a verdade. Contrate agora mesmo!
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
              Investigação conjugal <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Investigação conjugal
            </h4>
            <p class="fs-15 fw-500 mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 pb-3 shadow d-flex align-items-end height-div-servicos bg-amarelo">
        <div>
          <h5 class="mb-0 fs-19 fw-600">
            Confie em quem tem mais de 20 anos de experiência em todos os tipos de
            investigações
          </h5>
          <div class="d-flex">
            <btn-dark-whatsapp class="mt-3" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex row mx-auto mt-3">
      <div class="col-lg mr-lg-3 px-0 shadow d-flex height-div-servicos position-relative bg-localizacao-de-pessoas">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Localização de pessoas
          </h5>
          <p class="fs-15 text-white">
            Procurar por um ente querido desaparecido, ou até mesmo um devedor é algo que pode
            gerar muita angústia. Queremos te ajudar, entre em contato agora mesmo!
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
              Localização de pessoas <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Localização de pessoas
            </h4>
            <p class="fs-15 fw-500 mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 pb-3 my-xs-3 my-sm-3 my-lg-0 shadow d-flex align-items-end height-div-servicos bg-amarelo">
        <div>
          <h5 class="mb-0 fs-19 fw-600">
            Ligue para nós e faça uma consulta sobre seu caso.
          </h5>
          <div class="d-flex">
            <btn-dark-ligue-agora class="mt-3" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 ml-lg-3 px-0 shadow d-flex height-div-servicos position-relative bg-curso">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Curso de detetive particular
          </h5>
          <p class="fs-15 text-white">
            A Acip Detetives Profissionais agora possui um curso onde preparamos os alunos
            detetives para o mercado de trabalho.
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoCurso')">
              Curso de detetive <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Curso de detetive
            </h4>
            <p class="fs-15 fw-500 mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoCurso')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex row mx-auto mt-3">
      <div class="col-lg mr-lg-3 px-0 shadow d-flex height-div-servicos position-relative bg-acompanhamento">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Acompanhamento de filho
          </h5>
          <p class="fs-15 text-white">
            Quando os filhos estão na fase da adolescência, as coisas são bem mais difíceis
            para os pais, por isso nós da ACIP Detetives estamos a disposição para ajudar.
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoAcompanhamento')">
              Acompanhamento de filho <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Acompanhamento de filho
            </h4>
            <p class="fs-15 fw-500 col-lg-10 mx-auto mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoAcompanhamento')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg px-0 mt-xs-3 mt-sm-3 mt-lg-0 shadow d-flex height-div-servicos position-relative bg-celular-espiao">
        <div class="px-3 align-self-end ">
          <h5 class="text-white d-flex mb-1">
            <div class="bl-temas mr-2 my-1" /> Celular VIP
          </h5>
          <p class="fs-15 text-white">
            Nosso programa de Celular VIP tem diversas funcionalidades, monitora mensagens de redes sociais,
            apresenta a localização do alvo em tempo real,
            fornece acesso a câmera do aparelho onde você terá acesso a imagens e áudio em tempo real, entre outras.
          </p>
          <div class="d-flex">
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="btn mb-3 fw-500 py-xs-2 d-xs-flex d-sm-flex d-md-none align-items-center btn-amarelo" @click="$root.$emit('EmitShowServicoSoftwareEspiao')">
              Celular VIP <i class="fa fs-14 fw-300 ml-2 fa-arrow-right" />
            </a>
          </div>
        </div>
        <div class="col-12 details-servicos d-xs-none d-sm-none d-md-flex align-items-center h-100">
          <div class="col-12 px-0">
            <h4 class="text-center">
              Celular VIP
            </h4>
            <p class="fs-15 fw-500 col-lg-10 mx-auto mt-3 text-center">
              Clique aqui e tenha mais informações sobre nossos serviços.
            </p>
            <div class="d-flex mt-20 justify-content-center">
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="btn px-20 d-flex align-items-center btn-dark fw-500" @click="$root.$emit('EmitShowServicoSoftwareEspiao')">
                Saiba mais <i class="fa fa-arrow-right fs-14 ml-2 fw-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnDarkLigueAgora from './buttons/btn-dark-ligue-agora.vue'
import btnDarkWhatsapp from './buttons/btn-dark-whatsapp.vue'
export default {
  components: {
    btnDarkWhatsapp,
    BtnDarkLigueAgora
  }
}
</script>
<style scoped>
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
  .height-div-servicos {
    height: 230px;
  }
  .height-div-servicos:hover {
    background-size: 115%;
  }
  .height-div-servicos:hover .details-servicos {
    opacity: 1;
  }
  .height-div-servicos p {
    line-height: 18px;
  }
  .details-servicos {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--amarelo);
    opacity: 0;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-investigacao-empresarial-servicos {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/fraude.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/fraude.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/fraude.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/fraude.webp) center center no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-investigacao-conjugal-servicos {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/adulterio.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/adulterio.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/adulterio.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/adulterio.webp) center center no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-curso {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/livro-curso.webp) center right no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/livro-curso.webp) center right no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/livro-curso.webp) center right no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/livro-curso.webp) center right no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-localizacao-de-pessoas {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/localizacao-de-pessoas.webp) center center no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-celular-espiao {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/celular-espiao.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/celular-espiao.webp) center center no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
  .bg-acompanhamento {
    background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/acompanhamento.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/acompanhamento.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/acompanhamento.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000d9, #0000006d), url(../assets/img/acompanhamento.webp) center center no-repeat;
    background-size: 105%;
    transition: all .5s;
    -o-transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
  }
</style>
