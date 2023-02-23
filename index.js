// ES2020
/*INSTEAD THIS CODE, WE CAN USE PACKAGE 'DATE-FNS' */

/*Example how Intl.RelativeTimeFormat works */
// const rtf = new Intl.RelativeTimeFormat('en', {
// 	numeric: 'auto',
// 	style: 'long',
// 	localeMatcher: 'best fit',
// });

// console.log(rtf.format(1, 'day')); //tomorrow
// console.log(rtf.format(-1, 'day')); //yesterday
// console.log(rtf.format(2, 'day')); //in 2 days
// console.log(rtf.format(-2, 'day')); //in 2 days
// console.log(rtf.format(-20, 'day')); //20 days ago

const getRelativeTimeString = (date, lang = 'en') => {
	// Get milliseconds and check date
	const timeMs = typeof date === 'number' ? date : date.getTime();

	const deltaSeconds = Math.round((timeMs - Date.now()) / 1000);

	const dayInSeconds = 86400;

	// min, hour, day, week, month, year in seconds
	const cutoffs = [
		60,
		3600,
		dayInSeconds,
		dayInSeconds * 7,
		dayInSeconds * 30,
		dayInSeconds * 365,
		Infinity,
	];

	const units = ['seconds', 'minute', 'hour', 'day', 'week', 'month', 'year'];

	const unitIndex = cutoffs.findIndex(
		(cutoff) => cutoff > Math.abs(deltaSeconds)
	);

	const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;

	const rtf = new Intl.RelativeTimeFormat(lang, {
		numeric: 'auto',
		style: 'long',
		localeMatcher: 'best fit',
	});

	return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
};

console.log(getRelativeTimeString(new Date('2023-01-28T13:38:04')));
