const raceDB = [
  {
    id: 0,
    race: "",
    for: 0,
    agi: 0,
    int: 0,
    von: 0,
    commonClasses: "",
    autoHabil: "",
    raceDescription:
      "As raças conferem os valores iniciais dos Atributos do personagem e uma Habilidade Automática. Além disso, elas apresentam uma série de Habilidades extras que podem ser selecionadas entre as Habilidades iniciais do personagem ou (a menos que seja explícito que a habilidade só pode ser pega na criação do personagem) entre as que ele pode selecionar quando subir de nível.",
  },
  {
    id: 2,
    race: "Aesir",
    for: 4,
    agi: 2,
    int: 3,
    von: 3,
    commonClasses: "Bardo, Druida, Guerreiro, Patrulheiro e Rúnico.",
    autoHabil: "Vigor Nórdico",
    raceDescription:
      "Aesires são humanoides altos e robustos com uma fisiologia adaptada para climas extremamente frios. Sua altura mediana está entre 1,9 e 2,2 metros e pesam em média entre 100 e 130 quilos. Possuem pele e olhos extremamente claro, adaptados à luz muito clara das regiões de gelo eterno onde vivem. A pele possui pouca pigmentação, sendo extremamente clara com uma matiz levemente azulada ou esverdeada.",
  },
  {
    id: 2,
    race: "Anão",
    for: 4,
    agi: 2,
    int: 3,
    von: 3,
    commonClasses: "Guerreiro, Paladino, Sacerdote e Rúnico",
    autoHabil: "Coração da montanha",
    raceDescription:
      "Os Anões são humanoides de composição compacta e vigorosa. São conhecidos pela pelagem pesada que recobre sua cabeça deixando apenas sua face de fora. A pelagem no corpo é mais esparsa e macia do que na cabeça, e geralmente mais escura. Se tornando acinzentada ou branca nos idosos.",
  },
  {
    id: 3,
    race: "Astério",
    for: 5,
    agi: 2,
    int: 2,
    von: 3,
    commonClasses: "Guerreiro, Paladino, Rúnico, Xamã.",
    autoHabil: "Chifres Poderosos",
    raceDescription:
      "Astérios são mamíferos humanoides com dimorfismo sexual marcante. Os machos apresentam cabeçorras pesadas ornadas de cornos sólidos e são notavelmente maiores do que as fêmeas, em geral medindo entre 2 e 2,3 metros e podendo chegar facilmente aos 160 quilos, enquanto as fêmeas possuem um crânio muito mais frágil e sem a presença de cornos e não passam de 1,6 metros de altura e 80 quilos.",
  },
  {
    id: 4,
    race: "Astéria",
    for: 5,
    agi: 2,
    int: 2,
    von: 3,
    commonClasses: "Ladino, Xamã.",
    autoHabil: "Faro",
    raceDescription:
      "Astérios são mamíferos humanoides com dimorfismo sexual marcante. Os machos apresentam cabeçorras pesadas ornadas de cornos sólidos e são notavelmente maiores do que as fêmeas, em geral medindo entre 2 e 2,3 metros e podendo chegar facilmente aos 160 quilos, enquanto as fêmeas possuem um crânio muito mais frágil e sem a presença de cornos e não passam de 1,6 metros de altura e 80 quilos.",
  },
  {
    id: 5,
    race: "Centauro",
    for: 4,
    agi: 2,
    int: 3,
    von: 3,
    commonClasses: "Druida, Guerreiro, Patrulheiro, Xamã.",
    autoHabil: "Corpo Equino",
    raceDescription:
      "Os centauros são esfinges com torso humanóide e corpo equino. Apresentam cinco dedos nas mãos e quatro pernas digitígradas terminadas em cascos semelhantes ao dos cavalos que protegem os dedos dos pés, além de uma cauda curta. Centauros em geral são tão altos quanto longos, medindo entre 2 e 2,4 metros nas duas direções. Pesam em média de 450 à 500 quilos, e geralmente possuem pouco tecido adiposo. ",
  },
  {
    id: 6,
    race: "Elfo",
    for: 2,
    agi: 4,
    int: 3,
    von: 3,
    commonClasses: "Druida, Feiticeiro, Patrulheiro, Sacerdote, Xamã",
    autoHabil: "Benção de Lathellanis",
    raceDescription:
      "Os Elfos são humanoides de estatura mediana, constituição esbelta e traços delicados. Têm em média entre 1,6 e 1,7 metros de altura e pesam entre 50 e 60 quilos. Uma de suas características mais marcante são as longas orelhas pontudas, que lhes confere uma audição superior. ",
  },
  {
    id: 7,
    race: "Faen",
    for: 2,
    agi: 4,
    int: 3,
    von: 2,
    commonClasses: "Patrulheiro, Ladino, Feiticeiro.",
    autoHabil: "Constituição Feérica",
    raceDescription:
      "Os Faen são humanoides com características herdadas de ancestrais feéricos. Eles podem chegar a cerca de 1,5 metros, apesar da maioria medir em torno de 1,3 e 1,4 metro e não pesam mais do que 35 quilos. Possuem, nas costas, asas leves e semitransparentes semelhantes às dos insetos. Estas asas tem uma envergadura total igual à altura do Faen.",
  },
  {
    id: 8,
    race: "Fauno",
    for: 3,
    agi: 3,
    int: 3,
    von: 3,
    commonClasses: "Bardo, Druida, Patrulheiro, Xamã",
    autoHabil: "Patas com Cascos",
    raceDescription:
      "Os Faunos são humanoides com pés digitígrados que terminam em dois dedos, cada um protegido por um casco. Sua pele é parda ou bronzeada, coberta por uma pelagem fina, densa e curta que cobre quase todo o corpo (com exceção das palmas das mãos), sendo mais esparsa no rosto, tronco e braços.",
  },
  {
    id: 9,
    race: "Fira",
    for: 3,
    agi: 3,
    int: 3,
    von: 3,
    commonClasses: "Espadachim, Feiticeiro, Paladino, Rúnico e Sacerdote.",
    autoHabil: "Habitante do Deserto",
    raceDescription:
      "Os Firas são seres humanoides de estatura e constituição medianas (entre 1,6 e 1,9 metros de altura e pesando entre 70 e 80 quilos) adaptados à vida em regiões quentes e áridas. Sua pele é escura, geralmente em um tom de cobre fosco ou marrom-oliva. O corpo dos Firas é coberto por uma pelagem grossa e esparsa, mais espessa na cabeça e, nos machos da espécie, sob o queixo. ",
  },
  {
    id: 10,
    race: "Humano",
    for: 3,
    agi: 3,
    int: 3,
    von: 3,
    commonClasses:
      "Bardo, Espadachim, Feiticeiro, Guerreiro, Ladino, Mago, Sacerdote e Rúnico.",
    autoHabil: "Adaptabilidade",
    raceDescription:
      "Humanos possuem uma altura mediana, entre 1,5 e 1,9 metros, e indivíduos mais baixos ou altos são bastante raros, geralmente sendo portadores de deficiências de nascença. Variam consideravelmente de peso dependendo do seu estilo de vida, variando de 40 a até 140 quilos – apesar da média estar entre os 60 e 80 quilos.",
  },
  {
    id: 11,
    race: "Juban",
    for: 4,
    agi: 2,
    int: 3,
    von: 4,
    commonClasses: "Paladino, Sacerdote e Guerreiro.",
    autoHabil: "Corpo pesado",
    raceDescription:
      "Os jubans são humanoides com pernas digitígradas de porte avantajado com algumas características semelhantes às dos grandes felinos. Costumam ter entre 1,8 e 2 metros de altura, e graças à uma musculatura poderosa podem chegar aos 140 quilos, apesar da média girar em torno de 120 quilos.",
  },
  {
    id: 12,
    race: "Levent",
    for: 2,
    agi: 3,
    int: 3,
    von: 3,
    commonClasses: "Druida, Espadachim, Sacerdote, Xamã.",
    autoHabil: "Asas Pesadas",
    raceDescription:
      "Os Levent são humanoides dotados de grandes asas que brotam de suas costas – logo abaixo das omoplatas. São geralmente mais baixos e menos corpulentos do que os humanos, com uma média de altura de 1,5 a 1,6 metros e um peso que oscila entre 60 e 70 quilos. As asas possuem uma envergadura total igual ao dobro da altura do indivíduo.",
  },
  {
    id: 13,
    race: "Mahok",
    for: 5,
    agi: 2,
    int: 2,
    von: 3,
    commonClasses: "Druida, Guerreiro e Rúnico.",
    autoHabil: "Pele de Pedra",
    raceDescription:
      "Os Mahoks são humanoides de constituição sólida, medindo cerca de 2,5m de altura e pesando cerca de 300 quilos na idade adulta. Esse peso aumenta com a idade, e pode chegar a até o dobro disso antes do Mahok não ser capaz de se mover devido ao próprio peso. Esse peso se deve principalmente devido à característica mais notável da raça, sua pele formada por placas de rocha.",
  },
  {
    id: 14,
    race: "Metadílio",
    for: 2,
    agi: 4,
    int: 3,
    von: 3,
    commonClasses: "Bardo, Druida, Ladino, Feiticeiro.",
    autoHabil: "Tamanho pequeno",
    raceDescription:
      "Metadílios são humanoides de pequena estatura (entre 1 e 1,2 metro de altura em média) e constituição física mediana, apesar de muitos apresentarem sobrepeso, o que faz com que variem de 30 a até 70 quilos. Possuem crânios levemente alongados, com maxilares pequenos e orelhas levemente pontudas.",
  },
  {
    id: 15,
    race: "Tailox",
    for: 2,
    agi: 4,
    int: 3,
    von: 3,
    commonClasses: "Bardo, Druida, Espadachim, Patrulheiro e Xamã.",
    autoHabil: "Pernas Vulpinas",
    raceDescription:
      "Os Tailox são humanoides de pequena estatura (entre 1,4 e 1,6 metros) e de constituição esbelta (pesando entre 40 e 50 quilos). A cabeça apresenta um focinho curto e fino e orelhas grandes e seus pés são digitígrados. Possuem uma cauda pequena, coberta por uma pelagem mais farta do que no resto do corpo.",
  },
];

export default raceDB;
