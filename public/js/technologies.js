window.addEventListener('DOMContentLoaded', () => {
	const bio =
		"I'm a budding JavaScript developer eager for my first tech role. My background in React, Node.js, and Express comes from a blend of self-learning and teamwork, driving me to build web apps that are both user-friendly and aesthetically pleasing. My projects highlight my problem-solving skills and commitment to well-executed technology. I stand out through my willingness to learn and determination to contribute to team success. I'm excited to join a dynamic team where I can enhance my skills and help shape the future of digital experiences.";
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
		'MongoDB',
		'Tailwind',
		'Material-UI',
		'Visual Studio Code',
		'Git',
		'Objest-Oriented Programming',
		'JSON',
		'Third Party APIs',
		'Server-Side APIs',
		'Terminal/Command Line',
		'Bash Scripting',
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
