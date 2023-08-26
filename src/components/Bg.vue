<!-- @format -->

<template>
	<div
		class="relative flex flex-col w-full h-full min-h-screen bg-contain bg-top bg-no-repeat"
		:style="`background-image: url(${coverImage})`">
		<div
			class="relative flex flex-col p-[16px] absolute min-h-screen flex w-full h-full bg-[rgba(0,0,0,0.7)] lg:px-24 lg:py-32">
			<div
				class="relative flex flex-col border border-[#dea95a] w-full h-full rounded-sm min-h-screen">
				<slot name="containter"></slot>
			</div>
		</div>
	</div>
</template>
<script setup>
	import { ref } from "vue";
	const coverImage = ref("fiohny_3.jpeg");
</script>
<style>
	.bg-gradient {
		background: rgb(4, 3, 2);
		background: linear-gradient(
			180deg,
			rgba(4, 3, 2, 1) 0%,
			rgba(27, 16, 34, 1) 35%,
			rgba(43, 55, 132, 1) 100%
		);
	}
</style>
