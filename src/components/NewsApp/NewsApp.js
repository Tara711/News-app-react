import React, { useEffect, useRef, useState } from "react";
import "./NewsApp.css";
import News from "../news/News";
import { Link } from "react-router-dom";

function NewsApp() {
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("apple");
  const queryInputRef = useRef(null);
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-04-29&sortBy=publishedAt&apiKey=5bdebfd73b8a4ab6843d83c954217fcf`;

  useEffect(() => {
    fetchData();
  }, [query]);
  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (err) {
      console.log(err, "error");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }
  return (
    <div className="newsapp">
      <form className="newsapp_input" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search " ref={queryInputRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div className="newsapp_heading">
        <Link to="/nepal">
          <button onClick={() => setQuery("Nepal")}>Nepal</button>
        </Link>
        <Link to="/ronaldo">
          {" "}
          <button onClick={() => setQuery("Ronaldo")}>Ronaldo</button>
        </Link>

        <Link to="/fifa">
          {" "}
          <button onClick={() => setQuery("Fifa")}>Fifa</button>
        </Link>
        <Link to="/ucl">
          {" "}
          <button onClick={() => setQuery("UCL")}>UCL</button>
        </Link>
        <Link to="/real-madrid">
          <button onClick={() => setQuery("Real-Madrid")}>Real Madrid</button>
        </Link>
      </div>
      <hr />
      <div className="newsapp_item">
        {newsList.map((news) => (
          <News key={news.url} news={news} />
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
