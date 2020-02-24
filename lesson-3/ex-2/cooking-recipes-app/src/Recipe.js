import React from "react";
import { Link } from "@reach/router";

class Recipe extends React.Component {
  recipe = this.props.getRecipe(this.props.recipeSlug);

  render() {
    let ingredientsElement = [];
    this.recipe.ingredients.forEach((ing, index) => {
      ingredientsElement.push(<li key={index}>{ing}</li>);
    });
    let instructionsElement = [];
    this.recipe.cookingSteps.forEach((step, index) => {
      instructionsElement.push(<li key={index}>{step}</li>);
    });
    return (
      <div>
        <h2>
          {this.recipe.title} <span>({this.recipe.time} mins)</span>
        </h2>

        <ul>{ingredientsElement}</ul>
        <h4>Step by step: </h4>
        <ol>{instructionsElement}</ol>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Recipe;
