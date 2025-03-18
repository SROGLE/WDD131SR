// main.mjs
import recipes from './recipe.mjs';

const recipeContainer = document.getElementById('recipe-container');
const searchInput = document.querySelector('.search-container input');
const searchButton = document.querySelector('.search-container button');

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    let html = '<ul class="recipe__tags">';
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });
    html += '</ul>';
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
    <figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags || [recipe.category])}
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>
    `;
}

function renderRecipes(recipeList) {
    recipeContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function filterRecipes(query) {
    const lowerQuery = query.toLowerCase();
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(lowerQuery) ||
            recipe.description.toLowerCase().includes(lowerQuery) ||
            recipe.tags?.find(tag => tag.toLowerCase().includes(lowerQuery)) ||
            recipe.ingredients?.find(ingredient => ingredient.toLowerCase().includes(lowerQuery))
        );
    });
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const query = searchInput.value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

searchButton.addEventListener('click', searchHandler);
init();