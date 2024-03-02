import MealItem from "./MealItem";
import PropTypes from "prop-types";
import Grid from "./styled/Grid";

function MealsList({ result }) {
  return (
    <Grid>
      {result.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </Grid>
  );
}

MealsList.propTypes = {
  result: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MealsList;
