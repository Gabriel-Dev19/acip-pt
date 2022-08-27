<template>
  <div>
    <button class="btn d-flex py-xs-2 align-items-center justify-content-center btn-dark px-20 fw-500" @click.prevent="$root.$emit('ShowModalWhatsApp')">
      <i class="fab fa-whatsapp fs-17 mr-2 fw-500" /> WhatsApp <i class="fa fa-arrow-right fw-300 fs-13 ml-2" />
    </button>
  </div>
</template>
<style lang="css" scoped>
  .fa-whatsapp {
    margin-bottom: 2px;
  }
</style>
