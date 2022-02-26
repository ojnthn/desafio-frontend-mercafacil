<template>
  <div v-if="error">Algo deu errado</div>
	<div v-if="loading" style="text-align: center;">
		<Loader />
	</div>
	<div v-else>
		<div v-if="result" class="container">
			<div v-for="character in result.characters.results" :key="character.id">
				<Card :character="character"/>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import { CharactersUseCase } from "../usecase/Characters.usecase"

import Card from "./Card.vue";
import Loader from "./Loader.vue"

const characterUseCase = new CharactersUseCase();

export default defineComponent({
  name: "List",
  components: {
    Card,
    Loader
  },
  props: {
    page: Number,
    term: String
  },
  setup(props) {
    let { result, loading, error } = characterUseCase.list({
      page: props.page,
      term: props.term
    });
    
    return {
      result,
      loading,
      error
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
