<template>
  <img src="../assets/icons/arrow.png" 
			 title="Anterior" 
			 style="transform: rotate(180deg);" 
			 width="30" 
			 @click="navigate('prev')" 
	/>
	<img src="../assets/icons/arrow.png" 
			 title="Próximo" 
			 width="30" 
			 @click="navigate('next')" 
	/> 
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Navigation",
	emits: ["navigation"],
	methods: {
		navigate: function(direction) {
			this.$emit("navigation", direction)
		}
	}
})
</script>

<style scoped>
img {
	cursor: pointer;
}
</style>
