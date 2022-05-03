

<script setup>
  import { reactive, onMounted } from "vue"
  const props = defineProps(["idAlbum"]);

  const albumDetails = reactive([])

  const spotifyUrlGetAlbumDetails = "https://api.spotify.com/v1/albums/" + props.idAlbum;
    const token = "BQBtTxfyJ6IBaAuYiYUVNdgqKnPD9yum4My6uCSNLmstDfxUUKopCSPCOFVfeMFtfwdOJ6pEqrAQZE1--iPw0M0QIc-hWI17WL5NWz2gK2x6ths6o2Vgtgw9SJa8K7OQR4iNgJU"
  const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };

  function getAlbum() {
    
    fetch(spotifyUrlGetAlbumDetails, fetchOptions)
      .then(response => response.json())
      .then((data) => {
        albumDetails.splice(0)
        albumDetails.push(data)
        console.log(data)
      })
      .catch((error) => console.log("Problème accès API " + error))
  }

  onMounted(() => {
    getAlbum()
  })

</script>

<template>
  <div>
    <!-- Code à décommenter

      <h1>{{ albumDetails[0].name }}</h1>
      <h1>{{ albumDetails[0].artists[0].name }}</h1>
      <img :src="albumDetails[0].images[0].url" />
      <ul v-for="track in albumDetails[0].tracks.items" :key="track.id">
        {{ track.name }}
        <audio controls :src="track.preview_url" />
      </ul>

    -->
  </div>
</template>
