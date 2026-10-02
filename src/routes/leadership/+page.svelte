<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import leadership from '$lib/data/leadership.json';

	type Link = { label: string; url: string };
	type Member = {
		name: string;
		role: string;
		affiliation?: string;
		email?: string;
		links?: Link[];
	};

	const roleOrder: Record<string, number> = {
		President: 1,
		'Vice President': 2,
		Secretary: 3,
		Treasurer: 4,
		'Public Relations': 5,
		'Co-Advisor': 10
	};

	const members = [...(leadership as Member[])].sort((a, b) => {
		const d = (roleOrder[a.role] ?? 99) - (roleOrder[b.role] ?? 99);
		return d || a.name.localeCompare(b.name);
	});
</script>

<Seo
	title="Leadership"
	path="/leadership/"
	description="Officers and advisors of the ML Paper Reading Group at Augusta University."
/>

<section class="section">
	<h1>Leadership</h1>
	<p class="lede">
		The officers set the schedule, line up discussion leaders, and keep the paper list. Write to any
		of them to propose a paper or offer to present.
	</p>
</section>

<section class="section">
	<ul class="cards">
		{#each members as m (m.email ?? m.name)}
			<li class="card">
				<p class="eyebrow">{m.role}</p>
				<h2>{m.name}</h2>
				{#if m.affiliation}<p class="muted small">{m.affiliation}</p>{/if}
				<ul class="inline-list small">
					{#if m.email}
						<li><a href="mailto:{m.email}">{m.email}</a></li>
					{/if}
					{#each m.links ?? [] as l (l.url)}
						<li><a href={l.url} rel="noreferrer">{l.label}</a></li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</section>

<style>
	.cards {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.card h2 {
		font-size: 1.2rem;
		margin: 0.25rem 0 0.1rem;
	}
	.inline-list {
		margin-top: 0.75rem;
	}
</style>
