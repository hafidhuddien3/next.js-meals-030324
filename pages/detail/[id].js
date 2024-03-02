import Image from "next/image";
import DataSource from "../../data/data-source.js";
//import Card from '../../components/styled/Card';
import Container from "../../components/styled/Container";
import Nav from "../../components/Nav.js";

export default function Detail({ result }) {
  //const { name, description, pictureId, menus: { foods, drinks } } = restaurant;
  const {
    //name, description, pictureId, menus: { foods, drinks },
    strMealThumb,
    strMeal,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient16,
    strIngredient17,
    strIngredient18,
    strIngredient19,
    strIngredient20,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure16,
    strMeasure17,
    strMeasure18,
    strMeasure19,
    strMeasure20,
  } = result[0];

  let { strArea, strTags, strCategory } = result[0];

  if (strTags == null) {
    strTags = "";
  }
  if (strArea == null) {
    strArea = "";
  }
  if (strCategory == null) {
    strCategory = "";
  }

  //console.log('log = ',strMealThumb, strMeal, strArea, strTags,);

  const ingredient = [
    strIngredient1 + " ( " + strMeasure1 + " )",
    strIngredient2 + " ( " + strMeasure2 + " )",
    strIngredient3 + " ( " + strMeasure3 + " )",
    strIngredient4 + " ( " + strMeasure4 + " )",
    strIngredient5 + " ( " + strMeasure5 + " )",
    strIngredient6 + " ( " + strMeasure6 + " )",
    strIngredient7 + " ( " + strMeasure7 + " )",
    strIngredient8 + " ( " + strMeasure8 + " )",
    strIngredient9 + " ( " + strMeasure9 + " )",
    strIngredient10 + " ( " + strMeasure10 + " )",
    strIngredient11 + " ( " + strMeasure11 + " )",
    strIngredient12 + " ( " + strMeasure12 + " )",
    strIngredient13 + " ( " + strMeasure13 + " )",
    strIngredient14 + " ( " + strMeasure14 + " )",
    strIngredient15 + " ( " + strMeasure15 + " )",
    strIngredient16 + " ( " + strMeasure16 + " )",
    strIngredient17 + " ( " + strMeasure17 + " )",
    strIngredient18 + " ( " + strMeasure18 + " )",
    strIngredient19 + " ( " + strMeasure19 + " )",
    strIngredient20 + " ( " + strMeasure20 + " )",
  ];

  const ingredientFilter = [];
  

  ingredient.forEach(deleteEmpty);

  function deleteEmpty(item) {
    if (item.charAt(0)!=' ') {
      ingredientFilter.push(item);
    }
  }

  //console.log('logI = ',ingredient);
  //console.log('logF = ',ingredientFilter);

  return (
    <Container>
      <Nav></Nav>
      <br></br>
      <Image
        className="detailImage"
        src={strMealThumb}
        alt={strMeal}
        width={513}
        height={513}
      />

      <header>
        <h1>{"Meal Name : " + strMeal}</h1>
        <p>{strArea + " " + strCategory}</p>
        {strTags}
      </header>

      <br />

      <main>
        <h2>Ingredient </h2>

        <ol>
          {ingredientFilter.map((ingredient) => {
            const getIndex = ingredient.indexOf("(");
            const filteredIngredient = ingredient.slice(0, getIndex - 1);

            return (
              <li key={ingredient}>
                <a
                  href={`https://www.themealdb.com/images/ingredients/${filteredIngredient}.png`}
                >
                  <Image
                    src={`https://www.themealdb.com/images/ingredients/${filteredIngredient}-Small.png`}
                    alt={strMeal}
                    width={60}
                    height={60}
                  />
                </a>
                {ingredient}
              </li>
            );
          })}
        </ol>
      </main>
      <br />
      <div className="center">
        <a
          href={`https://www.youtube.com/results?search_query=${strMeal}`}
          target="_blank"
        >
          search in YouTube
        </a>
      </div>
    </Container>
  );
}

export async function getStaticPaths() {
  // call an external API endpoint to get ids
  //const response = await fetch('https://restaurant-api.dicoding.dev/list');
  //const { restaurants } = await response.json();

  const result = await DataSource.searchDish("");

  const ids = result.map((meal) => meal.idMeal);

  //console.log('ids = ',ids);

  // Get the paths we want to pre-render based on ids
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the restaurant detail page using params.id
  //const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${params.id}`);
  //const { restaurant } = await response.json();

  const result = await DataSource.mealDetail(params.id);

  //console.log('result = ',result);

  return {
    props: {
      result,
    },
  };
}
