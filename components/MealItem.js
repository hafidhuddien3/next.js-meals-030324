import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";
import Card from "./styled/Card";
import Container from "./styled/Container";
import Image2 from "./styled/Image";

/*
      <Image2
        height="250px"
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name} />
*/

function MealItem({
  //id, pictureId, name, description,
  idMeal,
  strMealThumb,
  strMeal,
  strArea,
  strTags,
  strCategory,
}) {
  if (strTags == null) {
    strTags = "";
  }

  return (
    // style={{
    //width: '100%', height: '100%',
    //position: 'absolute'
    //}}
    <Card>
      {" "}
      <Link href={`/detail/${idMeal}`}>
        <Image
          className="itemImage"
          src={strMealThumb}
          width={320}
          height={320}
          //fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          //layout='fill'
          //objectFit='contain'
          alt={strMeal}
        />
      </Link>
      <Container>
        <h2 className="h2item">
          <Link href={`/detail/${idMeal}`}>{strMeal}</Link>
        </h2>
        <p>{strArea + " " + strCategory}</p>
        {strTags}
        <br />
      </Container>
    </Card>
  );
}

MealItem.propTypes = {
  idMeal: PropTypes.string.isRequired,
};

export default MealItem;
