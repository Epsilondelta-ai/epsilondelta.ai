<script lang="ts">
	import { onMount } from 'svelte';

	// Netlify redirects / by Accept-Language (static/_redirects); this covers other hosts and local preview.
	onMount(() => {
		const lang = (navigator.language || '').startsWith('ko') ? 'ko' : 'en';
		location.replace(`/${lang}${location.hash}`);
	});
</script>

<svelte:head>
	<title>EpsilonDelta</title>
	<link rel="canonical" href="https://epsilondelta.ai/ko" />
</svelte:head>

<noscript><a href="/ko">한국어</a> · <a href="/en">English</a></noscript>
