const loadMeal = () => {
    const inputField = document.getElementById('search-field');
    const inputValue = inputField.value;

    if (inputValue == '') {
        alert('please input valid food name');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
        fetch(url)
            .then(response => response.json())
            .then(data => searchMeal(data.meals))
    }



    inputField.value = ''

}

const searchMeal = meals => {

    const dispaly = document.getElementById('meal-display');
    dispaly.textContent = '';

    for (const meal of meals) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${meal.strMealThumb}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  More Details
                </button>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${meal.strMeal}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <div class="card">
                      <img src="${meal.strMealThumb}" class="card-img-top" alt="">
                      <div class="card-body">
                        <p class="card-text">${meal.strInstructions}</p>
                      </div>
                    </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>



            </div>
        `;
        dispaly.appendChild(div);
    }
}