function abrir(secao) {
  const conteudo = document.getElementById("conteudo");
  const janela = document.getElementById("janela");

let texto = "";
if (secao === "sobre") {
  texto = `<h2>Sobre Mim</h2><p>Olá, sou Rúbia! Bem-vinda ao meu portfólio criativo.</p>`;
} else if (secao === "projetos") {
  texto = `
    <h2>Projetos</h2>
    <ul>
      <li>Irflow</li>
      <a href="https://rubiaramos.github.io/Irflow/" target="_blank">Abrir</a>

      <li>CineSphere</li>
      <a href="https://rubiaramos.github.io/CineSphere---TCC/" target="_blank">Abrir</a>

      <li>PucTopia-Classic</li>
      <a href="https://rubiaramos.github.io/PucTopia-Classic/" target="_blank">Abrir</a>
      </li>

    </ul>`;

} else if (secao === "arquivos") {
  texto = `
    <h2>Arquivos Importantes</h2>
    <p>Aqui ficam meus documentos e referências.</p>`;
} else if (secao === "mais") {
  texto = `
    <h2>Mais Projetos</h2>
      <ul>

        <li>Projeto-PJBL_1</li>
        <a href="https://github.com/RubiaRamos/Projeto-PJBL_1" target="_blank">Abrir</a>

        <li>Projeto-PJBL_2--Tesouro</li>
        <a href="https://github.com/RubiaRamos/Projeto-PJBL_2---Tesouro" target="_blank">Abrir</a>
        
        <li>Batalha</li>
        <a href="https://github.com/RubiaRamos/Batalha" target="_blank">Abrir</a>
        </li>

      </ul>`
}

  conteudo.innerHTML = texto;
  janela.style.display = "block";
}

function fechar() {
  document.getElementById("janela").style.display = "none";
}
