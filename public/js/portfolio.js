window.addEventListener('DOMContentLoaded', () => {
	// grab parent div
	const parentDiv = document.getElementById('portfolio');

	const projects = [
		{
			title: 'React Job Search',
			img: './img/jobsearch.png',
			description:
				'Provides an intuitive UI that allows users to search a JSON database for job postings via an Express server. Users can perform all CRUD operations on job listings which are stored as JSON.',
			repo: 'https://github.com/Sarahcav97/react-job-search-app',
			live: 'https://jobsearch.sarahcavs.com',
		},
		{
			title: 'Ecommerce MERN',
			img: './img/shop.png',
			description:
				'This MERN e-commerce app utilizes REACT build to create a user friendly shopping experience. It includes user authentication middleware to verify a user as well as create new accounts to access the shop/products.',
			repo: 'https://github.com/Sarahcav97/mern-ecommerce',
			live: 'https://shop.sarahcavs.com',
		},
		{
			title: 'Movie Theatre',
			img: './img/ss2.png',
			description:
				'This application allows for the user to select a movie given a list in a provided drop down menu and then which seats they would like to book. The total for the transaction is calculated and displayed to allow the user to keep track of the expense.',
			repo: 'https://github.com/Sarahcav97/movie-seat-booking',
			live: 'https://sarahcav97.github.io/movie-seat-booking/',
		},
		{
			title: 'Form Validator',
			img: './img/ss1.png',
			description:
				'Provides a form validation component that ensures all minimum requirements are met when registering an account, including matching passwords, valid email, and username containing appropriate amount and type of characters.',
			repo: 'https://github.com/form-validator',
			live: 'https://sarahcav97.github.io/form-validator/',
		},
		{
			title: 'Meal Finder',
			img: './img/ss3.png',
			description:
				'Allows for a user to search for recipes using keywords or specific meal names. A query is made to the Meal DB API and results are displayed on the page.',
			repo: 'https://github.com/Sarahcav97/meal-finder-app',
			live: 'https://sarahcav97.github.io/meal-finder-app/',
		},
		{
			title: 'Expense Tracker',
			img: './img/ss4.png',
			description:
				'Allows a user to track transactions as expenses or income and calculates net amount in spending. The user is also able to label the transactions to describe how the money was spent or obtained (ie. rent, paycheck, shopping, etc.)',
			repo: 'https://github.com/Sarahcav97/expense-tracker',
			live: 'https://sarahcav97.github.io/expense-tracker/',
		},
		{
			title: 'Infinite Scroll',
			img: './img/img.png',
			description:
				'This project demonstrates a blog-type framework that displays posts via infinite-scroll. The user can also filter blog posts using keywords or phrases to narrow their search. ',
			repo: 'https://github.com/Sarahcav97/infinite-scroll-posts',
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
