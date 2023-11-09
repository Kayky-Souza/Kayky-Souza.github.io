<script setup lang="ts">
import { ref } from 'vue';
const produtos = ref(null);

fetch("https://vercel-store-kayky.vercel.app/api/jogo")
    .then(response => response.json())
    .then(data => produtos.value = data);
</script>

<template>
    <div class="card" style="width: 18rem;">
  <img src="https://storage.googleapis.com/webclass_imgs/kayky/imagens/HogwartsLegacy.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><slot name="jogo"></slot></h5>
    <p class="card-text"><slot name="genero"></slot></p>
    <p class="card-text"><slot name="distribuidora"></slot></p>
    <p class="card-text"><slot name="plataforma"></slot></p>
    <a href="#"  class="btn btn-primary"><b><slot name="preco"></slot></b></a>
  </div>
</div>
</template>

<style scoped>
  div .card{
    background-color: #96a6b7;
  }
</style>