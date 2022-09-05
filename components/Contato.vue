<template>
  <div id="contato" class="container pt-100">
    <h2 class="d-flex py-0">
      <div class="bl-temas mr-10 my-1" /> Contacto
    </h2>
    <div v-show="ShowMsgSuccessFloat" class="col-12 mensagem-flutuante">
      <div class="col-12 px-0 d-flex justify-content-center">
        <div class="py-1 bg-success d-flex align-items-center shadow fw-500 justify-content-between text-white col-xl-6 rounded">
          Mensagem enviada com sucesso, em breve entraremos em contacto com você.
          <button class="btn pr-0 d-flex justify-content-center align-items-center pt-0 pb-0" @click.prevent="CloseMsgSuccess">
            <i class="fa fa-times text-white fs-20 fw-400" />
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-xs-30 mt-sm-50 row mx-auto">
      <div class="col-lg-7 px-0 border shadow pb-3">
        <div class="bg-amarelo py-20">
          <h5 class="text-center fw-600">
            Formulário de contacto
          </h5>
          <p class="mb-0 text-center col-lg-9 mx-auto fw-500 fs-14">
            Preencha o formulário abaixo para receber uma consulta de um de nossos especialistas.
          </p>
        </div>
        <form autocomplete="off" class="col-12 mt-30" @submit.prevent="submit">
          <div v-show="ShowMsgSuccess" class="rounded bg-success py-1 mb-3 px-2 text-white">
            Mensagem enviada com sucesso, em breve entraremos em contacto
          </div>
          <div class="d-flex row mx-auto">
            <div class="form-group col-sm px-0">
              <label for="nome" class="fw-500 fs-15 ml-10 mb-1">Nome:</label>
              <input id="nome" v-model="nome" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.nome.$error" class="error text-left px-2">
                Este campo é obrigatório, mínimo {{ $v.nome.$params.minLength.min }} letras.
              </div>
            </div>
            <div class="form-group col-sm ml-sm-3 px-0">
              <label for="email" class="fw-500 fs-15 ml-10 mb-1">E-mail:</label>
              <input id="email" v-model="email" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.email.$error" class="error text-left px-2">
                Preencha com um e-mail válido
              </div>
            </div>
          </div>
          <div class="d-flex row mx-auto">
            <div class="form-group col-sm px-0">
              <label for="telefone" class="fw-500 fs-15 ml-10 mb-1">Telefone:</label>
              <input
                id="telefone"
                v-model="telefone"
                v-mask="mask"
                type="text"
                class="form-control"
                @focus="ShowMsgError = true"
                @keypress="VerificaNumero()"
                @keyup.backspace="VerificaNumeroDelete()"
              >
              <div v-show="ShowMsgError" v-if="$v.telefone.$error" class="error text-left px-2">
                Coloque um telefone válido
              </div>
            </div>
            <div class="form-group col-sm ml-sm-3 px-0">
              <label for="cidade" class="fw-500 fs-15 ml-10 mb-1">Cidade:</label>
              <input id="cidade" v-model="cidade" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.cidade.$error" class="error text-left px-2">
                Preencha com sua cidade
              </div>
            </div>
          </div>
          <div class="d-flex row mx-auto">
            <div class="form-group col-sm px-0">
              <label for="estado" class="fw-500 fs-15 ml-10 mb-1">Distrito:</label>
              <input id="estado" v-model="estado" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.estado.$error" class="error text-left px-2">
                Preencha com seu distrito
              </div>
            </div>
            <div class="form-group col-sm ml-sm-3 px-0">
              <label for="horario" class="fw-500 fs-15 ml-10 mb-1">Data para contacto:</label>
              <input id="horario" v-model="data_contato" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.data_contato.$error" class="error text-left px-2">
                Coloque uma data para retorno
              </div>
            </div>
          </div>
          <div class="d-flex row mx-auto">
            <div class="form-group col-sm px-0">
              <label for="data" class="fw-500 fs-15 ml-10 mb-1">Horário para contacto:</label>
              <input id="data" v-model="horario" type="text" class="form-control" @focus="ShowMsgError = true">
              <div v-show="ShowMsgError" v-if="$v.horario.$error" class="error text-left px-2">
                Coloque um horário para retorno
              </div>
            </div>
            <div class="form-group col-sm ml-sm-3 px-0">
              <label for="tipo_servico" class="fw-500 fs-15 ml-10 mb-1">Tipo de serviço:</label>
              <select id="tipo_servico" v-model="tipo_servico" class="form-control" @focus="ShowMsgError = true">
                <option value="" selected disabled>
                  ...
                </option>
                <option value="Investigação empresarial">
                  Investigação empresarial
                </option>
                <option value="Investigação conjugal">
                  Investigação conjugal
                </option>
                <option value="Curso de detective">
                  Curso de detective
                </option>
                <option value="Localização de pessoas">
                  Localização de pessoas
                </option>
                <option value="Acompanhamento de filho">
                  Acompanhamento de filho
                </option>
                <option value="Telemóvel VIP">
                  Telemóvel VIP
                </option>
                <option value="Contra inteligência empresarial">
                  Contra inteligência empresarial
                </option>
                <option value="Prova de conduta">
                  Prova de conduta
                </option>
              </select>
              <div v-show="ShowMsgError" v-if="$v.tipo_servico.$error" class="error text-left px-2">
                Selecione o serviço desejado
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="mensagem" class="fw-500 fs-15 ml-10 mb-1">Mensagem:</label>
            <textarea id="mensagem" v-model="mensagem" class="form-control" @focus="ShowMsgError = true" />
            <div v-show="ShowMsgError" v-if="$v.mensagem.$error" class="error text-left px-2">
              Digite uma mensagem
            </div>
          </div>
          <div class="form-group">
            <div class="custom-control custom-radio">
              <input id="pessoa_fisica" v-model="tipo_pessoa" type="radio" value="Pessoa física" class="custom-control-input">
              <label class="custom-control-label" for="pessoa_fisica">Pessoa física</label>
            </div>
            <div class="custom-control mt-1 custom-radio">
              <input id="pessoa_juridica" v-model="tipo_pessoa" type="radio" value="Pessoa jurídica" class="custom-control-input">
              <label class="custom-control-label" for="pessoa_juridica">Pessoa jurídica</label>
            </div>
            <div v-show="ShowMsgError" v-if="$v.tipo_pessoa.$error" class="error text-left px-2">
              Selecione o tipo de pessoa
            </div>
          </div>
          <button type="submit" class="btn btn-amarelo d-flex align-items-center px-20 py-2 border-radius-0 mt-4 fw-500">
            Enviar formulário <i class="fa fa-arrow-right fs-15 ml-2 fw-400" />
          </button>
        </form>
      </div>
      <div class="col-md-8 px-xs-0 px-sm-0 px-lg-15 col-lg-5 mt-xs-50 mt-sm-50 mt-lg-0 d-flex justify-content-center align-items-center">
        <div>
          <div class="d-flex justify-content-center">
            <div>
              <img src="../assets/img/logo-acip.webp" width="120" alt="Logo acip">
            </div>
          </div>
          <h4 class="text-center mt-3 fw-600">
            Acip Detectives Profissionais
          </h4>
          <p class="text-center fs-15 fw-500">
            A Acip Detectives Profissionais é uma agência séria que preza pela confidenciabilidade
            e total profissionalismo. Nos siga nas redes sociais e fique por dentro!
          </p>
          <div class="bb-amarelo col-sm-10 mx-auto my-4" />
          <div>
            <p class="mb-0 text-center fw-600">
              Contacto
            </p>
            <BtnQuatroSete class="mt-1" />
          </div>
          <div class="bb-amarelo col-sm-10 mx-auto my-4" />
          <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-center flex-column">
              <a href="https://www.facebook.com/ACIP-Detetive-Particular-105042491799720" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fw-600 no-underline my-2">
                <div class="bolinha-contato-amarela d-flex justify-content-center mr-10 align-items-center text-dark">
                  <i class="fab fa-facebook-f fs-23" />
                </div> Facebook
              </a>
              <a href="https://twitter.com/AcipDetetives" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fw-600 no-underline my-2">
                <div class="bolinha-contato-amarela d-flex justify-content-center mr-10 align-items-center text-dark">
                  <i class="fab fa-twitter fs-23" />
                </div> Twitter
              </a>
              <a href="https://www.youtube.com/channel/UCQBWKfw3DmDokMBLF6croTA" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fw-600 no-underline my-2">
                <div class="bolinha-contato-amarela d-flex justify-content-center mr-10 align-items-center text-dark">
                  <i class="fab fa-youtube fs-23" />
                </div> Youtube
              </a>
              <a href="https://www.instagram.com/acipdetetives/" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fw-600 no-underline my-2">
                <div class="bolinha-contato-amarela d-flex justify-content-center mr-10 align-items-center text-dark">
                  <i class="fab fa-instagram fs-23" />
                </div> Instagram
              </a>
              <a href="https://www.pinterest.com/acipdetetiveparticular/_created/" target="_blank" rel="nopenner noreferrer" class="d-flex align-items-center text-dark fw-600 no-underline my-2">
                <div class="bolinha-contato-amarela d-flex justify-content-center mr-10 align-items-center text-dark">
                  <i class="fab fa-pinterest fs-23" />
                </div> Pinterest
              </a>
            </div>
          </div>
          <a href="mailto:contacto@acipdetectives.com.br" class="no-underline text-dark">
            <div class="d-flex mt-30 align-items-center fw-500 justify-content-center">
              <i class="fa fa-envelope mr-2 fs-27 fw-400" /> contacto@acipdetectives.com.br
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from '../node_modules/vuelidate/lib/validators'
import axios from '../node_modules/axios'
import BtnQuatroSete from './buttons/BtnQuatroSete.vue'
// import BtnQuatroOito from './buttons/BtnQuatroOito.vue'
// import BtnQuatroUm from './buttons/BtnQuatroUm.vue'
// import BtnQuatroNove from './buttons/BtnQuatroNove.vue'
export default {
  components: { BtnQuatroSete },
  data () {
    return {
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      tipo_servico: '',
      horario: '',
      data_contato: '',
      mensagem: '',
      tipo_pessoa: '',
      ShowMsgSuccess: false,
      ShowMsgSuccessFloat: false,
      ShowMsgError: true,
      mask: '(##) ####-####'
    }
  },
  validations: {
    nome: {
      required,
      minLength: minLength(3)
    },
    email: {
      email,
      required
    },
    telefone: {
      required,
      minLength: minLength(14)
    },
    cidade: {
      required
    },
    estado: {
      required
    },
    tipo_servico: {
      required
    },
    horario: {
      required
    },
    data_contato: {
      required
    },
    mensagem: {
      required
    },
    tipo_pessoa: {
      required
    }
  },
  methods: {
    CloseMsgSuccess () {
      this.ShowMsgSuccess = true
      this.ShowMsgSuccessFloat = false
    },
    submit () {
      this.$v.$touch()
      if (this.$v.$invalid === false) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        axios.post('https://www.acipdetectives.pt/envio.php', JSON.stringify({
          nome: this.nome,
          email: this.email,
          telefone: this.telefone,
          cidade: this.cidade,
          estado: this.estado,
          tipo_servico: this.tipo_servico,
          horario: this.horario,
          data_contato: this.data_contato,
          mensagem: this.mensagem,
          tipo_pessoa: this.tipo_pessoa
        }))
          .then(
            setTimeout(() => {
              this.ShowMsgSuccessFloat = true
              setTimeout(() => {
                this.ShowMsgSuccess = true
                this.ShowMsgSuccessFloat = false
              }, 4000)
              this.ShowMsgError = false
              this.nome = ''
              this.email = ''
              this.telefone = ''
              this.cidade = ''
              this.estado = ''
              this.tipo_servico = ''
              this.horario = ''
              this.data_contato = ''
              this.mensagem = ''
              this.tipo_pessoa = ''
            }, 300)
          )
      }
    },
    VerificaNumero () {
      if (this.telefone.length === 14) {
        this.mask = '(##) # ####-####'
      }
      if (this.telefone.length <= 13) {
        this.mask = '(##) ####-####'
      }
    },
    VerificaNumeroDelete () {
      if (this.telefone.length <= 15) {
        this.mask = '(##) ####-####'
      }
    }
  }
}
</script>
<style scoped>
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
  .bb-amarelo{
    border-bottom: 2px solid var(--amarelo);
  }
  textarea{
      min-height: 150px;
      max-height: 150px;
  }
  input, select, textarea{
      border-color: var(--amarelo);
      box-shadow: 0 0.125rem 0.58rem rgba(0, 0, 0, 0.075)
  }
  input:focus, select:focus, textarea:focus{
      border-color: var(--amarelo);
      box-shadow: 0 0 0 0.17rem #fbc2518a
  }
  .mensagem-flutuante{
    position: fixed;
    top: 150px;
    left: 0;
    z-index: 1080;
  }
  .error{
      color: #ffffff;
      font-size: 13px;
      margin-top: 10px;
      background-color: #ff4d4d;
      display: inline-block;
      border-radius: 10px;
  }
  .bolinha-contato-amarela{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--amarelo);
  }
</style>
