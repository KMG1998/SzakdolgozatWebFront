<template>
  <Login_Comp/>
</template>

<script>
import Login_Comp from './components/Login_Comp.vue'

export default {
  name: 'App',
  components: {
    Login_Comp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
