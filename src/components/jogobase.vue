<script setup lang="ts">
import { ref } from 'vue';
const produtos = ref(null);

</script>

<template>
    <div class="card" style="width: 18rem;">
    <slot name="imagem"></slot>
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