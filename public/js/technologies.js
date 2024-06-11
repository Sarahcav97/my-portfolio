window.addEventListener('DOMContentLoaded', () => {
	const bio =
		"I'm a budding JavaScript developer eager for my first tech role. My background in React, Node.js, and Express comes from a blend of self-learning and teamwork, driving me to build web apps that are both user-friendly and aesthetically pleasing. My projects, especially those improving web accessibility, highlight my problem-solving skills and commitment to inclusive technology. I stand out for my willingness to learn and contribute to team success. I'm excited to join a dynamic team where I can enhance my skills and help shape the future of digital experiences.";
	const technologies = [
		'HTML',
		'CSS',
		'Javascript',
		'HTTP Requests',
		'NodeJS',
		'React',
		'ExpressJS',
		'Bootstrap',
		'AJAX',
		'and more...',
	];
	const techEl = document.getElementById('technologies');
	const left = document.createElement('div');
	const right = document.createElement('div');
	const profileTextContainer = document.getElementById('profileText');
	profileTextContainer.innerText = bio;
	techEl.classList.add('flexBox');
	left.classList.add('flexItem');
	right.classList.add('flexItem');

	technologies.forEach((technology, i) => {
		const item = document.createElement('div');
		item.style = 'text-align:left;';
		item.innerHTML = `<p>${technology}</p>			`;

		if (i % 2 === 0) {
			left.appendChild(item);
		} else right.appendChild(item);
	});
	techEl.appendChild(left);
	techEl.appendChild(right);
});
