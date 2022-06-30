import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  let myStyle = {
    //for headline
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  const [articles, setArticles] = useState([]); //array of articles
  const [loading, setLoading] = useState(true); //show loading icon 
  const [page, setPage] = useState(1);  //initial page no=1
  const [totalResults, setTotalResults] = useState(0);  //total number of results

  const capitalizeLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let pasedData = await data.json();
    props.setProgress(70);

    setArticles(pasedData.articles);
    setTotalResults(pasedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeLetter(props.category)}-NewsTime`;
    updateNews();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let pasedData = await data.json();  //convert in json format 
    // concating new news with previously loaded news
    setArticles(articles.concat(pasedData.articles));
    setTotalResults(pasedData.totalResults);
  };

  let { mode, toggleMode } = props; //destructuring the props

  return (
    <div className="container my-3" style={myStyle} >
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        Top Headlines from {capitalizeLetter(props.category)}
      </h1>

      {loading && <Spinner />}

    {/* rapping all the text under infinite scroll  */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container" >
          <div className="row">

            {/* to fetch all items from newsItem  
            key for all news will be its url*/}
            {articles.map((element) => {
              return (
                <div
                  className="col-md-4 my-3" key={element.url} >
                  <NewsItem
                    title={element.title}
                    description={ element.description ? element.description.slice(0, 88)+"...": ".." }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    mode={mode}
                    toggleMode={toggleMode}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
