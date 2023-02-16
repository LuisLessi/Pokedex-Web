<template>
  <div class="container mt-4 text-body-secondary">
    <div class="card mb-5">
      <h1 class="text-center">Pokédex web</h1>
      <hr />
      <div class="card-body mb-5">
        <h2>Objetivo</h2>
        <p>
          Projeto de pokédex usando a API PokeAPI. Nesse projeto estou
          utilizando o vue3 com o vite, bootstrap e axios.
          O objetivo principal desse projeto foi aprender técnicas e conceitos 
          sobre requisições de API REST para poder aplicar em futuros projetos.
        </p>

        <hr />

        <h2>Sobre mim</h2>
        Me chamo Luís e sou desenvolvedor front-end em busca de novas oprtunidades de carreira,
        e atualmente estou graduando o curso de Analíse e desenvolvimento de sistemas na FATEC - TAQUARITINGA.
        Confira alguns dos meus projetos e códigos postados no meu github.
        <br><br>
        Meu github: <a href="https://github.com/LuisLessi">https://github.com/LuisLessi</a>
        <br>
        <div class="zoom">
          <a href="https://github.com/LuisLessi" target="__blank">
        <img src="../assets/github.png" height="200" alt=""></a>
        </div>
        <br><br>
        Meu portfólio: <a href="https://luislessi.github.io/My-portfolio/">https://luislessi.github.io/My-portfolio/</a>
        <br>
        <div class="zoom">
          <a href="https://luislessi.github.io/My-portfolio/" target="__blank">
        <img src="../assets/portfolio.png" height="206" alt=""></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.zoom img {
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
}
</style>