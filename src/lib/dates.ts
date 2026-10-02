/** Parse 'YYYY-MM-DD' as a local date (avoids the UTC shift of new Date(iso)). */
export function parseISODateLocal(iso: string): Date {
	const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
	return new Date(y, m - 1, d);
}

export function fmtDate(iso?: string): string {
	if (!iso) return '';
	return parseISODateLocal(iso).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
}

export function isPast(iso: string, now = new Date()): boolean {
	const d = parseISODateLocal(iso);
	d.setHours(23, 59, 59, 999);
	return d.getTime() < now.getTime();
}
