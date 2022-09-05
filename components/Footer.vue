<template>
  <div>
    <footer class="pt-50 pb-30 mt-100 bg-amarelo">
      <div class="container d-flex row mx-auto">
        <div class="col-lg-4 d-flex justify-content-center row mx-auto px-xs-0 px-sm-0">
          <div>
            <h6 class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Nossos serviços
            </h6>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-3 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação empresarial
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-3 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação empresarial
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação conjugal
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Investigação conjugal
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Localização de pessoas
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Localização de pessoas
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoCurso')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Curso de Detective particular
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoCurso')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Curso de Detective particular
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoAcompanhamento')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Acompanhamento de filho
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoAcompanhamento')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Acompanhamento de filho
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -30}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoSoftwareEspiao')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Telemóvel VIP
            </a>
            <a v-smooth-scroll="{duration: 500, offset: -100}" href="#servicos" class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="$root.$emit('EmitShowServicoSoftwareEspiao')">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Telemóvel VIP
            </a>
            <a class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="PoliticaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Política de privacidade
            </a>
            <a class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="Politica">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Política de privacidade
            </a>
            <a class="col-12 no-underline fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="TrabalheMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Trabalhe conosco
            </a>
            <a class="col-12 no-underline fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start fs-17 px-0" @click.prevent="Trabalhe">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Trabalhe conosco
            </a>
          </div>
        </div>
        <div class="col-lg-4 mt-xs-50 mt-sm-50 d-flex justify-content-center row mx-auto mt-lg-0 px-0">
          <div>
            <h6 class="d-flex justify-content-xs-center justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Localidades
            </h6>
            <a class="col-12 fw-600 mt-3 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="AveiroMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Aveiro
            </a>
            <a class="col-12 fw-600 mt-3 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Aveiro">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Aveiro
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="BragaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Braga
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Braga">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Braga
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="EvoraMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Évora
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Evora">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Évora
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="FaroMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Faro
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Faro">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Faro
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="LeiriaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Leiria
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Leiria">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Leiria
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="LisboaMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Lisboa
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Lisboa">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Lisboa
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="PortoMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Porto
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Porto">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Porto
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SantaremMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Santarém
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Santarem">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Santarém
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-flex d-sm-flex d-xl-none align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="SetubalMobile">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Setúbal
            </a>
            <a class="col-12 fw-600 mt-2 d-xs-none d-sm-none d-xl-flex align-items-center cursor-pointer justify-content-xs-center justify-content-sm-center justify-content-lg-start no-underline fs-17 px-0" @click.prevent="Setubal">
              <i class="fa fa-angle-right fw-400 mr-2 fs-18" /> Detective em Setúbal
            </a>
          </div>
        </div>
        <div class="col-lg-4 mt-xs-50 mt-sm-50 mt-lg-0 px-0 col-xl-4">
          <div id="icons-cartoes" class="d-flex col-12 pl-2 justify-content-xs-center justify-content-sm-center justify-content-lg-start pr-0 row mx-auto">
            <h6 class="d-flex justify-content-xs-center mb-3 justify-content-sm-center justify-content-lg-start col-12 px-0 fw-700 mb-0">
              <div class="bl-temas mr-2" /> Aceitamos
            </h6>
            <i class="fab mr-2 fa-cc-paypal fs-60" />
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pix.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-elo.png" class="img-fluid" alt="">
              </div>
            </div>
            <i class="fab mr-2 fa-cc-diners-club fs-60" />
            <i class="fab mr-2 fa-cc-amex fs-60" />
            <i class="fab mr-2 fa-cc-visa fs-60" />
            <i class="fab fa-cc-mastercard fs-60" />
            <div class="icon-card ml-7-px d-flex justify-content-center align-items-center mr-2">
              <div class="px-1">
                <img src="../assets/img/icons/icon-hiper.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-wu.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-money-gram.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-1">
                <img src="../assets/img/icons/icon-pag.png" class="img-fluid" alt="">
              </div>
            </div>
            <div class="icon-card d-flex justify-content-center mr-7-px align-items-center">
              <div class="px-2">
                <img src="../assets/img/icons/icon-mercado-pago.png" class="img-fluid" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 px-0 d-flex justify-content-center row mx-auto mt-70">
          <div class="col-lg-10 col-xl-9 px-0 text-center fw-500 fs-15">
            A Acip Detectives Profissionais é uma empresa que preza e respeita a privacidade e confidencialidade do
            cliente. Constituída de acordo com a lei federal <a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13432.htm" target="_blank" rel="noopener noreferrer">13.432/2017</a>
          </div>
        </div>
        <div class="col-12 px-0 d-flex justify-content-between row mx-auto mt-60">
          <div class="col-lg-6 px-0 text-xs-center fs-15 fw-600 text-sm-center text-lg-left">
            &copy; 2021 - Acip Detectives Profissionais - Todos os direitos reservados
          </div>
          <div class="col-lg-6 mt-xs-4 mt-sm-4 mt-lg-0 fw-600 px-0 text-xs-center text-sm-center fs-15 text-lg-right">
            <a href="https://portfoliogabrieldev.000webhostapp.com/" class="no-underline d-flex align-items-center justify-content-xs-center justify-content-sm-center justify-content-lg-end" target="_blank">
              Desenvolvido por Gabriel Camurça <i class="fab fs-24 fw-300 ml-1 fa-vuejs" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  methods: {
    // Chamadas cidades desktop
    Politica () {
      this.$router.push('/politica-de-privacidade/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Trabalhe () {
      this.$router.push('/trabalhe-conosco/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Aveiro () {
      this.$router.push('/detective-privado-em-Aveiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Braga () {
      this.$router.push('/detective-privado-em-Braga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Evora () {
      this.$router.push('/detective-privado-em-Evora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Faro () {
      this.$router.push('/detective-privado-em-Faro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Leiria () {
      this.$router.push('/detective-privado-em-Leiria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lisboa () {
      this.$router.push('/detective-privado-em-Lisboa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Porto () {
      this.$router.push('/detective-privado-em-Porto')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Santarem () {
      this.$router.push('/detective-privado-em-Santarem')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Setubal () {
      this.$router.push('/detective-privado-em-Setubal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    // Chamada cidades mobile
    PoliticaMobile () {
      this.$router.push('/politica-de-privacidade/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    TrabalheMobile () {
      this.$router.push('/trabalhe-conosco/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    AveiroMobile () {
      this.$router.push('/detective-privado-em-Aveiro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    BragaMobile () {
      this.$router.push('/detective-privado-em-Braga')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    EvoraMobile () {
      this.$router.push('/detective-privado-em-Evora')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    FaroMobile () {
      this.$router.push('/detective-privado-em-Faro')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LeiriaMobile () {
      this.$router.push('/detective-privado-em-Leiria')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    LisboaMobile () {
      this.$router.push('/detective-privado-em-Lisboa')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    PortoMobile () {
      this.$router.push('/detective-privado-em-Porto')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SantaremMobile () {
      this.$router.push('/detective-privado-em-Santarem')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    },
    SetubalMobile () {
      this.$router.push('/detective-privado-em-Setubal')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
    }
  }
}
</script>
<style scoped>
  footer a {
    color: #23303dc9;
  }
  .bl-temas {
    border-left: 4px solid var(--dark);
  }
  footer a:hover {
    color: #14181d;
  }

  #icons-cartoes i {
    color: #23303dc9;
  }

  #icons-cartoes i:hover {
    color: #14181d;
  }

  .icon-card {
    width: 67.5px;
    height: 53px;
    background-color: #23303dc9;
    margin-top: 3px;
    border-radius: 6px;
  }

  .icon-card:hover {
    background-color: #14181d;
  }

  .ml-7-px {
    margin-left: 7px;
  }

  .mr-7-px {
    margin-right: 7.5px;
  }

  a#botao-suspenso-whatsapp {
    position: fixed;
    bottom: 25px;
    right: 25px;
    height: 55px;
    width: 55px;
    border-radius: 50%;
    background-color: rgba(52, 175, 35, 1);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    z-index: 30 !important;
  }

  a#botao-suspenso-whatsapp:hover {
    text-decoration: none;
    background-color: rgba(40, 143, 26, 1);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  a#botao-suspenso-whatsapp i {
    font-size: 30px;
    color: #ffffff;
  }
</style>
