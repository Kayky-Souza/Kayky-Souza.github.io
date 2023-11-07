<script setup lang="ts">
import { ref } from 'vue';
const produtos = ref(null);

fetch("https://vercel-store-kayky.vercel.app/api/jogo/16")
    .then(response => response.json())
    .then(data => produtos.value = data);
</script>

<template>
    <div class="card" style="width: 18rem;">
  <img src="https://storage.googleapis.com/webclass_imgs/kayky/imagens/EASPORTSFIFA23EdiçãoStandardparaXboxOne.webp" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ produtos?.data.attributes.jogo }}</h5>
    <p class="card-text">{{produtos?.data.attributes.genero}}</p>
    <p class="card-text">{{produtos?.data.attributes.distribuidora}}</p>
    <p class="card-text">{{produtos?.data.attributes.plataforma}}</p>
    <a href="#" class="btn btn-primary"><b>{{produtos?.data.attributes.preco}}R$</b></a>
  </div>
</div>
</template>

<style scoped>
  div .card{
    background-color: #96a6b7;
  }
</style>