<script lang="ts">
	import * as ko from './ko.svx';
	import * as en from './en.svx';

	let { data } = $props();

	const documents = { ko, en };
	const { default: Content, metadata } = $derived(documents[data.lang]);
</script>

<svelte:head>
	<title>{metadata.title}</title>
	<link rel="canonical" href="https://epsilondelta.ai/{data.lang}/privacy" />
	<link rel="alternate" hreflang="ko" href="https://epsilondelta.ai/ko/privacy" />
	<link rel="alternate" hreflang="en" href="https://epsilondelta.ai/en/privacy" />
</svelte:head>

<div class="language-switcher">
	<a href="/ko/privacy" class:active={data.lang === 'ko'} hreflang="ko">한국어</a>
	<a href="/en/privacy" class:active={data.lang === 'en'} hreflang="en">English</a>
</div>

<div class="prose dark:prose-invert mx-auto max-w-4xl px-6 py-16">
	<h1>{metadata.title}</h1>
	<p>{metadata.effectiveDate}</p>
	<Content />
</div>

<style>
	.language-switcher {
		text-align: right;
		padding: 1rem 2rem;
	}
	.language-switcher a {
		display: inline-block;
		text-decoration: none;
		padding: 0.5rem 1rem;
		cursor: pointer;
		border: 1px solid #ccc;
		background-color: #f0f0f0;
	}
	.language-switcher a.active {
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
