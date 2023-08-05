<template>
  	<div
			class="flex flex-col w-full h-full min-h-screen bg-cover bg-center bg-no-repeat"
			:style="`background-image: url(${coverImage})`">
      <div class="flex flex-col p-4 absolute flex w-full h-full justify-center bg-[rgba(0,0,0,0.7)] lg:px-24 lg:py-32">
        <slot name="containter"></slot>
      </div>
    </div>
	
</template>
<script setup>
	import { ref } from "vue";


	const coverImage = ref("fiohny_3.jpeg");
</script>