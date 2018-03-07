<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import PlayersList from '@/components/PlayersList';
import AddPlayer from '@/components/AddPlayer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Home,
    PlayersList,
    AddPlayer,
  },
  // props: {
  //   player: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      dbURL: 'http://localhost:3000/api/player',
      players: [],
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

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
