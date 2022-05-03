

<script setup>
    import ChanteurDetail from "../components/ChanteurDetail.vue"
</script>


<template>
  <ChanteurDetail :idArtist="$route.params.id" />
</template>