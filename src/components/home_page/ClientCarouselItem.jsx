import React from "react";

const ClientCarouselItem = (props) => {
  return (
    <div className="client-item">
      <img className="client-item__imagen" src={props.urlImage} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default ClientCarouselItem;
