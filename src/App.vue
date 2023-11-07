<script setup lang="ts">
import jogo1 from './components/jogo1.vue';
import jogo2 from './components/jogo2.vue';
import jogo3 from './components/jogo3.vue';
import jogo4 from './components/jogo4.vue';
import jogo5 from './components/jogo5.vue';
import jogo6 from './components/jogo6.vue';
import jogo7 from './components/jogo7.vue';
import jogo8 from './components/jogo8.vue';
import jogo9 from './components/jogo9.vue';
import jogo10 from './components/jogo10.vue';
import jogo11 from './components/jogo11.vue';
import jogo12 from './components/jogo12.vue';
import jogo13 from './components/jogo13.vue';
import jogo14 from './components/jogo14.vue';
import jogo15 from './components/jogo15.vue';
import jogo16 from './components/jogo16.vue';
import jogo17 from './components/jogo17.vue';
import jogo18 from './components/jogo18.vue';
import jogo19 from './components/jogo19.vue';
import cabecalho from './components/cabecalho.vue';
import jogoDestaque from './components/jogoDestaque.vue';
import rodape from './components/rodape.vue';
</script>

<template>
  <cabecalho></cabecalho>
  <jogoDestaque></jogoDestaque>
  <div class="jogos">
    <jogo1 class="jogo"></jogo1>
    <jogo2 class="jogo"></jogo2>
    <jogo3 class="jogo"></jogo3>
    <jogo4 class="jogo"></jogo4>
    <jogo5 class="jogo"></jogo5>
    <jogo6 class="jogo"></jogo6>
    <jogo7 class="jogo"></jogo7>
    <jogo8 class="jogo"></jogo8>
    <jogo9 class="jogo"></jogo9>
    <jogo10 class="jogo"></jogo10>
    <jogo11 class="jogo"></jogo11>
    <jogo12 class="jogo"></jogo12>
    <jogo13 class="jogo"></jogo13>
    <jogo14 class="jogo"></jogo14>
    <jogo15 class="jogo"></jogo15>
    <jogo16 class="jogo"></jogo16>
    <jogo17 class="jogo"></jogo17>
    <jogo18 class="jogo"></jogo18>
    <jogo19 class="jogo"></jogo19>
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
