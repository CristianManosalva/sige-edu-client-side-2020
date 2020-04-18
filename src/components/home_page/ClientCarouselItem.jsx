import React from "react";

const ClientCarouselItem = (props) => {
  return (
    <div className="client-item">
      <img className="client-item__imagen" src={props.urlImage} alt="" />
      <a href="#ss">{props.title}</a>
    </div>
  );
};

export default ClientCarouselItem;
