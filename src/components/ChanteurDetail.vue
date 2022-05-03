

<script setup>
  import { reactive, onMounted } from "vue"
  const props = defineProps(["idArtist"]);

  const artistDetails = reactive([])

  const spotifyUrlGetArtistDetails = "https://api.spotify.com/v1/artists/" + props.idArtist;
    const token = "BQBtTxfyJ6IBaAuYiYUVNdgqKnPD9yum4My6uCSNLmstDfxUUKopCSPCOFVfeMFtfwdOJ6pEqrAQZE1--iPw0M0QIc-hWI17WL5NWz2gK2x6ths6o2Vgtgw9SJa8K7OQR4iNgJU"
  const fetchOptions = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      },
      method: "GET"
    };

  function getArtist() {
    
    fetch(spotifyUrlGetArtistDetails, fetchOptions)
      .then(response => response.json())
      .then((data) => {
        artistDetails.splice(0)
        artistDetails.push(data)
        console.log(data)
      })
      .catch((error) => console.log("Problème accès API " + error))
  }

  onMounted(() => {
    getArtist()
  })

</script>

<template>
  <div>
    <!-- Code à décommenter

      <h1>{{ artistDetails[0].name }}</h1>
      <h1>{{ artistDetails[0].followers.total }} followers</h1>
      <img :src="artistDetails[0].images[0].url" />

    -->
  </div>
</template>
