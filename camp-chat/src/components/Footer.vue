<template>
  <div class="footer">
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div>&copy; {{ date }}</div>
      <!-- <a class="navbar-brand" href="#">Fixed bottom</a> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>

</style>
