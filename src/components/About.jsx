import styled from "styled-components";
import img1 from "../assets/img/png mix.png"
export function About() {
  return (<Container>
   <section className="about section" id="about">
          <div className="shape__small"></div>
          <div className="shape__big"></div>
          {/* esto es la parte indicatoria de q es el la gelatina de pata */}
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title">
                Acerca de La  <br />
                Gelatina de Pata
              </h2>

              <p className="about__description">
                Es un postre o alimento preparado a partir de colageno natural que se extrae al hervir 
                las patas de ciertos animales. Este colageno, al enfriarse, se solidifica y forma una 
                gelatina natural sin necesidad de usar agentes espesantes artificiales. 
                <br />
                Es comun verla como un postre casero o en las fiestas patronales y ferias locales. A menudo 
                se sirve fria y, en algunos casos, con un chorrito de leche evaporada o un toque de azucar 
                espolvoreada encima.
              </p>

              <a href="#" className="button">
                Saber más!!!
              </a>
            </div>

            <img
              src={img1}
              alt="about image"
              className="about__img"
            />
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .about{
    position: relative;

    &__container{
        row-gap: 3.5rem;

        & .section__title{
            margin-bottom: 1rem;
            text-align: center;
            
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__img{
        width: 300px;
        justify-self: center;
    }
    & .shape__small{
        top: 2rem;
        right: -3rem;
    }
    & .shape__big{
        bottom: 0;
        left: -8rem;
    }
}
`