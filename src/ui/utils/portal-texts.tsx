import LOGOenvolverde from '@app/assets/images/envolverde.png';
import LOGOeconordeste from '@app/assets/images/econordeste_horizontal.png';
import LOGOinfoamazonia from '@app/assets/images/infoamazonia.org.png';
import LOGOoeco from '@app/assets/images/oeco.org.br.png';
import LOGOokbr from '@app/assets/images/okbr.png';
import LOGOProjetoColabora from '@app/assets/images/projetocolabora.com.br.png';
import { CheckBoxFilter } from '@app/models/filters.model';

import { urls } from './urls';

export const TEXTS = {
  contactEmail: 'contato@diariodoclima.org.br',
  defaultSubmitText: 'Continuar',
  stateList: [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF'
  ].sort((a, b) => a.localeCompare(b)),
  cookieAlert: {
    text: 'Nós utilizamos cookies essenciais para o site funcionar e alguns adicionais para entender como você utiliza o Diário do Clima. Confira mais detalhes na Política de Privacidade.'
  },
  passwordValidation: {
    eightChars: 'Ter 8 ou mais caracteres',
    lettersAndNumbers: 'Conter letras e números',
    specialChars: 'Conter caracteres especiais (*,!.&%$#@)',
    uppercaseChar: 'Conter uma letra maiúscula',
  },
  warnModal: {
    cancel: 'Cancelar',
    ok: 'Ok, entendi',
  },
  menu: {
    logoImageAlt: 'Logo do Diário do Clima',
    pro: 'Diário do Clima PRO',
    reports: 'Relatórios',
    search: 'Buscar',
    about: 'Sobre o Diário do Clima',
    buttonSearch: 'Começar a buscar',
    buttonSession: 'Iniciar Sessão',
    contactUs: 'Fale conosco',
    termsAndConditions: 'Termos de uso'
  },
  loggedMenu: {
    myAccount: 'Minha conta',
    myReports: 'Meus relatórios',
    myAlerts: 'Alertas salvos',
    singOut: 'Deslogar',
  },
  footer: {
    about: 'Sobre o Diário do Clima',
    reports: 'Relatórios de análises aprofundadas',
    pro: 'Assinatura PRO',
    termsAndConditions: 'Termos de uso'
  },
  loginForm: {
    title: 'Acesse sua conta',
    subTitle: 'Insira suas credenciais abaixo para acessar todos os recursos',
    errorMessage: 'Ocorreu um erro ao tentar acessar sua conta. Verifique os dados inseridos e tente novamente.',
    register: 'Faça o cadastro',
    doesntHaveAccount: 'Não possui uma conta?',
    inputEmail: 'E-mail',
    inputPassword: 'Senha',
    submit: 'Continuar',
    forgotpassword: 'Esqueceu sua senha?',
  },
  filters: {
    applyFilters: 'Aplicar filtro',
  },
  becomeProModal: {
    title: 'Atualize para a versão PRO',
    subtitle: 'Faça um teste gratuito por 15 dias e acesse todas as funcionalidades disponíveis no Diário do Clima.',
    cancel: 'Cancelar',
    startTest: 'Iniciar período gratuito',
    knowMore: 'Saiba mais sobre a assinatura',
  },
  alertCreatedModal: {
    title: 'Pronto! Agora é só aguardar',
    subtitle: 'Já estamos de olho nos diários oficiais  e enviaremos qualquer novidade com base nos seus filtros',
    createAnother: 'Criar outro alerta',
    continue: 'Continuar',
    cotinueSearch: 'Continuar buscando'
  },
  editEmail: {
    title: 'Edite o e-mail para recebimento dos novos alertas.',
    subtitle: 'O seu e-mail de cadastro continuará sendo',
    submit: 'Salvar e-mail de alerta',
    inputLabel: 'E-mail',
    apiError: 'Ocorreu um erro ao tentar salvar o e-mail. Por favor, tente novamente',
    invalidError: 'O e-mail inserido é inválido',
  },
  modalQuery: {
    title: 'Cadastre palavras-chave no seu alerta e enviaremos as novidades com os termos buscados.',
    inputLabel: 'Ex: corte de árvores',
    apply: 'Aplicar'
  },
  createAlertModal: {
    title: 'Crie um alerta com aspectos da política ambiental que deseja monitorar',
    filters: 'Edite os filtros para receber alertas com os temas desejados',
    localFilter: 'Municípios:',
    themesFilter: 'Subtemas:',
    enteFilter: 'Entes citados:',
    keyWords: 'Adicione palavras-chave',
    keyWordsPlaceHolder: 'Cadastre palavras-chaves na sua busca (Obrigatório)',
    alertDestination: 'Seus alertas serão encaminhados para',
    edit: 'Editar',
    create: 'Criar Alerta',
    error: 'Ocorreu um erro ao cadastrar o alerta. Por favor, tente novamente'
  },
  home: {
    lead: {
      title: 'Encontre um ato ambiental',
      subtitle: 'O Diário do Clima filtra informações dos diários oficiais para você encontrar o que precisa mais fácil e rapidamente',
      buttonTitle: 'Começar a buscar',
      deviceImageAlt: 'Composição de tela de celular com a logo do Diário do Clima e a primeira página de um diário oficial',
    },
    data: {
      title: 'Dados confiáveis baseados no Querido Diário',
      label: {
        city: {
          data: '379',
          featured: 'cidades',
          label: ' já estão disponíveis para buscas',
        },
        diaries: {
          data: '512 mil',
          featured: 'diários oficiais',
          label: ' encontrados pela busca até o momento',
        },
        citiesMore: {
          data: '3075',
          featured: 'cidades',
          label: ' estarão disponíveis em breve',
        }
      }
    },
    weOffer: {
      titleA: 'O que oferecemos no',
      titleB: 'Diário do Clima PRO',
      option: {
        history: 'HISTÓRICO',
        theme: 'TEMAS',
        alerts: 'ALERTAS'
      },
      optionImageAlt: 'Representação visual da opção atualmente selecionada',
      buttonTrial: 'Teste grátis por 15 dias',
      linkAboutSubscription: 'Saiba mais sobre a assinatura',
      leads: {
        history: {
          subtitle: 'Acesse todo o histórico de resultados',
          text: 'Veja tudo o que já foi publicado, além dos três últimos meses, sobre políticas públicas ambientais',
        },
        theme: {
          subtitle: 'Busque por assunto relevante',
          text: 'Filtre os resultados pesquisados por temas inteligentes e encontre respostas para os seus assuntos de interesse',
        },
        alerts: {
          subtitle: 'Receba avisos diários sobre novos atos',
          text: 'Crie alertas personalizados e seja avisado sempre que um novo ato que corresponda à sua busca for publicado',
        },
      } as Record<string, Record<string, string>>
    },
    helpUs: {
      title: 'Ajude o Diário do Clima a crescer e receba benefícios',
      subtitle: 'Ao assinar nossa ferramenta, você contribui para a inclusão de novos recursos e municípios e obtém todas as informações que você e sua equipe precisam sobre políticas públicas ambientais',
      buttonSubscribe: 'Quero apoiar assinando',
      buttonStart: 'Começar a buscar gratuitamente'
    },
    moreData: {
      title: 'Mais dados. Mais insights',
      subtitle: 'Você também pode solicitar relatórios sob medida a nossos profissionais, com dados baseados em diários oficiais e outras fontes, para ajudar pesquisadores, consultores e organizações a estarem a par dos últimos acontecimentos.',
      linkAboutReports: 'Saiba mais sobre os relatórios'
    },
  },
  aboutPage: {
    title: 'SOBRE O DIÁRIO DO CLIMA',
    subTitle: 'Nós estamos aqui para promover transparência',
    description: <span>Acompanhar as decisões dos governos municipais sobre meio ambiente e clima é um desafio no Brasil. Novas autorizações e normas são publicadas todos os dias e afetam o meio ambiente e o cotidiano de pessoas e empresas. Juntar e analisar dados de cada cidade é um trabalho braçal.<br /><br />O Diário do Clima é uma plataforma capaz de agregar dados de políticas ambientais para auxiliar na pesquisa dos atos publicados por municípios brasileiros. Com uso de inteligência artificial, monitoramos diários oficiais para identificar os documentos mais relevantes para quem acompanha o tema. Cada ato é categorizado e organizado, de modo que os usuários possam filtrar e receber alertas sobre temas e locais de interesse.<br /><br />Jornalistas, pesquisadores, ativistas e profissionais dos setores de sustentabilidade podem usar a tecnologia como aliada para monitorar assuntos que, antes, fugiam do radar. Juntos, vamos produzir ações efetivas em prol da sustentabilidade e transparência.<br /><br />A informação que disponibilizamos vai multiplicar nosso poder de ação como sociedade.</span>,
    photoLegend: 'Foto por USGS no Unsplash',
    whereStarted: 'Como tudo começou',
    p1: 'O Diário do Clima foi construído por uma coalizão especializada em temas sociais, ambientais e de transparência de dados. São seis organizações envolvidas: ((o))eco, Eco Nordeste, Agência Envolverde, InfoAmazonia, Open Knowledge Brasil e Projeto #Colabora. O projeto teve início em agosto de 2021 depois de um apoio da Google News Initiative para a sua versão inicial. A interface do site foi desenvolvida pelo estúdio de software Jurema com design de Ster Farache, e o motor de busca usa como fonte de dados o Querido Diário, plataforma de código aberto da Open Knowledge Brasil.',
    objective: 'Nosso propósito é facilitar o acesso a dados sobre o clima para proteger o meio ambiente',
    support: 'Apoie e receba recursos exclusivos',
    becomePro: 'Assine o Diário do Clima e receba todos os benefícios de ser PRO, como a busca em todo o período histórico disponível e a possibilidade de criar alertas personalizados. Com o seu apoio, vamos continuar desenvolvendo novos recursos e abrir os dados de mais cidades para que a plataforma seja cada vez mais útil para você.',
    signUp: 'Quero assinar',
    partnersTitle: 'Quem faz o Diário do Clima',
    accessSite: 'Acessar o site',
    
    secondTitle: 'Este produto tem uma interface pública gratuita, para que possamos focar em temas que são verdadeiramente de interesse público.',
    secondSubTitle: 'A interface possui recursos direcionados ao jornalismo local, que pode focar em temas de maior interesse de seus públicos. Os veículos têm acesso mais fácil a temas de interesse de seu público, o que agiliza a produção de conteúdo e aumenta a necessidade de responsabilização dos governos locais por suas ações.',
    secondBannerButton: 'Conhecer agora',
  },
  becomeProPage: {
    title: 'Torne-se assinante do',
    titleSpan: 'Diário do Clima PRO',
    signDescription: 'Ao assinar, você nos ajuda a desenvolver este projeto sem fins lucrativos e tem acesso aos benefícios do Diário do Clima PRO',
    basicPlanTitle: 'O seu cadastro básico inclui:',
    basicItem: 'Acesso limitado ao conteúdo',
    proPlanTitle: 'A assinatura PRO inclui:',
    proItem1: 'Visualização de resultados de todo o histórico disponível no banco de dados',
    proItem2: 'Filtro de busca por temas inteligentes',
    proItem3: 'Criação de alertas com filtros e palavras-chaves personalizados',
    signUp: 'Quero assinar',
    continue: 'Continuar sem assinatura',
  },
  cnpjPage: {
    cnpjTitle: 'INFORMAÇÕES SOBRE O CNPJ',
    search: 'Buscar atos relacionados',
    situation: 'Situação',
    geralInfo: 'Informações gerais',
    address: 'Endereço',
    partners: 'Sócios',
    noPartners: 'Este CNPJ não possui sócios cadastrados na Receita Federal.',
  },
  myAlerts: {
    alertItem: {
      keyWords: 'Palavras-chave:',
      filters: 'Filtros:',
      delete: 'Remover alerta',
    },
    deleteAlert: {
      title: 'Tem certeza de que deseja remover o alerta?',
      subTitle: 'Você não receberá mais notificações deste alerta e esta configuração será excluída permanentemente.',
      ok: 'Sim, desejo remover',
      cancel: 'Cancelar',
    },
    title: 'Estes são seus alertas para encontrar novas políticas ambientais',
    text1A: 'Crie novos alertas em',
    text1B: 'Criar novo alerta',
    text2A: 'Defina onde prefere receber notificações em',
    text2B: 'Editar e-mail',
    createAlert: 'Criar novo alerta',
    editEmail: 'Editar e-mail',
    alerts: 'Alertas salvos',
    emptyList: 'Você ainda não possui nenhum alerta',
    emptyButtonCreate: 'Criar alerta',
    errorMessage: 'Ocorreu um erro ao tentar excluir este alerta. Por favor, tente novamente.',
  },
  myReports: {
    title: 'Meus relatórios',
    download: 'Baixar relatório',
    knowMore: 'Saiba mais sobre os relatórios',
    simulate: 'Solicitar orçamento',
    emptyList: 'Você ainda não possui nenhum relatório',
  },
  myAccount: {
    title: 'Minha conta',
    subTitleA: 'Usuário',
    subTitleB: 'desde',
    yourData: 'Seus dados',
    remainingTime: (days: number) => `Falta${days > 1 ?'m' : ''} ${days} dia${days > 1 ?'s' : ''} para expirar o teste grátis`,
    password: 'Senha: ••••••••',
    changeEmail: 'Alterar e-mail da conta',
    changePassowrd: 'Alterar senha',
    changeData: 'Alterar dados pessoais',
    plan: 'Detalhes do plano',
    proPlan: 'PRO',
    nextCharge: 'A data da sua próxima cobrança é',
    changePayment: 'Gerenciar informações de pagamento',
    cancelPlan: 'Cancelar assinatura',
    basic: 'Básico',
    startTest: 'Iniciar teste grátis PRO',
    needHelp: 'Precisa de ajuda?',
    contact: 'Entre em contato',
    existingEmail: 'Este e-mail já possui uma conta registrada',
    changeEmailTitle: 'Alterar e-mail da conta',
    saveNewEmail: 'Salvar e-mail',
    updatePassword: 'Ocorreu um erro ao tentar atualizar sua senha. Por favor, tente novamente.',
    updateInfoError: 'Ocorreu um erro ao tentar atualizar suas informações. Por favor, tente novamente.',
    updatePasswordTitle: 'Alterar senha',
    savePassword: 'Salvar senha',
    updateInfoTitle: 'Editar dados pessoais',
    saveInfo: 'Salvar dados',
    changePaymentTitle: 'Alterar dados de pagamento',
    savePayment: 'Salvar dados de pagamento',
    cancellingError: 'Ocorreu um erro ao tentar cancelar seu plano. Por favor, tente novamente. Caso o erro persista, entre em contato conosco.',
    cancelPlanModal: {
      title: 'Deseja realmente cancelar seu plano PRO?',
      subtitle: 'Ao cancelar, você perderá acesso aos recursos PRO e deixará de contribuir com a evolução desta ferramenta.',
      cancel: 'Voltar',
      ok: 'Cancelar plano',
    },
  },
  notFound: {
    title: '404 - Página não encontrada',
    subTitle: 'A página que você tentou acessar não existe.',
    text: 'Não foi possível encontrar nenhuma página neste endereço. Você pode voltar à página anterior ou navegar pelos links úteis abaixo para tentar localizar o que estava buscando. Se você acredita que isso foi um erro do Diário do Clima, por favor, entre em contato.',
    links: {
      title: 'Links úteis:',
      search: 'Faça buscas em diários',
      registration: 'Não possui uma conta? Se cadastre',
      pro: 'Já possui uma conta gratuita? Veja as vantagens de ser PRO',
      reports: 'Solicite relatórios personalizados',
      about: 'Sobre o Diário do Clima',
    },
  },
  startSearchPage: {
    title: 'Vamos começar a buscar!',
    proText: 'Pronto, agora você pode utilizar todos as funcionalidades disponíveis no nosso plano PRO',
    basicText: 'Pronto, agora você já pode utilizar o Diário do Clima para encontrar uma política ambiental',
    start: 'Começar a buscar',
  },
  termsPage: {
    title: 'Termos de uso e política de privacidade',
    section: [
      {
        title: '1. TERMOS DE USO',
        titleSize: 'h3',
        paragraphs: [
          '1.1. A plataforma Diário do Clima foi construída por uma coalizão de seis organizações especializada em temas sociais, ambientais e de transparência de dados: ((o))eco, Eco Nordeste, Agência Envolverde, InfoAmazonia, Open Knowledge Brasil e Projeto #Colabora. Seu objetivo é facilitar o acompanhamento das decisões dos governos municipais brasileiros sobre meio ambiente e clima, na medida em que monitora diários oficiais e identifica os documentos mais relevantes sobre os temas.',
          <span>1.2. Nesse sentido, as informações disponíveis na plataforma não têm caráter oficial e são mera reprodução do conteúdo publicado por prefeituras em seus respectivos diários oficiais. O acesso a uma parte das informações – oriundas de documentos publicados nos últimos 3 meses – é gratuito, ao passo que o acesso aos resultados de todo o histórico disponível, associado a outras funcionalidades, na modalidade “PRO”, é oferecido <a style={{color: '#52ce5f'}} href="https://diariodoclima.org.br/planos" target="_blank" rel="noopener">mediante assinatura</a>. Além disso, é possível solicitar o serviço de confecção de relatórios, desenvolvidos por especialistas que integram as organizações da coalizão, contendo análises aprofundadas sobre dados extraídos do Diário do Clima. Em todos esses casos, é solicitado que a pessoa usuária faça um breve cadastro (saiba mais abaixo, na seção 2 – Política de Privacidade).</span>
        ]
      }, 
      {
        title: '1.3. Como a plataforma funciona',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          <span>1.3.1. O motor de busca do Diário do Clima utiliza como fonte de dados o <a style={{color: '#52ce5f'}} href="http://queridodiario.ok.org.br" target="_blank" rel="noopener">Querido Diário</a> (QD), plataforma de código aberto desenvolvida e mantida pela Open Knowledge Brasil. O código do QD está disponível em <a style={{color: '#52ce5f'}} href="https://github.com/okfn-brasil?q=querido-diario&amp;type=all&amp;language=&amp;sort=" target="_blank" rel="noopener">repositórios públicos no GitHub</a>, podendo ser auditado por qualquer pessoa.</span>,
          <span>1.3.2. Em resumo, a tecnologia por trás do QD funciona da seguinte forma: robôs fazem diariamente a varredura dos <a style={{color: '#52ce5f'}} href="https://queridodiario.ok.org.br/cidades-disponiveis" target="_blank" rel="noopener">diários oficiais que já foram incorporados</a> à plataforma. Essa ferramenta foi construída de acordo com boas práticas de desenvolvimento, de maneira a não sobrecarregar sites públicos com requisições excessivas.</span>,
          '1.3.3. Havendo novo conteúdo disponível, a informação é coletada na forma bruta em que se encontra (PDF, por exemplo), os documentos são armazenados e seu conteúdo é extraído e convertido para o formato TXT (texto puro). Em seguida, esse conteúdo é indexado e também armazenado em um servidor mantido em nuvem e administrado pela OKBR.',
          <span>1.3.4. O Querido Diário disponibiliza esses dados de duas formas: em uma <a style={{color: '#52ce5f'}} href="http://queridodiario.ok.org.br" target="_blank" rel="noopener">interface de busca</a> e por meio de uma <a style={{color: '#52ce5f'}} href="https://queridodiario.ok.org.br/api/docs" target="_blank" rel="noopener">API</a> – sigla do inglês para o termo “Application Programming Interface”, ferramenta para pessoas desenvolvedoras que desejem reutilizar o conteúdo de outras formas, como realizando consultas automáticas, por exemplo.</span>,
          '1.3.5. A plataforma do Diário do Clima utiliza a API do QD e, por meio de automatização tecnológica, identifica os resultados relacionados a meio ambiente e clima. Portanto, ao realizar uma busca na plataforma, a pessoa usuária obterá resultados que já passaram por um filtro automático, podendo assim se concentrar em seus temas de interesse. Isso só é possível graças a um amplo processo de curadoria realizado por especialistas que integram a equipe do Diário do Clima, no qual a principal tarefa é “educar” o algoritmo da plataforma para elaborar tal filtro, que está sob constante revisão e aprimoramento. Após a identificação dos excertos filtrados, a plataforma utiliza técnicas de inteligência artificial para ranquear os resultados, a fim de destacar nas primeiras posições os documentos mais importantes.',
          '1.3.6. Vale ressaltar que o Diário do Clima não realiza qualquer operação com o objetivo de alterar o conteúdo original das informações oficiais publicadas nos diários oficiais. No entanto, a operação de raspagem e extração do texto puro pode provocar erros de formatação em conteúdos que estavam dispostos em tabelas ou imagens, ou problemas de acentuação, grafia etc. Por isso, o documento original também é oferecido nos resultados de busca para checagem por parte da pessoa usuária.',
          <span>1.3.7. Da mesma forma, a atualização da ferramenta, realizada diariamente, também pode sofrer interrupções ou falhas técnicas, e o conteúdo de determinado município pode ter lacunas ou indisponibilidade por certo tempo, até que a falha possa ser solucionada. Diante disso, para acessar diretamente o diário oficial de determinado município, é possível consultar o link na base de dados do <a style={{color: '#52ce5f'}} href="https://censo.ok.org.br" target="_blank" rel="noopener">Censo Querido Diário</a>, de forma a localizar a informação oficial original.</span>,
        ]
      },
      {
        title: '1.4. Como as assinaturas funcionam',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '1.4.1. A plataforma disponibiliza dois planos de assinatura: “básico” e “PRO”.',
          '1.4.2. O plano “básico” possibilita à pessoa usuária fazer buscas por palavras-chave ou CNPJ; buscas com sintaxe avançada; filtrar as buscas por município; filtrar resultados com termos relevantes pré-selecionados; além de visualizar todos os resultados publicados nos últimos 3 meses. A assinatura do plano “básico” pode ser cancelada a qualquer tempo por meio da exclusão da conta na plataforma.',
          '1.4.3. O plano “PRO” possibilita à pessoa usuária, além de contar com as funcionalidades do plano “básico”: visualizar resultados de todo o histórico disponível no banco de dados; fazer buscas com filtro por temas inteligentes; e criar alertas com filtros e palavras-chave personalizadas.',
          '1.4.4. O pagamento para o plano “PRO” só será efetivado após um período de 15 dias para testes, e renovado mensalmente até que a assinatura seja cancelada. O cancelamento do plano “PRO” pode ser realizado a qualquer tempo por meio da própria plataforma e a assinatura terá validade até o encerramento do mês pago. O Diário do Clima se reserva o direito de não restituir valores de mensalidades já pagas e devidamente debitadas após o período de testes.',
        ]
      },
      {
        title: '1.5. A quem pertencem as informações disponibilizadas pelo Diário do Clima?',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '1.5.1. As informações dos diários oficiais são consideradas públicas e, portanto, é direito de qualquer pessoa acessá-las, reutilizá-las e redistribuí-las para quaisquer fins — nos termos da Lei de Acesso à Informação - LAI (Lei Federal 12.527/2011) e normas relacionadas. No caso do Diário do Clima, as operações realizadas modificam o formato da informação pública com o objetivo de ampliar e democratizar seu acesso, uma vez que a forma original não atende aos requisitos de formato legível por máquinas previsto na legislação. Além disso, realiza um filtro prévio a fim de selecionar e destacar resultados relacionados a meio ambiente e clima. Não há qualquer tipo de parceria da plataforma com os órgãos públicos responsáveis pelos respectivos diários oficiais, e a veracidade das informações depende única e exclusivamente do ente público que as divulgou originalmente.',
        ]
      },
      {
        title: '1.6. O que você pode fazer com as informações obtidas por meio do Diário do Clima?',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '1.6.1. Por serem de natureza pública, as informações dos diários oficiais são disponibilizadas sob licenças livres, estejam elas declaradas ou não pelos órgãos públicos responsáveis por sua publicação (conforme art. 4º, inciso IV, e art. 29, caput, LAI). Isso significa que podem ser livremente acessadas, reutilizadas e redistribuídas por qualquer pessoa e para qualquer finalidade lícita. Todas as outras informações produzidas pela equipe do Diário do Clima e publicadas na plataforma, tais como relatórios, análises, boletins, reportagens são disponibilizadas sob licença Creative Commons CC-BY-NC-SA 4.0, o que significa que podem ser livremente reutilizadas desde que (a) citada a fonte, (b) não se faça uso comercial, (c) os trabalhos derivados sejam licenciados da mesma forma – salvo quando apontada outra licença específica no material em questão. Já os relatórios solicitados sob demanda, contendo análises aprofundadas sobre dados extraídos do Diário do Clima, serão entregues exclusivamente às partes contratantes, com alguns direitos reservados, sob termos a serem acordados.',
          '1.6.2. Ressaltamos que quaisquer decisões que as pessoas usuárias de tais informações — seja dos diários oficiais ou dos documentos produzidos pela equipe do Diário do Clima — adotarem a partir do seu uso é de sua responsabilidade exclusiva. Finalmente, salientamos que a plataforma deve ser utilizada tão-somente para consulta aos dados públicos, respeitando a finalidade pela qual tais dados são disponibilizados.',
          '1.6.3. A arquitetura da plataforma e as fontes de dados acessadas por ela poderão ser modificadas a qualquer momento e a exclusivo critério da coalizão que administra o Diário do Clima.',
        ]
      },
      {
        title: '1.7. O que fazer caso identifique uma informação que considere incorreta ou se sinta prejudicado(a) por uma informação pessoal sua que foi publicada?',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '1.7.1. Todas as informações divulgadas pelos diários oficiais brasileiros, incluindo dados pessoais, são públicas. O Diário do Clima apenas reproduz os mesmos dados publicados pelos entes públicos em seus diários oficiais em um formato mais acessível e amigável, e a partir de um filtro que prioriza a seleção de resultados relacionados a meio ambiente e clima. Dessa forma, não nos responsabilizamos pela veracidade, integridade ou qualidade dessas informações, bem como por eventuais violações decorrentes de publicação de informações pessoais. Por divulgar apenas os dados necessários segundo a finalidade específica da publicação nos diários oficiais, o Diário do Clima tampouco se vê na obrigação legal de remover quaisquer dados da plataforma.',
          '1.7.2. Em caso de questionamento quanto à veracidade, à integridade ou à qualidade de qualquer informação, recomendamos que as pessoas titulares de dados ou outras partes interessadas contactem diretamente o ente responsável pela publicação original, por meio de seus órgãos de controle (como ouvidoria ou controladoria) ou da pessoa encarregada pelo tratamento dos dados naquela instituição, de acordo com o art. 23, inciso III, da Lei Geral de Proteção de Dados - LGPD (Lei Federal 13.709/2018).',
        ]
      },
      {
        title: '2. POLÍTICA DE PRIVACIDADE',
        titleSize: 'h3',
        paragraphs: []
      }, 
      {
        title: '2.1. Quanto ao acesso aos serviços oferecidos pela plataforma',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '2.1.1. Para a utilização da plataforma por meio da assinatura básica (gratuita), é solicitado um cadastro simples para criação de conta, que coleta os seguintes dados: nome completo, endereço de e-mail, gênero, área de atuação, estado e cidade de residência, além de senha de acesso. Esses dados são coletados com a finalidade de criação e manutenção da conta da pessoa usuária na plataforma e a geração de dados estatísticos sobre o perfil demográfico das pessoas usuárias, e são compartilhados exclusivamente entre as organizações da coalizão que gerenciam o Diário do Clima, no contexto da finalidade mencionada. Tais dados são armazenados em ambiente seguro até que a pessoa usuária solicite a exclusão de sua conta.',
          <span>2.1.2. Para utilização da plataforma por meio da assinatura PRO, são solicitadas outras informações: dados completos do cartão de crédito, endereço completo do titular, CPF, data de nascimento e telefone. Esses dados são coletados com a finalidade exclusiva de processar o pagamento da assinatura, sendo processados e armazenados pelo gateway de pagamento PagSeguro, que é responsável por validar a transação e automaticamente informar a plataforma que é possível oferecer o nível de acesso PRO. Desse modo, o Diário do Clima não armazena e não tem acesso às informações do cartão de crédito, CPF ou data de nascimento de clientes. Para ter acesso à política de Segurança Cibernética do PagSeguro, <a style={{color: '#52ce5f'}} href="https://pagseguro.uol.com.br/politica-de-seguranca-cibernetica" target="_blank" rel="noopener">clique aqui</a>.</span>,
          '2.1.3. Para solicitar relatórios contendo análises aprofundadas sobre dados extraídos do Diário do Clima, são solicitados os seguintes dados: nome completo, endereço de e-mail, telefone, além de cidades, horizonte temporal e temas de interesse. Esses dados são coletados com a finalidade de elaboração de proposta comercial que atenda à solicitação enviada pelo formulário, além de contactar a pessoa ou organização solicitante, e são compartilhados exclusivamente entre as organizações da coalizão que gerenciam o Diário do Clima, no contexto da finalidade mencionada. A coleta desses dados não implica a criação de conta na plataforma e as informações são armazenadas em ambiente seguro até que a proposta seja apresentada à parte solicitante.',
        ]
      },
      {
        title: '2.2. Quanto ao processamento das informações disponibilizadas',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '2.2.1. Embora apresente níveis de acesso mediante assinatura paga e ofereça relatórios analíticos como serviço, o Diário do Clima obtém remuneração apenas pelos serviços oferecidos na plataforma e de desenvolvimento de análises sobre os dados de órgãos oficiais nela disponibilizados. Dessa forma, em nenhuma hipótese o Diário do Clima vende, repassa ou doa informações pessoais de pessoas usuárias a terceiros.',
          '2.2.2. É possível que, ao realizar o processamento de dados públicos, a plataforma acabe por coletar e republicar dados pessoais de quaisquer pessoas em atividade pública ou interação com entes públicos, e que foram originalmente divulgados por esses entes em seus respectivos diários oficiais. São exemplos desses dados: nomes, CPFs, endereços, idades etc.',
          '2.2.3. Neste caso, o Diário do Clima usa de boa-fé que esses dados passaram por avaliação do órgão público e foram presumivelmente disponibilizados de forma regular pela administração pública. Sendo assim, agimos com a premissa de que esse tipo de informação é de interesse público e, portanto, a base legal para esse tratamento é a de atender legítimo interesse em razão do exercício regular do direito de controle social da administração pública (art. 7º, inciso IX da LGPD c/c art. 3º, incisos II, III e V, e art. 31, parágrafo 3º, incisos IV e V e §4º da LAI). Como consequência disso, o Diário do Clima não necessita de uma autorização para tratamento de tais dados.',
        ]
      },
      {
        title: '2.3. Quanto à finalidade do tratamento das informações disponibilizadas',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          '2.3.1. Assim como todas as informações públicas republicadas pelo Diário do Clima em formato aberto, eventuais informações pessoais que tenham sido disponibilizadas pelos órgãos públicos são tratadas pela plataforma com a finalidade de promover o acesso aberto e amigável a essa informação pública, além de prestar os serviços descritos neste documento. Não editamos ou alteramos o conteúdo de qualquer informação original e tampouco nos responsabilizamos por usos irregulares que terceiros possam fazer dessa informação.',
          '2.3.2. Novos conteúdos são atualizados diariamente — a menos que haja falha técnica na coleta de dados — e armazenados por tempo indeterminado, uma vez que o objetivo desse armazenamento é disponibilizar a série histórica de publicações dos diários oficiais à medida que essa coleta for possível e viável.',
          '2.3.3. A controladora dos dados disponíveis na plataforma é a coalizão que gerencia o Diário do Clima e eventuais dúvidas poderão ser encaminhadas para o email contato ARROBA diariodoclima.org.br',
        ]
      },
      {
        title: '2.4. Quanto às estatísticas de acesso',
        titleSize: 'h4',
        paragraphs: [],
        list: [
          <span>2.4.1. Com a finalidade de coletar estatísticas de acesso, de modo a saber quantas pessoas visitantes utilizam a plataforma e como interagem com seus conteúdos internos, o Diário do Clima dispõe da ferramenta Google Analytics, que utiliza principalmente cookies primários para registrar tais dados. <a style={{color: '#52ce5f'}} href="https://support.google.com/analytics/answer/6004245#zippy=%2Cnossa-pol%C3%ADtica-de-privacidade%2Ccookies-e-identificadores-do-google-analytics" target="_blank" rel="noopener">Esta página</a> apresenta a política de privacidade da ferramenta, bem como o modo como ela opera e como é possível proteger os seus dados ao acessar sites que a utilizam. Informações gerais e agregadas sobre as estatísticas da plataforma poderão ser publicadas pelo Diário do Clima e/ou compartilhadas com parceiros, contratantes, apoiadores e financiadores.</span>,
        ]
      },
      {
        title: '',
        titleSize: 'h4',
        paragraphs: [
          'Estes documentos ─ “Termos de uso” e “Política de privacidade” ─ foram publicados em 31/08/2023, data de lançamento da plataforma, e sempre poderão ser consultados por meio desta página. Eventuais atualizações nos documentos poderão ocorrer a qualquer tempo e sem aviso prévio, cabendo a quem utiliza a plataforma consultá-los.',
        ]
      },
    ]
  },
  plansPage: {
    title: 'Diário do Clima PRO',
    subtitle: 'Acesse todos os benefícios e nos ajude a crescer',
    startTest: 'Iniciar teste gratuito',
    testCost: 'Teste sem custos por 15 dias • Depois, R$ 19,90/mês',
    testWarn: 'Cancele a qualquer momento. Enviaremos um lembrete 2 dias antes do término do período de testes',
    cardsTitle: 'Assinatura',
    cardsSubTitle: 'Tenha nas mãos todas as informações que você precisa sobre políticas ambientais.',
    basic: 'Básico',
    basicDesc: 'Para pessoas ou organizações que estão apenas começando a explorar as políticas ambientais',
    basicPrice: 'Grátis',
    state: 'Você já está utilizando esta versão.',
    startSearch: 'Começar a buscar',
    basicItem1: 'Busca por palavra-chave ou CNPJ',
    basicItem2: 'Busca avançada e/ou',
    basicItem3: 'Filtro por município',
    basicItem4: 'Visualização de atos publicados nos últimos 3 meses',
    pro: 'PRO',
    proDesc: 'Para organizações que precisam das informações fundamentais sobre políticas ambientais',
    proPrice: 'R$ 19,90',
    perMonth: '/mês',
    startTestLink: 'Começar teste gratuito',
    signUp: 'ou assinar agora',
    proItem1: <span>Visualização de resultados de <span className='underline'>todo o histórico disponível</span> no banco de dados</span>,
    proItem2: 'Filtro de busca por temas inteligentes',
    proItem3: 'Criação de alertas com filtros e palavras-chaves personalizadas',
    preOrder: 'Encomende um relatório',
    preOrderDesc: 'Para organizações que precisam de conteúdos personalizados sobre um determinado assunto, selecionados e analisados por especialistas.',
    simulate: 'Encomendar relatório',
    discount: '50% para organizações que não visam lucro',
    discountDesc: 'Seu impacto é importante. O Diário do Clima apoia pessoas e organizações independentes que desejam utilizar nosso conteúdo para transformar a sociedade. Para solicitar seu desconto, escreva-nos um e-mail.',
    getDiscount: 'Solicitar desconto',
    faq: 'Perguntas frequentes',
    faqItems: [
      {
        title:'Como funciona a assinatura PRO do Diário do Clima?',
        text: 'Ao assinar com um cartão de crédito, você será cobrado mensalmente e terá acesso a todos os recursos PRO. Você pode cancelar a qualquer momento e, se fizer isso, vai passar a ter acesso aos recursos básicos assim que o ciclo de sua assinatura terminar.'
      },
      {
        title:'Quais formas de pagamento são aceitas?',
        text: 'Aceitamos apenas pagamento por cartão de crédito. Os seus dados estão seguros, não teremos acesso ao número completo do seu cartão. O pagamento é intermediado e processado pelo Pagseguro.'
      },
      {
        title:'Quão seguro é o Diário do Clima?',
        text: 'O Diário do Clima se responsabiliza pela adoção e manutenção de medidas de segurança, técnicas e administrativas, que visam à proteção dos dados pessoais contra situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado ou ilícito, bem como processamento discriminatório de informações, conforme critérios definidos pelos melhores padrões de mercado e em consonância com a legislação aplicável. Confira nossos termos de uso para mais informações.'
      },
      {
        title:'Como eu cancelo minha assinatura do Diário do Clima?',
        text: <div>
          <p>O procedimento de cancelamento deve ser realizado pelo assinante. O mesmo pode ser realizado de forma simples e segura, através das configurações de seu perfil.</p>

          <p>
            <li>1. Realize o <a style={{color: '#52ce5f'}} href='/?login=open'>login</a> em seu perfil assinante;</li>
      
            <li>2. Acesse a página <a style={{color: '#52ce5f'}} href='/meus-dados'>Minha conta</a> </li>
      
            <li>3. Em seguida, junto aos Detalhes do plano, clique em Cancelar Assinatura.</li>
          </p>
        </div>
      },
    ]
  },
  purchasePage: {
    title: 'Comece seu período de 15 dias de testes de forma gratuita.',
    subTitle: 'Usufrua dos benefícios de ser PRO sem compromisso. Cancele a qualquer momento.',
    detailsTitle: 'Detalhes da assinatura',
    perMonth: '/mês*',
    getPlanError: 'Ocorreu um erro ao carregar o plano PRO. Por favor, recarregue a página. Caso o erro persista, entre em contato conosco.',
    detailAlert: '* cobrado mensalmente após o período de 15 dias de testes',
    purchaseTerms: <span>
      Ao clicar em assinar você está concordando com nossos
      <a href={urls.terms.url} className='hover-animation blue-link'> termos de uso e política de privacidade. </a>
      Sua assinatura será <b>renovada automaticamente</b> todo mês ao realizar a cobrança no seu cartão 
      de crédito cadastrado até que você realize o cancelamento. <br/>
      Você pode cancelar a qualquer momento antes do próximo ciclo de pagamento.
    </span>,
    submitLabel: 'Assinar',
    errors: {
      errorPartA: 'Ocorreu um erro ao tentar',
      errorPartB: 'Por favor, verifique se os dados foram inseridos corretamente e tente novamente.',
      onPayment: 'realizar o pagamento',
      onCard: 'cadastrar seu cartão',
      onAddress: 'cadastrar o endereço',
      onPhone: 'cadastrar o telefone',
      onPlan: 'cadastrar seu novo plano'
    },
    formTitle: 'Detalhes do pagamento',
    labels: {
      card: 'Número do cartão de crédito',
      name: 'Nome impresso no cartão',
      validity: 'Data de validade',
      cvv: 'CVV',
      address: 'Endereço',
      number: 'Número',
      district: 'Bairro',
      complement: 'Complemento (opcional)',
      city: 'Cidade',
      state: 'Estado',
      cep: 'CEP',
      cpf: 'CPF',
      birthday: 'Data de nascimento',
      phone: 'Telefone',
    }
  },
  registration: {
    usedEmail: 'Este endereço de e-mail já possui uma conta cadastrada',
    error: {
      errorMessage: 'Ocorreu um erro ao tentar criar a sua conta. Por favor, tente novamente.',
      reason: 'Motivo do erro:',
      tryAgain: 'Clique aqui para voltar ao início do cadastro',
    },
    titlePageA: 'Crie uma conta para começar a buscar no Diário do Clima',
    titlePageB: 'Boas vindas ao Diário do Clima',
    subtitle: 'Queremos te conhecer um pouco melhor! Complete seu cadastro',
    agree: 'Ao se cadastrar, você está aceitando os nossos',
    terms: 'Termos de uso',
    contact: 'Fale conosco',
    haveAccount: 'Já possui uma conta?',
    login: 'Faça o login',
    labels: {
      name: 'Nome Completo',
      email: 'E-mail',
      gender: 'Gênero',
      area: 'Área de Atuação',
      state: 'Estado',
      city: 'Cidade',
      lastSubmit: 'Finalizar'
    },
  },
  reportsPage: {
    simulation: {
      title: 'Solicite o orçamento para um relatório personalizado',
      subTitle: 'Você pode encomendar um relatório, que faz uso da base de dados do Diário do Clima, para organizações especialistas. Preencha o formulário abaixo e aguarde um orçamento pelos meios de contato informados.',
      value: 'Valor estimado',
      submitError: 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.',
      message: (phone: string, description: string, horizon: string, cities: string[], themes: CheckBoxFilter) => {
        const selectedThemes: string[] = [];
        Object.keys(themes).forEach(theme => {
          if(themes[theme]) {
            selectedThemes.push(theme);
          }
        });

        return `
          Telefone: ${phone}
          Descrição: ${description}
          Horizonte temporal: ${horizon}
          Cidades de interesse: ${cities.join(',')}
          Temas: ${selectedThemes.join(',')}
        `;
      }
    },
    submitButton: 'Solicitar orçamento',
    error: 'Ocorreu um erro ao carregar os relatórios públicos.',
    submitError: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.',
    submitSuccess: {
      title: 'Seu pedido foi enviado com sucesso!',
      subtitle: 'Agora é só aguardar uma resposta de nossos especialistas.',
      button: 'ok',
    },
    reloadPage: 'Recarregar página',
    title: 'Relatórios de análises aprofundadas do Diário do Clima',
    subtitle: 'Informações qualificadas, baseadas nos diários oficiais, selecionadas e avaliadas por profissionais. Mais resultados e insights do que a interface do Diário do Clima oferece.',
    simulateButton: 'Solicitar um orçamento',
    professionals: 'Para profissionais de pesquisa e consultores',
    professionalsDesc: 'Obtenha uma visão geral e abrangente sobre um tema',
    organizations: 'Para organizações',
    organizationsDesc: 'Obtenha dados e insights para tomar melhores decisões',
    reportTitle: 'Nome do relatório de exemplo',
    report1Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel accumsan massa, vitae bibendum turpis. Phasellus venenatis nunc in nisl lacinia, sed consequat nunc lobortis. Ut pellentesque, ligula fermentum imperdiet posuere, magna lorem sodales massa, ac posuere tortor magna vel quam. Nunc eu feugiat tellus, et luctus magna. Proin sodales tempus ultricies. Fusce tristique metus vitae enim egestas, fringilla imperdiet nulla ultrices. Nullam sed lacus ac erat ultricies hendrerit. Nulla sit amet sem dolor. Donec eros est, sagittis non metus ut, tempus facilisis sem.',
    report2Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel accumsan massa, vitae bibendum turpis. Phasellus venenatis nunc in nisl lacinia, sed consequat nunc lobortis. Ut pellentesque, ligula fermentum imperdiet posuere, magna lorem sodales massa, ac posuere tortor magna vel quam. Nunc eu feugiat tellus, et luctus magna. Proin sodales tempus ultricies. Fusce tristique metus vitae enim egestas, fringilla imperdiet nulla ultrices. Nullam sed lacus ac erat ultricies hendrerit. Nulla sit amet sem dolor. Donec eros est, sagittis non metus ut, tempus facilisis sem.',
    reportButton: 'Ver relatório',
    doubts: 'Dúvidas?',
    knowMore: 'Quer saber mais sobre os dados em seu relatório? ',
    contact: 'Entre em contato',
    contactDesc: 'para entender como o seu relatório será construído e o que podemos fazer, nossos especialistas estão prontos para ajudá-lo com insights aprofundados.'
  },
  forgotPassword: {
    title: 'Esqueceu a senha?',
    text: 'Insira seu e-mail cadastrado e nós enviaremos um link para redefinir sua senha.',
    button: 'Enviar',
    buttonClose: 'Ok',
    emailInvalid: 'O e-mail inserido é inválido',
    emailLabel: 'E-mail',
    sentTitle: 'E-mail enviado com sucesso.',
    sentText: 'Acesso o link recebido por e-mail. Verifique sua caixa de entrada e também a caixa de spam.',
    apiError: 'Ocorreu um erro ao tentar enviar a mensagem. Por favor, tente novamente.',
    notFound: 'Não encontramos seu e-mail cadastrado em nosso site. Verifique se digitou corretamente.',
  },
  defineNewPassword: {
    title: 'Redefinir senha',
    text: 'Digite uma nova senha',
    button: 'Redefinir',
    inputLabel: 'Nova senha',
    error: 'A senha deve atender todos os requisitos',
    apiError: 'Ocorreu um erro ao tentar redefinir a senha. Por favor, tente novamente',
    sentTitle: 'A senha foi redefinida com sucesso!',
    sentButton: 'Entrar',
    expired: 'O link expirou. Por favor, tente novamente.'
  },
  searchPage: {
    advancedSearchTitle: <span>Para usar um desses caracteres literalmente, escape-o com uma barra invertida (\).</span>,
    advancedSearch: [
      {
        title: '| entre termos significa operação "OU"',
        desc: 'Também conhecido como “operador OR”, funciona usando o símbolo de barra vertical ( | ) para buscar um termo ou outro em toda extensão do excerto. Experimente ver os resultados da busca por resíduo | lixo e repare como são de trechos que tem pelo menos uma das palavras em seu conteúdo. Atenção: Este é o operador padrão no Diário do Clima. Se você não explicitar qual operador quer utilizar, a ferramenta vai sempre adotá-lo.',
        ex: 'resíduo | lixo',
      },
      {
        title: '+ entre termos significa operação "E"',
        desc: 'Também conhecido como “operador AND”, funciona usando o símbolo de adição ( + ) para buscar um termo e outro em toda a extensão do excerto. Na busca por serviço + água, os resultados são de diários que contêm ambos termos.',
        ex: 'serviço + água',
      },
      {
        title: '- antes de um termo significa Negação',
        desc: 'É um comando de busca que usa os símbolos +- para negar o termo à direita. Buscar por água +-tratada é buscar excertos que contém o termo “água” e, adicionalmente, não contém o termo “tratada” por toda sua extensão. Observação: para a busca funcionar corretamente, não devemos adicionar um espaço entre o símbolo de negação (-) e o termo negado.',
        ex: 'água +-tratada',
      },
      {
        title: '"" em volta do(s) termo(s) significa Busca Exata',
        desc: 'Esta busca funciona com uma frase entre aspas (“ ”) para busca exata do conteúdo, ou seja, as mesmas palavras na mesma ordem. Observação: note a importância de se utilizar as aspas, já que o formato de busca sem aspas também funciona no projeto. Se sua pesquisa for abastecimento de água (sem aspas), na prática, o que está sendo buscado é: abastecimento (ou) de (ou) água.',
        ex: '"abastecimento de água"',
      },
      {
        title: '* no fim do termo significa Busca por Prefixo',
        desc: 'Esta operação utiliza o símbolo de asterisco ( * ) para buscar por prefixo. Serve para quando o objetivo é achar palavras derivadas de um mesmo radical. Confira como a pesquisa por licen* trás resultados com licença, licenças, licenciamento, etc.',
        ex: 'licen*',
      },
      {
        title: '~N após um termo significa Edição de Termo',
        desc: 'Funciona utilizando o símbolo til seguido por um número (~N) para distância de edição de termo, ou seja, qual o limite de modificações de caracteres uma palavra precisa para se transformar em outra. Um exemplo é a pesquisa por poluição~2 que inclue termos como poluicao, poluiçao e poluiçã; todos eles distando até 3 alterações da palavra buscada. Observação: Outra forma de entender essa busca no contexto dos diários é pensar em erros de digitação já que são produzidos.',
        ex: 'poluição~2',
      },
      {
        title: '~N após uma frase significa Distância entre Termos',
        desc: 'Funciona usando uma frase entre aspas seguida de um til e um valor (“ “~N) indicando a busca como distância máxima entre palavras da frase. O que será buscado são diários que têm os termos entre aspas próximos entre si até N palavras. Ao buscar por “lei municipal resíduos”~10 o que está sendo buscado são excertos que tenham essas três palavras separadas, por no máximo, 10 outras palavras. Observação: note que os operadores ~N servem para dois tipos de busca: quando associados a apenas um termo ou quando estão associados a uma frase entre aspas, funcionando de forma completamente diferente. Tenha atenção em seu uso.',
        ex: '"lei municipal resíduos"~10',
      },
      {
        title: '() em volta do(s) termo(s) significa Precedência',
        desc: 'Os parênteses como operadores indicam precedência e são usados para forçar a ordem da busca. No geral, só fazem sentido quando a busca a ser feita se complexifica, combinando outros operadores. Você pode conferir na busca por (inexigibilidade | dispensa) + licitação. Ao adicionar os parênteses, a busca é forçada a acontecer em certa ordem: primeiro executa o comando entre parênteses e então passa a executar o resto. Neste caso, busca pelos termos “inexigibilidade” ou “dispensa” primeiro e, de seu resultado, seleciona apenas os casos que também tem “licitação”.',
        ex: '(inexigibilidade | dispensa) + licitação',
      },
    ],
    searchfield: {
      label: 'Encontre um ato ambiental',
      title: 'Palavras-chave',
      advanced: 'Busca avançada',
      filter: 'Filtrar',
      createAlert: 'Criar alerta',
    },
    list: {
      maxResults: ' - Sua busca retornou o número máximo de resultados. Tente adicionar filtros ou termos mais específicos.',
      results: 'resultados encontrados',
      createAlert: 'Criar alerta',
      orderSelect: 'Ordenar por',
      initialText: 'Busque por palavras-chave ou utilize os filtros para encontrar resultados',
      emptyResult: 'Nenhum resultado foi encontrado para sua busca.',
    },
    item: {
      download: 'Baixar diário oficial'
    },
    filters: {
      title: 'Filtros',
      clean: 'Limpar tudo',
      period: 'Período de tempo',
      tab1: 'Recentes',
      tab2: 'Intervalo de tempo',
      from: 'De',
      to: 'Até',
      entityTitle: 'Entes citados',
      entityLabel: 'Selecione um ou mais entes',
      entitySubtitle: 'Escolha um ou mais entes relevantes mencionados nos resultados para filtrá-los.',
      locationTitle: 'Municípios',
      locationLabel: 'Comece a digitar para encontrar',
      themeTitle: 'Subtemas',
      themeSubtitle: 'Escolha um ou mais subtemas ambientais relacionados aos resultados para filtrá-los.'
    }
  },
  partners: [
    {
      logo: LOGOProjetoColabora,
      link: 'https://projetocolabora.com.br/',
    },
    {
      logo: LOGOinfoamazonia,
      link: 'https://infoamazonia.org/',
    },
    {
      logo: LOGOoeco,
      customSize: {
        width: '80%',
      },
      link: 'https://oeco.org.br/',
    },
    {
      logo: LOGOenvolverde,
      link: 'https://envolverde.com.br/',
    },
    {
      logo: LOGOeconordeste,
      link: 'https://agenciaeconordeste.com.br/',
    },
    {
      logo: LOGOokbr,
      link: 'https://ok.org.br/',
    },
  ]
}; 
