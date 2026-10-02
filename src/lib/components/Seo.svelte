<script lang="ts">
	import { site } from '$lib/site';

	let {
		title = '',
		description = site.description,
		path = '/'
	}: { title?: string; description?: string; path?: string } = $props();

	const home = $derived(path === '/');
	const fullTitle = $derived(home ? `${site.title} | ${site.tagline}` : `${title} | ${site.title}`);
	const ogTitle = $derived(home ? site.title : title);
	const url = $derived(site.url + path);
	const image = site.url + site.image;
	const ld = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': home ? 'WebSite' : 'WebPage',
			name: site.title,
			headline: ogTitle,
			description,
			image,
			url
		}).replace(/</g, '\\u003c')
	);
	// closing tag split so the Svelte parser does not end the markup block early
	const ldTag = $derived(`<script type="application/ld+json">${ld}<` + '/script>');
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={ogTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content={site.title} />
	<meta property="og:image" content={image} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={ogTitle} />
	<meta name="twitter:image" content={image} />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- own JSON, '<' escaped above -->
	{@html ldTag}
</svelte:head>
