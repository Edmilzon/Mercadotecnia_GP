import styled from "styled-components";
import img1 from "../assets/img/png2Platocane.png"
import img2 from "../assets/img/png1canela.png"
export function Party() {
  return (<Container>
  <section className="party section" id="party">
          <div className="party__container container grid">
            <div className="party__data">
              <h2 className="section__title">
                Gelatina de pata <br />
                Excelente para mejorar la salud de la piel
              </h2>

              <p className="party__description">
                La gelatina de pata es rica en colágeno, que es excelente para mejorar la salud de la piel, 
                promoviendo su elasticidad y reduciendo la aparición de arrugas. Además, ayuda a fortalecer
                las articulaciones al mejorar la flexibilidad y reducir el dolor en personas con problemas
                articulares. También contiene proteínas esenciales que contribuyen al crecimiento muscular
                y la regeneración de tejidos, así como minerales como el calcio y el magnesio, que son
                beneficiosos para los huesos. Su consumo regular también puede favorecer la salud digestiva,
                al mejorar la mucosa intestinal y reducir la inflamación.
              </p>

              <a href="#" className="button">
                Visitar!!!
              </a>
            </div>

            <div className="party__images">
              <img
                src={img1}
                alt="party image"
                className="party__img"
              />

              <img
                src={img2}
                alt="party image"
                className="party__star-1"
              />
              <img
                src={img2}
                alt="party image"
                className="party__star-2"
              />
            </div>
          </div>
        </section>
  </Container>);
}
const Container =styled.div`
  .party{
    position: relative;
    
    &__container{
        row-gap: 5rem;

        & .section__title{
            margin-bottom: 1rem;
        }
    }
    &__data{
        text-align: center;
    }
    &__description{
        margin-bottom: 2rem;
    }
    &__images{
        position: relative;
        justify-self: center;
    }
    &__img{
        width: 250px;
    }
    &__star-1,
    &__star-2{
        width: 50px;
        position: absolute;
        transform: rotate(15deg);
    }
    &__star-1{
        top: -3rem;
        left: -.5rem;
        animation: animate-star-1 5s infinite ease-in-out
    }
    &__star-2{
        right: -1.5rem;
        bottom: 2rem;
        animation: animate-star-2 5s infinite ease-in-out
    }
}
`