<!-- @format -->

<template>
	<div class="justify-space-around py-4 my-auto">
		<div class="flex flex-col justify-center items-center bg-[#A61616] rounded-full p-4 w-[180px] h-[180px] text-white text-center font-medium text-4xl font-sans">
			<p>{{ days % 365 }}</p>
			<span>días</span>
		</div>
		<div class="flex flex-col justify-center items-center bg-[#A61616] rounded-full p-4 w-[180px] h-[180px] text-white text-center font-medium text-4xl font-sans">
			<p>
				{{ hours % 24 }}
			</p>
			<span>horas</span>
		</div>
		<div class="flex flex-col justify-center items-center bg-[#A61616] rounded-full p-4 w-[180px] h-[180px] text-white text-center font-medium text-4xl font-sans">
			<p>
				<p>{{ minutes % 60 }}</p>
				<span> minutos </span>
			</p>
		</div>
		<div class="flex flex-col justify-center items-center bg-[#A61616] rounded-full p-4 w-[180px] h-[180px] text-white text-center font-medium text-4xl font-sans">
			<p>
				{{ seconds % 60 }}
			</p>
			<span>segundos</span>
		</div>
	</div>
</template>

<script>
	import { ref } from "@vue/reactivity";

	export default {
		name: "CounterCards",
		setup() {
			const years = ref(0);
			const days = ref(0);
			const hours = ref(0);
			const minutes = ref(0);
			const seconds = ref(0);
			const lunchDate = new Date("07 Octber 2023");

			setInterval(() => {
				const currentDate = new Date();
				const lunchTime = lunchDate - currentDate;

				seconds.value = parseInt(lunchTime / 1000);
				minutes.value = parseInt(seconds.value / 60);
				hours.value = parseInt(minutes.value / 60);
				days.value = parseInt(hours.value / 24);
				years.value = parseInt(days.value / 365);
			}, 1000);

			return { years, days, hours, minutes, seconds };
		},
	};
</script>

<style>
	.opacitybg {
		background: rgba(255, 255, 255, 0.7);
	}
</style>
