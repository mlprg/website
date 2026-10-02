<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { getReviewedPapers } from '$lib/data/review';
	import { fmtDate } from '$lib/dates';

	const papers = getReviewedPapers();
</script>

<Seo
	title="Papers"
	path="/papers/"
	description="Papers the ML Paper Reading Group at Augusta University has discussed, with authors, venue, and who proposed them."
/>

<section class="section">
	<h1>Papers</h1>
	<p class="lede">
		Everything we have discussed, in the order we discussed it. Papers on the list but not yet
		scheduled are at the bottom.
	</p>
</section>

<section class="section">
	<ul class="rows">
		{#each papers as p (p.id)}
			<li class="row">
				<div class="row-meta">
					{#if p.reviewed}
						<span>{fmtDate(p.reviewDate)}</span>
					{:else}
						<span>Not yet discussed</span>
					{/if}
					{#if p.discussionLeaders}<span>Led by {p.discussionLeaders}</span>{/if}
					{#if p.proposer}<span>Proposed by {p.proposer}</span>{/if}
				</div>
				<div class="row-body">
					<h2>
						{#if p.link}<a href={p.link} rel="noreferrer">{p.title}</a>{:else}{p.title}{/if}
					</h2>
					{#if p.authors}<p>{p.authors}</p>{/if}
					{#if p.citation}<p class="muted small">{p.citation}</p>{/if}
					{#if p.contribution}<p class="small">{p.contribution}</p>{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	.row-body h2 {
		font-size: 1.15rem;
	}
	.row-body p + p {
		margin-top: 0.15rem;
	}
</style>
