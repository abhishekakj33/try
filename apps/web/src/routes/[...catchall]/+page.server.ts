// src/routes/[...catchall]/+page.server.js
import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';

/** @type {import('../$types').PageServerLoad} */
export async function load(event) {
  // fetch your Builder content
  const BUILDER_PUBLIC_API_KEY = '742c20d0322e45e1affb72b42ba7eddd'; 
  const content = await fetchOneEntry({
    model: 'page',
    apiKey: BUILDER_PUBLIC_API_KEY, // TO DO: this should be in the env file
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || '/'
    }
  });
  console.log('conent on server', content)
  return { content };
}