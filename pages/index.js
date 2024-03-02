//import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import MealsList from "../components/MealsList.js";
import Container from "../components/styled/Container";
import DataSource from "../data/data-source.js";
import Nav from "../components/Nav.js";

export default function Home({ result }) {
  return (
    <>
      <Container>
        <Nav></Nav>
      </Container>
      <Container maxwidth="80%">
        <MealsList result={result} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  try {
    const result = await DataSource.searchDish("");
    //renderResult(result);
    return {
      props: {
        result,
      },
    };
  } catch (message) {
    //fallbackResult(message);
  }

  //const response = await fetch('https://restaurant-api.dicoding.dev/list');
  //const { restaurants } = await response.json();
}
