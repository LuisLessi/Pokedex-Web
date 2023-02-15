<script setup>
import { defineProps } from 'vue';

const pokemon = defineProps(["name", "sprite"])



</script>

<template>
    <div class="col-sm-6 col-4">
          <div class="card p-2 mb-3 shadow cardListPokemon">
           <p class="text-center">{{ pokemon.name }}</p>
           <img height="80"
           :src="sprite"
              class="card-img-top pt-2"
            />
          </div>
        </div>

    </template>

<style scoped>
.cardListPokemon{
    background: rgb(72,63,251);
    background: radial-gradient(circle, rgba(72,63,251,0.8071603641456583) 0%, rgba(70, 252, 244,0.5102415966386555));
    cursor: pointer;
}

.cardListPokemon:hover{
    background: rgb(72,63,251);
    background: radial-gradient(circle, rgba(72,63,251,0.12) 0%, rgba(70, 252, 244,0.9));
	border: 5px white solid;
	animation: float ease-in-out infinite;
    
}

.cardListPokemon img:hover{
    padding: .1rem;
}
</style>