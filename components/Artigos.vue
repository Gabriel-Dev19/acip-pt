<template>
  <div class="mt-xs-30 mt-sm-50">
    <div v-show="ShowInvestigacaoEmpresarial" class="borda-artigos shadow-sm rounded p-3">
      <h5 class="fw-600">
        Investigacão empresarial
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Fazemos uma investigação empresarial completa na sua empresa, isso inclui varredura de escutas,
        investigação de funcionário, telemóvel espião para monitoramento dos funcionários nas redes sociais
        como WhatsApp, Facebook, Instagram, acesso a câmera do aparelho do investigado e muitas outras
        funcionalidades.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoInvestigacaoEmpresarial')">
          Investigacão empresarial <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
    <div v-show="ShowInvestigacaoConjugal" class="borda-artigos shadow-sm mt-3 rounded p-3">
      <h5 class="fw-600">
        Investigacão conjugal
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Por meio dos mais modernos métodos de investigação, nos infiltramos de forma distanciada na vida do
        parceiro investigado, acompanhando todos os seus passos, e descobrindo uma possível traíção ou comportamento
        inadequado.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoInvestigacaoConjugal')">
          Investigacão conjugal <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
    <div v-show="ShowLocalizacaoDePessoas" class="borda-artigos shadow-sm mt-3 rounded p-3">
      <h5 class="fw-600">
        Localização de pessoas
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Ao usar aparelhos localizadores rastreamos o alvo das mais variadas formas e técnicas. O alvo
        pode ser uma pessoa idosa, um cônjuge que você desconfia que esteja sendo infiel, um veículo,
        um animal ou qualquer outra coisa que precise ser rastreada.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoLocalizacaoDePessoas')">
          Localização de pessoas <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
    <div v-show="ShowCurso" class="borda-artigos shadow-sm mt-3 rounded p-3">
      <h5 class="fw-600">
        Curso de detective privado
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Com nosso curso de detective você vai ter um material completo sobre investigação conjugal,
        investigação empresarial, localização de pessoas e muitas outras tecnicas de investigação.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoCurso')">
          Curso de detective <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
    <div v-show="ShowSoftwareEspiao" class="borda-artigos shadow-sm mt-3 rounded p-3">
      <h5 class="fw-600">
        Telemóvel VIP
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Ao usar aparelhos localizadores rastreamos o alvo das mais variadas formas e técnicas. O alvo
        pode ser uma pessoa idosa, um cônjuge que você desconfia que esteja sendo infiel, um veículo,
        um animal ou qualquer outra coisa que precise ser rastreada.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoSoftwareEspiao')">
          Telemóvel VIP <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
    <div v-show="ShowAcompanhamento" class="borda-artigos shadow-sm mt-3 rounded p-3">
      <h5 class="fw-600">
        Acompanhamento de filho
      </h5>
      <p class="mb-0 fs-15 fw-500">
        Sabemos o quanto pode ser difícil cuidar dos filhos na adolescência, por isso oferecemos o serviço
        de <b>acompanhamento de filho,</b> nós seguimos o alvo e fazemos anotações de tudo que ele faz, assim
        você pode ter todas as informações do que seu filho faz longe de você.
      </p>
      <div class="d-flex">
        <a v-smooth-scroll="{duration: 500, offset: - 100}" href="#servicos" class="btn mt-3 shadow-sm py-1 d-flex align-items-center fw-500 btn-dark" @click="$root.$emit('EmitShowServicoAcompanhamento')">
          Acompanhamento de filho <i class="fa fa-arrow-right fw-400 ml-2 fs-14" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ShowInvestigacaoEmpresarial: false,
      ShowInvestigacaoConjugal: false,
      ShowCurso: false,
      ShowLocalizacaoDePessoas: false,
      ShowSoftwareEspiao: false,
      ShowAcompanhamento: false
    }
  },
  created () {
    this.$root.$on('HideArtigos', () => {
      this.ShowInvestigacaoConjugal = false
      this.ShowInvestigacaoEmpresarial = false
      this.ShowCurso = false
      this.ShowLocalizacaoDePessoas = false
      this.ShowSoftwareEspiao = false
      this.ShowLojaDeEquipamentos = false
      this.ShowAcompanhamento = false
    })
    this.$root.$on('ShowArtigoInvestigacaoEmpresarial', () => {
      this.ShowInvestigacaoEmpresarial = true
    })
    this.$root.$on('ShowArtigoInvestigacaoConjugal', () => {
      this.ShowInvestigacaoConjugal = true
    })
    this.$root.$on('ShowArtigoCurso', () => {
      this.ShowCurso = true
    })
    this.$root.$on('ShowArtigoLocalizacaoDePessoas', () => {
      this.ShowLocalizacaoDePessoas = true
    })
    this.$root.$on('ShowArtigoSoftwareEspiao', () => {
      this.ShowSoftwareEspiao = true
    })
    this.$root.$on('ShowArtigoAcompanhamento', () => {
      this.ShowAcompanhamento = true
    })
  },
  methods: {

  }
}
</script>
<style scoped>
  .borda-artigos{
    border-top: 1px solid #dee2e6;
    border-right: 1px solid #dee2e6;
    border-bottom: 1px solid #dee2e6;
    border-left: 4px solid var(--amarelo);
  }
</style>
