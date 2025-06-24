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
	.prose h3 {
		margin-top: 2em;
		font-weight: bold;
	}
</style>
