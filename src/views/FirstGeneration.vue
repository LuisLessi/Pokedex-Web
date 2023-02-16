<script setup>
import ListPokemons from "../components/ListPokemons.vue";
import MainCard from "../components/MainCard.vue";

import { onMounted, ref, computed } from "vue";
import http from "../services/api";

let pokemons = ref();
let pokemonSprite = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
let searchPokemonField = ref("");
let chosenPokemon = ref();
let loading = ref(false);

const fetchData = async () => {
  const response = await http.get();
  pokemons.value = response.data.results.slice(0, 151);
};

onMounted(() => {
  fetchData();
});

const pokemonsFiltered = computed(() => {
  if (pokemons.value && searchPokemonField.value) {
    return pokemons.value.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(searchPokemonField.value.toLocaleLowerCase())
    );
  }
  return pokemons.value;
});

async function selectPokemon(pokemon) {
  loading.value = true;
  try {
    const response = await http.get(pokemon.url);
    chosenPokemon.value = response.data;
  } catch (error) {
    alert(error);
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main>
    <div class="container">
      <h1 class="text-center">First Generations</h1>
      <div class="row mt-5 mb-5">
        <div class="col-sm-12 col-md-6">
          <MainCard
            :loading="loading"
            :name="chosenPokemon?.name ?? 'Choose a pokemon'"
            :sprite="chosenPokemon?.sprites.other.dream_world.front_default ?? none"
            :xp="chosenPokemon?.base_experience ?? '???'"
            :height="chosenPokemon?.height ?? '???'"
            :weight="chosenPokemon?.weight ?? '???'"
            :hp="chosenPokemon?.stats[0].base_stat ?? '???'"
            :attack="chosenPokemon?.stats[1].base_stat ?? '???'"
            :defense="chosenPokemon?.stats[2].base_stat ?? '???'"
            :specialA="chosenPokemon?.stats[3].base_stat ?? '???'"
            :specialD="chosenPokemon?.stats[4].base_stat ?? '???'"
            :speed="chosenPokemon?.stats[5].base_stat ?? '???'"
          />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card card-list">
            <div class="card-body row">
              <div class="form-floating mb-3">
                <input
                  v-model="searchPokemonField"
                  type="text"
                  class="form-control"
                  id="searchPokemonField"
                  placeholder="Search Pokemon"
                />
                <label for="searchPokemonField">Search...</label>
              </div>
              <ListPokemons
                v-for="pokemon in pokemonsFiltered"
                :key="pokemon.id"
                :name="pokemon.name"
                :sprite="pokemonSprite + pokemon.url.split('/')[6] + '.svg'"
                @click="selectPokemon(pokemon)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-list {
  max-height: 560px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>