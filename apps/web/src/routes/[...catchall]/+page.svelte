<!-- src/routes/[…catchall]/+page.svelte -->
<script lang="ts">
	import { isPreviewing, Content } from "@builder.io/sdk-svelte";
	import { HelloWorld } from '@repo/ui';

	const CUSTOM_COMPONENTS = [
	{
		component: HelloWorld,
		name: 'Hello World',
		inputs: [
		{
			name: 'text',
			type: 'string',
			defaultValue: 'World',
		},
		],
	},
	]
	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;
  
	// show unpublished content when in preview mode.
	const canShowContent = data.content || isPreviewing();

	// TODO: this should be in the env file
	const BUILDER_PUBLIC_API_KEY = '742c20d0322e45e1affb72b42ba7eddd'; 
  </script>
  
  <main>
	<h1>Welcome to SvelteKit</h1>
	<h2>Below is your Builder Content:</h2>
	<!-- TO DO: Add your Public API Key in <Content/>-->
	{#if canShowContent}
	  <div>page Title: {data.content?.data?.title || "Unpublished"}</div>
	  <Content
		model="page"
		content={data.content}
		apiKey={BUILDER_PUBLIC_API_KEY}
		customComponents={CUSTOM_COMPONENTS}
	  />
	{:else}
	  Content Not Found
	{/if}
  </main>