<script setup>
    import { ref } from "vue"

    import AlbumList from "../components/AlbumList.vue"
    import FormText from "../components/FormText.vue"

    const motCleSaisi = ref("")

    function handlerRecherche(motCle) {
        motCleSaisi.value = motCle
    }
</script>

<template>
    <div>
        <!-- J'ai ajouté une props pour supprimer le warning sur v-model du form du composant FormText -->
        <FormText temp="" @eventRecherche="handlerRecherche"/>
        <AlbumList :motCle="motCleSaisi"/>
    </div>
</template>