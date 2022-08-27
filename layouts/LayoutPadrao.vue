<template>
  <div>
    <Home />
    <Navbar />
    <Caracteristicas />
    <Nuxt />
    <Servicos />
    <Diferenciais />
    <Contato />
    <Footer />
    <Btn-whatsapp-flutuante />
    <ModalWhatsapp />
    <client-only>
      <Cookie />
    </client-only>
  </div>
</template>
<script>
import Vue from '../node_modules/vue'
import VueSmoothScroll from '../node_modules/vue2-smooth-scroll'
import Caracteristicas from '../components/Caracteristicas.vue'
import Home from '../components/Home.vue'
import Navbar from '../components/Navbar.vue'
import Servicos from '../components/Servicos.vue'
import Contato from '../components/Contato.vue'
import Vuelidate from '../node_modules/vuelidate'
import { VueMaskDirective } from '../node_modules/v-mask'
import Footer from '../components/Footer.vue'
import Diferenciais from '../components/Diferenciais.vue'
import BtnWhatsappFlutuante from '../components/buttons/btn-whatsapp-flutuante.vue'
import Cookie from '../components/Cookie.vue'
import ModalWhatsapp from '../components/ModalWhatsapp.vue'
Vue.use(Vuelidate)
Vue.use(VueSmoothScroll)
Vue.directive('mask', VueMaskDirective)
export default {
  components: {
    Navbar,
    Home,
    Caracteristicas,
    Servicos,
    Contato,
    Footer,
    Diferenciais,
    BtnWhatsappFlutuante,
    Cookie,
    ModalWhatsapp
  },
  mounted () {
    document.oncontextmenu = function () {
      return false
    }

    function EvitarSeleccion (target) {
      if (typeof target.onselectstart !== 'undefined') {
        target.onselectstart = function () {
          return false
        }
      } else if (typeof target.style.MozUserSelect !== 'undefined') {
        target.style.MozUserSelect = 'none'
      } else {
        target.style.cursor = 'default'
      }
    }

    EvitarSeleccion(document.body)
  }
}
</script>
