<template>
  <div>
    <header>
      <nav class="nav navbar fixed-top bg-light shadow-sm d-xl-none">
        <div class="container">
          <a href="">
            <img src="../assets/img/logo-acip.webp" width="80" alt="Logo">
          </a>
          <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <div v-show="Shownav" id="nav-offset" @click="HideNav" />
          </transition>
          <button class="btn pr-0" @click="ShowNav">
            <i class="fa fa-bars text-amarelo fs-34 fw-300" />
          </button>
          <transition enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutRight">
            <div v-show="Shownav" id="nav-event" class="pb-50">
              <div class="d-flex mt-50 justify-content-center">
                <div>
                  <img src="../assets/img/logo-acip.webp" width="120" alt="">
                </div>
              </div>
              <div class="d-flex row mx-auto mt-40 justify-content-center">
                <div class="col-12 pl-30">
                  <a v-smooth-scroll="{duration: 500, offset: -120}" href="#home" class="btn px-0 text-right fw-500 fs-19" @click="HideNav">
                    Home
                  </a>
                  <div @mouseenter="ShowServicosMobile = true" @mouseleave="ShowServicosMobile = false">
                    <button class="btn px-0 d-flex align-items-center my-2 col-12 left fw-500 fs-19">
                      Serviços <i class="fa fa-angle-down text-amarelo ml-2 mt-1 fw-400 fs-20" />
                    </button>
                    <SlideUpDown :active="ShowServicosMobile" class="col-12 px-0" :duration="500">
                      <div class="col-12 bl-amarela ml-2 pl-2 pr-0">
                        <button class="text-dark btn text-left pt-0 pb-1 col-12 px-0 fw-500" @click.prevent="ShowServicoMobileInvestigacaoEmpresarial">
                          Investigação empresarial
                        </button>
                        <button class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="ShowServicoMobileInvestigacaoConjugal">
                          Investigação conjugal
                        </button>
                        <button class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="ShowServicoMobileCurso">
                          Rastreamento
                        </button>
                        <button class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="ShowServicoMobileLocalizacaoDePessoas">
                          Localização de pessoas
                        </button>
                        <button class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="ShowServicoMobileSoftwareEspiao">
                          Software espião
                        </button>
                      </div>
                    </SlideUpDown>
                  </div>
                  <a href="#servicos" :class="{'mt-10': ShowServicosMobile}" class="btn px-0 text-right fw-500 fs-19" @click.prevent="ShowTodosServicosMobile">
                    Todos os serviços
                  </a>
                  <div @mouseenter="ShowLocalidadesMobile = true" @mouseleave="ShowLocalidadesMobile = false">
                    <button class="btn px-0 d-flex align-items-center my-2 col-12 text-right fw-500 fs-19">
                      Localidades <i class="fa fa-angle-down text-amarelo ml-2 mt-1 fw-400 fs-20" />
                    </button>
                    <SlideUpDown :active="ShowLocalidadesMobile" class="col-12 px-0" :duration="500">
                      <div class="col-12 bl-amarela ml-2 pl-2 pr-0">
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="AveiroMobile">
                          Aveiro
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="BragaMobile">
                          Braga
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="BragancaMobile">
                          Bragança
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="CasteloBrancoMobile">
                          Castelo Branco
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="CoimbraMobile">
                          Coimbra
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="EvoraMobile">
                          Évora
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="FaroMobile">
                          Faro
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="GuardaMobile">
                          Guarda
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="LeiriaMobile">
                          Leiria
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="LisboaMobile">
                          Lisboa
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="PortalegreMobile">
                          Portalegre
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="PortoMobile">
                          Porto
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="SantaremMobile">
                          Santarém
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="SetubalMobile">
                          Setúbal
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="VianaDoCasteloMobile">
                          Viana do Castelo
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="VilaRealMobile">
                          Vila Real
                        </a>
                        <a class="text-dark btn text-left py-1 col-12 px-0 fw-500" @click.prevent="ViseuMobile">
                          Viseu
                        </a>
                      </div>
                    </SlideUpDown>
                  </div>
                  <a v-smooth-scroll="{duration: 500, offset: -30}" href="#contato" :class="{'mt-10': ShowLocalidadesMobile}" class="btn px-0 text-right fw-500 fs-19" @click="HideNav">
                    Contato
                  </a>
                </div>
                <a href="https://wa.me/554195190579?text=Olá,+estou+visitando+o+site+da+Acip+Detetives+e+gostaria+de+receber+mais+informações" class="col-10 mx-auto btn text-white d-flex fw-500 justify-content-center align-items-center mt-35 border-radius-20 px-25 btn-whatsapp-navbar">
                  <i class="fab fa-whatsapp fw-300 fs-18 mr-2" /> WhatsApp
                </a>
                <div class="col-12 mt-70 mx-auto px-1 align-self-end justify-content-center d-flex row mx-auto">
                  <a href="https://www.facebook.com/ACIP-Detetive-Particular-105042491799720" class="col px-0">
                    <div class="col px-0 height-40 bg-facebook d-flex justify-content-center align-items-center">
                      <i class="fab fa-facebook text-white fs-22" />
                    </div>
                  </a>
                  <a href="https://twitter.com/AcipDetetives" class="col px-0">
                    <div class="col px-0 height-40 bg-twitter d-flex justify-content-center align-items-center">
                      <i class="fab fa-twitter text-white fs-22" />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCQBWKfw3DmDokMBLF6croTA" class="col px-0">
                    <div class="col px-0 height-40 bg-youtube d-flex justify-content-center align-items-center">
                      <i class="fab fa-youtube text-white fs-22" />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/acipdetetives/" class="col px-0">
                    <div class="col px-0 height-40 bg-instagram d-flex justify-content-center align-items-center">
                      <i class="fab fa-instagram text-white fs-22" />
                    </div>
                  </a>
                  <a href="https://www.pinterest.com/acipdetetiveparticular/_created/" class="col px-0">
                    <div class="col px-0 height-40 bg-pinterest d-flex justify-content-center align-items-center">
                      <i class="fab fa-pinterest text-white fs-22" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </nav>
      <nav class="navbar fixed-top nav d-xs-none d-sm-none d-xl-flex bg-light shadow-sm py-10">
        <div class="container d-flex justify-content-between">
          <a href="">
            <img src="../assets/img/logo-acip.webp" width="120" alt="">
          </a>
          <div class="px-0 d-flex align-items-center">
            <div class="d-flex mr-50">
              <a v-smooth-scroll="{duration: 500, offset: -30}" href="#home" class="nav-link py-1 rounded">
                Home
              </a>
              <a class="nav-link py-1 mx-20 cursor-pointer rounded" @click="ShowTodosServicos">
                Todos os serviços
              </a>
              <div class="nav-link cursor-pointer position-relative py-1 d-flex align-items-center rounded" @mouseenter="ShowDropdownLocalidades = true" @mouseleave="ShowDropdownLocalidades = false">
                Localidades <i class="fa fa-angle-down ml-2" />
                <transition enter-active-class="animate__animated animate__fadeIn">
                  <div v-show="ShowDropdownLocalidades" class="dropdown-localidades px-10 pt-20 pb-10 shadow" style="overflow: auto; height: 450px;">
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Aveiro">
                      Aveiro
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Braga">
                      Braga
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Braganca">
                      Bragança
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="CasteloBranco">
                      Castelo Branco
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Coimbra">
                      Coimbra
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Evora">
                      Évora
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Faro">
                      Faro
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Guarda">
                      Guarda
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Leiria">
                      Leiria
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Lisboa">
                      Lisboa
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Portalegre">
                      Portalegre
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Porto">
                      Porto
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Santarem">
                      Santarém
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Setubal">
                      Setúbal
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="VianaDoCastelo">
                      Viana do Castelo
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="VilaReal">
                      Vila Real
                    </a>
                    <a class="btn btn-outline-dark fw-600 shadow-sm py-1 col-12" @click.prevent="Viseu">
                      Viseu
                    </a>
                  </div>
                </transition>
              </div>
              <a v-smooth-scroll="{duration: 500, offset: -100}" href="#contato" class="nav-link py-1 ml-20 rounded">
                Contato
              </a>
            </div>
            <div class="width-busca px-0 position-relative d-flex align-items-center">
              <input
                v-model="ConteudoBusca"
                type="text"
                class="form-control border-radius-20 fs-15 pl-20"
                :class="{'error': errorBusca}"
                :placeholder="PlaceholderBusca"
                @focus="ShownDropdownServicos"
                @blur="HideDropdownServicos"
                @keyup.enter="Busca"
              >
              <button class="no-underline px-0 ml-2 btn" @click.prevent="Busca">
                <div class="btn-busca d-flex justify-content-center align-items-center">
                  <i class="fa fa-search" />
                </div>
              </button>
              <div v-show="ShowDropdownServicos" class="dropdown-servicos col-12 px-2 pt-10 pb-2 bg-light border border-radius-5 shadow">
                <h6 class="px-2 mb-10">
                  Buscas pré-definidas:
                </h6>
                <button class="btn btn-dropdown-servicos fs-15 border-radius-0 col-12 py-1 fw-500" @click="InvestigacaoConjugal">
                  Investigação conjugal
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="InvestigacaoEmpresarial">
                  Investigação empresarial
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="Curso">
                  Curso de detetive
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="LocalizacaoDePessoas">
                  Localização de pessoas
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="SoftwareEspiao">
                  Celular VIP
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="Adulterio">
                  Adultério
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="AcompanhamentoDeFilho">
                  Acompanhamento de filho
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="AdolescentesRebeldes">
                  Adolescentes rebeldes
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="ContraInteligencia">
                  Contra inteligência
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="Traicao">
                  Traição
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="EspionagemIndustrial">
                  Espionagem industrial
                </button>
                <button class="btn btn-dropdown-servicos mt-2 fs-15 border-radius-0 col-12 py-1 fw-500" @click="InvestigacaoDeFuncionario">
                  Investigação de funcionário
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <b-modal
        id="erro-busca"
        hide-header
        hide-footer
        centered
      >
        <div class="border-radius-15 pb-30 bg-danger">
          <div class="d-flex justify-content-end">
            <button class="btn pb-0" @click="$bvModal.hide('erro-busca')">
              <i class="fa fa-times fs-25 fw-400 text-white" />
            </button>
          </div>
          <div class="d-flex justify-content-center">
            <i class="far fa-times-circle fs-60 text-white" />
          </div>
          <h4 class="text-white mt-10 text-center">
            Busca não encontrada
          </h4>
          <p class="text-white px-30 mb-0 text-center">
            Lamentamos, mas não encontramos sua busca, verifique se digitou corretamente,
            ou busque por uma das opções pré-definidas na barra de navegação.
          </p>
        </div>
      </b-modal>
    </header>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import SlideUpDown from '../node_modules/vue-slide-up-down'
import { BootstrapVue } from '../node_modules/bootstrap-vue'
Vue.use(BootstrapVue)
Vue.component('SlideUpDown', SlideUpDown)
export default {
  data () {
    return {
      ShowDropdownLocalidades: false,
      PlaceholderBusca: 'Buscar Serviços...',
      errorBusca: false,
      ConteudoBusca: '',
      ShowDropdownServicos: false,
      Shownav: false,
      ShowServicosMobile: false,
      ShowLocalidadesMobile: false,
      BuscarInvestigacao: [
        'Investigação',
        'investigação',
        'Investigacao',
        'investigacao',
        'In',
        'in',
        'Inv',
        'inv',
        'Inve',
        'inve',
        'Inves',
        'inves',
        'Invest',
        'invest',
        'Investi',
        'investi',
        'Investig',
        'investig',
        'Investiga',
        'investiga',
        'Investigaç',
        'investigaç',
        'Investigac',
        'investigac',
        'Investigaçã',
        'investigaçã',
        'Investigacã',
        'investigacã',
        'Investigaca',
        'investigaca',
        'Investigacão'
      ],
      BuscarEspiaoGeral: [
        'Espionagem',
        'Espionage',
        'Espionag',
        'Espiona',
        'Espion',
        'Espio',
        'Espi',
        'Esp',
        'Es',
        'espionagem',
        'espionage',
        'espionag',
        'espiona',
        'espion',
        'espio',
        'espi',
        'esp',
        'es',
        'Espião',
        'Espiã',
        'Espi',
        'Esp',
        'Es',
        'espião',
        'espiã',
        'espi',
        'esp',
        'es'
      ],
      BuscarEmpresarial: [
        'Investigação empresarial',
        'Investigação empresaria',
        'Investigação empresari',
        'Investigação empresar',
        'Investigação empresa',
        'Investigação empres',
        'Investigação empre',
        'Investigação empr',
        'Investigação emp',
        'Investigação em',
        'Investigação e',
        'investigação empresarial',
        'investigação empresaria',
        'investigação empresari',
        'investigação empresar',
        'investigação empresa',
        'investigação empres',
        'investigação empre',
        'investigação empr',
        'investigação emp',
        'investigação em',
        'investigação e',
        'Empresa',
        'Empres',
        'Empre',
        'Empr',
        'Emp',
        'Em',
        'empresa',
        'empres',
        'empre',
        'empr',
        'emp',
        'em',
        'Investigação de funcionário',
        'Investigação de funcionári',
        'Investigação de funcionár',
        'Investigação de funcioná',
        'Investigação de funcion',
        'Investigação de funcio',
        'Investigação de funci',
        'Investigação de func',
        'Investigação de fun',
        'Investigação de fu',
        'Investigação de f',
        'Investigação de',
        'Investigação d',
        'Contra inteligência empresaria',
        'Contra inteligência empresari',
        'Contra inteligência empresar',
        'Contra inteligência empresa',
        'Contra inteligência empres',
        'Contra inteligência empre',
        'Contra inteligência empr',
        'Contra inteligência emp',
        'Contra inteligência em',
        'Contra inteligência e',
        'Contra inteligência',
        'Contra inteligênci',
        'Contra inteligênc',
        'Contra inteligên',
        'Contra inteligê',
        'Contra intelig',
        'Contra inteli',
        'Contra intel',
        'Contra inte',
        'Contra int',
        'Contra in',
        'Contra i',
        'Contra',
        'Contr',
        'Cont',
        'Con',
        'Co',
        'contra inteligência empresaria',
        'contra inteligência empresari',
        'contra inteligência empresar',
        'contra inteligência empresa',
        'contra inteligência empres',
        'contra inteligência empre',
        'contra inteligência empr',
        'contra inteligência emp',
        'contra inteligência em',
        'contra inteligência e',
        'contra inteligência',
        'contra inteligênci',
        'contra inteligênc',
        'contra inteligên',
        'contra inteligê',
        'contra intelig',
        'contra inteli',
        'contra intel',
        'contra inte',
        'contra int',
        'contra in',
        'contra i',
        'contra',
        'contr',
        'cont',
        'con',
        'co',
        'Espionagem industrial',
        'Espionagem industria',
        'Espionagem industri',
        'Espionagem industr',
        'Espionagem indust',
        'Espionagem indus',
        'Espionagem indu',
        'Espionagem ind',
        'Espionagem in',
        'Espionagem i',
        'espionagem industrial',
        'espionagem industria',
        'espionagem industri',
        'espionagem industr',
        'espionagem indust',
        'espionagem indus',
        'espionagem indu',
        'espionagem ind',
        'espionagem in',
        'espionagem i'
      ],
      BuscarConjugal: [
        'Investigação con',
        'investigação con',
        'Investigacão con',
        'investigacão con',
        'Investigacao con',
        'investigacao con',
        'Investigação conj',
        'investigação conj',
        'Investigacão conj',
        'investigacão conj',
        'Investigacao conj',
        'investigacao conj',
        'Investigação conju',
        'investigação conju',
        'Investigacão conju',
        'investigacão conju',
        'Investigacao conju',
        'investigacao conju',
        'Investigação conjug',
        'investigação conjug',
        'Investigacão conjug',
        'investigacão conjug',
        'Investigacao conjug',
        'investigacao conjug',
        'Investigação conjuga',
        'investigação conjuga',
        'Investigacão conjuga',
        'investigacão conjuga',
        'Investigacao conjuga',
        'investigacao conjuga',
        'Investigação conjugal',
        'investigação conjugal',
        'Investigacão conjugal',
        'investigacão conjugal',
        'Investigacao conjugal',
        'Traição',
        'Traiçao',
        'Traicão',
        'Traicao',
        'Traiça',
        'Traicã',
        'Traica',
        'Traiç',
        'Traic',
        'Trai',
        'Tra',
        'Tr',
        'traição',
        'traiçao',
        'traicão',
        'traicao',
        'traiça',
        'traicã',
        'traica',
        'traiç',
        'traic',
        'trai',
        'tra',
        'tr',
        'Adultério',
        'Adulterio',
        'adultério',
        'adulterio'
      ],
      BuscarCurso: [
        'Curso de detetive',
        'Curso de detetiv',
        'Curso de deteti',
        'Curso de detet',
        'Curso de dete',
        'Curso de det',
        'Curso de de',
        'Curso de d',
        'Curso de ',
        'Curso de',
        'Curso d',
        'Curso',
        'Curs',
        'Cur',
        'Cu',
        'Apostila de detetive',
        'Apostila de detetiv',
        'Apostila de deteti',
        'Apostila de detet',
        'Apostila de dete',
        'Apostila de det',
        'Apostila de de',
        'Apostila de d',
        'Apostila de',
        'Apostila d',
        'Apostila',
        'Apostil',
        'Apost',
        'Apos',
        'Apo',
        'Ap'
      ],
      BuscarAcompanhamento: [
        'Acompanhamento de filho',
        'Acompanhamento de filh',
        'Acompanhamento de fil',
        'Acompanhamento de fi',
        'Acompanhamento de f',
        'Acompanhamento de',
        'Acompanhamento d',
        'Acompanhamento',
        'Acompanhamento',
        'Acompanhament',
        'Acompanhamen',
        'Acompanhame',
        'Acompanham',
        'Acompanha',
        'Acompanh',
        'Acompan',
        'Acompa',
        'Acomp',
        'Acom',
        'Aco',
        'acompanhamento de filho',
        'acompanhamento de filh',
        'acompanhamento de fil',
        'acompanhamento de fi',
        'acompanhamento de f',
        'acompanhamento de',
        'acompanhamento d',
        'acompanhamento',
        'acompanhamento',
        'acompanhament',
        'acompanhamen',
        'acompanhame',
        'acompanham',
        'acompanha',
        'acompanh',
        'acompan',
        'acompa',
        'acomp',
        'acom',
        'aco',
        'Filho',
        'Filh',
        'Fil',
        'Fi',
        'filho',
        'filh',
        'fil',
        'fi',
        'Adolescente',
        'Adolescent',
        'Adolescen',
        'Adolescen',
        'Adolesce',
        'Adolesc',
        'Adoles',
        'Adole',
        'Adol',
        'Ado',
        'Ad',
        'adolescente',
        'adolescent',
        'adolescen',
        'adolescen',
        'adolesce',
        'adolesc',
        'adoles',
        'adole',
        'adol',
        'ado',
        'ad',
        'Drogas',
        'Droga',
        'Drog',
        'Dro',
        'Dr',
        'drogas',
        'droga',
        'drog',
        'dro',
        'dr',
        'Adolescentes rebeldes',
        'Adolescentes rebelde',
        'Adolescentes rebeld',
        'Adolescentes rebel',
        'Adolescentes rebe',
        'Adolescentes reb',
        'Adolescentes re',
        'Adolescentes r',
        'Adolescentes',
        'adolescentes rebeldes',
        'adolescentes rebelde',
        'adolescentes rebeld',
        'adolescentes rebel',
        'adolescentes rebe',
        'adolescentes reb',
        'adolescentes re',
        'adolescentes r',
        'adolescentes',
        'Rebeldia',
        'Rebeldi',
        'Rebeld',
        'Rebel',
        'Rebe',
        'Reb',
        'Re',
        'rebeldia',
        'rebeldi',
        'rebeld',
        'rebel',
        'rebe',
        'reb',
        're',
        'rebeldes',
        'rebelde',
        'Rebeldes',
        'Rebelde'
      ],
      BuscarLocalizacaoDePessoas: [
        'Localização de pessoas',
        'Localizaçao de pessoas',
        'Localizacão de pessoas',
        'Localizacao de pessoas',
        'Localização de pessoa',
        'Localizaçao de pessoa',
        'Localizacão de pessoa',
        'Localizacao de pessoa',
        'Localização de pesso',
        'Localizaçao de pesso',
        'Localizacão de pesso',
        'Localizacao de pesso',
        'Localização de pess',
        'Localizaçao de pess',
        'Localizacão de pess',
        'Localizacao de pess',
        'Localização de pes',
        'Localizaçao de pes',
        'Localizacão de pes',
        'Localizacao de pes',
        'Localização de pe',
        'Localizaçao de pe',
        'Localizacão de pe',
        'Localizacao de pe',
        'Localização de p',
        'Localizaçao de p',
        'Localizacão de p',
        'Localizacao de p',
        'localização de pessoas',
        'localizaçao de pessoas',
        'localizacão de pessoas',
        'localizacao de pessoas',
        'localização de pessoa',
        'localizaçao de pessoa',
        'localizacão de pessoa',
        'localizacao de pessoa',
        'localização de pesso',
        'localizaçao de pesso',
        'localizacão de pesso',
        'localizacao de pesso',
        'localização de pess',
        'localizaçao de pess',
        'localizacão de pess',
        'localizacao de pess',
        'localização de pes',
        'localizaçao de pes',
        'localizacão de pes',
        'localizacao de pes',
        'localização de pe',
        'localizaçao de pe',
        'localizacão de pe',
        'localizacao de pe',
        'localização de p',
        'localizaçao de p',
        'localizacão de p',
        'localizacao de p',
        'Localização de',
        'Localizaçao de',
        'Localizacão de',
        'Localizacao de',
        'Localização d',
        'Localizaçao d',
        'Localizacão d',
        'Localizacao d',
        'Localização',
        'Localizaçao',
        'Localizacão',
        'Localizacao',
        'Localizaçã',
        'Localizaça',
        'Localizacã',
        'Localizaca',
        'Localizac',
        'Localiza',
        'Localiz',
        'Locali',
        'Local',
        'Loca',
        'Loc',
        'Lo',
        'localização de',
        'localizaçao de',
        'localizacão de',
        'localizacao de',
        'localização d',
        'localizaçao d',
        'localizacão d',
        'localizacao d',
        'localização',
        'localizaçao',
        'localizacão',
        'localizacao',
        'localizaçã',
        'localizaça',
        'localizacã',
        'localizaca',
        'localizac',
        'localiza',
        'localiz',
        'locali',
        'local',
        'loca',
        'loc',
        'lo',
        'Encontrar',
        'Encontra',
        'Encontr',
        'Encont',
        'Encon',
        'Enco',
        'Enc',
        'En',
        'encontrar',
        'encontra',
        'encontr',
        'encont',
        'encon',
        'enco',
        'enc',
        'en',
        'Localizar',
        'Localiza',
        'Localiz',
        'Locali',
        'Local',
        'Loca',
        'Loc',
        'Lo',
        'localizar',
        'localiza',
        'localiz',
        'locali',
        'local',
        'loca',
        'loc',
        'lo'
      ],
      BuscarEspiaoCelular: [
        'Celular VIP',
        'Celular VI',
        'Celular V',
        'Celular',
        'Celula',
        'Celul',
        'Celu',
        'Cel',
        'Ce',
        'Software espião',
        'Software espiã',
        'Software espi',
        'Software esp',
        'Software es',
        'Software e',
        'Software',
        'Softwar',
        'Softwa',
        'Softw',
        'Soft',
        'Sof',
        'So',
        'software espião',
        'software espiã',
        'software espi',
        'software esp',
        'software es',
        'software e',
        'software',
        'softwar',
        'softwa',
        'softw',
        'soft',
        'sof',
        'so',
        'Espião de celula',
        'Espião de celul',
        'Espião de celu',
        'Espião de cel',
        'Espião de ce',
        'Espião de c',
        'Espião de',
        'Espião d',
        'espião de celula',
        'espião de celul',
        'espião de celu',
        'espião de cel',
        'espião de ce',
        'espião de c',
        'espião de',
        'espião d',
        'Celular espião',
        'Celular espiã',
        'Celular espi',
        'Celular esp',
        'Celular es',
        'Celular e',
        'Celular',
        'Celula',
        'Celul',
        'Celu',
        'Cel',
        'Ce',
        'celular espião',
        'celular espiã',
        'celular espi',
        'celular esp',
        'celular es',
        'celular e',
        'celular',
        'celula',
        'celul',
        'celu',
        'cel',
        'ce'
      ]
    }
  },
  methods: {
    // Chamada de configurção das buscas
    Busca () {
      this.VerificaCampoBuscaVazio()
      if (this.BuscarInvestigacao.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoInvestigacaoEmpresarial')
          this.$root.$emit('ShowArtigoInvestigacaoConjugal')
          this.$root.$emit('ShowArtigoLocalizacaoDePessoas')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarEspiaoGeral.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoInvestigacaoEmpresarial')
          this.$root.$emit('ShowArtigoSoftwareEspiao')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarCurso.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoCurso')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarEmpresarial.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoInvestigacaoEmpresarial')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarConjugal.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoInvestigacaoConjugal')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarAcompanhamento.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoAcompanhamento')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarLocalizacaoDePessoas.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoLocalizacaoDePessoas')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else if (this.BuscarEspiaoCelular.includes(this.ConteudoBusca)) {
        this.$root.$emit('MudancaTitleBuscasEncontradas')
        this.$root.$emit('HideArtigos')
        setTimeout(() => {
          this.$root.$emit('ShowArtigoSoftwareEspiao')
        }, 700)
        this.$smoothScroll({
          scrollTo: document.getElementById('servicos'),
          duration: 500,
          offset: -100
        })
      } else {
        this.$bvModal.show('erro-busca')
      }
    },
    // Desaparecimento e aparecimento do dropdown dos botões pré-definidos para as buscas
    HideDropdownServicos () {
      setTimeout(() => {
        this.ShowDropdownServicos = false
      }, 300)
    },
    ShownDropdownServicos () {
      this.ShowDropdownServicos = true
    },
    VerificaCampoBuscaVazio () {
      if (this.ConteudoBusca === '' || this.ConteudoBusca === ' ') {
        this.PlaceholderBusca = 'Campo vazio !!'
        this.errorBusca = true
      } else {
        this.PlaceholderBusca = 'Buscar Serviços...'
        this.errorBusca = false
      }
    },
    ShowNav () {
      this.Shownav = true
      document.body.classList.add('overflow-hidden')
    },
    HideNav () {
      this.Shownav = false
      document.body.classList.remove('overflow-hidden')
    },
    ShowTodosServicos () {
      this.$root.$emit('MudancaTitlePadrao')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -100
      })
    },
    // Chamada dos botões pré-definidos das buscas
    InvestigacaoConjugal () {
      this.ConteudoBusca = 'Investigação conjugal'
      this.VerificaCampoBuscaVazio()
    },
    InvestigacaoEmpresarial () {
      this.ConteudoBusca = 'Investigação empresarial'
      this.VerificaCampoBuscaVazio()
    },
    Curso () {
      this.ConteudoBusca = 'Curso de detetive'
      this.VerificaCampoBuscaVazio()
    },
    LocalizacaoDePessoas () {
      this.ConteudoBusca = 'Localização de pessoas'
      this.VerificaCampoBuscaVazio()
    },
    SoftwareEspiao () {
      this.ConteudoBusca = 'Celular VIP'
      this.VerificaCampoBuscaVazio()
    },
    Adulterio () {
      this.ConteudoBusca = 'Adultério'
      this.VerificaCampoBuscaVazio()
    },
    Traicao () {
      this.ConteudoBusca = 'Traição'
      this.VerificaCampoBuscaVazio()
    },
    EspionagemIndustrial () {
      this.ConteudoBusca = 'Espionagem industrial'
      this.VerificaCampoBuscaVazio()
    },
    AcompanhamentoDeFilho () {
      this.ConteudoBusca = 'Acompanhamento de filho'
      this.VerificaCampoBuscaVazio()
    },
    AdolescentesRebeldes () {
      this.ConteudoBusca = 'Adolescentes rebeldes'
      this.VerificaCampoBuscaVazio()
    },
    VarreduraDeEscutas () {
      this.ConteudoBusca = 'Varredura de escutas'
      this.VerificaCampoBuscaVazio()
    },
    ContraInteligencia () {
      this.ConteudoBusca = 'Contra inteligência'
      this.VerificaCampoBuscaVazio()
    },
    InvestigacaoDeFuncionario () {
      this.ConteudoBusca = 'Investigação de funcionário'
      this.VerificaCampoBuscaVazio()
    },
    // Chamada dos serviços para a barra de navegação mobile
    ShowTodosServicosMobile () {
      this.$root.$emit('MudancaTitlePadrao')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    ShowServicoMobileInvestigacaoEmpresarial () {
      this.$root.$emit('EmitShowServicoInvestigacaoEmpresarial')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    ShowServicoMobileInvestigacaoConjugal () {
      this.$root.$emit('EmitShowServicoInvestigacaoConjugal')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    ShowServicoMobileCurso () {
      this.$root.$emit('EmitShowServicoCurso')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    ShowServicoMobileLocalizacaoDePessoas () {
      this.$root.$emit('EmitShowServicoLocalizacaoDePessoas')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    ShowServicoMobileSoftwareEspiao () {
      this.$root.$emit('EmitShowServicoSoftwareEspiao')
      this.$smoothScroll({
        scrollTo: document.getElementById('servicos'),
        duration: 500,
        offset: -30
      })
      this.HideNav()
    },
    // Chamadas cidades desktop
    Aveiro () {
      this.$router.push('/detective-privado-em-Aveiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Braga () {
      this.$router.push('/detective-privado-em-Braga#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Braganca () {
      this.$router.push('/detective-privado-em-Braganca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CasteloBranco () {
      this.$router.push('/detective-privado-em-Castelo-Branco#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Coimbra () {
      this.$router.push('/detective-privado-em-Coimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Evora () {
      this.$router.push('/detective-privado-em-Evora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Faro () {
      this.$router.push('/detective-privado-em-Faro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guarda () {
      this.$router.push('/detective-privado-em-Guarda#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Leiria () {
      this.$router.push('/detective-privado-em-Leiria#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lisboa () {
      this.$router.push('/detective-privado-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Portalegre () {
      this.$router.push('/detective-privado-em-Portalegre#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Porto () {
      this.$router.push('/detective-privado-em-Porto#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Santarem () {
      this.$router.push('/detective-privado-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Setubal () {
      this.$router.push('/detective-privado-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VianaDoCastelo () {
      this.$router.push('/detective-privado-em-Viana-do-Castelo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VilaReal () {
      this.$router.push('/detective-privado-em-Vila-Real#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Viseu () {
      this.$router.push('/detective-privado-em-Viseu#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    // Chamada cidades mobile
    AveiroMobile () {
      this.$router.push('/detective-privado-em-Aveiro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    BragaMobile () {
      this.$router.push('/detective-privado-em-Braga#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    BragancaMobile () {
      this.$router.push('/detective-privado-em-Braganca#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    CasteloBrancoMobile () {
      this.$router.push('/detective-privado-em-Castelo-Branco#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    CoimbraMobile () {
      this.$router.push('/detective-privado-em-Coimbra#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    EvoraMobile () {
      this.$router.push('/detective-privado-em-Evora#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    FaroMobile () {
      this.$router.push('/detective-privado-em-Faro#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    GuardaMobile () {
      this.$router.push('/detective-privado-em-Guarda#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    LeiriaMobile () {
      this.$router.push('/detective-privado-em-Leiria#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    LisboaMobile () {
      this.$router.push('/detective-privado-em-Lisboa#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    PortalegreMobile () {
      this.$router.push('/detective-privado-em-Portalegre#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    PortoMobile () {
      this.$router.push('/detective-privado-em-Porto#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    SantaremMobile () {
      this.$router.push('/detective-privado-em-Santarem#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    SetubalMobile () {
      this.$router.push('/detective-privado-em-Setubal#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    VianaDoCasteloMobile () {
      this.$router.push('/detective-privado-em-Viana-do-Castelo#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    VilaRealMobile () {
      this.$router.push('/detective-privado-em-Vila-Real#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    },
    ViseuMobile () {
      this.$router.push('/detective-privado-em-Viseu#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -70
      })
      this.HideNav()
    }
  }
}
</script>
<style lang="css" scoped>
  .btn-busca {
    width: 36px !important;
    height: 36px !important;
    border-radius: 50%;
    background-color: var(--amarelo);
  }
  .animate__animated {
    animation-duration: .2s;
    -o-animation-duration: .2s;
    -moz-animation-duration: .2s;
    -webkit-animation-duration: .2s;

    animation-timing-function: ease-out;
    -o-animation-timing-function: ease-out;
    -moz-animation-timing-function: ease-out;
    -webkit-animation-timing-function: ease-out;
  }
  .width-busca {
    width: 270px;
  }
  .nav-link {
    color: #2c3e50;
    font-weight: 600;
    transition: all .2s ease-out;
  }
  .nav-link:hover {
    background-color: var(--amarelo);
  }
  input:focus {
    border-color: #fbc251ad;
    box-shadow: 0 0 0 0.15rem #fbc251a8;
  }
  ::placeholder {
    font-size: 15px;
  }
  .error::placeholder {
    color: var(--danger) !important;
  }
  .error {
    border-color: var(--danger) !important;
  }
  .error:focus {
    box-shadow: 0 0 0 0.15rem #dc354682 !important;
  }
  ::-moz-placeholder {
    font-size: 15px;
  }
  .dropdown-localidades {
    position: absolute;
    right: 0px;
    top: 29px;
    background-color: var(--amarelo);
    width: 250px;
    border-radius: 4px 0 4px 4px;
  }
  .dropdown-servicos {
    position: absolute;
    top: 50px;
    height: 350px;
    overflow-y: scroll;
  }
  .dropdown-servicos::-webkit-scrollbar {
    border-radius: 5px;
    width: 8px;
    background-color: #b3b3b3;
  }
  .dropdown-servicos::-webkit-scrollbar-thumb {
    background-color: #6d6d6d;
    border-radius: 5px;
    border: 2px solid #b3b3b3;
  }
  .btn-dropdown-servicos {
    background-color: #c7c7c7a8;
  }
  .btn-dropdown-servicos:hover {
    background-color: var(--amarelo);
  }
  #nav-offset {
    background-color: #000000d2;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 19;
  }
  #nav-event {
    background-color: var(--light);
    width: 310px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  #nav-event::-webkit-scrollbar {
    width: 0px !important;
  }
  .bl-amarela {
    border-left: 2px solid var(--amarelo);
  }
  .btn-whatsapp-navbar {
    background-color: var(--whatsapp);
  }
  .btn-whatsapp-navbar:hover {
    background-color: var(--whatsapp_hover);
  }
  .height-40 {
    height: 40px;
  }
</style>
