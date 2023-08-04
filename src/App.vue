<template>

  <router-view/>  <!-- 페이지 이동이 표시될 곳 -->

</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
html, body, #app{
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
