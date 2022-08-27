<template>
  <div id="sobre" class="py-70 bg-amarelo">
    <div class="container d-flex align-items-center row mx-auto">
      <div class="col-12 px-xs-0">
        <h2 class="d-flex py-0">
          <div class="bl-temas mr-10 my-1" /> Detetive particular em Santa Catarina
        </h2>
        <p class="fw-600 mt-4">
          Você está procurando um Detetive Particular em <b>Santa Catarina</b>?
          A ACIP DETETIVES PROFISSIONAIS está em <b>Santa Catarina</b> e teremos
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
      <section class="col-12 px-0">
        <div class="container px-xs-0">
          <!-- Cidades A -->
          <div class="position-relative overflow-hidden mt-30 col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-1">
                A
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Agrolandia">
                <i class="fa fa-circle fs-12 mr-2" /> Agrolândia - SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Agronomica">
                <i class="fa fa-circle fs-12 mr-2" /> Agronômica - SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Apiuna">
                <i class="fa fa-circle fs-12 mr-2" /> Apiúna – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Araquari">
                <i class="fa fa-circle fs-12 mr-2" /> Araquari – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ascurra">
                <i class="fa fa-circle fs-12 mr-2" /> Ascurra – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Atalanta">
                <i class="fa fa-circle fs-12 mr-2" /> Atalanta – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Aurora">
                <i class="fa fa-circle fs-12 mr-2" /> Aurora – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AguasMornas">
                <i class="fa fa-circle fs-12 mr-2" /> Águas Mornas – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AlfredoWagner">
                <i class="fa fa-circle fs-12 mr-2" /> Alfredo Wagner – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Angelina">
                <i class="fa fa-circle fs-12 mr-2" /> Angelina – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Anitapolis">
                <i class="fa fa-circle fs-12 mr-2" /> Anitápolis – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="AntonioCarlos">
                <i class="fa fa-circle fs-12 mr-2" /> Antônio Carlos – SC
              </a>
              <a class="d-flex col-auto px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ararangua">
                <i class="fa fa-circle fs-12 mr-2" /> Araranguá – SC
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
              <a class="d-flex col-12 px-0 py-0 mt-1 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioBarraDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Barra do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioCamboriu">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Camboriú - SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioPicarras">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Piçarras – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BarraVelha">
                <i class="fa fa-circle fs-12 mr-2" /> Barra Velha – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BelaVistaDoToldo">
                <i class="fa fa-circle fs-12 mr-2" /> Bela Vista do Toldo – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BeneditoNovo">
                <i class="fa fa-circle fs-12 mr-2" /> Benedito Novo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Blumenau">
                <i class="fa fa-circle fs-12 mr-2" /> Blumenau – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Bombinhas">
                <i class="fa fa-circle fs-12 mr-2" /> Bombinhas – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Botuvera">
                <i class="fa fa-circle fs-12 mr-2" /> Botuverá – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BracoDoTrombudo">
                <i class="fa fa-circle fs-12 mr-2" /> Braço do Trombudo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Brusque">
                <i class="fa fa-circle fs-12 mr-2" /> Brusque – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioArroioDoSilva">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Arroio do Silva – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioGaivota">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Gaivota – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BalnearioRincao">
                <i class="fa fa-circle fs-12 mr-2" /> Balneário Rincão – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Biguacu">
                <i class="fa fa-circle fs-12 mr-2" /> Biguaçu – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="BracoDoNorte">
                <i class="fa fa-circle fs-12 mr-2" /> Braço do Norte – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Camboriu">
                <i class="fa fa-circle fs-12 mr-2" /> Camboriú – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Cacador">
                <i class="fa fa-circle fs-12 mr-2" /> Caçador – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CamposNovos">
                <i class="fa fa-circle fs-12 mr-2" /> Campos Novos – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Chapeco">
                <i class="fa fa-circle fs-12 mr-2" /> Chapecó – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Concordia">
                <i class="fa fa-circle fs-12 mr-2" /> Concórdia – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CampoAlegre">
                <i class="fa fa-circle fs-12 mr-2" /> Campo Alegre – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Canoinhas">
                <i class="fa fa-circle fs-12 mr-2" /> Canoinhas – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="ChapadaoDoLageado">
                <i class="fa fa-circle fs-12 mr-2" /> Chapadão do Lageado – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Corupa">
                <i class="fa fa-circle fs-12 mr-2" /> Corupá – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Canelinha">
                <i class="fa fa-circle fs-12 mr-2" /> Canelinha – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CapivariDeBaixo">
                <i class="fa fa-circle fs-12 mr-2" /> Capivari de Baixo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="CocalDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Cocal do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Criciuma">
                <i class="fa fa-circle fs-12 mr-2" /> Criciúma – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DonaEmma">
                <i class="fa fa-circle fs-12 mr-2" /> Dona Emma – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DoutorPedrinho">
                <i class="fa fa-circle fs-12 mr-2" /> Doutor Pedrinho – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="DionisioCerqueira">
                <i class="fa fa-circle fs-12 mr-2" /> Dionísio Cerqueira – SC
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ermo">
              <i class="fa fa-circle fs-12 mr-2" /> Ermo – SC
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Florianopolis">
              <i class="fa fa-circle fs-12 mr-2" /> Florianópolis – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Forquilhinha">
              <i class="fa fa-circle fs-12 mr-2" /> Forquilhinha – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Fraiburgo">
              <i class="fa fa-circle fs-12 mr-2" /> Fraiburgo – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Garuva">
                <i class="fa fa-circle fs-12 mr-2" /> Garuva – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Gaspar">
                <i class="fa fa-circle fs-12 mr-2" /> Gaspar – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Guabiruba">
                <i class="fa fa-circle fs-12 mr-2" /> Guabiruba – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Guanamirim">
                <i class="fa fa-circle fs-12 mr-2" /> Guanamirim – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="GovernadorCelsoRamos">
                <i class="fa fa-circle fs-12 mr-2" /> Gov. Celso Ramos – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="GraoPara">
                <i class="fa fa-circle fs-12 mr-2" /> Grão Pará – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Gravatal">
                <i class="fa fa-circle fs-12 mr-2" /> Gravatal – SC
              </a>
            </div>
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
                <i class="fa fa-circle fs-12 mr-2" /> Ibirama – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ilhota">
                <i class="fa fa-circle fs-12 mr-2" /> Ilhota – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Imbuia">
                <i class="fa fa-circle fs-12 mr-2" /> Imbuia – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Indaial">
                <i class="fa fa-circle fs-12 mr-2" /> Indaial – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Irineopolis">
                <i class="fa fa-circle fs-12 mr-2" /> Irineópolis – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itaiopolis">
                <i class="fa fa-circle fs-12 mr-2" /> Itaiópolis – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itajai">
                <i class="fa fa-circle fs-12 mr-2" /> Itajaí – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itapema">
                <i class="fa fa-circle fs-12 mr-2" /> Itapema – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Itapoa">
                <i class="fa fa-circle fs-12 mr-2" /> Itapoá – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Ituporanga">
                <i class="fa fa-circle fs-12 mr-2" /> Ituporanga – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Icara">
                <i class="fa fa-circle fs-12 mr-2" /> Içara – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Imarui">
                <i class="fa fa-circle fs-12 mr-2" /> Imaruí – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Imbituba">
                <i class="fa fa-circle fs-12 mr-2" /> Imbituba – SC
              </a>
            </div>
          </div>
          <!-- Cidades J -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                J
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <div class="col-lg px-0 mt-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Joinville">
                <i class="fa fa-circle fs-12 mr-2" /> Joinville – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="JaguaraDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Jaguará do Sul – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="JoseBoiteux">
                <i class="fa fa-circle fs-12 mr-2" /> José Boiteux – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="JacintoMachado">
                <i class="fa fa-circle fs-12 mr-2" /> Jacinto Machado – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Jaguaruna">
                <i class="fa fa-circle fs-12 mr-2" /> Jaguaruna – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Joacaba">
                <i class="fa fa-circle fs-12 mr-2" /> Joaçaba – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Laurentino">
                <i class="fa fa-circle fs-12 mr-2" /> Laurentino – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lages">
                <i class="fa fa-circle fs-12 mr-2" /> Lages – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Laguna">
                <i class="fa fa-circle fs-12 mr-2" /> Laguna – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="LauroMuller">
                <i class="fa fa-circle fs-12 mr-2" /> Lauro Muller – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="LeobertoLeal">
                <i class="fa fa-circle fs-12 mr-2" /> Leoberto Leal – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Lontras">
                <i class="fa fa-circle fs-12 mr-2" /> Lontras – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="LuisAlves">
                <i class="fa fa-circle fs-12 mr-2" /> Luís Alves – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Mafra">
                <i class="fa fa-circle fs-12 mr-2" /> Mafra – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MajorVieira">
                <i class="fa fa-circle fs-12 mr-2" /> Major Vieira – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Massaranduba">
                <i class="fa fa-circle fs-12 mr-2" /> Massaranduba – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MajorGercino">
                <i class="fa fa-circle fs-12 mr-2" /> Major Gercino – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Maracaja">
                <i class="fa fa-circle fs-12 mr-2" /> Maracajá – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MorroDaFumaca">
                <i class="fa fa-circle fs-12 mr-2" /> Morro da Fumaça – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MirimDoce">
                <i class="fa fa-circle fs-12 mr-2" /> Mirim Doce – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MonteCastelo">
                <i class="fa fa-circle fs-12 mr-2" /> Monte Castelo – SC
              </a>
              <a class="d-flex col-12 px-0 mt-1 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="MorroGrande">
                <i class="fa fa-circle fs-12 mr-2" /> Morro Grande – SC
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Navegantes">
              <i class="fa fa-circle fs-12 mr-2" /> Navegantes – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="NovaTrento">
              <i class="fa fa-circle fs-12 mr-2" /> Nova Trento – SC
            </a>
          </div>
          <!-- Cidades O -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                O
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Orleans">
              <i class="fa fa-circle fs-12 mr-2" /> Orleans – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Papanduva">
                <i class="fa fa-circle fs-12 mr-2" /> Papanduva – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Penha">
                <i class="fa fa-circle fs-12 mr-2" /> Penha – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Petrolandia">
                <i class="fa fa-circle fs-12 mr-2" /> Petrolândia – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Picarras">
                <i class="fa fa-circle fs-12 mr-2" /> Piçarras – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Pomerode">
                <i class="fa fa-circle fs-12 mr-2" /> Pomerode – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PortoBelo">
                <i class="fa fa-circle fs-12 mr-2" /> Porto Belo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PousoRedondo">
                <i class="fa fa-circle fs-12 mr-2" /> Pouso Redondo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PresidenteGetulio">
                <i class="fa fa-circle fs-12 mr-2" /> Presidente Getúlio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PresidenteNereu">
                <i class="fa fa-circle fs-12 mr-2" /> Presidente Nereu – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Palhoca">
                <i class="fa fa-circle fs-12 mr-2" /> Palhoça – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PassoDeTorres">
                <i class="fa fa-circle fs-12 mr-2" /> Passo de Torres – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PauloLopes">
                <i class="fa fa-circle fs-12 mr-2" /> Paulo Lopes – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PedrasGrandes">
                <i class="fa fa-circle fs-12 mr-2" /> Pedras Grandes – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="PescariaBrava">
                <i class="fa fa-circle fs-12 mr-2" /> Pescaria Brava – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioDoCampo">
                <i class="fa fa-circle fs-12 mr-2" /> Rio do Campo – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioDoOeste">
                <i class="fa fa-circle fs-12 mr-2" /> Rio do Oeste – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioFortuna">
                <i class="fa fa-circle fs-12 mr-2" /> Rio Fortuna – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioNegrinho">
                <i class="fa fa-circle fs-12 mr-2" /> Rio Negrinho – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Rodeio">
                <i class="fa fa-circle fs-12 mr-2" /> Rodeio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RanchoQueimado">
                <i class="fa fa-circle fs-12 mr-2" /> Rancho Queimado – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Rio do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="RioDosCedros">
                <i class="fa fa-circle fs-12 mr-2" /> Rio dos Cedros – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Salete">
                <i class="fa fa-circle fs-12 mr-2" /> Salete – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantaTerezinha">
                <i class="fa fa-circle fs-12 mr-2" /> Santa Terezinha - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoBentoDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> São Bento do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoFranciscoDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> São Francisco do Sul - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoaquim">
                <i class="fa fa-circle fs-12 mr-2" /> São Joaquim - SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoaoDoItaperiu">
                <i class="fa fa-circle fs-12 mr-2" /> São João do Itaperiú – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Shroeder">
                <i class="fa fa-circle fs-12 mr-2" /> Shroeder – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sangao">
                <i class="fa fa-circle fs-12 mr-2" /> Sangão – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantaRosaDeLima">
                <i class="fa fa-circle fs-12 mr-2" /> Santa Rosa de Lima – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SantoAmaroDaImperatriz">
                <i class="fa fa-circle fs-12 mr-2" /> Santo Amaro da Imperatriz – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoBonifacio">
                <i class="fa fa-circle fs-12 mr-2" /> São Bonifácio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoaoBatista">
                <i class="fa fa-circle fs-12 mr-2" /> São Jõao Batista – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJoaoDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> São Jõao do Sul – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoJose">
                <i class="fa fa-circle fs-12 mr-2" /> São José – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoLudgero">
                <i class="fa fa-circle fs-12 mr-2" /> São Ludgero – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoMartinho">
                <i class="fa fa-circle fs-12 mr-2" /> São Martinho – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="SaoPedroDeAlcantara">
                <i class="fa fa-circle fs-12 mr-2" /> São Pedro de Alcântara – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sideropolis">
                <i class="fa fa-circle fs-12 mr-2" /> Siderópolis – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Sombrio">
                <i class="fa fa-circle fs-12 mr-2" /> Sombrio – SC
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
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Taio">
                <i class="fa fa-circle fs-12 mr-2" /> Taió – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Timbo">
                <i class="fa fa-circle fs-12 mr-2" /> Timbó – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TrombudoCentral">
                <i class="fa fa-circle fs-12 mr-2" /> Trombudo Central – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Treviso">
                <i class="fa fa-circle fs-12 mr-2" /> Treviso – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TrezeDeMaio">
                <i class="fa fa-circle fs-12 mr-2" /> Treze de Maio – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tubarao">
                <i class="fa fa-circle fs-12 mr-2" /> Tubarão – SC
              </a>
            </div>
            <div class="col-lg px-0 mt-lg-4">
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Tijucas">
                <i class="fa fa-circle fs-12 mr-2" /> Tijucas – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="TimbeDoSul">
                <i class="fa fa-circle fs-12 mr-2" /> Timbé do Sul – SC
              </a>
              <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Turvo">
                <i class="fa fa-circle fs-12 mr-2" /> Turvo – SC
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
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Urussanga">
              <i class="fa fa-circle fs-12 mr-2" /> Urussanga – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Urubici">
              <i class="fa fa-circle fs-12 mr-2" /> Urubici – SC
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
            <a class="d-flex col-12 px-0 mt-4 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VidalRamos">
              <i class="fa fa-circle fs-12 mr-2" /> Vidal Ramos – SC
            </a>
            <a class="d-flex col-12 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="VitorMeireles">
              <i class="fa fa-circle fs-12 mr-2" /> Vitor Meireles – SC
            </a>
          </div>
          <!-- Cidades W -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                W
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Witmarsum">
              <i class="fa fa-circle fs-12 mr-2" /> Witmarsum – SC
            </a>
          </div>
          <!-- Cidades X -->
          <div class="position-relative overflow-hidden col-12 d-flex row mx-auto pr-0 pt-1 pb-30 pl-45">
            <div class="d-flex div-bolinha-letra-cidade justify-content-center align-items-center">
              <h5 class="text-dark fw-600 mb-0">
                X
              </h5>
            </div>
            <div class="borda-top-preto-separation" />
            <a class="d-flex col-12 mt-4 px-0 py-0 text-preto-cidades fs-sm-17 fw-600 btn align-items-center" @click.prevent="Xanxere">
              <i class="fa fa-circle fs-12 mr-2" /> Xanxerê – SC
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
  methods: {
    Agrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agrolandia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Agronomica () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Agronomica-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Apiuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Apiuna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Araquari () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Araquari-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ascurra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ascurra-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Atalanta () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Atalanta-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Aurora () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aurora-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AguasMornas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Aguas-Mornas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AlfredoWagner () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Alfredo-Wagner-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Angelina () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Angelina-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Anitapolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Anitapolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    AntonioCarlos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Antonio-Carlos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ararangua () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ararangua-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioBarraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Barra-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioCamboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Camboriu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioPicarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Picarras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BarraVelha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Barra-Velha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BelaVistaDoToldo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bela-Vista-do-Toldo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BeneditoNovo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Benedito-Novo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Blumenau () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Blumenau-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Bombinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Bombinhas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Botuvera () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Botuvera-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BracoDoTrombudo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Trombudo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Brusque () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Brusque-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioArroioDoSilva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Arroio-do-Silva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioGaivota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Gaivota-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BalnearioRincao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Balneario-Rincao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Biguacu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Biguacu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    BracoDoNorte () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Braco-do-Norte-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Camboriu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Camboriu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Cacador () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cacador-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CamposNovos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campos-Novos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Chapeco () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapeco-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Concordia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Concordia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CampoAlegre () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Campo-Alegre-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Canoinhas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canoinhas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    ChapadaoDoLageado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Chapadao-do-Lageado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Corupa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Corupa-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Canelinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Canelinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CapivariDeBaixo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Capivari-de-Baixo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    CocalDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Cocal-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Criciuma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Criciuma-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DonaEmma () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dona-Emma-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DoutorPedrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Doutor-Pedrinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    DionisioCerqueira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Dionisio-Cerqueira-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ermo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ermo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Florianopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Florianopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Forquilhinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Forquilhinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Fraiburgo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Fraiburgo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Garuva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Garuva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Gaspar () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gaspar-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guabiruba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guabiruba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Guanamirim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Guanamirim-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    GovernadorCelsoRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Governador-Celso-Ramos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    GraoPara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Grao-Para-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Gravatal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Gravatal-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ibirama () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ibirama-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ilhota () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ilhota-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Imbuia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbuia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Indaial () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Indaial-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Irineopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Irineopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itaiopolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itaiopolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itajai () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itajai-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itapema () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapema-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Itapoa () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Itapoa-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Ituporanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Ituporanga-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Icara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Icara-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Imarui () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imarui-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Imbituba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Imbituba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Joinville () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joinville-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    JaguaraDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguara-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    JoseBoiteux () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jose-Boiteux-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    JacintoMachado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jacinto-Machado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Jaguaruna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Jaguaruna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Joacaba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Joacaba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Laurentino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laurentino-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lages () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lages-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Laguna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Laguna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    LauroMuller () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lauro-Muller-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    LeobertoLeal () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Leoberto-Leal-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Lontras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Lontras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    LuisAlves () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Luis-Alves-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Mafra () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mafra-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MajorVieira () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Vieira-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Massaranduba () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Massaranduba-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MajorGercino () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Major-Gercino-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Maracaja () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Maracaja-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MorroDaFumaca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-da-Fumaca-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MirimDoce () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Mirim-Doce-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MonteCastelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Monte-Castelo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    MorroGrande () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Morro-Grande-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Navegantes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Navegantes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    NovaTrento () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Nova-Trento-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Orleans () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Orleans-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Papanduva () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Papanduva-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Penha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Penha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Petrolandia () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Petrolandia-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Picarras () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Picarras-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Pomerode () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pomerode-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PortoBelo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Porto-Belo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PousoRedondo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pouso-Redondo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PresidenteGetulio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Getulio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PresidenteNereu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Presidente-Nereu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Palhoca () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Palhoca-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PassoDeTorres () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Passo-de-Torres-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PauloLopes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Paulo-Lopes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PedrasGrandes () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pedras-Grandes-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    PescariaBrava () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Pescaria-Brava-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioDoCampo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Campo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioDoOeste () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Oeste-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioFortuna () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Fortuna-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioNegrinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-Negrinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Rodeio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rodeio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RanchoQueimado () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rancho-Queimado-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    RioDosCedros () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Rio-dos-Cedros-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Salete () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Salete-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantaTerezinha () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Terezinha-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoBentoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bento-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoFranciscoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Francisco-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoaquim () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joaquim-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoaoDoItaperiu () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Itaperiu-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Shroeder () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Shroeder-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sangao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sangao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantaRosaDeLima () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santa-Rosa-de-Lima-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SantoAmaroDaImperatriz () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Santo-Amaro-da-Imperatriz-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoBonifacio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Bonifacio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoaoBatista () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-Batista-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJoaoDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Joao-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoJose () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Jose-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoLudgero () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Ludgero-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoMartinho () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Martinho-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    SaoPedroDeAlcantara () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sao-Pedro-de-Alcantara-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sideropolis () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sideropolis-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Sombrio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Sombrio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Taio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Taio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Timbo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TrombudoCentral () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Trombudo-Central-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Treviso () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treviso-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TrezeDeMaio () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Treze-de-Maio-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tubarao () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tubarao-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Tijucas () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Tijucas-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    TimbeDoSul () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Timbe-do-Sul-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Turvo () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Turvo-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Urussanga () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urussanga-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Urubici () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Urubici-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VidalRamos () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vidal-Ramos-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    VitorMeireles () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Vitor-Meireles-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Witmarsum () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Witmarsum-SC#sobre')
      this.$smoothScroll({
        scrollTo: document.getElementById('sobre'),
        duration: 500,
        offset: -130
      })
    },
    Xanxere () {
      this.$router.push('/detetive-particular-em-Santa-Catarina/detetive-particular-em-Xanxere-SC#sobre')
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
