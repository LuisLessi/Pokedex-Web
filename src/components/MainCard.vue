<script setup>
import { defineProps, ref } from "vue";
let pokemonSprite = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
const pokemon = defineProps([
  "name",
  "height",
  "xp",
  "hp",
  "weight",
  "attack",
  "defense",
  "specialA",
  "specialD",
  "speed",
  "sprite",
  "loading"
]);
</script>

<template>
  <div class="card cardListPokemon"
    :class="loading ? '':'animate__animated animate__zoomIn'">

    <img v-if="pokemon.sprite" :src="sprite" class="card-img-top" height="200" alt="???" />

    <img v-else src="../assets/egg_pokemon.svg" class="card-img-top" height="200" alt="Pokemon image" />
    <div class="card-body">
      <h3 class="card-title text-center">{{ pokemon.name }}</h3>
      <hr />
      <div class="row">
        <section class="col-6">
          <strong>HP: </strong>
          <span>{{ pokemon.hp }}</span>
        </section>
        <section class="col-6 text-end">
          <strong>XP: </strong>
          <span>{{ pokemon.xp }}</span>
        </section>
        <section class="col-6">
          <br />
          <strong>height: </strong>
          <span>{{ pokemon.height }}</span>
        </section>
        <section class="col-6 text-end">
          <br />
          <strong>Weight: </strong>
          <span>{{ pokemon.weight }}</span>
        </section>

        <hr />
        <h5 class="card-title text-center">Fight status</h5>

        <section class="col-6">
          <br />
          <strong>Attack: </strong>
          <span>{{ pokemon.attack }}</span>
        </section>
        <section class="col-6 text-end">
          <br />
          <strong>Defense: </strong>
          <span>{{ pokemon.defense }}</span>
        </section>
        <section class="col-6">
          <br />
          <strong>Ultra attack: </strong>
          <span>{{ pokemon.specialA }}</span>
        </section>
        <section class="col-6 text-end">
          <br />
          <strong>Ultra defense: </strong>
          <span>{{ pokemon.specialD }}</span>
        </section>
        <section class="col-12 text-center">
          <br />
          <strong>Speed: </strong>
          <span>{{ pokemon.speed }}</span>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cardListPokemon{
    background: rgb(72,63,251);
    background: radial-gradient(circle, rgba(155, 69, 69, 0.12) 40%, rgba(252, 70, 70, 0.9)95%);
    
}

.cardListPokemon img:hover{
    padding: .1rem;
}

@media (max-width: 60px) {
  .cardListPokemon{
    width: 300px
    
  }
}
</style>