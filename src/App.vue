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
	import Bg from "./components/Bg.vue";
	import CardInfo from "./components/CardInfo.vue";
	import Countdown from "./components/Countdown.vue";

	const tableLinks = `
	<ul class="flex flex-col p-0 w-[200px] mx-auto">
		<li class="w-full my-8 text-xl px-4 py-2 bg-[#e10098] sm:hover:bg-[#bb1084] rounded-sm text-white text-center">
			<a href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51163105' target="_blank">Liverpool</a>
			</li>
	<li class="my-8 text-xl px-4 py-2 bg-[#febd69] sm:hover:bg-[#f3a847] rounded-sm text-[#111] text-center">
		<a href='https://www.amazon.com.mx/wedding/fionna-gaytan-luis-avila-mexico-october-2023/registry/3PBUJRUQSJILE' target="_blank">Amazon</a>
		</li>
		</ul>
	`;

	const dressInfo = `
		<div class="flex flex-col  w-full">
			<p class="text-[#2b3784] font-bold">No niños </p>
			<p>Es de nuestro agrado mantener este evento para adultos. Agradecemos tu comprensión.</p>
		</div>
	`;

	const weddingData = [
{
			
			id: 1,
			title: "Ceremonia",
			bgImage: "iglesia.jpg",
			subtitle: "Iglesia Metodista El Mesías",

			text: "Balderas 47, Colonia Centro 6pm",
			abstract: "Acompáñanos a celebrar nuestra ceremonia de unión.",
			url: "https://goo.gl/maps/97usis8JNZQM3nxk8",
			extra: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.503009970932!2d-99.14775159999999!3d19.433868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d5233ea5b3%3A0x3dbed59e6772d84f!2sIglesia%20Metodista%20El%20Mes%C3%ADas!5e0!3m2!1sen!2smx!4v1693083248682!5m2!1sen!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		},
		{
			id: 2,
			title: "Salón",
			bgImage: "mandala_1.webp",
			subtitle: "Jardín de Eventos Mandala",
			text: "Av. 602, Pensador Mexicano 8:30pm",
			abstract: "Después de la ceremonia te esperamos.",
			url: "https://goo.gl/maps/jV7LRxRb88ZpoCmx9",
			extra: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.1493873201475!2d-99.07970542433075!3d19.449124981833837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fbf3e90799ab%3A0x2b762d7d7fefefdf!2sJard%C3%ADn%20de%20Eventos%20Mandala!5e0!3m2!1sen!2smx!4v1693089082437!5m2!1sen!2smx" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
		},
		{
			title: "Dress Code",
			bgImage: "casual.jpg",
			subtitle: "Dress Code",
			text: "El código de vestimenta para el evento es: Formal",
			abstract: "",
			url: "",
			extra: dressInfo,
		},
		{
			title: "Mensaje",
			bgImage: "mensaje.png",
			subtitle: " EL tiempo como testigo del Amor",
			text: "El tiempo será su aliado más fiel, marcando cada momento especial que compartan: desde las risas en las mañanas hasta las conversaciones profundas al caer la noche. Cada segundo será una oportunidad para cultivar la conexión que han construido, para crear recuerdos que perdurarán por siempre.",
			abstract: "",
			url: "",
			
		},
		
		
	];
</script>
