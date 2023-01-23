<template>
  <header class="mb-5">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">회원가입</router-link> |
      <router-link to="/login">로그인</router-link> |
      <router-link to="/dashboard">글쓰기</router-link>
    </nav>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </header>

  <router-view />

  <!-- <footer><h1>footer</h1></footer> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.axios);
  },
  methods: {},
};
</script>

<style>
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
