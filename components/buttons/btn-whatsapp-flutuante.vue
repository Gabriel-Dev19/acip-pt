<template>
  <div>
    <div id="div-botao-suspenso-whatsapp" :class="{'subir-whatsapp': SubirWhatsapp}">
      <button id="botao-suspenso-whatsapp" class=" shadow-lg d-flex btn justify-content-center d-block" @click.prevent="ShowDropdownWhatsapp = !ShowDropdownWhatsapp">
        <i class=" fab fa-whatsapp align-self-center" />
      </button>
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <div v-show="ShowDropdownWhatsapp" id="dropdown-whatsapp" class="bg-white rounded cursor-normal shadow-lg" @click.stop="">
          <div class="d-flex rounded overflow-hidden row h-100 mx-0">
            <div class="py-10 bg-amarelo align-self-start col-12 px-0">
              <div class="px-3">
                <h6 class="fw-500 mb-0">
                  Olá!
                </h6>
                <p class="line-height-p mt-1 fw-500 fs-12 mb-0">
                  Seja bem vindo a nossa central de atendimento!
                  Fale com um de nossos especialistas.
                </p>
              </div>
            </div>
            <div class="height-div-meio-whatsapp bg-light align-self-center d-flex justify-content-center col-12">
              <div>
                <a href="https://wa.me/5547988336355?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-20 border-bottom px-20 pb-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Norte de Santa Catarina</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(47) 98833-6355</p>
                  </div>
                </a>
                <a href="https://wa.me/5548999994986?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Sul de Santa Catarina</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(48) 99999-4986</p>
                  </div>
                </a>
                <a href="https://wa.me/5549991502878?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Serra Catarinense</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(49) 99150-2878</p>
                  </div>
                </a>
                <a href="https://wa.me/5541995190579?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Paraná</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(41) 99519-0579</p>
                  </div>
                </a>
                <a href="https://wa.me/5511973773244?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">São Paulo</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(11) 97377-3244</p>
                  </div>
                </a>
                <a href="https://wa.me/5551997946721?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Rio Grande do Sul</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(51) 99794-6721</p>
                  </div>
                </a>
                <a href="https://wa.me/5521999932082?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Rio de Janeiro</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(21) 99993-2082</p>
                  </div>
                </a>
                <a href="https://wa.me/5531998082674?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Minas Gerais</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(31) 99808-2674</p>
                  </div>
                </a>
                <a href="https://wa.me/5562999599493?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Goiás</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(62) 99959-9493</p>
                  </div>
                </a>
                <a href="https://wa.me/5567996182861?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex border-bottom px-20 pb-10 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Mato Grosso do Sul</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(67) 99618-2861</p>
                  </div>
                </a>
                <a href="https://wa.me/5561998300643?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex px-20 pb-20 mt-10 align-items-center no-underline" rel="noopener noreferrer">
                  <i class="fab fa-whatsapp-square text-success fs-42" />
                  <div class="col text-dark">
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">Distrito Federal</p>
                    <p class="fw-600 d-block fs-15 text-left mb-0 col-12 px-0">(61) 99830-0643</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="py-10 align-self-end border bg-white col-12 px-0">
              <p class="fw-600 text-center col-12 d-flex align-items-center justify-content-center fs-15 px-3 mb-0">
                <span class="fw-800 mr-1">Atenção: </span> atendimento 24h <i class="fa fa-circle ml-1 fs-12 text-success" />
              </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ShowDropdownWhatsapp: false,
      SubirWhatsapp: false
    }
  },
  created () {
    if (!this.getGDPR() === true) {
      this.SubirWhatsapp = true
    }

    this.$root.$on('DescerWhatsapp', () => {
      this.SubirWhatsapp = false
    })
  },
  methods: {
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    }
  }
}
</script>
<style lang="css" scoped>
    .animate__animated{
      animation-duration: .3s !important;
      -o-animation-duration: .3s !important;
      -moz-animation-duration: .3s !important;
      -webkit-animation-duration: .3s !important;
    }
  @media (min-width: 1px) {
    #div-botao-suspenso-whatsapp{
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 20;
    }
    #botao-suspenso-whatsapp {
      height: 50px;
      width: 50px;
      border-radius: 50% !important;
      background-color: #34af23;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      z-index: 30 !important;
      animation-name: AnimateWhatsapp;
      -o-animation-name: AnimateWhatsapp;
      -moz-animation-name: AnimateWhatsapp;
      -webkit-animation-name: AnimateWhatsapp;
      animation-duration: 5s;
      -o-animation-duration: 5s;
      -moz-animation-duration: 5s;
      -webkit-animation-duration: 5s;
      animation-iteration-count: infinite;
      -o-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
    }
    #dropdown-whatsapp{
      position: absolute;
      bottom: 70px;
      right: -10px;
      height: 450px;
      width: 340px;
    }
    .height-div-meio-whatsapp{
      height: 68.8%;
      overflow-y: scroll;
    }
    .subir-whatsapp{
      bottom: 220px !important;
      z-index: 1030 !important;
    }
  }

  @media (min-width: 576px) {
    #div-botao-suspenso-whatsapp{
      position: fixed;
      bottom: 40px;
      right: 40px;
      z-index: 20;
    }
    #botao-suspenso-whatsapp {
      height: 55px;
      width: 55px;
      border-radius: 50% !important;
      background-color: #34af23;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      -moz-transition: all 0.3s;
      transition: all 0.3s;
      z-index: 30 !important;
      animation-name: AnimateWhatsapp;
      -o-animation-name: AnimateWhatsapp;
      -moz-animation-name: AnimateWhatsapp;
      -webkit-animation-name: AnimateWhatsapp;
      animation-duration: 5s;
      -o-animation-duration: 5s;
      -moz-animation-duration: 5s;
      -webkit-animation-duration: 5s;
      animation-iteration-count: infinite;
      -o-animation-iteration-count: infinite;
      -moz-animation-iteration-count: infinite;
      -webkit-animation-iteration-count: infinite;
    }
    #dropdown-whatsapp{
      position: absolute;
      bottom: 70px;
      right: -10px;
      height: 450px;
      width: 380px;
    }
    .height-div-meio-whatsapp{
      height: 72.7%;
      overflow-y: scroll;
    }
    .subir-whatsapp{
      bottom: 180px !important;
      z-index: 1030 !important;
    }
  }
  @media (min-width: 768px) {
    .subir-whatsapp{
      bottom: 150px !important;
      z-index: 1030 !important;
    }
  }
  @media (min-width: 1200px) {
    .subir-whatsapp{
      bottom: 100px !important;
      z-index: 1030 !important;
    }
  }

  #botao-suspenso-whatsapp:hover {
    text-decoration: none;
    background-color: #288f1a;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
  }

  #botao-suspenso-whatsapp i {
    font-size: 30px;
    color: #ffffff;
  }

  @keyframes AnimateWhatsapp {
    60% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }

    75% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -o-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -moz-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -webkit-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
    }

    87% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    90% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    93% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    96% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    99% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    100% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }

  @-o-keyframes AnimateWhatsapp {
    60% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }

    75% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -o-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -moz-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -webkit-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
    }

    87% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    90% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    93% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    96% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    99% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    100% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }

  @-moz-keyframes AnimateWhatsapp {
    60% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }

    75% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -o-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -moz-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -webkit-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
    }

    87% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    90% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    93% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    96% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    99% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    100% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }

  @-webkit-keyframes AnimateWhatsapp {
    60% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }

    75% {
      transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -o-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -moz-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
      -webkit-transform: scale3d(1.2, 1.2, 1.2) rotate(20deg);
    }

    87% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    90% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    93% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    96% {
      transform: rotate(20deg);
      -o-transform: rotate(20deg);
      -moz-transform: rotate(20deg);
      -webkit-transform: rotate(20deg);
    }

    99% {
      transform: rotate(-20deg);
      -o-transform: rotate(-20deg);
      -moz-transform: rotate(-20deg);
      -webkit-transform: rotate(-20deg);
    }

    100% {
      transform: scale3d(1, 1, 1);
      -o-transform: scale3d(1, 1, 1);
      -moz-transform: scale3d(1, 1, 1);
      -webkit-transform: scale3d(1, 1, 1);
    }
  }
</style>
