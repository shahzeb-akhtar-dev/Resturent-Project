<template>
<div class="signup">
    <img src="../assets/logo.jpg" alt="" id="logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" name="Name" placeholder="Enter your Name" v-model="Name">
        <input type="Email" name="Email" placeholder="Enter your Email" v-model="Email">
        <input type="password" name="password" placeholder="Enter your Password" v-model="Pass">
        <button @click="signup">Sign Up</button>
        <p><router-link to="/Login">Log In</router-link> </p>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignUp',
    data() {
        return {
            Email: '',
            Pass: '',
            Name: ''
        }
    },
    methods: {
        async signup() {
            let Name = this.Name
            let Email = this.Email
            let Password = this.Pass
            // console.log(Name,Email,Password)
            var result = await axios.post("http://localhost:8000/users", {
                name: Name,
                Email: Email,
                Password: Password
            })
            if (result.status == 201) {
                alert('sign up done ')
                localStorage.setItem("user-info", JSON.stringify(result.data))
                this.$router.push({
                    name: "Home"
                })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: "Home"
            })

        }
    },
    beforeUpdate(){
        alert('updated')
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
