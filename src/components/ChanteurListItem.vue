

<script setup>
    defineProps(["artist", "images"]);
</script>

<template>
    <div class="items">
        <RouterLink :to="{ name: 'chanteur', params: { id: artist.id } }">
            <img :src="images[2].url" />
        </RouterLink>
        <h1 class="titreArtist"> {{ artist.name }}</h1>
    </div>
</template>

<style>
    .items {
        display: flex;
    }
    .titreArtist {
        margin-left: 2rem;
    }
</style>