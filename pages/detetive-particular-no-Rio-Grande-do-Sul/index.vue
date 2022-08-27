<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Detetive particular no Rio Grande do Sul
        </h2>
        <p class="fw-600 mt-4">
          Você está procurando um Detetive Particular no <b>Rio Grande do Sul</b>?
          A ACIP DETETIVES PROFISSIONAIS está no <b>Rio Grande do Sul</b> e teremos
          o prazer em ajudar você a solucionar suas dúvidas. Com mais de 20 anos de experiência e centenas de casos
          resolvidos, atuamos em todo o território nacional e países do Mercosul. Atuamos nos mais complexos casos
          de investigações conjugais, empresariais, localização de pessoas, acompanhamento de filhos envolvidos com más
          companhias, entre outros. Nossos serviços são executados de forma rápida, discreta e tudo dentro do mais absoluto
          sigilo, ajustados de acordo com a necessidade de cada caso e cliente. O grande sucesso que o nosso grupo vem obtendo
          é em função de um trabalho altamente profissional.
        </p>
        <p class="fw-600">
          Seja qual for o problema que você esteja enfrentando na sua vida pessoal ou nos seus negócios, somos capazes
          de fornecer uma solução rápida e eficaz, não importa o tipo e complexidade do seu caso ou mesmo o lugar
          em que você esteja.
        </p>
        <h4 class="d-flex py-0 mt-40">
          <div class="bl-temas mr-2 my-1" /> Encontre um detetive particular na sua cidade
        </h4>
      </div>
      <section class=" col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades A -->
          <div class="position-relative overflow-hidden col-12 mt-30 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AltoFeliz">
                <i class="fa fa-circle fs-12 mr-2" /> Alto Feliz - RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Alvorada">
                <i class="fa fa-circle fs-12 mr-2" /> Alvorada - RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AmaralFerrador">
                <i class="fa fa-circle fs-12 mr-2" /> Amaral Ferrador – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AntaGorda">
                <i class="fa fa-circle fs-12 mr-2" /> Anta Gorda – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Arambare">
                <i class="fa fa-circle fs-12 mr-2" /> Arambaré – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ararica">
                <i class="fa fa-circle fs-12 mr-2" /> Araricá – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ArroioDoMeio">
                <i class="fa fa-circle fs-12 mr-2" /> Arroio do Meio – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ArroioDoSal">
                <i class="fa fa-circle fs-12 mr-2" /> Arroio do Sal – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ArroioDoTigre">
                <i class="fa fa-circle fs-12 mr-2" /> Arroio do Tigre – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ArroioDosRatos">
                <i class="fa fa-circle fs-12 mr-2" /> Arroio dos Ratos – RS
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Arvorezinha">
                <i class="fa fa-circle fs-12 mr-2" /> Arvorezinha – RS
              </a>
            </div>
          </div>
          <!-- Cidades B -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                B
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioPinhal">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Pinhal - RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Barao">
                <i class="fa fa-circle fs-12 mr-2" /> Barão - RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BaraoDoTriunfo">
                <i class="fa fa-circle fs-12 mr-2" /> Barão do Triunfo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BomRetiroDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Bom Retiro do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BoqueirãoDoLeao">
                <i class="fa fa-circle fs-12 mr-2" /> Boqueirão do Leão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BomPrincipio">
                <i class="fa fa-circle fs-12 mr-2" /> Bom Princípio – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Brochier">
                <i class="fa fa-circle fs-12 mr-2" /> Brochier – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Butiá">
                <i class="fa fa-circle fs-12 mr-2" /> Butiá – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BarraDoRibeiro">
                <i class="fa fa-circle fs-12 mr-2" /> Barra do Ribeiro – RS
              </a>
            </div>
          </div>
          <!-- Cidades C -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                C
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CachoeiraDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Cachoeira do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cachoeirinha">
                <i class="fa fa-circle fs-12 mr-2" /> Cachoeirinha – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Camaqua">
                <i class="fa fa-circle fs-12 mr-2" /> Camaquã – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampoBom">
                <i class="fa fa-circle fs-12 mr-2" /> Campo Bom – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CerroBranco">
                <i class="fa fa-circle fs-12 mr-2" /> Cerro Branco – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CerroGrandeDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Cerro Grande do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Charqueadas">
                <i class="fa fa-circle fs-12 mr-2" /> Charqueadas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Candelaria">
                <i class="fa fa-circle fs-12 mr-2" /> Candelária – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Canoas">
                <i class="fa fa-circle fs-12 mr-2" /> Canoas – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CanudosDoVale">
                <i class="fa fa-circle fs-12 mr-2" /> Canudos do Vale – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CapaoDaCanoa">
                <i class="fa fa-circle fs-12 mr-2" /> Capão da Canoa – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Chuvisca">
                <i class="fa fa-circle fs-12 mr-2" /> Chuvisca – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cidreira">
                <i class="fa fa-circle fs-12 mr-2" /> Cidreira – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Colinas">
                <i class="fa fa-circle fs-12 mr-2" /> Colinas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CapelaDeSantana">
                <i class="fa fa-circle fs-12 mr-2" /> Capela de Santana – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Capitao">
                <i class="fa fa-circle fs-12 mr-2" /> Capitão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CapivariDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Capivari do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Caraa">
                <i class="fa fa-circle fs-12 mr-2" /> Caraá – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CoqueiroBaixo">
                <i class="fa fa-circle fs-12 mr-2" /> Coqueiro Baixo – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cristal">
                <i class="fa fa-circle fs-12 mr-2" /> Cristal – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CruzeiroDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Cruzeiro do Sul – RS
              </a>
            </div>
          </div>
          <!-- Cidades D -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                D
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg mt-4 px-0">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DoisIrmaos">
                <i class="fa fa-circle fs-12 mr-2" /> Dois Irmãos – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DomFeliciano">
                <i class="fa fa-circle fs-12 mr-2" /> Dom Feliciano – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DomPedroDeAlcantara">
                <i class="fa fa-circle fs-12 mr-2" /> Dom Pedro de Alcântara – RS
              </a>
            </div>
          </div>
          <!-- Cidades E -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                E
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="EldoradoDoSul">
              <i class="fa fa-circle fs-12 mr-2" /> Eldorado do Sul – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Esteio">
              <i class="fa fa-circle fs-12 mr-2" /> Esteio – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Estrela">
              <i class="fa fa-circle fs-12 mr-2" /> Estrela – RS
            </a>
          </div>
          <!-- Cidades F -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                F
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="FazendaVilanova">
              <i class="fa fa-circle fs-12 mr-2" /> Fazenda Vilanova – RS
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Feliz">
              <i class="fa fa-circle fs-12 mr-2" /> Feliz – RS
            </a>
          </div>
          <!-- Cidades G -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                G
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="GeneralCamara">
                <i class="fa fa-circle fs-12 mr-2" /> General Câmara – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Glorinha">
                <i class="fa fa-circle fs-12 mr-2" /> Glorinha – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Gravatai">
                <i class="fa fa-circle fs-12 mr-2" /> Gravataí – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Guaiba">
                <i class="fa fa-circle fs-12 mr-2" /> Guaíba – RS
              </a>
            </div>
          </div>
          <!-- Cidades H -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                H
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Harmonia">
              <i class="fa fa-circle fs-12 mr-2" /> Harmonia – RS
            </a>
          </div>
          <!-- Cidades I -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                I
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ibirama">
                <i class="fa fa-circle fs-12 mr-2" /> Ibirama – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Igrejinha">
                <i class="fa fa-circle fs-12 mr-2" /> Igrejinha – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ilopolis">
                <i class="fa fa-circle fs-12 mr-2" /> Ilópolis – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Imigrante">
                <i class="fa fa-circle fs-12 mr-2" /> Imigrante – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itati">
                <i class="fa fa-circle fs-12 mr-2" /> Itati – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ivoti">
                <i class="fa fa-circle fs-12 mr-2" /> Ivoti – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Imbe">
                <i class="fa fa-circle fs-12 mr-2" /> Imbé – RS
              </a>
            </div>
          </div>
          <!-- Cidades L -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                L
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lagoao">
                <i class="fa fa-circle fs-12 mr-2" /> Lagoão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lajedo">
                <i class="fa fa-circle fs-12 mr-2" /> Lajedo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="LindolfoCollor">
                <i class="fa fa-circle fs-12 mr-2" /> Lindolfo Collor – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="LinhaNova">
                <i class="fa fa-circle fs-12 mr-2" /> Linha Nova – RS
              </a>
            </div>
          </div>
          <!-- Cidades M -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                M
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Maquine">
                <i class="fa fa-circle fs-12 mr-2" /> Maquiné – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MarianaPimentel">
                <i class="fa fa-circle fs-12 mr-2" /> Mariana Pimentel – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MarquesDeSouza">
                <i class="fa fa-circle fs-12 mr-2" /> Marques de Souza – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MatoLeitao">
                <i class="fa fa-circle fs-12 mr-2" /> Mato Leitão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MinasDoLeao">
                <i class="fa fa-circle fs-12 mr-2" /> Minas do Leão – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Montenegro">
                <i class="fa fa-circle fs-12 mr-2" /> Montenegro – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MorrinhosDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Morrinhos do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MorroReuter">
                <i class="fa fa-circle fs-12 mr-2" /> Morro Reuter – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Mostardas">
                <i class="fa fa-circle fs-12 mr-2" /> Mostardas – RS
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Mucum">
                <i class="fa fa-circle fs-12 mr-2" /> Mucum – RS
              </a>
            </div>
          </div>
          <!-- Cidades N -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                N
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="NovaBrescia">
                <i class="fa fa-circle fs-12 mr-2" /> Nova Bréscia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="NovaHartz">
                <i class="fa fa-circle fs-12 mr-2" /> Nova Hartz – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="NovaSantaRita">
                <i class="fa fa-circle fs-12 mr-2" /> Nova Santa Rita – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="NovoHamburgo">
                <i class="fa fa-circle fs-12 mr-2" /> Novo Hamburgo – RS
              </a>
            </div>
          </div>
          <!-- Cidades O -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                O
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Osorio">
              <i class="fa fa-circle fs-12 mr-2" /> Osório – RS
            </a>
          </div>
          <!-- Cidades P -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                P
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PalmaresDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Palmares do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PantanoGrande">
                <i class="fa fa-circle fs-12 mr-2" /> Pantano Grande – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PareciNovo">
                <i class="fa fa-circle fs-12 mr-2" /> Pareci Novo – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Parobe">
                <i class="fa fa-circle fs-12 mr-2" /> Parobé – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PassoDoSobrado">
                <i class="fa fa-circle fs-12 mr-2" /> Passo do Sobrado – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Paverema">
                <i class="fa fa-circle fs-12 mr-2" /> Paverema – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PoçoDasAntas">
                <i class="fa fa-circle fs-12 mr-2" /> Poço das Antas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Portao">
                <i class="fa fa-circle fs-12 mr-2" /> Portão – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PortoAlegre">
                <i class="fa fa-circle fs-12 mr-2" /> Porto Alegre – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PousoNovo">
                <i class="fa fa-circle fs-12 mr-2" /> Pouso Novo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PresidenteLucena">
                <i class="fa fa-circle fs-12 mr-2" /> Presidente Lucena – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Progresso">
                <i class="fa fa-circle fs-12 mr-2" /> Progresso – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Putinga">
                <i class="fa fa-circle fs-12 mr-2" /> Putinga – RS
              </a>
            </div>
          </div>
          <!-- Cidades R -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                R
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Relvado">
                <i class="fa fa-circle fs-12 mr-2" /> Relvado – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioPardo">
                <i class="fa fa-circle fs-12 mr-2" /> Rio Pardo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RocaSales">
                <i class="fa fa-circle fs-12 mr-2" /> Roca Sales – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Rolante">
                <i class="fa fa-circle fs-12 mr-2" /> Rolante – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Riozinho">
                <i class="fa fa-circle fs-12 mr-2" /> Riozinho – RS
              </a>
            </div>
          </div>
          <!-- Cidades S -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                S
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SalvadorDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Salvador do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantaClaraDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Santa Clara do Sul - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantaCruzDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Santa Cruz do Sul - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantaMariaDoHerval">
                <i class="fa fa-circle fs-12 mr-2" /> Santa Maria do Herval - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantoAntonioDaPatrulha">
                <i class="fa fa-circle fs-12 mr-2" /> Santo Antônio da Patrulha - RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJeronimo">
                <i class="fa fa-circle fs-12 mr-2" /> São Jerônimo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoseDoHortencio">
                <i class="fa fa-circle fs-12 mr-2" /> São José do Hortêncio – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoLeopoldo">
                <i class="fa fa-circle fs-12 mr-2" /> São Leopoldo – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoSebastiaoDoCai">
                <i class="fa fa-circle fs-12 mr-2" /> São Sebastião do Cai – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoVendelino">
                <i class="fa fa-circle fs-12 mr-2" /> São Vendelino – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sapiranga">
                <i class="fa fa-circle fs-12 mr-2" /> Sapiranga – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SapucaiaDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Sapucaia do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Segredo">
                <i class="fa fa-circle fs-12 mr-2" /> Segredo – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SentinelaDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Sentinela do Sul – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Serio">
                <i class="fa fa-circle fs-12 mr-2" /> Sério – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SertaoSantana">
                <i class="fa fa-circle fs-12 mr-2" /> Sertão Santana – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sinimbu">
                <i class="fa fa-circle fs-12 mr-2" /> Sinimbu – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sobradinho">
                <i class="fa fa-circle fs-12 mr-2" /> Sobradinho – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantanaDoLivramento">
                <i class="fa fa-circle fs-12 mr-2" /> Santana do Livramento – RS
              </a>
            </div>
          </div>
          <!-- Cidades T -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                T
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tabai">
                <i class="fa fa-circle fs-12 mr-2" /> Tabaí – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tapes">
                <i class="fa fa-circle fs-12 mr-2" /> Tapes – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Taquara">
                <i class="fa fa-circle fs-12 mr-2" /> Taquara – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Travesseiro">
                <i class="fa fa-circle fs-12 mr-2" /> Travesseiro – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tunas">
                <i class="fa fa-circle fs-12 mr-2" /> Tunas – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Taquari">
                <i class="fa fa-circle fs-12 mr-2" /> Taquari – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tavares">
                <i class="fa fa-circle fs-12 mr-2" /> Tavares – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TerraDeAreia">
                <i class="fa fa-circle fs-12 mr-2" /> Terra de Areia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TresCachoeiras">
                <i class="fa fa-circle fs-12 mr-2" /> Três Cachoeiras – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TresCoroas">
                <i class="fa fa-circle fs-12 mr-2" /> Três Coroas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tupandi">
                <i class="fa fa-circle fs-12 mr-2" /> Tupandi – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Teutonia">
                <i class="fa fa-circle fs-12 mr-2" /> Teutônia – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Torres">
                <i class="fa fa-circle fs-12 mr-2" /> Torres – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tramandai">
                <i class="fa fa-circle fs-12 mr-2" /> Tramandaí – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TresForquilhas">
                <i class="fa fa-circle fs-12 mr-2" /> Três Forquilhas – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Triunfo">
                <i class="fa fa-circle fs-12 mr-2" /> Triunfo – RS
              </a>
            </div>
          </div>
          <!-- Cidades U -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                U
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Uruguaiana">
              <i class="fa fa-circle fs-12 mr-2" /> Uruguaiana – RS
            </a>
          </div>
          <!-- Cidades V -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                V
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ValeDoSol">
                <i class="fa fa-circle fs-12 mr-2" /> Vale do Sol – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ValeReal">
                <i class="fa fa-circle fs-12 mr-2" /> Vale Real – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Viamao">
                <i class="fa fa-circle fs-12 mr-2" /> Viamão – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ValeVerde">
                <i class="fa fa-circle fs-12 mr-2" /> Vale Verde – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VenancioAires">
                <i class="fa fa-circle fs-12 mr-2" /> Venâncio Aires – RS
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VeraCruz">
                <i class="fa fa-circle fs-12 mr-2" /> Vera Cruz – RS
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VespasianoCorreia">
                <i class="fa fa-circle fs-12 mr-2" /> Vespasiano Correia – RS
              </a>
            </div>
          </div>
          <!-- Cidades X -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                X
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="XangriLa">
              <i class="fa fa-circle fs-12 mr-2" /> Xangri-Lá – RS
            </a>
          </div>
        </div>
      </section>
      <div class="col-12 mt-50 px-0 d-flex row mx-auto">
        <div class="col-xs-6 col-sm-6 col-lg">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-headset text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center mt-3 fs-17 px-lg-30 fw-600">
            Atendimento personalizado
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-user-secret text-amarelo fs-50" />
            </div>
          </div>
          <h6 class="text-center mt-3 fs-17 fw-600">
            Discrição <span class="d-xs-none">total</span> na investigação
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg mt-xs-40 mt-sm-40 mt-lg-0">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-file-invoice text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center col-sm-11 px-0 mx-auto mt-3 fs-17 fw-600">
            Relatório <span class="d-xs-none">completo</span> de provas
          </h6>
        </div>
        <div class="col-xs-6 col-sm-6 col-lg mt-xs-40 mt-sm-40 mt-lg-0 px-xs-0">
          <div class="d-flex justify-content-center">
            <div class="div-bolinha-sobre d-flex justify-content-center align-items-center">
              <i class="fa fa-mobile text-amarelo fs-50 fw-300" />
            </div>
          </div>
          <h6 class="text-center col-sm-11 px-xs-0 mx-auto mt-3 fs-17 fw-600">
            Celular VIP
          </h6>
        </div>
      </div>
      <div class="col-12 px-xs-0 mt-50">
        <h4 class="text-center fs-xs-20 px-xs-0 col-xl-10 mx-auto fw-600">
          Não perca tempo! Fale com a gente agora mesmo através dos nossos canais de atendimento.
          <span class="d-xs-none">Confie na Acip Detetives para resolver seu problema!</span>
        </h4>
        <div class="d-flex mt-30 justify-content-center row mx-auto">
          <BtnDarkLigueAgora class="col-xs-12 px-xs-0" />
          <BtnDarkFaleNoWhatsapp class="ml-sm-3 mt-xs-10 col-xs-12 px-xs-0" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BtnDarkFaleNoWhatsapp from '../../components/buttons/btn-dark-fale-no-whatsapp.vue'
import BtnDarkLigueAgora from '../../components/buttons/btn-dark-ligue-agora.vue'
export default {
  components: {
    BtnDarkLigueAgora,
    BtnDarkFaleNoWhatsapp
  },
  layout: 'LayoutPadrao',
  head: {
    title: 'Detetive particular no Rio Grande do Sul | Balneário Camboriú | Joinville | Florianópolis | Curitiba | Tubarão | Rio do Sul'
  },
  methods: {
    AltoFeliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alto-Feliz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Alvorada () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Alvorada-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AmaralFerrador () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Amaral-Ferrador-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AntaGorda () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Anta-Gorda-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Arambare () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arambare-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ararica () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ararica-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ArroioDoMeio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Meio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ArroioDoSal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Sal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ArroioDoTigre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-do-Tigre-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ArroioDosRatos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arroio-dos-Ratos-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Arvorezinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Arvorezinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioPinhal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Balneario-Pinhal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Barao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BaraoDoTriunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barao-do-Triunfo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BomRetiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Retiro-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BoqueirãoDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Boqueirao-do-Leao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BomPrincipio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Bom-Principio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Brochier () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Brochier-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Butiá () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Butia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BarraDoRibeiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Barra-do-Ribeiro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CachoeiraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeira-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cachoeirinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cachoeirinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Camaqua () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Camaqua-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampoBom () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Campo-Bom-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CerroBranco () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Branco-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CerroGrandeDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cerro-Grande-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Charqueadas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Charqueadas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Candelaria () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Candelaria-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Canoas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canoas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CanudosDoVale () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Canudos-do-Vale-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CapaoDaCanoa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capao-da-Canoa-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Chuvisca () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Chuvisca-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cidreira () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cidreira-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Colinas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Colinas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CapelaDeSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capela-de-Santana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Capitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capitao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CapivariDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Capivari-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Caraa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Caraa-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CoqueiroBaixo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Coqueiro-Baixo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cristal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cristal-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CruzeiroDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Cruzeiro-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DoisIrmaos () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dois-Irmaos-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DomFeliciano () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Feliciano-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DomPedroDeAlcantara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Dom-Pedro-de-Alcantara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    EldoradoDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Eldorado-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Esteio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Esteio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Estrela () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Estrela-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    FazendaVilanova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Fazenda-Vilanova-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Feliz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Feliz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    GeneralCamara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-General-Camara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Glorinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Glorinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Gravatai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Gravatai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guaiba () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Guaiba-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Harmonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Harmonia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ibirama-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Igrejinha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Igrejinha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ilopolis () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ilopolis-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Imigrante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imigrante-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itati () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Itati-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ivoti () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Ivoti-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Imbe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Imbe-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lagoao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lagoao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lajedo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lajedo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    LindolfoCollor () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Lindolfo-Collor-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    LinhaNova () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Linha-Nova-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Maquine () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Maquine-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MarianaPimentel () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mariana-Pimentel-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MarquesDeSouza () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Marques-de-Souza-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MatoLeitao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mato-Leitao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MinasDoLeao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Minas-do-Leao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Montenegro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Montenegro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MorrinhosDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morrinhos-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MorroReuter () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Morro-Reuter-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Mostardas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mostardas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Mucum () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Mucum-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    NovaBrescia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Brescia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    NovaHartz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Hartz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    NovaSantaRita () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Nova-Santa-Rita-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    NovoHamburgo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Novo-Hamburgo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Osorio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Osorio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PalmaresDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Palmares-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PantanoGrande () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pantano-Grande-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PareciNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pareci-Novo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Parobe () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Parobe-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PassoDoSobrado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Passo-do-Sobrado-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Paverema () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Paverema-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PoçoDasAntas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Poço-das-Antas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Portao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Portao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PortoAlegre () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Porto-Alegre-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PousoNovo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Pouso-Novo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PresidenteLucena () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Presidente-Lucena-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Progresso () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Progresso-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Putinga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Putinga-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Relvado () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Relvado-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioPardo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rio-Pardo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RocaSales () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Roca-Sales-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Rolante () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Rolante-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Riozinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Riozinho-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SalvadorDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Salvador-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantaClaraDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Clara-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantaCruzDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Cruz-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantaMariaDoHerval () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santa-Maria-do-Herval-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantoAntonioDaPatrulha () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santo-Antonio-da-Patrulha-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJeronimo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jeronimo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoseDoHortencio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Jose-do-Hortencio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoLeopoldo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Leopoldo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoSebastiaoDoCai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Sebastiao-do-Cai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoVendelino () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sao-Vendelino-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sapiranga () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapiranga-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SapucaiaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sapucaia-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Segredo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Segredo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SentinelaDoSul () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sentinela-do-Sul-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Serio () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Serio-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SertaoSantana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sertao-Santana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sinimbu () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sinimbu-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sobradinho () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Sobradinho-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantanaDoLivramento () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Santana-do-Livramento-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tabai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tabai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tapes () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tapes-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Taquara () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquara-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Travesseiro () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Travesseiro-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tunas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tunas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Taquari () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Taquari-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tavares () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tavares-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TerraDeAreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Terra-de-Areia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TresCachoeiras () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Cachoeiras-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TresCoroas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Coroas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tupandi () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tupandi-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Teutonia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Teutonia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Torres () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Torres-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tramandai () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tramandai-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TresForquilhas () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Tres-Forquilhas-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Triunfo () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Triunfo-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Uruguaiana () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Uruguaiana-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ValeDoSol () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-do-Sol-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ValeReal () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Real-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Viamao () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Viamao-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ValeVerde () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vale-Verde-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VenancioAires () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Venancio-Aires-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VeraCruz () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vera-Cruz-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VespasianoCorreia () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Vespasiano-Correia-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    XangriLa () {
      this.$router.push('/detetive-particular-no-Rio-Grande-do-Sul/detetive-particular-em-Xangri-La-RS#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .bl-temas {
    border-left: 4px solid #2c3e50;
  }

  .div-bolinha-sobre {
    height: 93px;
    width: 93px;
    border-radius: 50%;
    background-color: var(--black_dark);
  }

  .fa-file-invoice {
    margin-left: 3px !important;
  }
</style>
