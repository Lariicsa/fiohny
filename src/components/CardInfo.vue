<!-- @format -->

<template>
	<div
		@click="showModal"
		v-for="item in data"
		class="h-[210px] max-h-[220px] sm:min-h-[210px] h-full w-full bg-cover bg-center my-[16px] sm:opacity-90 sm:cursor-pointer sm:hover:opacity-100"
		:style="`background-image: url(${item.bgImage})`">
		<div
			class="bg-card h-full flex flex-col p-4 justify-center items-center font-libre text-[#aa8143] text-[24px] text-center">
			{{ item.title }}
		</div>

		<Modal :show="isOpen" @close="closeModal" maxWidth="2xl">
			<div
				class="bg-white flex flex-col h-full min-h-screen p-[40px] justify-center items-center">
				<h1 class="text-[24px] text-[#a61616] text-bold font-libre">
					{{ item.subtitle }}
				</h1>
				<p class="text-[#2b3784] text-[20px] my-[24px]">{{ item.text }}</p>
				<a
					:href="item.url"
					target="_blank"
					class="my-[8px] text-[#447bbe] text-[14px] my-[24px] underline font-bold"
					>{{ item.url }}</a
				>
				<div class="my-4" v-html="item.extra"></div>
			</div>
		</Modal>
	</div>
</template>
<script setup>
	import Modal from "@/components/Modal.vue";
	import { ref } from "vue";

	const isOpen = ref(false);
	const showModal = () => {
		isOpen.value = true;
	};

	const closeModal = () => {
		isOpen.value = false;
	};

	defineProps({
		data: {
			type: Array,
		},
	});
</script>
<style>
	.bg-card {
		background-color: rgb(17, 11, 22, 0.66);
	}
</style>
