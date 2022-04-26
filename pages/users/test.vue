<template>
    <!-- <h1>Hello {{name}} {{name}}  </h1> -->
    <!-- <button type="summit"> Hello</button> -->
 <h1>Hello{{name}}</h1>

    <!-- <h1></h1> -->
</template>


<script>
import axios from "axios"
export default {
 
async asyncData({$axios,}){
 const data = await $axios.$get('https://pokeapi.co/api/v2/pokemon/ditto')
 const name =data.game_indices[1].version.name
 return {name}

}
}

</script>
