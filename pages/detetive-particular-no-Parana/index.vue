<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Detetive particular no Paraná
        </h2>
        <p class="fw-600 mt-4">
          Você está procurando um Detetive Particular no <b>Paraná</b>?
          A ACIP DETETIVES PROFISSIONAIS está no <b>Paraná</b> e teremos
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
          <div class="bl-temas mr-2 my-1" /> Encontre um detetive particular na sua cidade
        </h4>
      </div>
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades A -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Adrianopolis">
                <i class="fa fa-circle fs-12 mr-2" /> Adrianópolis - PR
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AgudosDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Agudos do Sul - PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Antonina">
                <i class="fa fa-circle fs-12 mr-2" /> Antonina - PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Araucaria">
                <i class="fa fa-circle fs-12 mr-2" /> Araucária - PR
              </a>
            </div>
          </div>
          <!-- Cidades B -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                B
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalsaNova">
              <i class="fa fa-circle fs-12 mr-2" /> Balsa Nova - PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BocaiuvaDoSul">
              <i class="fa fa-circle fs-12 mr-2" /> Bocaiuva do Sul - PR
            </a>
          </div>
          <!-- Cidades C -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampoDoTenente">
                <i class="fa fa-circle fs-12 mr-2" /> Campo do Tenente – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampoLargo">
                <i class="fa fa-circle fs-12 mr-2" /> Campo Largo – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cascavel">
                <i class="fa fa-circle fs-12 mr-2" /> Cascavel – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampinaGrandeDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Campina Grande do Sul – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampoMagro">
                <i class="fa fa-circle fs-12 mr-2" /> Campo Magro – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CerroAzul">
                <i class="fa fa-circle fs-12 mr-2" /> Cerro Azul – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Contenda">
                <i class="fa fa-circle fs-12 mr-2" /> Contenda – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Curitiba">
                <i class="fa fa-circle fs-12 mr-2" /> Curitiba – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Colombo">
                <i class="fa fa-circle fs-12 mr-2" /> Colombo – PR
              </a>
            </div>
          </div>
          <!-- Cidades D -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                D
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg mt-4 px-0">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DoutorUlysses">
                <i class="fa fa-circle fs-12 mr-2" /> Doutor Ulysses – PR
              </a>
            </div>
          </div>
          <!-- Cidades F -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                F
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="FozDoIguacu">
              <i class="fa fa-circle fs-12 mr-2" /> Foz do Iguaçu – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="FazendaRioGrande">
              <i class="fa fa-circle fs-12 mr-2" /> Fazenda Rio Grande – PR
            </a>
          </div>
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                G
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Guaraquecaba">
              <i class="fa fa-circle fs-12 mr-2" /> Guaraqueçaba – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Guaratuba">
              <i class="fa fa-circle fs-12 mr-2" /> Guaratuba – PR
            </a>
          </div>
          <!-- Cidades I -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                I
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itaperucu">
              <i class="fa fa-circle fs-12 mr-2" /> Itaperuçu – PR
            </a>
          </div>
          <!-- Cidades L -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                L
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex mt-4 col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lapa">
              <i class="fa fa-circle fs-12 mr-2" /> Lapa – PR
            </a>
            <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Londrina">
              <i class="fa fa-circle fs-12 mr-2" /> Londrina – PR
            </a>
          </div>
          <!-- Cidades M -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Mandirituba">
                <i class="fa fa-circle fs-12 mr-2" /> Mandirituba – PR
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Matinhos">
                <i class="fa fa-circle fs-12 mr-2" /> Matinhos – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Maringa">
                <i class="fa fa-circle fs-12 mr-2" /> Maringá – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Morretes">
                <i class="fa fa-circle fs-12 mr-2" /> Morretes – PR
              </a>
            </div>
          </div>
          <!-- Cidades P -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Pinhais">
                <i class="fa fa-circle fs-12 mr-2" /> Pinhais – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Piraquara">
                <i class="fa fa-circle fs-12 mr-2" /> Piraquara – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PontalDoParana">
                <i class="fa fa-circle fs-12 mr-2" /> Pontal do Paraná – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PontaGrossa">
                <i class="fa fa-circle fs-12 mr-2" /> Ponta Grossa – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Paranagua">
                <i class="fa fa-circle fs-12 mr-2" /> Paranaguá – PR
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Piên">
                <i class="fa fa-circle fs-12 mr-2" /> Piên – PR
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PatoBranco">
                <i class="fa fa-circle fs-12 mr-2" /> Pato Branco – PR
              </a>
            </div>
          </div>
          <!-- Cidades Q -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                Q
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Quitandinha">
              <i class="fa fa-circle fs-12 mr-2" /> Quitandinha – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="QuatroBarras">
              <i class="fa fa-circle fs-12 mr-2" /> Quatro Barras – PR
            </a>
          </div>
          <!-- Cidades R -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                R
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioBrancoDoSul">
              <i class="fa fa-circle fs-12 mr-2" /> Rio Branco do Sul – PR
            </a>
          </div>
          <!-- Cidades S -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                S
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoseDosPinhais">
              <i class="fa fa-circle fs-12 mr-2" /> São José dos Pinhais – PR
            </a>
          </div>
          <!-- Cidades T -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                T
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TijucasDoSul">
              <i class="fa fa-circle fs-12 mr-2" /> Tijucas do Sul – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TunasDoParana">
              <i class="fa fa-circle fs-12 mr-2" /> Tunas do Paraná – PR
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Toledo">
              <i class="fa fa-circle fs-12 mr-2" /> Toledo – PR
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
  components: {
    BtnDarkLigueAgora,
    BtnDarkFaleNoWhatsapp
  },
  layout: 'LayoutPadrao',
  head: {
    title: 'Detetive particular no Paraná | Balneário Camboriú | Joinville | Florianópolis | Curitiba | Tubarão | Rio do Sul'
  },
  methods: {
    Adrianopolis () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Adrianopolis-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AgudosDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Agudos-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Antonina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Antonina-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Araucaria () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Araucaria-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalsaNova () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Balsa-Nova-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BocaiuvaDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Bocaiuva-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampoDoTenente () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-do-Tenente-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampoLargo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Largo-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cascavel () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cascavel-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampinaGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campina-Grande-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampoMagro () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Campo-Magro-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CerroAzul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Cerro-Azul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Contenda () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Contenda-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Curitiba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Curitiba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Colombo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Colombo-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DoutorUlysses () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Doutor-Ulysses-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    FozDoIguacu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Foz-do-Iguacu-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    FazendaRioGrande () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Fazenda-Rio-Grande-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guaraquecaba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaraquecaba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guaratuba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Guaratuba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itaperucu () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Itaperucu-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lapa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Lapa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Londrina () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Londrina-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Mandirituba () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Mandirituba-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Matinhos () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Matinhos-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Maringa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Maringa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Morretes () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Morretes-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Pinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pinhais-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Piraquara () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Piraquara-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PontalDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pontal-do-Parana-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PontaGrossa () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Ponta-Grossa-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Paranagua () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Paranagua-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Piên () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pien-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PatoBranco () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Pato-Branco-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Quitandinha () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quitandinha-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    QuatroBarras () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Quatro-Barras-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioBrancoDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Rio-Branco-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoseDosPinhais () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Sao-Jose-dos-Pinhais-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TijucasDoSul () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tijucas-do-Sul-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TunasDoParana () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Tunas-do-Parana-PR#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Toledo () {
      this.$router.push('/detetive-particular-no-Parana/detetive-particular-em-Toledo-PR#sobre')
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
