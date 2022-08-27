<template>
  <div>
    <div class="py-100 bg-light">
      <div class="container d-flex row mx-auto">
        <div class="col-lg px-0">
          <div class="shadow borda-amarela height-img-caracteristicas bg-caracteristicas-1">
            <div class="fale-conosco-caracteristicas d-flex justify-content-center align-items-center h-100 col-12">
              <div>
                <h5 class="text-white pb-1 bb-amarela">
                  Agende uma consulta
                </h5>
                <div class="d-flex mt-4 justify-content-center">
                  <a href="tel:+5541995190579" class="btn btn-amarelo d-flex align-items-center fw-500 px-20">
                    <i class="fa fa-phone-alt fs-15 fw-400 mb-1 mr-2" /> Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h4 class="mt-30 fw-600">
            Discrição
          </h4>
          <p class="fw-500">
            Graças ao nosso time de profissionais dedicados e experientes
            garantimos discrição absoluta durante as investigações.
          </p>
        </div>
        <div class="col-lg px-0 my-xs-40 my-sm-40 my-lg-0 mx-lg-50">
          <div class="shadow borda-amarela height-img-caracteristicas bg-caracteristicas-2">
            <div class="fale-conosco-caracteristicas d-flex justify-content-center align-items-center h-100 col-12">
              <div>
                <h5 class="text-white pb-1 bb-amarela">
                  Agende uma consulta
                </h5>
                <div class="d-flex mt-4 justify-content-center">
                  <a href="tel:+5541995190579" class="btn btn-amarelo d-flex align-items-center fw-500 px-20">
                    <i class="fa fa-phone-alt fs-15 fw-400 mb-1 mr-2" /> Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h4 class="mt-30 fw-600">
            Organização
          </h4>
          <p class="fw-500">
            Nossos profissionais são altamente treinados e capacitados
            para cuidar de qualquer caso. Somos altamente rigorosos com
            nossa organização, proporcionando a melhor experiência pra você.
          </p>
        </div>
        <div class="col-lg px-0">
          <div class="shadow borda-amarela height-img-caracteristicas bg-caracteristicas-3">
            <div class="fale-conosco-caracteristicas d-flex justify-content-center align-items-center h-100 col-12">
              <div>
                <h5 class="text-white pb-1 bb-amarela">
                  Agende uma consulta
                </h5>
                <div class="d-flex mt-4 justify-content-center">
                  <a href="tel:+5541995190579" class="btn btn-amarelo d-flex align-items-center fw-500 px-20">
                    <i class="fa fa-phone-alt fs-15 fw-400 mb-1 mr-2" /> Fale conosco
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h4 class="mt-30 fw-600">
            Comprometimento
          </h4>
          <p class="fw-500">
            Na Acip Detetives nós temos um compromisso absoluto
            com seu caso e tratamos ele de forma única. Seja qual for
            a situação, a Acip Detetives está determinada a resolver!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .borda-amarela {
    border: 3px solid var(--amarelo_escuro);
  }

  .bb-amarela {
    border-bottom: 2px solid var(--amarelo_escuro);
  }

  @media (min-width: 1px) {
    .height-img-caracteristicas {
      height: 200px;
    }
  }

  @media (min-width: 576px) {
    .height-img-caracteristicas {
      height: 300px;
    }
  }

  @media (min-width: 992px) {
    .height-img-caracteristicas {
      height: 180px;
    }
  }

  @media (min-width: 1200px) {
    .height-img-caracteristicas {
      height: 230px;
    }
  }

  .fale-conosco-caracteristicas {
    background-color: #0000009a;
    transition: all .3s;
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s;
    opacity: 0;
  }

  .bg-caracteristicas-1:hover .fale-conosco-caracteristicas {
    opacity: 1;
  }

  .bg-caracteristicas-2:hover .fale-conosco-caracteristicas {
    opacity: 1;
  }

  .bg-caracteristicas-3:hover .fale-conosco-caracteristicas {
    opacity: 1;
  }

  .bg-caracteristicas-1 {
    background: url(../assets/img/descricao.webp) center center no-repeat;
    background-size: cover;
  }

  .bg-caracteristicas-2 {
    background: url(../assets/img/organizacao.webp) center center no-repeat;
    background-size: cover;
  }

  .bg-caracteristicas-3 {
    background: url(../assets/img/comprometimento.webp) center center no-repeat;
    background-size: cover;
  }
</style>
