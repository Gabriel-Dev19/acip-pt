<template>
  <div id="servicos" class="pt-100">
    <div class="container">
      <h2 class="d-flex py-0">
        <div class="bl-temas mr-10 my-1" /> {{ TitleServicos }}
      </h2>
      <TodosOsServicos v-show="ShowTodosOsServicos" />
      <Artigos v-show="ShowArtigos" />
      <Loading v-show="ShowLoading" />
      <InvestigacaoEmpresarial v-show="ShowServicoInvestigacaoEmpresarial" class="mt-xs-30 mt-sm-50" />
      <InvestigacaoConjugal v-show="ShowServicoInvestigacaoConjugal" class="mt-xs-30 mt-sm-50" />
      <Curso v-show="ShowServicoCurso" class="mt-xs-30 mt-sm-50" />
      <SoftwareEspiao v-show="ShowServicoSoftwareEspiao" class="mt-xs-30 mt-sm-50" />
      <Acompanhamento v-show="ShowServicoAcompanhamento" class="mt-xs-30 mt-sm-50" />
      <LocalizacaoDePessoas v-show="ShowServicoLocalizacaoDePessoas" class="mt-xs-30 mt-sm-50" />
    </div>
  </div>
</template>
<script>
import Artigos from './Artigos.vue'
import Loading from './Loading.vue'
import Acompanhamento from './servcices/Acompanhamento.vue'
import InvestigacaoConjugal from './servcices/InvestigacaoConjugal.vue'
import InvestigacaoEmpresarial from './servcices/InvestigacaoEmpresarial.vue'
import LocalizacaoDePessoas from './servcices/LocalizacaoDePessoas.vue'
import Curso from './servcices/Curso.vue'
import SoftwareEspiao from './servcices/SoftwareEspiao.vue'
import TodosOsServicos from './TodosOsServicos.vue'
export default {
  components: {
    TodosOsServicos,
    Artigos,
    Loading,
    InvestigacaoEmpresarial,
    InvestigacaoConjugal,
    Curso,
    SoftwareEspiao,
    LocalizacaoDePessoas,
    Acompanhamento
  },
  data () {
    return {
      TitleServicos: 'Serviços de investigação',
      ShowTodosOsServicos: true,
      ShowArtigos: false,
      ShowLoading: false,
      ShowServicoInvestigacaoEmpresarial: false,
      ShowServicoInvestigacaoConjugal: false,
      ShowServicoCurso: false,
      ShowServicoSoftwareEspiao: false,
      ShowServicoAcompanhamento: false,
      ShowServicoLocalizacaoDePessoas: false
    }
  },
  created () {
    this.$root.$on('MudancaTitlePadrao', () => {
      this.TitleServicos = 'Serviços de investigação'
      this.ShowArtigos = false
      this.ShowLoading = true
      this.ShowTodosOsServicos = false
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoSoftwareEspiao = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      setTimeout(() => {
        this.ShowTodosOsServicos = true
        this.ShowLoading = false
      }, 700)
    })
    this.$root.$on('MudancaTitleBuscasEncontradas', () => {
      this.TitleServicos = 'Buscas encontradas'
      this.ShowTodosOsServicos = false
      this.ShowLoading = true
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoSoftwareEspiao = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      setTimeout(() => {
        this.ShowArtigos = true
        this.ShowLoading = false
      }, 700)
    })
    this.$root.$on('EmitShowServicoInvestigacaoEmpresarial', () => {
      this.TitleServicos = 'Investigação empresarial'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoInvestigacaoEmpresarial = true
      }, 700)
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowServicoSoftwareEspiao = false
    })
    this.$root.$on('EmitShowServicoInvestigacaoConjugal', () => {
      this.TitleServicos = 'Investigação conjugal'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoInvestigacaoConjugal = true
      }, 700)
      this.ShowServicoCurso = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowServicoSoftwareEspiao = false
    })
    this.$root.$on('EmitShowServicoCurso', () => {
      this.TitleServicos = 'Curso de detetive particular'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoCurso = true
      }, 700)
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowServicoSoftwareEspiao = false
    })
    this.$root.$on('EmitShowServicoLocalizacaoDePessoas', () => {
      this.TitleServicos = 'Localização de pessoas desaparecidas'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoLocalizacaoDePessoas = true
      }, 700)
      this.ShowServicoSoftwareEspiao = false
    })
    this.$root.$on('EmitShowServicoSoftwareEspiao', () => {
      this.TitleServicos = 'Celular VIP'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowServicoSoftwareEspiao = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoSoftwareEspiao = true
      }, 700)
    })
    this.$root.$on('EmitShowServicoAcompanhamento', () => {
      this.TitleServicos = 'Acompanhamento de filho'
      this.ShowServicoInvestigacaoEmpresarial = false
      this.ShowServicoInvestigacaoConjugal = false
      this.ShowServicoCurso = false
      this.ShowServicoLocalizacaoDePessoas = false
      this.ShowServicoAcompanhamento = false
      this.ShowServicoSoftwareEspiao = false
      this.ShowLoading = true
      this.ShowArtigos = false
      this.ShowTodosOsServicos = false
      setTimeout(() => {
        this.ShowLoading = false
        this.ShowServicoAcompanhamento = true
      }, 700)
    })
  }
}
</script>
<style scoped>
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
</style>
