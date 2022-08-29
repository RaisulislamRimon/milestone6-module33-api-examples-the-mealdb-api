const loadMeals = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meal-container");
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meals[0].strMealThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </p>
            </div>
        </div>
    `;

    // mealCard.innerHTML = `
    //   <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-img">
    //   <h3>${meal.strMeal}</h3>
    //   <button class="btn btn-primary" onclick="addMealToShoppingList('${meal.idMeal}')">Add to Shopping List</button>
    // `;
    mealContainer.appendChild(mealDiv);
  });
};

loadMeals();
