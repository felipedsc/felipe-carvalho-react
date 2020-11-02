export function calculateYears(entry: Date) {
	var difference = Date.now() - entry.getTime();
	var date = new Date(difference);

	return Math.abs(date.getUTCFullYear() - 1970);
}
