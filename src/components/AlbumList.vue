<script setup>
    import { reactive, watch } from "vue"
    import AlbumListItem from "./AlbumListItem.vue"

    const props = defineProps(["motCle"])
    
    const spotifyUrlSearchAlbum = "https://api.spotify.com/v1/search?type=album&market=FR&q=";
    const token = "BQBtTxfyJ6IBaAuYiYUVNdgqKnPD9yum4My6uCSNLmstDfxUUKopCSPCOFVfeMFtfwdOJ6pEqrAQZE1--iPw0M0QIc-hWI17WL5NWz2gK2x6ths6o2Vgtgw9SJa8K7OQR4iNgJU"
    const fetchOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        method: "GET"
    };   

    const listeAlbum = reactive([])

    function getAlbums(motCleEntré) {
        fetch(spotifyUrlSearchAlbum + motCleEntré, fetchOptions)
                .then(response => response.json())
                .then((data) => {
                    listeAlbum.splice(0);
                    data.albums.items.forEach(album => {
                        listeAlbum.push(album)
                    })
                })
                    
                .catch((error) => console.log("Problème accès API " + error))
    }   

    watch(
        ()=>props.motCle,
        (newMotCle) => {
            getAlbums(newMotCle)
        }
    )
</script>


<template>
    <div>
        <ul>
            <AlbumListItem 
                v-for="item in listeAlbum" :key="item.id" 
                :album="item" 
                :images="item.images"
            />
        </ul>
    </div>
</template>