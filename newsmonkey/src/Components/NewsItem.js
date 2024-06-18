import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title , description,imgUrl,newsurl }=this.props;
    return (
      < div className="container my-3">

          <div className="card" style={{width: "18rem"}}>
         <img src={imgUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
              <h5 className="card-title">{title}</h5>
                 <p className="card-text">{description}</p>
                     <a href={newsurl}target="blank"  className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
