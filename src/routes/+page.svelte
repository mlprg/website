<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
	import { SCHEDULE } from '$lib/data/schedule';
	import { getReviewedPapers } from '$lib/data/review';
	import { fmtDate, isPast } from '$lib/dates';

	const next = SCHEDULE.find((m) => !m.canceled && !isPast(m.date));
	const recent = getReviewedPapers()
		.filter((p) => p.reviewed && isPast(p.reviewDate!))
		.slice(-3)
		.reverse();
</script>

<Seo path="/" />

<section class="section hero">
	<div>
		<p class="eyebrow">{site.org} · Graduate student organization</p>
		<h1>Reading machine learning papers, carefully, together.</h1>
		<p class="lede">
			We meet every other week to work through one paper: what it claims, how the evidence holds up,
			and what we can build from it. Foundations through current LLM work.
		</p>
		<div class="actions">
			<a class="btn primary" href="{base}/schedule/">See the schedule</a>
			<a class="btn" href={site.presence} rel="noreferrer">Join on Presence</a>
		</div>
	</div>
	<img src="{base}/logo-160.webp" alt="{site.title} logo" width="128" height="128" />
</section>

<section class="section">
	<div class="cards">
		<div class="card">
			<p class="eyebrow">Next meeting</p>
			{#if next}
				<h2 class="card-title">{fmtDate(next.date)}{next.time ? `, ${next.time}` : ''}</h2>
				<p class="muted small">{next.location}</p>
				<p>{next.paperTitle?.trim() || 'Paper to be announced'}</p>
			{:else}
				<h2 class="card-title">Next term</h2>
				<p class="muted">
					The next schedule is being set. Watch the
					<a href="{base}/schedule/">schedule page</a> or Presence for dates.
				</p>
			{/if}
		</div>
		<div class="card">
			<p class="eyebrow">Format</p>
			<h2 class="card-title">One leader, open discussion</h2>
			<p class="muted">
				A discussion leader presents the core idea and key figures, then the group works through
				strengths, weaknesses, and open questions. About an hour, hybrid.
			</p>
		</div>
		<div class="card">
			<p class="eyebrow">Get involved</p>
			<h2 class="card-title">Propose or present</h2>
			<p class="muted">
				Suggest a paper, volunteer to lead a session, or just come and listen. Any AU graduate
				student is welcome. Contact the <a href="{base}/leadership/">officers</a>.
			</p>
		</div>
	</div>
</section>

{#if recent.length}
	<section class="section">
		<div class="section-head">
			<h2>Recently discussed</h2>
			<a href="{base}/papers/">All papers</a>
		</div>
		<ul class="rows">
			{#each recent as p (p.id)}
				<li class="row">
					<div class="row-meta">
						<span>{fmtDate(p.reviewDate)}</span>
						{#if p.discussionLeaders}<span>Led by {p.discussionLeaders}</span>{/if}
					</div>
					<div class="row-body">
						<h3>
							{#if p.link}<a href={p.link} rel="noreferrer">{p.title}</a>{:else}{p.title}{/if}
						</h3>
						{#if p.authors}<p class="muted small">{p.authors}</p>{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding-block: 3.5rem;
	}
	.hero h1 {
		margin: 0.5rem 0 1rem;
		max-width: 18ch;
	}
	.hero img {
		flex: none;
		border-radius: 12px;
	}
	.actions {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}
	.card-title {
		font-size: 1.1rem;
	}
	.card p + p {
		margin-top: 0.5rem;
	}
	@media (max-width: 640px) {
		.hero {
			flex-direction: column-reverse;
			align-items: flex-start;
			padding-block: 2rem;
		}
		.hero img {
			width: 72px;
			height: 72px;
		}
	}
</style>
