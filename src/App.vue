<script setup lang="ts">
import cabecalho from './components/cabecalho.vue';
import rodape from './components/rodape.vue';
</script>

<template>
  <cabecalho></cabecalho>
  <RouterView></RouterView>
  <rodape></rodape>
</template>
