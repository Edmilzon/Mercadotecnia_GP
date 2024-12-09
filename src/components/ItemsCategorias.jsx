import styled from "styled-components";
export function ItemsCategorias({item}) {
  return (
  
      <div className="category__card">
        <img src={item.img} alt="category image" className="category__img" />

        <h3 className="category__title">{item.title}</h3>
        <p className="category__description">
          {item.descripcion}
        </p>

        <img src={item.img} alt="category star" className="category__star" />
      </div>
    
  );
}
