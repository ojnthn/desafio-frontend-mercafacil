<template>
  <div class="card" @click="showInfo()">
    <img :src="character.image" :alt="character.name" srcset="">
    <div class="description">
      <p class="character-name">{{ character.name }}</p>
      <p class="character-status">
        <span v-if="character.status == 'Alive'">
          <div class="status alive"></div>
          Alive
        </span>
        <span v-else-if="character.status == 'Dead'">
          <div class="status dead"></div>
          Dead
        </span>
        <span v-else>
          <div class="status unknown"></div>
          Unknown
        </span>
        -
        <span>{{ character.species }}</span>
      </p>
      <p>
        <small>Origin: {{ character.location.name }}</small>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Card',
  props: {
    character: Object
  },
  methods: {
    showInfo: function() {
      let episodes = [];

      this.character.episode.map(item => {
        episodes.push(`<li><strong>${item.episode}</strong> - ${item.name}</li>`)
      });

      //@ts-ignore
      this.$swal(
        this.character.name,
        `
          <strong>Episodes</strong>: <ul style="text-align: left;">${episodes.join("")}</ul>
        `
      );
    }
  }
});
</script>

<style scoped>
@import url("../assets/base.css");

p {
  margin: 0;
}

.card {
  width: 250px;
  min-height: 300px;
  background: white;
  border: 1px solid #a5a5a582;
  margin: 10px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  display: block;
  border-radius: 10px;
}

.card:hover {
  transform: scale(1);
  cursor: pointer;
  box-shadow: 0px 0px 15px 0px #cccccc;
}

.card > img {
  width: 250px;
  height: 250px;
  border-radius: 10px 10px 0 0;
}

.card > .description {
  padding: 0 10px 10px;
}

.card > .description > .character-name {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.status {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  margin-top: 0.25rem;
  border-radius: 50%;
  float: left;
}

.alive {
  background: rgb(85, 204, 68);
}

.dead {
  background: red;
}

.unknown {
  background: gray;
}
</style>
