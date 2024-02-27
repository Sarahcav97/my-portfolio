window.addEventListener('DOMContentLoaded', () => {
	const bio =
		"As an enthusiastic JavaScript developer fresh on the scene, I'm ready to dive into my first professional role in tech. My journey has been fueled by a mix of self-directed learning and teamwork, giving me a solid grasp of JavaScript essentials, including the ins and outs of React, Node.js, and Express. I've poured this knowledge into crafting web applications that prioritize engaging user experiences and sleek, responsive designs. My portfolio is a testament to my problem-solving skills, featuring projects that range from enhancing web app accessibility to pushing the envelope in user interface design. What sets me apart is my commitment to not just keeping pace with the evolving tech landscape, but actively contributing to it, especially through my work on open-source projects. I'm all about learning, adapting, and working collaboratively to bring fresh, innovative solutions to the table. I'm keen to join a team where I can grow my skills, explore the latest in web technologies, and make a real difference in the digital world.";
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
