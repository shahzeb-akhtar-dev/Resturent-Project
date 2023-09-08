<template>

  <router-view/>

</template>

<script>


export default {
  name: 'App',
  components: {
  
}
}
</script>

<style>
body{
  background-color:azure;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
  
}
h1 {
    margin: 10px;
}

#logo {
    width: 100px;
    height: 100px;
}

.signup ,.login {
    width: 300px;
    margin: auto;
   

}

.register input,.login input ,.add input{
    width: 300px;
    padding: 10px;
    font-size: 17px;
    display: block;
    margin: 20px auto;
    border: 1px solid rgb(175, 105, 56);
    outline: none;
}

.register button, .login button,.add button {
    width: 321px;
    padding: 10px;
    font-size: 20px;
    background-color: rgb(175, 105, 56);
    color: aliceblue;
    outline: none;
    border: none;
}
</style>
