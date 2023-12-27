<!-- @format -->

<template>
	<div class="justify-space-around py-[4px] my-auto">
		<div
			class="flex flex-col justify-center items-center text-white text-center font-libre">
			<p class="font-bold text-[31px]">{{ days % 365 }}</p>
			<span class="text-sm">día</span>
		</div>

		<div
			class="flex flex-col justify-center items-center text-white text-center font-libre">
			<p class="font-bold text-[30px]">
				{{ hours % 24 }}
			</p>
			<span class="text-sm">horas</span>
		</div>

		<div
			class="flex flex-col justify-center items-center text-white text-center font-libre">
			<p class="font-bold text-[30px]">
				{{ minutes % 60 }}
			</p>
			<span class="text-sm"> min </span>
		</div>

		<div
			class="flex flex-col justify-center items-center text-white text-center font-libre">
			<p class="font-bold text-[30px]">
				{{ seconds % 60 }}
			</p>
			<span class="text-sm">seg</span>
		</div>
	</div>
</template>

<script>
	import { ref } from "@vue/reactivity";

	export default {
		name: "Countdown",
		setup() {
			const years = ref(0);
			const days = ref(0);
			const hours = ref(0);
			const minutes = ref(0);
			const seconds = ref(0);
			const lunchDate = new Date("08 October 2023");

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
