<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Detective privado em Lisboa
        </h2>
        <p class="fw-600 mt-4">
          Você está procurando um Detective Privado em <b>Lisboa</b>?
          A ACIP DETECTIVES PROFISSIONAIS está em <b>Lisboa</b> e teremos
          o prazer em ajudar você a solucionar suas dúvidas. Com mais de 20 anos de experiência e centenas de casos
          resolvidos, atuamos em todo o território nacional e países do Mercosul. Atuamos nos mais complexos casos
          de investigações conjugais, empresariais, localização de pessoas, acompanhamento de filhos envolvidos com más
          companhias, entre outros. Nossos serviços são executados de forma rápida, discreta e tudo dentro do mais absoluto
          sigilo, ajustados de acordo com a necessidade de cada caso e cliente. O grande sucesso que o nosso grupo vem obtendo
          é em função de um trabalho altamente profissional.
        </p>
        <p class="fw-600">
          Seja qual for o problema que você esteja enfrentando na sua vida pessoal ou nos seus negócios, somos capazes
          de fornecer uma solução rápida e eficaz, não importa o tipo e complexidade do seu caso ou mesmo o lugar
          em que você esteja.
        </p>
        <h4 class="d-flex py-0 mt-40">
          <div class="bl-temas mr-2 my-1" /> Encontre um detective privado na sua cidade
        </h4>
      </div>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                A
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Alcobaca">
              <i class="fa fa-circle fs-12 mr-2" /> Alcobaça
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Alenquer">
              <i class="fa fa-circle fs-12 mr-2" /> Alenquer
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Almada">
              <i class="fa fa-circle fs-12 mr-2" /> Almada
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Amadora">
              <i class="fa fa-circle fs-12 mr-2" /> Amadora
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                B
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Barreiro">
              <i class="fa fa-circle fs-12 mr-2" /> Barreiro
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cascaes">
              <i class="fa fa-circle fs-12 mr-2" /> Cascaes
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                L
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lisboa">
              <i class="fa fa-circle fs-12 mr-2" /> Lisboa
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Loures">
              <i class="fa fa-circle fs-12 mr-2" /> Loures
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Mafra">
              <i class="fa fa-circle fs-12 mr-2" /> Mafra
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Moita">
              <i class="fa fa-circle fs-12 mr-2" /> Moita
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Montijo">
              <i class="fa fa-circle fs-12 mr-2" /> Montijo
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                O
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Odivelas">
              <i class="fa fa-circle fs-12 mr-2" /> Odivelas
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Oeiras">
              <i class="fa fa-circle fs-12 mr-2" /> Oeiras
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Palmela">
              <i class="fa fa-circle fs-12 mr-2" /> Palmela
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                S
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Santarem">
              <i class="fa fa-circle fs-12 mr-2" /> Santarém
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sesimbra">
              <i class="fa fa-circle fs-12 mr-2" /> Sesimbra
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Setubal">
              <i class="fa fa-circle fs-12 mr-2" /> Setúbal
            </a>
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sintra">
              <i class="fa fa-circle fs-12 mr-2" /> Sintra
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                T
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TorresVedras">
              <i class="fa fa-circle fs-12 mr-2" /> Torres Vedras
            </a>
          </div>
        </div>
      </section>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-10 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                V
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VilaFrancaDeXira">
              <i class="fa fa-circle fs-12 mr-2" /> Vila Franca de Xira
            </a>
          </div>
        </div>
      </section>
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
            Telemóvel VIP
          </h6>
        </div>
      </div>
      <div class="col-12 px-xs-0 mt-50">
        <h4 class="text-center fs-xs-20 px-xs-0 col-xl-10 mx-auto fw-600">
          Não perca tempo! Fale com a gente agora mesmo através dos nossos canais de atendimento.
          <span class="d-xs-none">Confie na Acip Detectives para resolver seu problema!</span>
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
  components: {
    BtnDarkLigueAgora,
    BtnDarkFaleNoWhatsapp
  },
  layout: 'LayoutPadrao',
  head: {
    title: 'Detective privado em Lisboa | Balneário Camboriú | Joinville | Florianópolis | Curitiba | Tubarão | Rio do Sul'
  },
  methods: {
    Alcobaca () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Alcobaca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Alenquer () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Alenquer#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Almada () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Almada#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Amadora () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Amadora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Barreiro () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Barreiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cascaes () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Cascaes#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lisboa () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Loures () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Loures#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Mafra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Mafra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Moita () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Moita#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Montijo () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Montijo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Odivelas () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Odivelas#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Oeiras () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Oeiras#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Palmela () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Palmela#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Santarem () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sesimbra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Sesimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Setubal () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sintra () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Sintra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TorresVedras () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Torres-Vedras#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VilaFrancaDeXira () {
      this.$router.push('/detective-privado-em-Lisboa/detective-privado-em-Vila-Franca-de-Xira#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .bl-temas {
    border-left: 4px solid #2c3e50;
  }
  .div-bolinha-sobre {
    height: 93px;
    width: 93px;
    border-radius: 50%;
    background-color: var(--black_dark);
  }
  .fa-file-invoice {
    margin-left: 3px !important;
  }
</style>
