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
            <a href="https://wa.me/351913342032?text=Olá,+estou+visitando+o+site+da+ACIP+Detectives+e+gostaria+de+receber+mais+informações" target="_blank" class="d-flex mt-20 align-items-center no-underline" rel="noopener noreferrer">
              <i class="fab fa-whatsapp-square text-success fs-42" />
              <div class="col text-dark">
                <p class="fw-700 d-block fs-17 mb-0 col-12 px-0">+351 913 342 032</p>
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
