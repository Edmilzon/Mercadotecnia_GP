import styled from "styled-components";
import { Categorias } from "./Categorias";
import { About } from "./About";
import { Productos } from "./Productos";
import { Party } from "./Party";
import img1 from "../assets/img/png2Platocane.png";
import img2 from "../assets/img/videoPublicitario.mp4";
import img3 from "../assets/img/png5canelavaso.png";

export function Main() {
  return (
    <Container>
      <main className="main">
        <section className="home section" id="home">
          <div className="shape__small"></div>
          <div className="shape__big"></div>

          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__title">
                <span>Gelatina de Pata</span> Deliciosa y Nutritiva!!!
                <img src={img1} alt="home image" className="home__title-img-1" />
                <img src={img1} alt="home image" className="home__title-img-2" />
              </h1>

              <p className="home__description p"> Alto contenido de colágeno</p>

              <a href="#" className="button">
                Visitar!!!
              </a>
            </div>

            <div className="home__video">
              <video className="home__video-element" controls>
                <source src={img2} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>

            <img src={img1} alt="home image" className="home__tree-1" />
            <img src={img3} alt="home image" className="home__tree-2" />
          </div>
        </section>

        <Categorias />

        <About />

        <Productos />

        <Party />
      </main>
    </Container>
  );
}
const Container = styled.div`
  .home__video {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 20px;
    }

    .home__video-element {
      width: 100%;
      max-width: 800px;
      height: auto;
    }
  .home {
    position: relative;

    &__container {
      padding-top: 3.5rem;
    }
    &__data {
      text-align: center;
    }
    &__title {
      position: relative;
      font-size: var(--biggest-font-size);
      line-height: 140%;
      width: max-content;
      margin: 0 auto 0.5rem;

      & span {
        display: block;
        font-family: var(--second-font);
        font-weight: initial;
        color: var(--first-color);
      }
      &-img-1,
      &-img-2 {
        width: 40px;
        position: absolute;
      }
      &-img-1 {
        top: -1rem;
        left: -1.5rem;
        transform: rotate(-15deg);
        animation: animate-star-1 5s infinite ease-in-out;
      }
      &-img-2 {
        bottom: 2.75rem;
        right: -1.5rem;
        transform: rotate(15deg);
        animation: animate-star-2 5s infinite ease-in-out;
      }
    }
    &__description {
      margin-bottom: 2.5rem;
    }
    &__img {
      width: 300px;
      justify-self: center;
      margin-top: 1.5rem;
      animation:flotar 1.9s ease-in-out infinite alternate;
    }
   
    &__tree-1,
    &__tree-2 {
      width: 120px;
      position: absolute;
      top: 18rem;
    }
    &__tree-1 {
      left: -2rem;
    }
    &__tree-2 {
      right: -2rem;
    }
    & .shape__small {
      top: -3rem;
      left: -3rem;
    }
    & .shape__big {
      bottom: 5rem;
      right: -10rem;
    }
    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 15px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
    @keyframes animate-star-1 {
      0% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
      50% {
        transform: scale(1) rotate(-15deg);
        opacity: 1;
      }
      100% {
        transform: scale(0.7) rotate(-15deg);
        opacity: 0.2;
      }
    }
    @keyframes animate-star-2 {
      0% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
      50% {
        transform: scale(0.7) rotate(15deg);
        opacity: 0.2;
      }
      100% {
        transform: scale(1) rotate(15deg);
        opacity: 1;
      }
    }

    p {
    color : black;
    }
  }
`;
