<template>
	<header>
		<img class="logo" alt="Vue logo" src="../assets/logo.png">
	</header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Header',
});
</script>

<style scoped>
header {
	border-radius: 0 0 10px 10px;
	background: rgb(18,22,54);
	background: -moz-linear-gradient(148deg, rgba(18,22,54,1) 0%, rgba(75,116,145,1) 100%);
	background: -webkit-linear-gradient(148deg, rgba(18,22,54,1) 0%, rgba(75,116,145,1) 100%);
	background: linear-gradient(148deg, rgba(18,22,54,1) 0%, rgba(75,116,145,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#121636",endColorstr="#4b7491",GradientType=1);
	width: 100%;
	box-shadow: 0px 0px 15px 0px #666666;
	text-align: center;
	padding-bottom: 10px;
	padding-top: 10px;
}

header > .logo {
	width: 15%;
}
</style>
