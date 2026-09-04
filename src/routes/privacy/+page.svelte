<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';

	type Lang = 'ko' | 'en';

	let currentLang: Lang = 'ko';
	let policyComponent: typeof SvelteComponent | null = null;
	let metadata: Record<string, any> | null = null;

	async function switchLanguage(lang: Lang) {
		currentLang = lang;
		if (lang === 'ko') {
			const module = await import('./ko.svx');
			policyComponent = module.default;
			metadata = module.metadata;
		} else {
			const module = await import('./en.svx');
			policyComponent = module.default;
			metadata = module.metadata;
		}
	}

	onMount(() => {
		switchLanguage('ko');
	});
</script>

<svelte:head>
	{#if metadata}
		<title>{metadata.title}</title>
	{/if}
</svelte:head>

<div class="language-switcher">
	<button class:active={currentLang === 'ko'} on:click={() => switchLanguage('ko')}>
		한국어
	</button>
	<button class:active={currentLang === 'en'} on:click={() => switchLanguage('en')}> EN </button>
</div>

{#if metadata}
	<div class="prose dark:prose-invert mx-auto max-w-4xl px-6 py-16">
		<h1>{metadata.title}</h1>
		<p>{metadata.effectiveDate}</p>
		{#if policyComponent}
			<svelte:component this={policyComponent} />
		{/if}
	</div>
{/if}

<style>
	.language-switcher {
		text-align: right;
		padding: 1rem 2rem;
	}
	.language-switcher button {
		padding: 0.5rem 1rem;
		cursor: pointer;
		border: 1px solid #ccc;
		background-color: #f0f0f0;
	}
	.language-switcher button.active {
		background-color: #333;
		color: white;
		font-weight: bold;
	}
	.prose {
		line-height: 1.7;
	}
	:global(.policy-data-card) {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		margin: 1.5rem 0;
		overflow: hidden;
		border: 1px solid var(--border);
		border-radius: 0.75rem;
		background: var(--card);
	}
	:global(.policy-data-field) {
		min-width: 0;
		padding: 1.125rem 1.25rem;
	}
	:global(.policy-data-field:nth-child(even)) {
		border-left: 1px solid var(--border);
	}
	:global(.policy-data-field:nth-child(n + 3)) {
		border-top: 1px solid var(--border);
	}
	:global(.policy-data-field dt) {
		margin-bottom: 0.375rem;
		color: var(--muted-foreground);
		font-size: 0.8125rem;
		font-weight: 700;
		line-height: 1.4;
	}
	:global(.policy-data-field dd) {
		margin: 0;
		color: var(--card-foreground);
		font-size: 0.9375rem;
		line-height: 1.65;
		word-break: keep-all;
		overflow-wrap: anywhere;
	}
	@media (max-width: 640px) {
		:global(.policy-data-card) {
			grid-template-columns: 1fr;
		}
		:global(.policy-data-field:nth-child(even)) {
			border-left: 0;
		}
		:global(.policy-data-field:nth-child(n + 2)) {
			border-top: 1px solid var(--border);
		}
	}
</style>
