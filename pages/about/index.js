import Image from "next/image";
import DataSource from "../../data/data-source.js";
//import Card from '../../components/styled/Card';
import Container from "../../components/styled/Container.js";
import Nav from "../../components/Nav.js";

export default function About() {
  return (
    <Container>
      <Nav></Nav>

      <header>
        <h1>About</h1>
      </header>

      <br />

      <main>
        <p>Muhammad Abdurrahman Hafidhuddien</p>
      </main>
      <br />
    </Container>
  );
}
