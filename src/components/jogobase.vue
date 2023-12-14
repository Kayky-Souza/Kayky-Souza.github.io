<template>
    <div class="card" style="width: 18rem;">
    <slot name="imagem"></slot>
      <div class="card-body">
    <h5 class="card-title"><slot name="jogo"></slot></h5>
    <p class="card-text"><slot name="genero"></slot></p>
    <p class="card-text"><slot name="distribuidora"></slot></p>
    <p class="card-text"><slot name="plataforma"></slot></p>
    <slot class="preco-comprar" name="actions">
      <button type="button" class="btn btn-secondary btn-lg" disabled> nao esta disponivel</button>
    </slot>
  </div>
</div>
</template>

<style scoped>
  div .card{
    background-color: #96a6b7;
  }
</style>