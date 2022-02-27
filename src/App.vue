<template>
  <Header />
  <div class="content">
    <h2>Personagens</h2>
    <div style="text-align: center;">
      <input v-model="term" 
        v-on:keyup="this.findCharacter()"
        placeholder="Pesquise por um personagem" 
        class="input--pesquisa"      
      >
    </div>
    <List :page="this.page" :term="this.term" :key="componentKey"/>
    <div style="text-align: center;">
      <Navigation @navigation="setNavigation" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from './components/Header.vue';
import List from './components/List.vue';
import Navigation from "./components/Navigation.vue";
import Order from "./components/Order.vue";

export default defineComponent({
  name: 'App',
  components: {
    Header,
    List,
    Navigation,
    Order
  },
  data() {
    return {
      page: 1,
      term: null,
      componentKey: 1
    }
  },
  methods: {
    findCharacter: function() {
      this.updateComponent();
    },
    updateComponent: function() {
      this.componentKey++;
    },
    setNavigation: function(direction: string) {
      if (direction === "next")
        this.page++;
      else
        if (this.page !== 1)
          this.page--;

      this.updateComponent()
    }
  }
});
</script>

<style>
@import url("./assets/base.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  min-height: 400px;
  margin: 50px;
  padding: 20px;
  background-color: #f6f6ff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px #666666;
}

.input--pesquisa {
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #a5a5a582;
  padding: 7px 3px 7px 3px;
  font-size: 15px;
}

.input--pesquisa:focus {
  border-color: black;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(225, 239, 104, 0.6);
  outline: 0 none;
}
</style>
