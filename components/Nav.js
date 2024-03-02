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

function Nav() {
  return (
    <nav>
      <Link href={`/`}>
        <button className="b">
          <h3>home</h3>
        </button>
      </Link>
      <Link href={`/about`}>
        <button className="b">
          <h3>about</h3>
        </button>
      </Link>
      <h1>{`Meals Catalog`}</h1>
      <h2></h2>
    </nav>
  );
}

export default Nav;
