<template>
<div class="players-list">
  <div class="card container">
    <h1>List Table of Players</h1>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">Level</th>
          <th scope="col">Class</th>
          <th scope="col">Race</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr :player="player_list" v-for="player_list in players" :key="player_list.id">
          <th scope="row">{{ player_list.id }}</th>
          <td>{{ player_list.name }}</td>
          <td>{{ player_list.level }}</td>
          <td>{{ player_list.class }}</td>
          <td>{{ player_list.race }}</td>
          <td><button>Update</button></td>
          <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="button-add">
    <!-- <button type="button" class="btn btn-primary btn-lg btn-block">{{ btnAdd }}</button> -->
    <nav class="nav nav-pills nav-justified">
      <a class="nav-item nav-link" href="/add-player">{{ btnAdd }}</a>
    </nav>

  </div>

</div>
</template>

<script>
export default {
  name: 'PlayersList',
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
      btnAdd: 'Create Player',
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
.card, .button-add {
  width: 50rem;
  margin: 40px auto;
}
.nav a {
  background-color: #72B0D6;
  color: white;
}
.nav a:hover {
  background-color:  #0457C7;
}
</style>
