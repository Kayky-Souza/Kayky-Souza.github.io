<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const jogo = ref();
const genero = ref();
const distribuidora = ref();
const plataforma = ref();
const preco = ref();
const imagem = ref();
const quantidade = ref();
const orderId = ref();

async function createJogo() {

    try {

        let body = JSON.stringify({
            "data": {
                "type": "jogo",
                "attributes": {
                    "createdAt": "2023-12-13T23:36:16.258Z",
                    "updatedAt": "2023-12-13T23:36:16.258Z",
                    "jogo": jogo,
                    "genero": genero,
                    "distribuidora": distribuidora,
                    "plataforma": plataforma,
                    "preco": preco,
                    "imagem": imagem,
                    "quantidade": quantidade,
                    "orderId": orderId
                }
            }
        });

        const response = await fetch("https://jogo.4cc.shop/api/jogo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body

        });
        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }

}



</script>

<template>
    <section class="vh-150 mt-5">
        <div class="container-fluid h-custom ">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-8 col-lg-6 col-xl-4">
                    <form>

                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input v-model="jogo" type="text" id="form3Example3" class="form-control form-control-lg"
                                placeholder="nome do jogo" />
                            <label class="form-label" for="form3Example3">Jogo</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <input v-model="genero" type="text" id="form3Example4" class="form-control form-control-lg"
                                placeholder="genero" />
                            <label class="form-label" for="form3Example4">Genero</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="distribuidora" type="text" id="form3Example4"
                                class="form-control form-control-lg" placeholder="distribuidora" />
                            <label class="form-label" for="form3Example4">distribuidora</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="plataforma" type="text" id="form3Example4" class="form-control form-control-lg"
                                placeholder="plataforma" />
                            <label class="form-label" for="form3Example4">plataforma</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="preco" type="text" id="form3Example4" class="form-control form-control-lg"
                                placeholder="preco" />
                            <label class="form-label" for="form3Example4">preco</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="imagem" type="text" id="form3Example4" class="form-control form-control-lg"
                                placeholder="imagem" />
                            <label class="form-label" for="form3Example4">imagem</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="quantidade" type="number" id="form3Example4"
                                class="form-control form-control-lg" placeholder="quantidade" />
                            <label class="form-label" for="form3Example4">quantidade</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input v-model="orderId" type="number" id="form3Example4" class="form-control form-control-lg"
                                placeholder="orderId" />
                            <label class="form-label" for="form3Example4">orderId</label>
                        </div>


                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button @click="createJogo()" type="button" class="btn btn-primary btn-lg"
                                style="padding-left: 2.5rem; padding-right: 2.5rem;">
                                <RouterLink to="/" style="color: aliceblue;">Finalizar</RouterLink>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
button {
    margin-bottom: 20rem !important;
}
</style>