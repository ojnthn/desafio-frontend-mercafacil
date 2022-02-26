<template>
	<div style="padding: 10px; float: right;">
		<img v-if="!orderAsc" src="../assets/icons/desc.png" @click="changeOrder()">
		<img v-if="orderAsc" src="../assets/icons/asc.png" @click="changeOrder()">
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Order",
	data() {
		return {
			src: "../assets/icons/desc.png",
			orderAsc: true
		}
	},
	methods: {
		changeOrder: function() {
			if (this.orderAsc)
				this.orderAsc = false;
			else
				this.orderAsc = true;
		}
	}
})
</script>

<style scoped>
img {
	width: 30px;
	cursor: pointer;
}
</style>