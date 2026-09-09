function abrir(secao) {
  const conteudo = document.getElementById("conteudo");
  const janela = document.getElementById("janela");

let texto = "";

  const botaoFechar = `<button class="fechar" onclick="fechar()">X</button>`;


if (secao === "sobre") {
  texto = `
  <h2>Sobre Mim</h2>
  <div class="sobre-bloco-perfil">
    <p>
      Minha vida escolar foi uma parte fundamental do meu desenvolvimento social, acadêmico e pessoal. 
      Durante o Ensino Fundamental, estudei em escolas de Curitiba e Fazenda Rio Grande, passando por 
      mudanças, novas amizades e diferentes ambientes. Nesse período, aprendi a me adaptar, desenvolvi 
      minha relação com professores e colegas e descobri meu interesse por matemática. Também era bastante
      tímida, mas, com o tempo, consegui desenvolver mais confiança e criar vínculos com as pessoas ao meu
      redor.<br>
    </p>
    
    <img src="img/rubia_10.jpg" alt="Sobre mim" class="img_foto_pequeno">
  </div> 

  <div class="sobre-bloco-perfil">
    <p>
      Além dos estudos, participei de atividades extracurriculares, principalmente do basquete. Entrei 
      para um time com alguns amigos, tornei-me líder do time feminino e recebi três medalhas de jogadora 
      destaque. Essa experiência me ajudou a desenvolver responsabilidade, liderança e trabalho em equipe. 
      Porém, no 8º ano, sofri uma lesão no joelho durante um campeonato e precisei parar de jogar. Pouco 
      tempo depois, começou a pandemia de COVID-19, trazendo mudanças significativas para minha rotina e 
      afetando também meu desempenho escolar.<br>
    </p>

    <img src="img/rubia_8.jpg" alt="Sobre mim" class="img_foto_pequeno">
  </div>
  
  <div class="sobre-bloco-perfil">
    <p>
      A transição para o Ensino Médio foi marcada por mudanças pessoais e acadêmicas. Durante a pandemia, 
      comecei a me interessar por sociologia, filosofia, livros, séries e tecnologia, o que me ajudou a 
      recuperar minha motivação e compreender melhor o mundo ao meu redor. Com o retorno das aulas 
      presenciais, comecei um curso técnico de Desenvolvimento de Sistemas, onde aprendi sobre autonomia, 
      trabalho em equipe e busca por conhecimento. Ao olhar para minha trajetória, percebo que tanto as 
      experiências positivas quanto as dificuldades contribuíram para quem sou hoje, tornando-me mais 
      independente, curiosa e adaptável.
    </p>

    <img src="img/rubia_9.jpg" alt="sobre mim" class="img_foto_pequeno">
  </div>

  <img src="img/rubia_3.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_4.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_5.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_6.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_7.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_2.jpg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia_1.jpeg" alt="Sobre mim" class="img_foto_pequeno">
  <img src="img/rubia.jpeg" alt="sobre mim" class="img_foto_pequeno">
   
  `;
} else if (secao === "projetos") {
  texto = `
    <h2>Projetos</h2>
    <ul>
      <h2>Irflow</h2>
      <p>
           A declaração do imposto de renda exige que o contribuinte reúna
         e confira documentos de rendimentos, bens, dívidas e despesas 
         dedutíveis. Apesar dos avanços digitais da Receita Federal, 
         como a declaração pré-preenchida, o contribuinte continua 
         responsável por validar e guardar comprovantes. Os principais 
         problemas enfrentados são: documentos dispersos em várias 
         fontes, necessidade de conferência manual, risco de 
         inconsistências e retenção em malha fina, correria próxima ao 
         prazo e falta de organização alinhada à lógica da Receita.<br>
           A solução proposta é um site de organização contínua, que 
         permite anexar comprovantes em categorias como Saúde, 
         Rendimentos e Bens ao longo do ano, com exportação final 
         estruturada em pastas. Isso reduz erros, facilita a 
         conferência e melhora a governança pessoal. Além disso, a 
         plataforma deve atender às exigências da LGPD, garantindo 
         segurança e controle sobre dados sensíveis.
      </p>
      
      <img src="img/IR.png" alt="irflow" class="detalhe">
      <img src="img/IR2.png" alt="irflow" class="detalhe">

      <a class="botao"href="https://rubiaramos.github.io/Irflow/" target="_blank">Abrir</a>

      <h2>CineSphere</h2>

      <p>
        O trabalho tem como objetivo desenvolver um website gratuito que funcione como um hub de filmes e
        séries brasileiras, reunindo informações detalhadas sobre cada produção e permitindo avaliações,
        comentários e interação entre os usuários.<br>
        A proposta busca criar um espaço digital para valorizar e divulgar o audiovisual nacional, 
        fortalecendo a identidade cultural do país. O projeto envolve pesquisa sobre a importância da 
        divulgação das obras brasileiras e o uso de tecnologias modernas para garantir uma experiência 
        intuitiva e eficiente.<br>
        O setor audiovisual brasileiro tem crescido e conquistado espaço internacional, mas ainda 
        enfrenta desafios de visibilidade e acesso ao público. O site pretende suprir essa lacuna, 
        oferecendo maior alcance e reconhecimento às produções nacionais.
      </p>

      <img src="img/cine.png" alt="cinesphere" class="detalhe">
      <img src="img/cine2.png" alt="cinesphere" class="detalhe">

      <a class="botao" href="https://rubiaramos.github.io/CineSphere---TCC/" target="_blank">Abrir</a>

      <h2>PucTopia-Classic</h2>
      <p>
        O PucTopia Classic é um projeto desenvolvido como uma enciclopédia digital de heróis de RPG, 
        criado de forma colaborativa pelo grupo. <br>

        A proposta reúne personagens originais, cada um com sua própria história, poderes, feitos e 
        ações de combate, permitindo que o público explore um universo narrativo rico e imersivo.<br>

        Entre os heróis apresentados estão o CatMan, ladino felino que usa furtividade e uma rede de 
        gatos como espiões; o Grão-Mestre Bhalfur, paladino defensor da Luz e líder da Ordem do Punho 
        Radiante; o Habibies, caçador excêntrico que transforma feras abatidas em banquetes mágicos; e 
        o Conde Galé, necromante dividido entre sua herança vampírica e sua moralidade humana.
  
      </p>

      <img src="img/puctopia2.png" alt="puctopia" class="detalhe"> 
      <img src="img/puctopia.png" alt="puctopia" class="detalhe">     

      <a class="botao" href="https://rubiaramos.github.io/PucTopia-Classic/" target="_blank">Abrir</a>

    </ul>`;

} else if (secao === "arquivos") {
  texto = `
    <h2>Arquivos Importantes</h2>
    <p>Aqui ficam meus documentos e referências.</p>`;
} else if (secao === "mais") {
  texto = `
    <h2>Mais Projetos</h2>
      <ul>

        <h2>Projeto-PJBL_1</h2>

        <p>
          O trabalho tem como objetivo desenvolver um sistema interativo em Python voltado para saúde e 
          condicionamento físico, funcionando como um assistente no terminal. A proposta é oferecer ao 
          usuário cálculos e recomendações personalizadas a partir de dados básicos de cadastro, como nome, 
          gênero, altura e peso.<br>

          O programa inicia com o cálculo do Índice de Massa Corporal (IMC), classificando o resultado 
          em faixas de saúde. Em seguida, apresenta um menu com diversas funcionalidades: atualização do 
          IMC, cálculo da meta diária de hidratação, sugestão de treinos iniciais, estimativa de gasto 
          calórico durante exercícios, cálculo da Taxa Metabólica Basal (TMB) e do Gasto Energético Total
           (GET), definição de objetivos (emagrecer, manter ou ganhar massa), exibição de histórico e 
           resumo diário de calorias e hidratação.
        </p>
        <a class="botao" href="https://github.com/RubiaRamos/Projeto-PJBL_1" target="_blank">Abrir</a>

        <h2>Projeto-PJBL_2--Tesouro</h2>

        <p>
          O trabalho intitulado Labirinto do Tesouro consiste em um jogo desenvolvido em Python que utiliza 
          lógica de programação estruturada para criar uma experiência interativa baseada em mapas e 
          movimentação de personagem.<br>

          O sistema inicia com a apresentação do jogador, que recebe uma pontuação inicial e um número de
          vidas. O personagem é representado em um tabuleiro (matriz 10x10) composto por diferentes 
          elementos gráficos, como paredes 🧱, plantas 🌿, frutas 🍎, meteoros ☄️ e o tesouro 🟦. 
          O jogador se movimenta pelo mapa utilizando comandos direcionais (W, A, S, D), enquanto o 
          programa valida cada ação para garantir que não ultrapasse os limites da matriz ou colida 
          com obstáculos.
        </p>
        <a class="botao" href="https://github.com/RubiaRamos/Projeto-PJBL_2---Tesouro" target="_blank">Abrir</a>
        
        <h2>Batalha</h2>

        <p>
          O trabalho tem como objetivo desenvolver um jogo de RPG textual em Java, estruturado com programação 
          orientada a objetos e interação via terminal. A proposta é oferecer ao jogador uma experiência de 
          combate, progressão e gerenciamento de recursos, simulando mecânicas clássicas de jogos de aventura.<br>

          O sistema inicia com a escolha da classe do personagem (Guerreiro, Mago, Arqueiro ou Sacerdotisa), 
          cada uma com atributos específicos de vida e ataque. A partir daí, o jogador pode acessar o menu 
          principal, que apresenta opções de batalha, loja, status detalhado e saída.<br>

          Na batalha, o personagem enfrenta inimigos definidos conforme sua classe, podendo atacar ou fugir.
          A vitória concede moedas e aumento de nível, enquanto a derrota reduz pontos de vida e pode encerrar
          o jogo. A loja de itens permite gastar moedas em poções de cura ou melhorias permanentes de ataque,
          incentivando o gerenciamento estratégico dos recursos. Já o status detalhado exibe informações 
          completas sobre o personagem, como vida, nível, dano e moedas acumuladas.
        </p>
        <a class="botao" href="https://github.com/RubiaRamos/Batalha" target="_blank">Abrir</a>

      </ul>`
}

  conteudo.innerHTML = texto;
  janela.style.display = "block";
}

function fechar() {
  document.getElementById("janela").style.display = "none";
}
