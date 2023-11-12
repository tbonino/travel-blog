import React from "react";
import "./travelBlog.css";

const travelBlog = (props) => {
  return (
    <div className="travel-blog-page">
      <div className="travel-blog-heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="travel-blog-images">
        <figure className={`image1-${props.id}`}>
          <img src={props.image1} alt="travel 1" />
        </figure>
        <figure className={`image2-${props.id}`}>
          <img src={props.image2} alt="travel 2" />
        </figure>
        <figure className={`image3-${props.id}`}>
          <img src={props.image3} alt="travel 3" />
        </figure>
      </div>
      <div className="travel-blog-dec">
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default travelBlog;
