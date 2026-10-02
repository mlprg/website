<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { site } from '$lib/site';

	const links = [
		{ href: '/schedule/', label: 'Schedule' },
		{ href: '/papers/', label: 'Papers' },
		{ href: '/leadership/', label: 'Leadership' }
	];

	const current = $derived(page.url.pathname.replace(base, '') || '/');
</script>

<header class="site-header">
	<div class="wrap bar">
		<a class="brand" href="{base}/">
			<img src="{base}/logo-160.webp" alt="" width="36" height="36" />
			<span>
				<strong>{site.title}</strong>
				<span class="muted small">{site.org}</span>
			</span>
		</a>

		<nav aria-label="Main">
			{#each links as l (l.href)}
				<a href="{base}{l.href}" aria-current={current === l.href ? 'page' : undefined}>
					{l.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--bg);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 60px;
		flex-wrap: wrap;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		color: var(--text);
		text-decoration: none;
	}
	.brand img {
		border-radius: 6px;
	}
	.brand > span {
		display: flex;
		flex-direction: column;
		line-height: 1.2;
	}
	nav {
		display: flex;
		gap: 0.25rem;
	}
	nav a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0 0.6rem;
		color: var(--muted);
		font-weight: 500;
		text-decoration: none;
		border-bottom: 2px solid transparent;
	}
	nav a:hover {
		color: var(--text);
	}
	nav a[aria-current='page'] {
		color: var(--text);
		border-bottom-color: var(--accent);
	}
	@media (max-width: 480px) {
		.brand .small {
			display: none;
		}
		nav a {
			padding: 0 0.45rem;
		}
	}
</style>
