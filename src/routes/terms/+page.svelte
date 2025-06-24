<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';

	type Lang = 'ko' | 'en';

	let currentLang: Lang = 'ko';
	let termsComponent: typeof SvelteComponent | null = null;
	let metadata: Record<string, any> | null = null;

	async function switchLanguage(lang: Lang) {
		currentLang = lang;
		if (lang === 'ko') {
			const module = await import('./ko.svx');
			termsComponent = module.default;
			metadata = module.metadata;
		} else {
			const module = await import('./en.svx');
			termsComponent = module.default;
			metadata = module.metadata;
		}
	}

	onMount(() => {
		// Default to Korean
		// TODO: check browser language
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
	<button class:active={currentLang === 'en'} on:click={() => switchLanguage('en')}>
		English
	</button>
</div>

{#if metadata}
	<div class="prose dark:prose-invert mx-auto max-w-4xl px-6 py-16">
		<h1>{metadata.title}</h1>
		{#if termsComponent}
			<svelte:component this={termsComponent} />
		{/if}
	</div>
{/if}

<style>
	.language-switcher {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
		justify-content: flex-end;
		padding: 1rem 2rem;
	}

	.language-switcher button {
		padding: 8px 16px;
		border: 2px solid #ddd;
		background: white;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	.language-switcher button:hover {
		border-color: #007bff;
	}

	.language-switcher button.active {
		background: #007bff;
		color: white;
		border-color: #007bff;
	}

	.prose {
		line-height: 1.7;
	}
</style>
