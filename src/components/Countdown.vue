<!-- @format -->

<template>
	<div class="d-flex justify-space-around pt-15">
		<!-- <v-card class="opacitybg mx-auto" width="150px" weight="120px" href="https://www.yusufonaran.me" target="_blank">
          <v-card-text>
              <p class="text-h2 text--primary text-center font-weight-regular">
                  {{ years }}
              </p>
          </v-card-text>
          <v-card-actions>
              <v-btn block text color="deep-purple accent-4">
                  YEARS
              </v-btn>
          </v-card-actions>
      </v-card> -->
		<!-- ---------------- -->

		<div class="flex flex-col items-center justify-between">
			<p class="text-h2 text--primary text-center font-weight-regular">
				{{ days % 365 }}
			</p>
			DAYS
		</div>

		<!-- ---------------- -->
		<v-card
			class="opacitybg mx-auto"
			width="150px"
			weight="120px"
			href="https://www.yusufonaran.me"
			target="_blank">
			<v-card-text>
				<p class="text-h2 text--primary text-center font-weight-regular">
					{{ hours % 24 }}
				</p>
			</v-card-text>
			<v-card-actions>
				<v-btn block text color="deep-purple accent-4"> HOURS </v-btn>
			</v-card-actions>
		</v-card>
		<!-- ---------------- -->
		<v-card
			class="opacitybg mx-auto"
			width="150px"
			weight="120px"
			href="https://www.yusufonaran.me"
			target="_blank">
			<v-card-text>
				<p class="text-h2 text--primary text-center font-weight-regular">
					{{ minutes % 60 }}
				</p>
			</v-card-text>
			<v-card-actions>
				<v-btn block text color="deep-purple accent-4"> MINUTES </v-btn>
			</v-card-actions>
		</v-card>
		<!-- ---------------- -->
		<v-card
			class="opacitybg mx-auto"
			width="150px"
			weight="120px"
			href="https://www.yusufonaran.me"
			target="_blank">
			<v-card-text>
				<p class="text-h2 text--primary text-center font-weight-regular">
					{{ seconds % 60 }}
				</p>
			</v-card-text>
			<v-card-actions>
				<v-btn block text color="deep-purple accent-4"> SECONDS </v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
	import { ref } from "@vue/reactivity";

	export default {
<<<<<<< HEAD
		name: "Countdown",
=======
		name: "CounterCards",
>>>>>>> develop
		setup() {
			const years = ref(0);
			const days = ref(0);
			const hours = ref(0);
			const minutes = ref(0);
			const seconds = ref(0);
<<<<<<< HEAD
			const lunchDate = new Date("08 October 2023");
=======
			const lunchDate = new Date("07 Octber 2023");
>>>>>>> develop

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
<<<<<<< HEAD
		background: rgba(209, 153, 10, 0.7);
=======
		background: rgba(255, 255, 255, 0.7);
>>>>>>> develop
	}
</style>
