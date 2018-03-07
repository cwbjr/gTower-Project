<template>
  <div class="home">
    <div class="card container" style="width: 18rem;"
    :player="player_list"
    v-for="player_list in players"
    :key="player_list.id"
    >
      <img class="card-img-top" :src="player_list.image" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ player_list.name}}</h5>
        <p class="card-text">{{ player_list.tagline}}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Level: {{ player_list.level}}</li>
        <li class="list-group-item">{{ player_list.class}}</li>
        <li class="list-group-item">{{ player_list.race}}</li>
      </ul>
      <div class="card-body">
        <button type="button" class="btn btn-info">{{ btnView}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // props: ['player_list'],
  props: {
    player_list: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dbURL: 'http://localhost:3000/api/player',
      players: [],
      btnView: 'View',
    };
  },
  mounted() {
    this.getPlayers();
  },
  methods: {
    getPlayers() {
      fetch(this.dbURL)
        .then(res => res.json())
        .then((data) => {
          this.players = data;
          console.log(data);
        });
    },
  },
};
</script>

<style scoped>
div.home {
  display: flex;
  flex-flow: wrap;
  padding: 40px;
}
</style>
