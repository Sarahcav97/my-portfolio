// grab parent div
const parentDiv = document.getElementById('portfolio');

const projects = [
	{
		title: 'Movie Theatre',
		img: '/img/ss2.png',
		description: 'This is a project',
		repo: 'https://github.com',
		live: 'https://sarahcav97.github.io/movie-seat-booking/',
	},
	{
		title: 'Form Validator',
		img: '/img/ss1.png',
		description: 'This is a project',
		repo: 'https://github.com',
		live: 'https://sarahcav97.github.io/form-validator/',
	},
];

function createCard(item) {
	// create card
	const card = document.createElement('div');
	const container = document.createElement('div');
	card.classList.add('card');
	container.classList.add('container');

	// create image
	const img = document.createElement('img');
	img.src = item.img;

	// create title
	const title = document.createElement('h2');
	title.innerText = item.title;

	// create description
	const description = document.createElement('p');
	description.innerText = item.description;

	// link container
	const linkContainer = document.createElement('div');
	linkContainer.classList.add('link-container');

	// create repo link
	const repo = document.createElement('a');
	repo.href = item.repo;
	repo.target = '_blank';
	repo.innerText = 'Repo';
	// create live link

	const live = document.createElement('a');
	live.href = item.live;
	live.target = '_blank';
	live.innerText = 'Live';
	// append elements to card
	card.appendChild(img);
	container.appendChild(title);
	container.appendChild(description);
	linkContainer.appendChild(repo);
	linkContainer.appendChild(live);
	container.appendChild(linkContainer);
	card.appendChild(container);
	// append card to parent
	parentDiv.appendChild(card);
}

// when page loads create cards
window.onload = function () {
	projects.forEach((project) => {
		createCard(project);
	});
};
