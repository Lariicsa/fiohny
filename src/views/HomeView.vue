<template>
	<div class="container flex items-center justify-center mx-auto px-4 h-screen">
		<h1>Luis y Fionna</h1>
		<div>
			<p>Faltan:</p>
			<span>{{ timer.days }} días</span>:<span>{{ timer.hours }} horas</span
			>:<span>{{ timer.minutes }} minutos</span>:<span
				>{{ timer.seconds }} segundos</span
			>
		</div>
		<p>{{ timer.isRunning ? "Running" : "Not running" }}</p>
	</div>
</template>



<script setup>
// @ is an alias to /src
import { watchEffect, onMounted } from "vue";
import { useTimer } from "vue-timer-hook";

const time = new Date();
const daysToWedding = 60 * 60 * 24 * 141
time.setSeconds(time.getSeconds() + daysToWedding ); // 10 minutes timer
const timer = useTimer(time);
const restartFive = () => {
	// Restarts to 5 minutes timer
	const time = new Date();
	time.setSeconds(time.getSeconds() + 300);
	timer.restart(time);
};
onMounted(() => {
	watchEffect(async () => {
		if (timer.isExpired.value) {
			console.warn("IsExpired");
		}
	});
});
</script>
