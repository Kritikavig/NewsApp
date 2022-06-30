import React from "react";

const NewsItem = (props) => {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "dark",
    backgroundColor: props.mode === "dark" ? "dark" : "white",
  };

  let { title, description, imgUrl, newsUrl, author, date, source, mode } = props;
  
  return (
    <div className="my-3">
    {/* //styling the badge - to show source of news */}
      <div className={`card bg-${mode} text-${myStyle}`}> 
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
            flexDirection: "row-reverse",
             marginTop: "-2px",
             marginRight: "-2px"
          }}
        >
        <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        
        <img
          src={ !imgUrl ? "https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2021/08/02/news.jpg?itok=5hnT4sFA": imgUrl }
          className="card-img-top" alt="..." />

        <div className="card-body"  style={{marginTop:'10px'}}>
          <h5 className="card-title" >{title} </h5>
          <p className="card-text" style={{marginTop:'10px'}} >{description}</p>
          <p className="card-text">
            <small className="text-danger"> By {!author ? "Unknown" : author} on{" "} {new Date(date).toGMTString()} </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary" >Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
