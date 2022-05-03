

<script setup>
    defineProps(["album", "images"]);
</script>

<template>
    <div class="items">
        <RouterLink :to="{ name: 'album', params: { id: album.id } }">
            <img :src="images[2].url" />
        </RouterLink>
        <h1 class="titreAlbum"> {{ album.name }}</h1>
    </div>
</template>

<style>
    .items {
        display: flex;
    }
    .titreAlbum {
        margin-left: 2rem;
    }
</style>