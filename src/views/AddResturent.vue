<template>
<div>
    <AppHeader />
    <form class="add">
        <input type="text" name="name" placeholder="Enter Resturent Name" v-model="Resturent.name">
        <input type="text" name="address" placeholder="Enter Resturent Address" v-model="Resturent.address">
        <input type="text" name="contact" placeholder="Enter Resturent Contact" v-model="Resturent.contact">
        <button type="button" @click="add()">Add New Resturent</button>
    </form>
</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import axios from 'axios';
export default {
    name: 'AddResturent',
    components: {
        AppHeader
    },
    data(){
      return{
        Resturent:{
          name:'',
          address:'',
          contact:'',
        }
      }
    },
    methods:{
     async add(){
    
        let result= await axios.post("http://localhost:8000/Resturent",this.Resturent)

        console.log(result)
   
        
      }
    }

}
</script>

<style>

</style>
