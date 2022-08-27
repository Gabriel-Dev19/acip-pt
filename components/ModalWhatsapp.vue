<template>
  <div>
    <b-modal
      id="modal-whatsapp"
      centered
      scrollable
      class="px-0"
    >
      <template #modal-header="">
        <div class="bg-amarelo col-12 px-0 py-15 d-flex justify-content-between align-items-center">
          <div class="px-3">
            <h5 class="fw-600 mb-0">
              Olá!
            </h5>
            <p class="line-height-p mt-1 fw-500 fs-15 mb-0">
              Seja bem vindo a nossa central de atendimento, clique no whatsapp
              correspondente a região que deseja ser atendido.
            </p>
          </div>
          <button class="btn pt-2" @click.prevent="$root.$emit('HideModalWhatsapp')">
            <i class="fa fa-times text-white fs-20 fw-400" />
          </button>
        </div>
      </template>
      <div class="col-12 px-0 bg-white pb-25 overflow-hidden">
        <div class="d-flex justify-content-center">
          <div>
            <a href="https://wa.me/5547988336355?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-20 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Norte de Santa Catarina</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(47) 98833-6355</p>
              </div>
            </a>
            <a href="https://wa.me/5548999994986?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Sul de Santa Catarina</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(48) 99999-4986</p>
              </div>
            </a>
            <a href="https://wa.me/5549991502878?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Serra Catarinense</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(49) 99150-2878</p>
              </div>
            </a>
            <a href="https://wa.me/5541995190579?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Paraná</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(41) 99519-0579</p>
              </div>
            </a>
            <a href="https://wa.me/5511973773244?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">São Paulo</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(11) 97377-3244</p>
              </div>
            </a>
            <a href="https://wa.me/5551997946721?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Rio Grande do Sul</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(51) 99794-6721</p>
              </div>
            </a>
            <a href="https://wa.me/5521999932082?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Rio de Janeiro</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(21) 99993-2082</p>
              </div>
            </a>
            <a href="https://wa.me/5531998082674?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Minas Gerais</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(31) 99808-2674</p>
              </div>
            </a>
            <a href="https://wa.me/5562999599493?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Goiás</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(62) 99959-9493</p>
              </div>
            </a>
            <a href="https://wa.me/5567996182861?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Mato Grosso do Sul</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(67) 99618-2861</p>
              </div>
            </a>
            <a href="https://wa.me/5561998300643?text=Olá,+estou+visitando+o+site+da+ACIP+Detetives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-15 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">Distrito Federal</p>
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">(61) 99830-0643</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <template #modal-footer="">
        <div class="bg-light col-12 m-0 px-0 py-15 d-flex justify-content-between align-items-center">
          <p class="fw-600 text-center col-12 px-0 d-flex align-items-center justify-content-center fs-17 px-3 mb-0">
            <span class="fw-800 mr-1">Atenção: </span> atendimento 24h <i class="fa fa-circle ml-1 fs-12 text-success" />
          </p>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import { ModalPlugin } from '../node_modules/bootstrap-vue'
Vue.use(ModalPlugin)
export default {
  created () {
    this.$root.$on('ShowModalWhatsApp', () => {
      this.$bvModal.show('modal-whatsapp')
    })
    this.$root.$on('HideModalWhatsapp', () => {
      this.$bvModal.hide('modal-whatsapp')
    })
  }
}
</script>
<style scoped>
  p{
    letter-spacing: 0px !important;
  }
  .line-height-p {
    line-height: 18px;
  }
</style>
