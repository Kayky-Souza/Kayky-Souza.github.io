<template>
    <div class="jogo_destaque">
        <div class="oferta">
            <h2 class="informacao">God of War</h2>
            <p class="informacao">10% de desconto</p>
            <a class="botao_confirmar" href="/teste">conferir</a>
        </div>
    </div>
</template>

<style scoped>
    .jogo_destaque{
    background-image: url("https://th.bing.com/th/id/R.b51b7e35f06a4d31b8abbff5090f341e?rik=IvsW%2ffV771c9HA&pid=ImgRaw&r=0");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50rem;
}
.oferta{
    color: whitesmoke;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.informacao{
    margin: 1rem;
    font-size: 2rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.botao_confirmar{
    font-size: 2rem;
    background-color: blue;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    color: whitesmoke;
}
</style>