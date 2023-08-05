<!-- @format -->

<template>
	<div class="min-h-screen bg-white p-0 dark:bg-gray-800">
		<Bg>
			<template #containter>
				<h1 class="text-white text-[112px] w-auto mx-auto mt-8 font-libre ">Nuestra Boda</h1>
				<Countdown class="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto"></Countdown>
			</template>
		</Bg>
	</div>
	<div class="relative w-full py-8 px-4 px-12 bg-yellow-900"></div>
</template>
<script setup>
	import { ref } from "vue";
	import Bg from "./components/Bg.vue";
	import Countdown from "./components/Countdown.vue";

</script>
