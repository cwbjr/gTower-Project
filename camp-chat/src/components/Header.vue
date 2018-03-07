<template>
  <div class="header">
    <nav class="navbar sticky-top navbar-light bg-light">
      <a class="navbar-brand" href="/">Campaign Chat</a>
      <a class="nav-link" href="/">Home</a>
      <a class="nav-link" href="/players">Players</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.navbar {
  justify-content: flex-start;
}
</style>
