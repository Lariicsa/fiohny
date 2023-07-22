<!-- @format -->

<template>
	<div class="min-h-screen bg-white p-4 dark:bg-gray-800">
		<img
			class="h-auto max-h-[440px] mx-auto max-w-full"
			src="./assets/fionhy_2.jpeg"
			alt="image description" />
	</div>
	<div class="relative w-full py-8 px-4 px-12 bg-yellow-900">
		<Countdown class="grid sm:grid-cols-4 gap-4"></Countdown>

		<!-- <div class="relative z-10 text-center py-24 md:py-48">
			<h1
				class="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
				Nuestra Boda
			</h1>
		</div>

		<div
			class="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
			<a href="#" class="border-b border-white">link uno</a>
			<a href="#" class="border-b border-white">link dos</a>
		</div>

		<img
			src="https://scontent.fmex1-6.fna.fbcdn.net/v/t1.6435-9/49735019_211952436417430_2403954171221901312_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=XzKYhDUHFL4AX-63_gu&_nc_ht=scontent.fmex1-6.fna&oh=00_AfBpRvKiOAeb1C11LsY5ZqFCS0klZEtDLisAVvcaY81L-A&oe=64C9415A"
			class="w-full h-full absolute inset-0 object-cover opacity-70" /> -->
	</div>
</template>
<script setup>
	import Countdown from "./components/Countdown.vue";
</script>
