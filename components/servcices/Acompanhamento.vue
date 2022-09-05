<template>
  <div>
    <div class="container py-xs-40 py-sm-40 py-lg-70 px-lg-40 px-xl-50 d-flex row mx-auto bg-servico">
      <div class="col-lg-7 px-0">
        <h3 class="d-flex text-white">
          <div class="bl-temas mr-2 my-1" /> Para que serve o acompanhamento de filho
        </h3>
        <p class="text-white mb-0">
          Sabemos o quanto pode ser difícil cuidar dos filhos na adolescência, por isso oferecemos o serviço
          de acompanhamento de filho, nós seguimos o alvo e fazemos anotações de tudo que ele faz, assim
          você pode ter todas as informações do que seu filho faz longe de você. Também podemos fazer o
          acompanhamento por meio do Telemóvel VIP, assim nós temos acesso a tudo que seu flho
          conversa com as pessoas.
        </p>
      </div>
      <div class="col-lg-5 px-0 mt-xs-30 mt-sm-30 mt-lg-0 d-flex align-items-center row mx-auto justify-content-lg-center">
        <div>
          <BtnAmareloFaleNoWhatsapp />
          <BtnAmareloLigueAgora class="mt-10" />
        </div>
      </div>
    </div>
    <div class="container mt-40 px-0">
      <h4 class="d-flex fw-500">
        <div class="bl-temas mr-2" /> Cuide de forma amorosa dos seus filhos
      </h4>
      <p class="fw-500 mt-20">
        A adolescência é uma fase de grandes descobertas e de mudanças que nem sempre os filhos
        estão atentos ao que os pais dizem. Todos nós passamos por esta fase uma vez na vida, tudo
        é novo, parece que o mundo vai acabar amanhã e não se tem mais tempo a perder, e até parece
        que nada vai acontecer, mas os pais ficam com a preocupação por inúmeros motivos e atitudes
        dos filhos, realmente é uma fase que requer mais atenção, mas não pode sufocar o adolescente
        para que ele não se esquive mais ainda de você.
      </p>
      <p class="fw-500">
        Nessa fase transitória que ocorre dos 13 aos 17 anos geralmente, ocorre várias descobertas
        pelo adolescentes sejam boas ou ruins, é nessa fase ocorre mudanças de comportamento,
        definição da opção sexual, contacto com álcool e até no relacionamento com os pais, que percebem
        essas alterações que preocupam mas muitos não sabem como chegar para conversar com os filhos ter
        uma maior aproximação e nessa hora procuram ajuda de um profissional e que nem sempre é bem aceito
        pelo adolescente o que acaba afastando ainda mais. E por motivos como esse e para não acusar o
        adolescente somente por suposições que muitas pais procuram o acompanhamento de um detective privado.
      </p>
      <h4 class="d-flex mt-30 fw-500">
        <div class="bl-temas mr-2" /> Abaixo algumas dicas que servem para alerta dos pais:
      </h4>
      <p class="fw-500 mt-20">
        Como já dissemos a adolescência é uma fase difícil, é uma idade onde várias mudanças acontecem,
        é na verdade uma transição e para muitos é o momento de encontrar ou se identificar com algumas
        ideologias e a própria personalidade. Desse modo com mudanças e atitudes consideradas suspeitas
        os pais começam a imaginar milhões de coisas que podem estar ocorrendo e algumas vezes não é nada
        que vá prejudicar, mas é uma idade que é preciso ficar sempre alerta. Existem algumas atitudes
        que são significativas e servem de alerta para iniciar uma investigação:
      </p>
      <p class="position-relative mt-20 fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Escutar músicas e usar roupas que fazer apologia ao crime ou a drogas;
      </p>
      <p class="position-relative fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Quando se envolvem em muitas brigas e sem motivos aparente;
      </p>
      <p class="position-relative fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Adolescentes que demonstre excesso de agressividade e nervosismo;
      </p>
      <p class="position-relative fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Que minimizam os efeitos causados pelo uso de drogas e do álcool;
      </p>
      <p class="position-relative fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Quando o adolescente começa a descuidar da própria aparência e da higiene pessoal;
      </p>
      <p class="position-relative fw-500">
        <i class="fa fa-circle fs-10 mr-1" />
        &nbsp;&nbsp;&nbsp; Quando começa a chegar em casa frequentemente embriagado;
      </p>
      <p class="fw-500 mt-20">
        Esses são apenas alguns sinais que podemos perceber em nossos filhos ou irmãos adolescentes
        que servem de alerta para iniciar uma investigação, seja por nós mesmos em casa, ou com
        o acompanhamento de um detective privado.
      </p>
    </div>
  </div>
</template>
<script>
import BtnAmareloFaleNoWhatsapp from '../buttons/btn-amarelo-fale-no-whatsapp'
import BtnAmareloLigueAgora from '../buttons/btn-amarelo-ligue-agora'
export default {
  components: {
    BtnAmareloFaleNoWhatsapp,
    BtnAmareloLigueAgora
  }
}
</script>
<style scoped>
  .bg-servico{
    background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/acompanhamento.webp) center center no-repeat;
    -o-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/acompanhamento.webp) center center no-repeat;
    -moz-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/acompanhamento.webp) center center no-repeat;
    -webkit-background: linear-gradient(0deg, #000000b7, #000000b7), url(../../assets/img/acompanhamento.webp) center center no-repeat;
    background-size: cover;
  }
  .bl-temas {
    border-left: 4px solid var(--amarelo);
  }
  .fa-circle{
    position: absolute;
    top: 6px;
    left: 0px;
  }
</style>
