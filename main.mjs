import { recipes } from './recipe.mjs';

const recipeContainer = document.getElementById('recipe-container');

function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('recipe-card');

    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.name;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('recipe-details');

    const category = document.createElement('div');
    category.classList.add('category');
    category.textContent = recipe.category || 'Dessert';

    details.appendChild(category);

    const title = document.createElement('h2');
    title.textContent = recipe.name;
    details.appendChild(title);

    const rating = document.createElement('div');
    rating.classList.add('rating');
    // Add ARIA attributes for accessibility
    rating.setAttribute('role', 'img');
    rating.setAttribute('aria-label', `Rating: ${recipe.rating} out of 5 stars`);
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.textContent = i <= recipe.rating ? '★' : '☆';
        // Add ARIA attributes for individual stars
        star.setAttribute('aria-hidden', 'true');
        rating.appendChild(star);
    }
    details.appendChild(rating);

    const description = document.createElement('p');
    description.textContent = recipe.description;
    details.appendChild(description);

    card.appendChild(details);
    recipeContainer.appendChild(card);
}

recipes.forEach(createRecipeCard);