<template>
	<v-container>

		<div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
		</div>

		<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />


		<div class="pt-24">

			<div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

				<div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
					<p class="uppercase tracking-loose w-full">What is our purpose?</p>
					<h1 class="my-4 text-5xl font-bold leading-tight">You can now vote online !</h1>
					<p class="leading-normal text-2xl mb-8">Thanks to this platform you will be able to vote on
						legislative proposals !</p>

<router-link to="register" class="hover:font-bold bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Register</router-link>

							<button 
								class="hover:font-bold w-0  my-6 py-4  shadow-lg">
							</button>

				</div>

			</div>

		</div>


		<div class="relative -mt-12 lg:-mt-24 pb-48">

		</div>



		<section class="bg-white border-b py-8">
			<div class="container max-w-5xl mx-auto m-8">
				<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our project</h1>
				<div class="w-full mb-4">
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
				</div>

				<div class="flex flex-wrap">
					<div class="w-5/6 sm:w-1/2 p-6">
						<h3 class="text-3xl text-orange-500 font-bold leading-none mb-3 ">You can vote online</h3>
						<p class="text-gray-600 mb-8">You can vote online on all proposed laws but you can also
							create voting proposal . 📝  <br /><br />

						</p>

					</div>
					<div class="w-full sm:w-1/2">
						<!-- img vote online -->
						<img src="../assets/voteonline.svg">
					</div>
				</div>


				<div class="flex flex-wrap flex-col-reverse sm:flex-row">
					<div class="w-full sm:w-1/2 p-6 mt-6">
						<!-- img globe -->
						<img src="../assets/worldmap.svg" class="w-10/12">
					</div>
					<div class="w-full sm:w-1/2 p-6 mt-6">
						<div class="align-middle">
							<h3 class="text-3xl text-orange-500 font-bold leading-none mb-3">Anywhere around the world
							</h3>
							<p class="text-gray-600 mb-8">No matter where you are located , you can now vote from anywhere. 🌍 <br /><br />
								</p>
						</div>
					</div>

				</div>
			</div>
		</section>


		<!--Footer-->
		<footer class="bg-white">
			<div class="container mx-auto  px-8">

				<div class="w-full flex flex-col md:flex-row py-6">

					<div class="flex-1 mb-6">

						<img src="../assets/vote.svg" class="w-40">
					</div>


					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Links</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Vote</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="/login"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Login</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Register</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Support</a>
							</li>
						</ul>
					</div>
					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Social</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Facebook</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Linkedin</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Twitter</a>
							</li>
						</ul>
					</div>
					<div class="flex-1">
						<p class="uppercase text-gray-500 md:mb-6">Company</p>
						<ul class="list-reset mb-6">
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Official
									Blog</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">About
									Us</a>
							</li>
							<li class="mt-2 inline-block mr-2 md:block md:mr-0">
								<a href="#"
									class="no-underline hover:underline text-gray-800 hover:text-orange-500">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<p>© 2019 AON-ESGI </p>

		</footer>



	</v-container>
</template>
