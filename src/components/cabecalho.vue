<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLoginStore } from '../stores/login.ts'
import { useCartStore } from '../stores/cartStore.ts'
const cartStore = useCartStore();
import { ref } from 'vue';
const store = useLoginStore()
const router = useRouter()

function logout() {

  store.email = ""
  store.id = ""
  store.token = ""

}
</script>

<template>
  <nav class="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <ul class="carrinho">
        <li><router-link to="/cart"><i class="bi bi-cart display-6" style="color: white"></i></router-link></li>
        <li><RouterLink to="/" class="navbar-brand">Gameshop</RouterLink></li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/addUser" class="nav-link active" aria-current="page">Criar Conta</RouterLink>
          </li>
          <li v-if="store.email === ''" class="nav-item">
            <button type="button" class="btn btn-outline-light me-2" @click="router.push('/login')">Entre</button>
          </li>
          <li v-if="store.email !== ''">
            <button type="button" class="btn btn-warning" @click="logout()">Sair</button>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Jogos
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Ps4</a></li>
              <li><a class="dropdown-item" href="#">Ps5</a></li>
              <li><a class="dropdown-item" href="#">Xbox</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><RouterLink to="addJogo" class="dropdown-item" href="#">Add Jogo</RouterLink></li>
            </ul>
          </li>
          <li  v-if="store.email !== ''"><p>{{store.email}}</p></li>
          
          <!-- <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
        </ul>
        <li v-if="store.email !== ''">
            
          </li>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav></template>

<style scoped>
  .carrinho{
    display: flex;
    align-items: center;
  }
  p{
    color: aqua;
  }
  .navbarSupportedContent{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>