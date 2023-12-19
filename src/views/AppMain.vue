<script setup lang="ts">
import jogobase from '../components/jogobase.vue'
import jogoDestaque from '../components/jogoDestaque.vue';
import { useCartStore } from '../stores/cartStore.ts'
const store = useCartStore();
import { ref } from 'vue';
const produtos = ref(null);
let count = 0
Object.keys(store.products).forEach(function() {
  count = count+1
});

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
    <p class="contador">{{ count }}</p>
    <jogoDestaque></jogoDestaque>
<div class="jogos" >
  <jogobase class="jogo" v-for="jogo in (produtos as any)?.data">
  <template #imagem>
    <img :src="getImage((jogo as any)?.attributes.imagem)" class="card-img-top" alt="...">
  </template>
  <template #jogo>{{ (jogo as any)?.attributes.jogo }}</template>
  <template #genero>{{ (jogo as any)?.attributes.genero }}</template>
  <template #distribuidora>{{ (jogo as any)?.attributes.distribuidora }}</template>
  <template #plataforma>{{ (jogo as any)?.attributes.plataforma }}</template>
  <template #actions>
    <router-link :to="'/cart/' + (jogo as any)?.id" class="btn btn-primary">{{(jogo as any)?.attributes.preco}}R$</router-link>
  </template>
</jogobase>
</div>

</template>

<style scoped>
  .contador{
    background-color: black;
    color: white;
    float: left;
    position: absolute;
    top: 0;
  }

  .jogos{
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(21, 25, 29);
  }

  .jogo{
    margin: 5rem auto;
    border: 1px solid springgreen;
    position: relative;
    padding-bottom: 2rem;
  }

  .btn{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
</style>