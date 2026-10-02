import { site } from '$lib/site';

export const prerender = true;
export const trailingSlash = 'never';

export function GET() {
	const urls = ['/', '/schedule/', '/papers/', '/leadership/'];
	const body =
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
		urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>\n`).join('') +
		'</urlset>\n';
	return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
