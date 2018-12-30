import React from "react";
import "./style.css";
import resultImage1 from "../FoodDisplay/result1.jpg";
import resultImage2 from "../FoodDisplay/result2.jpg";
import resultImage3 from "../FoodDisplay/result3.jpg";
import resultImage4 from "../FoodDisplay/result4.jpg";
import result_icon1 from "../FoodDisplay/result_icon1.png";
import result_icon2 from "../FoodDisplay/result_icon2.png";
import result_icon3 from "../FoodDisplay/result_icon3.png";
import result_icon4 from "../FoodDisplay/result_icon4.png";

function SavedMeals() {
  return(

    <div className="container pp-saved-meals">
      <div className="row">
        <div className="col s12 center">
          <h1>David Chang's saved meals</h1>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <div className="pp-fd-results">
            <div>
              <img src={resultImage1} alt="food" />
            </div>
            <div className="pp-fd-icon">
              <img src={result_icon1} alt="food icon" />
            </div>
            <div className="pp-fd-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="pp-fd-results">
            <div>
              <img src={resultImage2} alt="food" />
            </div>
            <div className="pp-fd-icon">
              <img src={result_icon2} alt="food icon" />
            </div>
            <div className="pp-fd-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <div className="pp-fd-results">
            <div>
              <img src={resultImage3} alt="food" />
            </div>
            <div className="pp-fd-icon">
              <img src={result_icon3} alt="food icon" />
            </div>
            <div className="pp-fd-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="pp-fd-results">
            <div>
              <img src={resultImage4} alt="food" />
            </div>
            <div className="pp-fd-icon">
              <img src={result_icon4} alt="food icon" />
            </div>
            <div className="pp-fd-link">
              <a href="/">See Recipe</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default SavedMeals;