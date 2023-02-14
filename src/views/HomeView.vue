<script setup>
import ListPokemons from "../components/ListPokemons.vue";
import { onMounted, ref, computed } from "vue";
import http from "../services/api";

let pokemons = ref();
let pokemonSprite = ref(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
);
let searchPokemonField = ref("")

const fetchData = async () => {
  const response = await http.get();
  pokemons.value = response.data.results;
};

onMounted(() => {
  fetchData();
});

const pokemonsFiltered = computed(() =>{
  if(pokemons.value && searchPokemonField.value){
    return pokemons.value.filter(pokemon => 
      pokemon.name.toLowerCase().includes(searchPokemonField.value.toLocaleLowerCase())
    )
  }
  return pokemons.value
})
</script>

<template>
  <main>
    <div class="container">
      <div class="row mt-5 mb-5">
        <div class="col-sm-12 col-md-6">
          <div class="card">
            <img
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="card">
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
</style>