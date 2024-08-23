



document.getElementById("search").addEventListener("click", getDrink);

function getDrink() {
  let input = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.drinks[0]);

      document.querySelector("h1").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.getElementById("name").innerText = data.drinks[0].strAlcoholic;
      document.querySelector("p").innerText = data.drinks[0].strInstructions;
    });
}
