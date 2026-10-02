<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import Nav from '$lib/components/Nav.svelte';
	import favicon from '$lib/assets/favicon.ico';
	import inter from '$lib/assets/fonts/inter.woff2';
	import fraunces from '$lib/assets/fonts/fraunces.woff2';
	import { site } from '$lib/site';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" href={inter} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={fraunces} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<Nav />

<main id="main" class="wrap">
	{@render children()}
</main>

<footer>
	<div class="wrap foot">
		<div>
			<strong>{site.title}</strong>
			<p class="muted small">{site.org} · Riverfront campus and Teams</p>
		</div>
		<ul class="inline-list small">
			<li><a href="{base}/schedule/">Schedule</a></li>
			<li><a href={site.presence} rel="noreferrer">Presence</a></li>
			<li><a href={site.github} rel="noreferrer">GitHub</a></li>
		</ul>
	</div>
</footer>

<style>
	main {
		padding-bottom: 3rem;
	}
	footer {
		border-top: 1px solid var(--line);
		background: var(--bg-2);
	}
	.foot {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		flex-wrap: wrap;
		padding-block: 1.5rem;
	}
</style>
