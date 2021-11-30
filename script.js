$(document).ready(function (event) {
	let i = 0;
	let startNext = 0;
	let header = document.querySelector('.auto-text-1');
	let anim = [
		{ t: 'W', ms: 700 },
		{ t: 'We|', ms: 300 },
		{ t: 'Wel', ms: 200 },
		{ t: 'Welc|', ms: 200 },
		{ t: 'Welco', ms: 200 },
		{ t: 'Welcom|', ms: 200 },
		{ t: 'Welcome', ms: 200 },
		{ t: 'Welcome|', ms: 200 },
		{ t: 'Welcome', ms: 200 },
		{ t: 'Welco', ms: 200 },
		{ t: 'Welc|', ms: 200 },
		{ t: 'Wel', ms: 200 },
		{ t: 'We|', ms: 200 },
		{ t: 'W', ms: 200 },
		{ t: '_', ms: 400 },
		{ t: 'i|', ms: 200 },
		{ t: 'i ', ms: 200 },
		{ t: 'i a|', ms: 200 },
		{ t: 'i am', ms: 200 },
		{ t: 'i am |', ms: 200 },
		{ t: 'i am b', ms: 200 },
		{ t: 'i am ba|', ms: 200 },
		{ t: 'i am bad', ms: 200 },
		{ t: 'i am bade|', ms: 200 },
		{ t: 'i am badee', ms: 200 },
		{ t: 'i am badeed|', ms: 200 },
		{ t: 'i am badeed', ms: 200 },
		{ t: 'i am badeed.', ms: 2000 },
		{ t: 'i am badeed. :)', ms: 200 },
	];

	let update = () => {
		let step = anim[i];

		header.innerHTML = step.t;

		i++;

		if (i < anim.length) {
			setTimeout(update, step.ms);

			if (i === 28) {
				updateAbout();
			}
		}
	};
	update();
	//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
	var about =
		'I am on my path to becoming a software engineer. I have years of experince developing and using code. I am from Kuwait, i started programmering and coding since i was 14 years old. I got into it because i wanted to modify and edit my own games. Now I make games, and design them. I also make macros and bots that can ease tasks. I like creating new things out of nothing. Coding was able to give me that ability. Also i am a gamer my favorite game is League of Legends. I am Muhsen Saleh';
	var j = 0;
	let updateAbout = () => {
		if (j < about.length) {
			document.querySelector('.auto-text-2').innerHTML += about.charAt(j);
			j++;
			setTimeout(updateAbout, 50);
		}
	};
});
