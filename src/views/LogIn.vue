<template>
<div class="login">
    <img src="../assets/logo.jpg" alt="" id="logo">
    <h1>Log In</h1>
    <div class="login">
        <input type="Email" name="Email" placeholder="Enter your Email" v-model="Email">
        <input type="password" name="password" placeholder="Enter your Password" v-model="Pass">
        <button @click="login">Log in</button>
        <p>
            <router-link to="/Sign-UP">Sign up</router-link>
        </p>
    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            Email: '',
            Pass: '',
        }
    },
    methods:{
     async login(){
        var result= await axios.get(
          `http://localhost:8000/users?email=${this.Email}&&Password=${this.Pass}`
          )
             if (result.status == 200 && result.data.length>0) {
                alert('Login done ')
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({
                    name: "Home"
                })
            }
          console.log(result)
      }
      
    },
    mounted(){
      let user=localStorage.getItem('user-info')
      if(user){
        this.$router.push({
          name:"Home"
        })
      }
    }

}
</script>

<style>

</style>
