<!-- @format -->

<template>
	<div
		class="relative flex flex-col flex-wrap w-full h-auto bg-contain md:bg-cover bg-top bg-no-repeat"
		:style="`background-image: url(${coverImage})`">
		<div
			class="relative flex flex-col p-[16px] flex w-full h-full bg-[rgba(0,0,0,0.7)] lg:p-8">
			<div
				class="relative flex flex-col border border-[#ffffff] w-full h-full rounded-sm min-h-screen px-[16px] pb-[32px]">
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
		background: rgba(237, 237, 236, 0.299);
		background: linear-gradient(
			180deg,
			rgba(4, 3, 2, 1) 0%,
			rgba(27, 16, 34, 1) 35%,
			rgba(43, 55, 132, 1) 100%
		);
	}

	.bg-gradient-animated {
		background: linear-gradient(-45deg, #dea95a, #22103b, #5c3c8f, #1e1e1e);
		background-size: 400% 400%;
		animation: gradient 3s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
