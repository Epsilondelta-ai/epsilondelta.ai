<script lang="ts">
	let { data, children } = $props();

	// The prerendered HTML already has the right lang; keep it in sync on client-side navigation.
	$effect(() => {
		document.documentElement.lang = data.lang;
	});
</script>

{@render children()}
