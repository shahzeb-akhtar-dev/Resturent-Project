<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/Add-Resturent">Add Resturent</router-link>
    <router-link to="" @click="logout()">Logout</router-link>
    
 
</div>
</template>

<script>
export default {
    name:"AppHeader",
    methods:{
        logout(){
            localStorage.clear()
            this.$router.push({
                name:"Login"
            })
        }
    }

}
</script>

<style>
.nav{
    background: #2e2e2e;
    /* padding: 10px; */
    display: flex;
    text-align: center;
    justify-content: center;
}
.nav a{
    color: #fff;
    font-size: 22px;
    padding: 8px 15px;
    display: block;
    text-decoration: none;

}
.nav a:hover{
    background: rgb(218, 214, 214);
    color: #2e2e2e;
}
</style>
