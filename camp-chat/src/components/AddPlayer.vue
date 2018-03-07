<template>
<div class="players-list">
  <main class="container">
    <div class="alert alert-danger" role="alert" id="errorMsg">
    </div>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Enter a Name">
      </div>
      <div class="form-group">
        <label for="tagline">Tagline</label>
        <textarea type="text" class="form-control" name="tagline" id="tagline" placeholder="Enter a Tagline"></textarea>
      </div>
      <div class="form-group">
        <label for="classSelect">Select class</label>
        <select class="form-control" id="classSelect">
          <option>{{  }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="raceSelect">Select race</label>
        <select class="form-control" id="raceSelect">
          <option>{{  }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="url" class="form-control" name="image" id="image" placeholder="http://yourImage.com/image.png">
      </div>
    </form>
    <nav class="nav nav-pills nav-justified">
      <a class="nav-item nav-link" href="/add-player">{{ btnAdd }}</a>
    </nav>
    <!-- <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" name="title" id="title" placeholder="Enter a Title">
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" class="form-control" name="description" id="description" placeholder="Enter a Description"></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input type="url" class="form-control" name="image" id="image" placeholder="http://yourImage.com/image.png">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" step="0.01" class="form-control" name="price" id="price" placeholder="Enter a Price">
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="number" class="form-control" name="quantity" id="quantity" placeholder="Enter a Quantity">
      </div>
      <button type="submit" class="btn btn-success">Create</button>
    </form> -->
  </main>
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
      btnAdd: 'Add Player',
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
.button-add {
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
