window.addEventListener('DOMContentLoaded', () => {
	// grab parent div
	const parentDiv = document.getElementById('portfolio');

	const projects = [
		{
			title: 'Movie Theatre',
			img: './img/ss2.png',
			description: 'This is a project',
			repo: 'https://github.com/Sarahcav97/movie-seat-booking',
			live: 'https://sarahcav97.github.io/movie-seat-booking/',
		},
		{
			title: 'Form Validator',
			img: './img/ss1.png',
			description: 'This is a project',
			repo: 'https://github.com/form-validator',
			live: 'https://sarahcav97.github.io/form-validator/',
		},
		{
			title: 'Meal Finder',
			img: './img/ss3.png',
			description: 'This is a project',
			repo: 'https://github.com/Sarahcav97/meal-finder-app',
			live: 'https://sarahcav97.github.io/meal-finder-app/',
		},
		{
			title: 'Expense Tracker',
			img: './img/ss4.png',
			description: 'This is a project',
			repo: 'https://github.com/Sarahcav97/expense-tracker',
			live: 'https://sarahcav97.github.io/expense-tracker/',
		},
		{
			title: 'Infinite Scroll',
			img: './img/img.png',
			description: 'This is a project',
			repo: 'https://github.com/Sarahcav97/infinite-scroll-posts',
			live: 'https://sarahcav97.github.io/infinite-scroll-posts/',
		},
		{
			title: 'React Job Search',
			img: './img/jobsearch.png',
			description: 'This is a project',
			repo: 'https://github.com/Sarahcav97/react-job-search-app',
			live: 'https://jobsearch.sarahcavs.com',
		},
		{
			title: 'Ecommerce MERN',
			img: './img/shop.png',
			description:
				'This MERN e-commerce app utilizes REACT build to create a user friendly shopping experience. It includes user authentication middleware to verify a user as well as create new accounts to access the shop/products.',
			repo: 'https://github.com/Sarahcav97/mern-ecommerce',
			live: 'https://sarahcav97.github.io/infinite-scroll-posts/',
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
		repo.classList.add('link');
		repo.href = item.repo;
		repo.target = '_blank';
		repo.innerHTML = `<img src="./img/github-mark-white.svg" alt='github icon' class="icon mr-2 link portfolioLink"></img>`;

		// create live link
		const live = document.createElement('a');
		live.innerHTML = '<i class="material-icons">computer</i>';
		live.classList.add('link');
		live.href = item.live;
		live.target = '_blank';
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
});
