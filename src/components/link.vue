<script setup lang="ts">
import { ref } from 'vue';
const produtos = ref(null);
fetch("https://vercel-store-kayky.vercel.app/api/jogo/")
    .then(response => response.json())
    .then(data => produtos.value = data);
</script>