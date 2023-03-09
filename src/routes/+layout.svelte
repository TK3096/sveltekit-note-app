<script lang="ts">
	import Navbar from '$components/layout/Navbar.svelte'

	import '../app.css'
</script>

<Navbar />
<div class="max-w-[900px] min-h-screen my-0 mx-auto pt-20">
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		background: linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0));
		font-size: 18px;
		color: theme(colors.white);
	}
</style>
