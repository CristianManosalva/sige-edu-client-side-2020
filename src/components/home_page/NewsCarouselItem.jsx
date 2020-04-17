import React from "react";

const NewsCarouselItem = (props) => {
  return (
    <div className="news-item">
      <img className="news-item__imagen" src={props.urlImage} alt="" />
      <a href="">{props.title}</a>
    </div>
  );
};

export default NewsCarouselItem;
