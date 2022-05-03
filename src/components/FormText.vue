
<script setup>
    const props = defineProps(["temp"]);
</script>


<template>
    <div>
        <form class="formAlbum" @submit.prevent="$emit('eventRecherche', temp)">
            <img class="loupe" src="../assets/loupe.jpg" />
            <input class="inputAlbum" type="text" v-model="temp" placeholder="Mot-clé" />
            <input class="valider" type="submit" value="Valider" />
        </form>
    </div>    
</template>

<style>
    h2 {
        font-size: 3rem;
        margin: auto;
    }
    .formAlbum {
        display: flex;
        gap: 10px;
        justify-content: flex-end;
        margin-top: 10px;
    }
    .inputAlbum {
        font-size: 24px;
        padding: 10px;
        border-radius: 8px;
    }
    .loupe {
        width: 100px;
        height: 70px;
    }
    .valider {
        font-size: 24px;
        padding: 8px;
        border-radius: 8px;
    }
</style>