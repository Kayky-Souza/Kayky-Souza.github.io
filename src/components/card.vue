<script setup lang="ts">
import { ref, onMounted, onBeforeMount} from 'vue'
import { useCartStore } from '../stores/cartStore.ts'

const store = useCartStore()

const produto = ref(null)
const quantity = ref(1)



const props = defineProps({
  id: { type: String, required: true }
})


onBeforeMount(() => {
  quantity.value = 1

})

onMounted(() => {

  if (store.products[props.id] === undefined){
    store.products[props.id] = 1
  }

  fetch("https://jogo.4cc.shop/api/jogo/" + props.id)
    .then(response => response.json())
    .then(data => produto.value = data.data);
  
  quantity.value = store.products[props.id]
})

function getImgUrl(idImg: string) {
  const urlbase = "https://storage.googleapis.com/webclass_imgs/kayky/imagens/";
  let urlimg: string;
  urlimg = urlbase + idImg
  return urlimg
}

function increment(){
  quantity.value = quantity.value + 1
  store.products[props.id] = quantity.value
  store.quantidade = store.quantidade.value+1
}

function decrement(){
  if(quantity.value > 0){
    quantity.value = quantity.value - 1
    store.products[props.id] = quantity.value
    store.quantidade = store.quantidade.value-1
  }
}

function update(){
    store.products[props.id] = quantity.value
}
function remove(){
    delete store.products[props.id]
}

</script>

<template>
  <div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2" v-if="produto?.attributes?.imagem === undefined">
          <p>Imagem não carregada</p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2" v-else>
          <img
            :src="getImgUrl(produto?.attributes?.imagem)"
            class="img-fluid rounded-3" alt="Cotton T-shirt">
        </div>

        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead fw-normal mb-2">{{produto?.attributes?.nome}}</p>
          <p><span class="text-muted">Nome: </span>{{produto?.attributes.jogo}}</p>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
         <button class="btn btn-link px-2" @click="decrement">
            <i class="bi bi-dash"></i>
        </button>
          <input :id="'quantity_'+props.id" min="0" name="quantity" v-model="quantity" type="number"
            class="form-control form-control-sm" @input="update" />
        <button class="btn btn-link px-2" @click="increment">
            <i class="bi bi-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 class="mb-0"><span class="text-muted">R$ </span> {{produto?.attributes.preco}}</h5>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <button @click="remove" class="text-danger"><i class="bi bi-trash bi-lg"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>