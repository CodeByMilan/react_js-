import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true, 
    };
  }

  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/everything?q=apple&from=2024-06-17&to=2024-06-17&sortBy=popularity&apiKey=8c6cfb8b02db4921b4482540be75a4ac";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>NewsMonkey - Top Headlines</h1>
        {this.state.loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="row">
            {this.state.articles.length > 0 ? (
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/763ba4ecb1ef569d8a515af6eed5290e.jpg"
                      }
                      newsurl={element.url}
                    />
                  </div>
                );
              })
            ) : (
              <p>No articles available</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default News;
