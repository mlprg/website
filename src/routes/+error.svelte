<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Page not found | ML Paper Reading Group</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="section">
	<p class="eyebrow">{page.status}</p>
	<h1>Page not found</h1>
	<p class="lede">That page does not exist here. Try the <a href="{base}/">home page</a>.</p>
</section>
