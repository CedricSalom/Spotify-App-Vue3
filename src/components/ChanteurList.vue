<script setup>
    import { reactive, watch } from "vue"
    import ChanteurListItem from "./ChanteurListItem.vue"

    const props = defineProps(["motCle"])
    
    const spotifyUrlSearchArtist = "https://api.spotify.com/v1/search?type=artist&market=FR&q=";
    const token = "BQBtTxfyJ6IBaAuYiYUVNdgqKnPD9yum4My6uCSNLmstDfxUUKopCSPCOFVfeMFtfwdOJ6pEqrAQZE1--iPw0M0QIc-hWI17WL5NWz2gK2x6ths6o2Vgtgw9SJa8K7OQR4iNgJU"
    const fetchOptions = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        },
        method: "GET"
    };   

    const listeArtist = reactive([])

    function getArtists(motCleEntré) {
        fetch(spotifyUrlSearchArtist + motCleEntré, fetchOptions)
                .then(response => response.json())
                .then((data) => {
                    console.log(data)
                    listeArtist.splice(0);
                    data.artists.items.forEach(artist => {
                        listeArtist.push(artist)
                    })
                })
                    
                .catch((error) => console.log("Problème accès API " + error))
    }   

    watch(
        ()=>props.motCle,
        (newMotCle) => {
            getArtists(newMotCle)
        }
    )
</script>


<template>
    <div>
        <ul>
            <ChanteurListItem 
                v-for="item in listeArtist" :key="item.id" 
                :artist="item"
                :images="item.images"
            />
        </ul>
    </div>
</template>