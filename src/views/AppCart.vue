<script setup lang="ts">
	import card from "../components/card.vue"
  import { useRoute } from 'vue-router'
  import { ref } from 'vue';
  import { useCartStore } from '../stores/cartStore.ts'
const store = useCartStore()
const route = useRoute()
const id = route.params.id
console.log(route.name)
if (route.name === "AddCart"){
  if(store.products[id] === undefined){
    store.products[id] = 1
  }else{
    store.products[id] += 1
  }
}
</script>

<template>
<section class="h-100" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                  class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>
        
          <card v-for="(quantity,id) in store.products" :id="id"></card>

        

        <div class="card mb-4">
          <div class="card-body p-4 d-flex flex-row">
            <div class="form-outline flex-fill">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label class="form-label" for="form1">Discound code</label>
            </div>
            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</template>