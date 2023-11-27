<script setup lang="ts">
import jogobase from '../components/jogobase.vue'
import jogoDestaque from '../components/jogoDestaque.vue';

import { ref } from 'vue';
const produtos = ref(null);
//https://jogo.4cc.shop/api/docs/

fetch("https://jogo.4cc.shop/api/jogo")
    .then(response => response.json())
    .then(data => produtos.value = data);

const urlImg = "https://storage.googleapis.com/webclass_imgs/kayky/imagens/"

function getImage(idImage:string) {
  return urlImg+idImage
}
</script>

<template>
    <jogoDestaque></jogoDestaque>

<div class="jogos" >
  <jogobase class="jogo" v-for="jogo in (produtos as any).data">
  <template #imagem>
    <img :src="getImage((jogo as any)?.attributes.imagem)" class="card-img-top" alt="...">
  </template>
  <template #jogo>{{ (jogo as any)?.attributes.jogo }}</template>
  <template #genero>{{ (jogo as any)?.attributes.genero }}</template>
  <template #distribuidora>{{ (jogo as any)?.attributes.distribuidora }}</template>
  <template #plataforma>{{ (jogo as any)?.attributes.plataforma }}</template>
  <template #preco>{{(jogo as any)?.attributes.preco}}R$</template>
</jogobase>
</div>

</template>

<style scoped>
  .jogos{
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(21, 25, 29);
    
  }

  .jogo{
    margin: 5rem auto;
  }
  
</style>