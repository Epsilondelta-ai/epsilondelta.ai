import type { Handle } from '@sveltejs/kit';
import { isLang } from '$lib/lang';

export const handle: Handle = ({ event, resolve }) => {
	const segment = event.url.pathname.split('/')[1] ?? '';
	const lang = isLang(segment) ? segment : 'ko';
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) });
};
