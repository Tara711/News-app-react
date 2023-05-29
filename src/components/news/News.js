import React from "react";
import "./News.css";

const News = ({ news }) => {
  return (
    <div className="news">
      <img src={news.urlToImage} alt="" />
      <h3>{news.title}</h3>
      <p>{news.description}</p>
      <h4>
        {news.author} - {news.publishedAt}
      </h4>
      <button onClick={() => window.open(news.url)}>Read More</button>
    </div>
  );
};

export default News;
