<template>
  <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
    <div v-if="isOpen" class="cookie mb-3 px-0 col-12">
      <div class="mx-3 bg-white div-cookie mx-lg-auto py-10 shadow-lg px-0">
        <div class="d-flex px-3 align-items-center">
          <div class="align-items-center d-flex row mx-auto col-12 px-0">
            <p class="col px-0 text-xs-center text-sm-center text-xl-left mb-0 fs-15">
              <i class="fas fa-exclamation-triangle mr-1" />
              Usamos cookies para fornecer nossos serviços e para análises e marketing. Para saber mais sobre nosso uso
              de cookies, consulte nossa <button class="btn fs-15 text-underline py-0 px-0" @click="Politica">
                Política de Privacidade
              </button>.
            </p>
            <div class="d-flex align-items-center mt-xs-3 mt-sm-3 mt-xl-0 justify-content-xs-center justify-content-sm-center justify-content-xl-end col-xl-3 px-0 row mx-auto">
              <button class="btn border-radius-0 fw-500 px-15 btn-dark" @click="accept">
                {{ buttonTextAccept }}
              </button>
              <button class="btn border-radius-0 px-15 fw-500 btn-outline-dark ml-2" text @click="deny">
                {{ buttonTextDeny }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CookieMessage',
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Aceitar Cookies'
    },
    buttonTextDeny: {
      type: String,
      default: 'Negar'
    },
    message: {
      type: String,
      default:
        'We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    containerPosition () {
      return `cookie--${this.position}`
    }
  },
  created () {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept () {
      if (process.browser) {
        this.isOpen = false
        this.$root.$emit('DescerWhatsapp')
        localStorage.setItem('GDPR:accepted', true)
      }
    },
    deny () {
      if (process.browser) {
        this.isOpen = false
        this.$root.$emit('DescerWhatsapp')
        localStorage.setItem('GDPR:accepted', false)
      }
    },
    Politica () {
      this.$router.push('/politica-de-privacidade/#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    }
  }
}
</script>

<style scoped>
  .cookie{
    z-index: 100025;
    position: fixed;
    bottom: 0
  }
  .cookie__link{
    color: #ffffff;
    text-decoration: underline;
    transition: all .25s;
  }
  .cookie__link:hover{
    text-decoration: none
  }
  .div-cookie{
    box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.556) !important;
  }
  @media (min-width: 992px) {
    .div-cookie{
      width: 80%;
    }
  }
</style>
