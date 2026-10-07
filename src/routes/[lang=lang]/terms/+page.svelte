<script lang="ts">
	import * as ko from './ko.svx';
	import * as en from './en.svx';

	let { data } = $props();

	const documents = { ko, en };
	const { default: Content, metadata } = $derived(documents[data.lang]);
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<link rel="canonical" href="https://epsilondelta.ai/{data.lang}/terms" />
	<link rel="alternate" hreflang="ko" href="https://epsilondelta.ai/ko/terms" />
	<link rel="alternate" hreflang="en" href="https://epsilondelta.ai/en/terms" />
</svelte:head>

<div class="language-switcher">
	<a href="/ko/terms" class:active={data.lang === 'ko'} hreflang="ko">한국어</a>
	<a href="/en/terms" class:active={data.lang === 'en'} hreflang="en">English</a>
</div>

<div class="prose dark:prose-invert mx-auto max-w-4xl px-6 py-16">
	<h1>{metadata.title}</h1>
	<Content />
</div>

<style>
	.language-switcher {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
		justify-content: flex-end;
		padding: 1rem 2rem;
	}

	.language-switcher a {
		display: inline-block;
		text-decoration: none;
		padding: 8px 16px;
		border: 2px solid #ddd;
		background: white;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	.language-switcher a:hover {
		border-color: #007bff;
	}

	.language-switcher a.active {
		background: #007bff;
		color: white;
		border-color: #007bff;
	}

	.prose {
		line-height: 1.7;
	}
</style>
