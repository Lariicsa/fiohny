<!-- @format -->

<template>
	<div class="min-h-screen bg-white p-4 dark:bg-gray-800">
		<div class="relative">
			<div
				class="bg-gray-100 bg-cover bg-center bg-no-repeat bg-blend-multiply"
				style="
					background-image: url('https://9cover.com/images/ccovers/1365478677tv-show-futurama-space-shuttle.jpg');
				">
				<div
					class="mx-auto w-full max-w-screen-xl px-8 py-24 text-center lg:px-24 lg:py-32">
					<div
						class="flex flex-row justify-around sm:space-x-4 sm:space-y-0"></div>
				</div>
			</div>
		</div>

		<div class="my-18">
			<Countdown class="grid sm:grid-cols-4 gap-4"></Countdown>
		</div>
	</div>
</template>
<script setup>
	import Countdown from "./components/Countdown.vue";
</script>
