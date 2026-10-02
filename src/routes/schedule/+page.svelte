<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { SCHEDULE, type Meeting } from '$lib/data/schedule';
	import { fmtDate, isPast } from '$lib/dates';

	const byTerm = SCHEDULE.reduce<Record<string, Meeting[]>>((acc, m) => {
		(acc[m.term] ??= []).push(m);
		return acc;
	}, {});

	const meta = (m: Meeting) =>
		[m.leaders?.trim() && `Led by ${m.leaders}`, m.location].filter(Boolean).join(' · ');
</script>

<Seo
	title="Schedule"
	path="/schedule/"
	description="Meeting dates, papers, and discussion leaders for the ML Paper Reading Group at Augusta University."
/>

<section class="section">
	<h1>Schedule</h1>
	<p class="lede">
		Meetings run about an hour, hybrid on Teams and in person. A blank paper means it is still to be
		decided.
	</p>
</section>

{#each Object.entries(byTerm) as [term, meetings] (term)}
	<section class="section">
		<h2>{term}</h2>
		<ul class="rows">
			{#each meetings as m (`${m.term}-${m.meetingLabel}-${m.date}`)}
				<li class="row">
					<div class="row-meta">
						<span>{fmtDate(m.date)}</span>
						{#if m.time}<span>{m.time}</span>{/if}
						<span>{m.meetingLabel}</span>
					</div>
					<div class="row-body">
						<h3>
							{#if m.canceled}
								<span class="muted">Canceled</span>
							{:else if m.paperTitle?.trim()}
								{m.paperTitle}
							{:else}
								<span class="muted">Paper to be decided</span>
							{/if}
						</h3>
						<p class="muted small">{meta(m)}</p>
						{#if m.canceled}
							<span class="tag">Canceled</span>
						{:else if isPast(m.date)}
							<span class="tag ok">Completed</span>
						{:else}
							<span class="tag">Upcoming</span>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	</section>
{/each}

<style>
	h2 {
		margin-bottom: 1rem;
	}
	.tag {
		align-self: flex-start;
	}
</style>
