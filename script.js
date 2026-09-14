function abrir(secao) {
  const conteudo = document.getElementById("conteudo");
  const janela = document.getElementById("janela");
  let texto = "";

  if (secao === "sobre") {
    texto = `
      <h2>Sobre Mim</h2>
      <div class="sobre-bloco-perfil">
        <p>
          Minha vida escolar foi uma parte fundamental do meu desenvolvimento social, acadêmico e pessoal.
          Durante o Ensino Fundamental, estudei em escolas de Curitiba e Fazenda Rio Grande, passando por 
          mudanças, novas amizades e diferentes ambientes. Nesse período, aprendi a me adaptar, desenvolvi 
          minha relação com professores e colegas e descobri meu interesse por matemática. Também era 
          bastante tímida, mas, com o tempo, desenvolvi mais confiança e consegui criar vínculos com as 
          pessoas ao meu redor.
        </p>
        <img src="img/rubia_10.jpg" alt="Sobre mim" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>

      <div class="sobre-bloco-perfil">
        <p>
          Além dos estudos, participei de atividades extracurriculares, principalmente do basquete. 
          Entrei para um time com alguns amigos, tornei-me líder do time feminino e recebi três medalhas
          de jogadora destaque. Essa experiência contribuiu para o desenvolvimento da minha responsabilidade,
          liderança e capacidade de trabalhar em equipe.
        </p>
        <img src="img/rubia_8.jpg" alt="Basquete" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>

      <div class="sobre-bloco-perfil">
        <p>
          Posteriormente, iniciei um curso técnico em Desenvolvimento de Sistemas, no qual tive meu 
          primeiro contato mais aprofundado com a tecnologia e desenvolvi conhecimentos relacionados à 
          programação e ao desenvolvimento de sistemas. Essa formação despertou meu interesse em 
          continuar estudando tecnologia e me levou à graduação em Sistemas de Informação.
        </p>
        <img src="img/rubia_9.jpg" alt="Ensino Médio" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>

      <div class="sobre-bloco-perfil">
        <p>
          Ao longo dessa nova etapa, passei a participar de projetos acadêmicos que me permitiram aplicar
          meus conhecimentos na prática, trabalhar em equipe e desenvolver soluções. Um dos momentos mais 
          marcantes foi minha participação na disciplina de Experiência Criativa: Navegando pelos Sistemas 
          de Informação, na qual minha equipe recebeu o Certificado de Reconhecimento da PUCPR pelo projeto 
          considerado o Melhor da Etapa 2. Essa conquista representou não apenas um reconhecimento pelo 
          resultado do projeto, mas também a importância da colaboração, dedicação e aplicação dos 
          conhecimentos adquiridos.
        </p>
        <img src="img/rubia_4.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>
            
      <div class="sobre-bloco-perfil">
        <p>
          Ao olhar para minha trajetória, percebo que tanto as experiências positivas quanto as dificuldades 
          contribuíram para quem sou hoje. Cada etapa me ajudou a desenvolver mais independência, curiosidade, 
          confiança, responsabilidade e capacidade de adaptação. Minha trajetória acadêmica também reforçou meu
          interesse pela tecnologia e minha vontade de continuar aprendendo, transformando conhecimentos em 
          projetos e buscando novos desafios.
        </p>
        <img src="img/rubia_3.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>

      <div class="galeria">
        
        <img src="img/rubia_6.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
        <img src="img/rubia_1.jpeg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
        <img src="img/rubia.jpeg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
        <img src="img/rubia_5.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
        <img src="img/rubia_7.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
        <img src="img/rubia_2.jpg" alt="Foto pessoal" class="img_foto_pequeno" onclick="aumentarFoto(this)">
      </div>
    `;
  } else if (secao === "projetos") {
    texto = `
      <h2>Projetos</h2>
      <div class="projeto">
        <h2>IR.Flow</h2>
        <p>
          A declaração do imposto de renda exige que o contribuinte reúna
          e confira documentos de rendimentos, bens, dívidas e despesas
          dedutíveis. Apesar dos avanços digitais da Receita Federal,
          como a declaração pré-preenchida, o contribuinte continua
          responsável por validar e guardar comprovantes.
          <br><br>
          Os principais problemas enfrentados são: documentos dispersos
          em várias fontes, necessidade de conferência manual, risco de
          inconsistências e retenção em malha fina, correria próxima ao
          prazo e falta de organização alinhada à lógica da Receita.
          <br><br>
          A solução proposta é um site de organização contínua, que
          permite anexar comprovantes em categorias como Saúde,
          Rendimentos e Bens ao longo do ano, com exportação final
          estruturada em pastas.
          <br><br>
          Isso reduz erros, facilita a conferência e melhora a governança
          pessoal. Além disso, a plataforma deve atender às exigências
          da LGPD, garantindo segurança e controle sobre dados sensíveis.
        </p>
        <div class="imagens-projeto">
          <img src="img/IR.png" alt="IR.Flow" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/IR2.png" alt="IR.Flow" class="detalhe" onclick="aumentarFoto(this)">
        </div>
        <a class="botao" href="https://rubiaramos.github.io/Irflow/" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>CineSphere</h2>
        <p>
          O trabalho tem como objetivo desenvolver um website gratuito
          que funcione como um hub de filmes e séries brasileiras,
          reunindo informações detalhadas sobre cada produção e
          permitindo avaliações, comentários e interação entre os usuários.
          <br><br>
          A proposta busca criar um espaço digital para valorizar e
          divulgar o audiovisual nacional, fortalecendo a identidade
          cultural do país.
          <br><br>
          O projeto envolve pesquisa sobre a importância da divulgação
          das obras brasileiras e o uso de tecnologias modernas para
          garantir uma experiência intuitiva e eficiente.
          <br><br>
          O setor audiovisual brasileiro tem crescido e conquistado
          espaço internacional, mas ainda enfrenta desafios de
          visibilidade e acesso ao público. O site pretende suprir essa
          lacuna, oferecendo maior alcance e reconhecimento às produções
          nacionais.
        </p>
        <div class="imagens-projeto">
          <img src="img/cine.png" alt="CineSphere" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/cine2.png" alt="CineSphere" class="detalhe" onclick="aumentarFoto(this)">
        </div>
        <a class="botao" href="https://rubiaramos.github.io/CineSphere---TCC/" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>PucTopia Classic</h2>
        <p>
          O PucTopia Classic é um projeto desenvolvido como uma
          enciclopédia digital de heróis de RPG, criado de forma
          colaborativa pelo grupo.
          <br><br>
          A proposta reúne personagens originais, cada um com sua
          própria história, poderes, feitos e ações de combate,
          permitindo que o público explore um universo narrativo
          rico e imersivo.
          <br><br>
          Entre os heróis apresentados estão o CatMan, ladino felino
          que usa furtividade e uma rede de gatos como espiões;
          o Grão-Mestre Bhalfur, paladino defensor da Luz e líder
          da Ordem do Punho Radiante; o Habibies, caçador excêntrico
          que transforma feras abatidas em banquetes mágicos; e o
          Conde Galé, necromante dividido entre sua herança vampírica
          e sua moralidade humana.
        </p>
        <div class="imagens-projeto">
          <img src="img/puctopia2.png" alt="PucTopia Classic" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/puctopia.png" alt="PucTopia Classic" class="detalhe" onclick="aumentarFoto(this)">
        </div>
        <a class="botao" href="https://rubiaramos.github.io/PucTopia-Classic/" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>Receitas da Beane</h2>
        <p>
          O Receitas da Beane foi criado de forma colaborativa pelo grupo
          como uma maneira de preservar, valorizar e homenagear uma história 
          familiar que possui um significado especial para uma das integrantes. 
          A ideia surgiu a partir do livro de receitas da mãe de uma das 
          integrantes do grupo, que, com o passar do tempo, acabou ficando bastante 
          desgastado e em mau estado de conservação. Diante disso, surgiu a proposta 
          de transformar aquelas receitas em um espaço digital, garantindo que elas 
          pudessem ser preservadas e compartilhadas de uma maneira mais acessível e 
          duradoura.
          <br><br>
          A proposta do Receitas da Beane reúne algumas das receitas presentes no livro 
          de receitas familiares, organizadas em um formato digital e de fácil acesso. 
          Entre elas estão bolo de chocolate, bolo de cenoura, enroladinho de salsicha 
          assado, brownie caseiro, panqueca, torta de limão, bolo de fubá cremoso e 
          café cremoso.
          <br><br>
          A construção do site também foi realizada de maneira colaborativa pelo grupo, 
          unindo tecnologia, criatividade e memória afetiva. Dessa forma, o projeto não 
          se limita à reprodução de receitas, mas representa uma experiência de compartilhamento 
          e preservação de uma tradição familiar.
        </p>
        <div class="imagens-projeto">
          <img src="img/receita.png" alt="Receitas da Beane" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/receita2.png" alt="Receitas da Beane" class="detalhe" onclick="aumentarFoto(this)">
        </div>
        <a class="botao" href="https://fabrinewrublevski.github.io/Receitas/index.html" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>Leveza de Ler</h2>
        <p>
          O Leveza de ler foi criado de forma independente como um catálogo digital voltado 
          para amantes da literatura, unindo organização, acessibilidade e paixão pelos livros. 
          A ideia surgiu da necessidade de reunir grandes clássicos mundiais e produções contemporâneas 
          em um formato prático, moderno e de fácil navegação. Diante disso, surgiu a proposta de 
          transformar a divulgação dessas obras em um espaço virtual hospedado no GitHub Pages, 
          garantindo que as sinopses e os links direcionados para a compra de cada título pudessem 
          ser acessados de maneira simples e duradoura.
          <br><br>
          A proposta do Leveza de ler reúne alguns dos livros mais marcantes da literatura, organizados 
          por meio de fichas dinâmicas que transitam por múltiplos gêneros literários. Entre eles estão 
          1984, A Bela e a Fera, Crime e castigo, Drácula, Frankenstein, A Imperatriz, Um estudo em 
          vermelho (Sherlock Holmes) e O Jardim Secreto.
          <br><br>
          A construção do site também foi realizada com foco na experiência do usuário, integrando recursos 
          interativos que facilitam a busca interna. O sistema conta com uma barra de pesquisa em tempo real 
          que filtra as obras e oculta as que não coincidem com a busca, além de um botão de limpeza rápida 
          que restaura instantaneamente todo o catálogo na tela. Dessa forma, o projeto não se limita à exposição 
          de títulos, mas representa uma solução inteligente e fluida para quem deseja descobrir e adquirir 
            novas leituras.
        </p>
        <div class="imagens-projeto">
          <img src="img/livro.png" alt="Leveza de Ler" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/livro2.png" alt="Leveza de Ler" class="detalhe" onclick="aumentarFoto(this)">
        </div>
        <a class="botao" href="https://rubiaramos.github.io/Leveza-de-ler/" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>
    `;
  } else if (secao === "arquivos") {
    texto = `
      <h2>Arquivos Importantes</h2>
      <p>Aqui ficam meus documentos e referências.</p>
    `;
  } else if (secao === "mais") {
    texto = `
      <h2>Mais Projetos</h2>
      <div class="projeto">
        <h2>Projeto-PJBL 1</h2>
        <p>
          O trabalho tem como objetivo desenvolver um sistema interativo
          em Python voltado para saúde e condicionamento físico,
          funcionando como um assistente no terminal.
          <br><br>
          A proposta é oferecer ao usuário cálculos e recomendações
          personalizadas a partir de dados básicos de cadastro, como
          nome, gênero, altura e peso.
          <br><br>
          O programa inicia com o cálculo do Índice de Massa Corporal
          (IMC), classificando o resultado em faixas de saúde.
          <br><br>
          Em seguida, apresenta um menu com diversas funcionalidades:
          atualização do IMC, cálculo da meta diária de hidratação,
          sugestão de treinos iniciais, estimativa de gasto calórico
          durante exercícios, cálculo da Taxa Metabólica Basal (TMB)
          e do Gasto Energético Total (GET), definição de objetivos
          (emagrecer, manter ou ganhar massa), exibição de histórico
          e resumo diário de calorias e hidratação.
        </p>

        <div class="imagens-projeto">
          <img src="img/fit.png" alt="FitFit GRR'sss" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/fit2.png" alt="FitFit GRR'sss" class="detalhe" onclick="aumentarFoto(this)">
        </div>

        <a class="botao" href="https://github.com/RubiaRamos/Projeto-PJBL_1" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>Projeto-PJBL 2 — Tesouro</h2>
        <p>
          O trabalho intitulado Labirinto do Tesouro consiste em um jogo
          desenvolvido em Python que utiliza lógica de programação
          estruturada para criar uma experiência interativa baseada
          em mapas e movimentação de personagem.
          <br><br>
          O sistema inicia com a apresentação do jogador, que recebe
          uma pontuação inicial e um número de vidas.
          <br><br>
          O personagem é representado em um tabuleiro (matriz 10x10)
          composto por diferentes elementos gráficos, como paredes 🧱,
          plantas 🌿, frutas 🍎, meteoros ☄️ e o tesouro 🟦.
          <br><br>
          O jogador se movimenta pelo mapa utilizando comandos
          direcionais (W, A, S, D), enquanto o programa valida cada
          ação para garantir que não ultrapasse os limites da matriz
          ou colida com obstáculos.
        </p>
                
        <div class="imagens-projeto">
          <img src="img/dino.png" alt="Salve o Dino" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/dino2.png" alt="Salve o Dino" class="detalhe" onclick="aumentarFoto(this)">
        </div>

        <a class="botao" href="https://github.com/RubiaRamos/Projeto-PJBL_2---Tesouro" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>

      <div class="projeto">
        <h2>Batalha</h2>
        <p>
          O trabalho tem como objetivo desenvolver um jogo de RPG
          textual em Java, estruturado com programação orientada a
          objetos e interação via terminal.
          <br><br>
          A proposta é oferecer ao jogador uma experiência de combate,
          progressão e gerenciamento de recursos, simulando mecânicas
          clássicas de jogos de aventura.
          <br><br>
          O sistema inicia com a escolha da classe do personagem
          (Guerreiro, Mago, Arqueiro ou Sacerdotisa), cada uma com
          atributos específicos de vida e ataque.
          <br><br>
          A partir daí, o jogador pode acessar o menu principal,
          que apresenta opções de batalha, loja, status detalhado
          e saída.
          <br><br>
          Na batalha, o personagem enfrenta inimigos definidos
          conforme sua classe, podendo atacar ou fugir.
          <br><br>
          A vitória concede moedas e aumento de nível, enquanto a
          derrota reduz pontos de vida e pode encerrar o jogo.
          <br><br>
          A loja de itens permite gastar moedas em poções de cura
          ou melhorias permanentes de ataque, incentivando o
          gerenciamento estratégico dos recursos.
          <br><br>
          Já o status detalhado exibe informações completas sobre
          o personagem, como vida, nível, dano e moedas acumuladas.
        </p>
                
        <div class="imagens-projeto">
          <img src="img/batalha.png" alt="Batalha" class="detalhe" onclick="aumentarFoto(this)">
          <img src="img/batalha2.png" alt="Batalha" class="detalhe" onclick="aumentarFoto(this)">
        </div>

        <a class="botao" href="https://github.com/RubiaRamos/Batalha" target="_blank" rel="noopener noreferrer">Abrir</a>
      </div>
    `;
  }

  conteudo.innerHTML = texto;
  janela.style.display = "block";
}

function aumentarFoto(imagem) {
  const zoom = document.getElementById("zoom");
  const imagemZoom = document.getElementById("imagemZoom");
  imagemZoom.src = imagem.src;
  imagemZoom.alt = imagem.alt;
  zoom.style.display = "flex";
}

function fecharZoom() {
  const zoom = document.getElementById("zoom");
  zoom.style.display = "none";
}

function fechar() {
  const janela = document.getElementById("janela");
  janela.style.display = "none";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    fecharZoom();
    fechar();
  }
});