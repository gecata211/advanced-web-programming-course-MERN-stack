import React from "react";
import { Link } from "@reach/router";

class Recipes extends React.Component {
  render() {
    let recipesElements = [];
    this.props.recipes.forEach(recipe => {
      if (this.props.ingredient) {
        if (recipe.ingredients.toString().includes(this.props.ingredient)) {
          recipesElements.push(
            <Link to={"recipe/" + recipe.slug} key={recipe.slug}>
              <h3>
                {recipe.title}{" "}
                <span>({recipe.time > 25 ? "hard" : "easy"})</span>
              </h3>
            </Link>
          );
        }
      } else {
        recipesElements.push(
          <Link to={"recipe/" + recipe.slug} key={recipe.slug}>
            <h3>
              {recipe.title} <span>({recipe.time > 25 ? "hard" : "easy"})</span>
            </h3>
          </Link>
        );
      }
    });

    return (
      <div>
        <h1>Recipes</h1>
        <h3>{recipesElements}</h3>
      </div>
    );
  }
}

export default Recipes;
