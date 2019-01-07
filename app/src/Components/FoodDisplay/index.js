import React, { Component } from "react";
import "./style.css";
import resultImage1 from "./result1.jpg";
import resultImage2 from "./result2.jpg";
import resultImage3 from "./result3.jpg";
import resultImage4 from "./result4.jpg";
import result_icon1 from "./result_icon1.png";
import result_icon2 from "./result_icon2.png";
import result_icon3 from "./result_icon3.png";
import result_icon4 from "./result_icon4.png";

 class SaveFavorite extends Component {
   constructor(props) {
     super(props)
     this.state = {
       status: false
     }
     this.handleClick = this.handleClick.bind(this)
   }
   handleClick() {
     this.setState({
       status: !this.state.status
     })
   }
   render() {
     return (
       <SaveFavoriteChild className={this.state.status ? "fas fa-heart pp-sm-heart" : "far fa-heart pp-sm-heart"} toggleClassName={this.handleClick}></SaveFavoriteChild>
     )
   }
 }

 class SaveFavoriteChild extends React.Component {
   render() {
     return (
       <span className="pp-sm-favme">
       <i className={ this.props.className }
       onClick={ this.props.toggleClassName }
       >
       { this.props.children }
         </i></span>
     )
   }
 }
 
function FoodDisplayCard({
  name,
  image,
  href
}){
  return(
    <div className="col s12 m6">
      <div className="pp-fd-results">
        <div className="pp-sm-fav-btn">
          <SaveFavorite />
        </div>
        <div>
          <img src={image} alt="food"/>
        </div>
        <div className="pp-fd-icon">
          <img src={result_icon1} alt="food icon" />
        </div>
        <div className="pp-fd-link">
          <a href="/">See Recipe</a>
        </div>
      </div>
    </div>
  );
}

function FoodDisplay({children}) {
  return (
    <div className="pp-fd">
      <div className="container">
        <div className="row">
          <div className="col s12 center">
            <h1>Here are some meals to consider</h1>
          </div>
        </div>
        <div className="row">
          {children}
        </div>
      </div> 
    </div>
  );
}

export default {FoodDisplay, FoodDisplayCard}; 