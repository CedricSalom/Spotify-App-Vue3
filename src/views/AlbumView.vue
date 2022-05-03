

<script setup>
    import AlbumDetail from "../components/AlbumDetail.vue"
</script>


<template>
  <AlbumDetail :idAlbum="$route.params.id" />
</template>