<script setup lang="ts">
import jogobase from './components/jogobase.vue'
import cabecalho from './components/cabecalho.vue';
import jogoDestaque from './components/jogoDestaque.vue';
import rodape from './components/rodape.vue';

import { ref } from 'vue';
const produtos = ref(null);

fetch("https://vercel-store-kayky.vercel.app/api/jogo")
    .then(response => response.json())
    .then(data => produtos.value = data);
</script>

<template>
  <cabecalho></cabecalho>

  <jogoDestaque></jogoDestaque>

  <div class="jogos" >
    <jogobase class="jogo" v-for="jogo in (produtos as any).data">
    <template #jogo>{{ (jogo as any)?.attributes.jogo }}</template>
    <template #genero>{{ (jogo as any)?.attributes.genero }}</template>
    <template #distribuidora>{{ (jogo as any)?.attributes.distribuidora }}</template>
    <template #plataforma>{{ (jogo as any)?.attributes.plataforma }}</template>
    <template #preco>{{(jogo as any)?.attributes.preco}}R$</template>
  </jogobase>
  </div>

  <rodape></rodape>
</template>

<style scoped>
  .jogos{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .jogo{
    margin: 5rem auto;
  }
  
</style>
