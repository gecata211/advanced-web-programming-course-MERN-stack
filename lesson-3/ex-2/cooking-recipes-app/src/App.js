import React from "react";
import Recipes from "./Recipes";
import { Router } from "@reach/router";
import Recipe from "./Recipe";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          slug: "pot-beef-with-broccoli",
          title: "Pot Beef with Broccoli",
          time: 15,
          ingredients: [
            "2/3 cup reduced sodium soy sauce",
            "1/2 cup chicken stock",
            "1/4 cup honey",
            "2 tablespoons rice wine vinegar",
            "2 tablespoons brown sugar, packed",
            "3 cloves garlic, minced",
            "1 tablespoon sesame oil",
            "1 tablespoon cornstarch",
            "1 teaspoon Sriracha, or more, to taste",
            "1 teaspoon ground ginger",
            "1/4 teaspoon red pepper flakes",
            "1 tablespoon olive oil",
            "1 pound flank steak, thinly sliced across the grain",
            "1 head broccoli, cut into florets"
          ],
          cookingSteps: [
            "In a medium bowl, whisk together soy sauce, chicken stock, honey, vinegar, brown sugar, garlic, sesame oil, cornstarch, Sriracha, ginger, red pepper flakes and 1/4 cup water; set aside.",
            "Heat olive oil in a large skillet over medium high heat. Add steak and cook, flipping once, until browned, about 3-4 minutes.",
            "Stir in broccoli and soy sauce mixture until tender and slightly thickened, about 3-4 minutes.",
            "Serve immediately."
          ]
        },
        {
          slug: "stuffed-sweet-potatoes",
          title: "Stuffed Sweet Potatoes",
          time: 60,
          ingredients: [
            "4 medium- large sweet potatoes",
            "1/2 cup of Cashew Cream Sauce (you could also use sour cream or plain greek yogurt if not vegan)",
            "1 teaspoon of lime juice",
            "1/2 teaspoon of ground black pepper",
            "1/2 of a medium red onion, finely diced (about 1 cup diced)",
            "1 1/2 tablespoons of oil (I used olive oil)",
            "1/4 teaspoon of garlic powder",
            "1/4 teaspoon of onion powder",
            "1/4 teaspoon of cumin",
            "1/4 teaspoon of chili powder",
            "1/2 teaspoon of sea salt",
            "1 15oz can of black beans, drained and rinsed"
          ],
          cookingSteps: [
            "Pre-heat oven to 350 degrees F.",
            "Place the sweet potatoes on a lightly greased baking tray and bake for 55-65 minutes or until a fork can easily be inserted into the flesh of the potatoes.",
            "Prepare the cream sauce by whisking together the cashew cream sauce, lime juice, and black pepper. Set aside.",
            "When the sweet potatoes have about 10 minutes left, heat the oil in a skillet over medium heat and then add in onion. Saute for 5 minutes until the onions begins to become translucent. Add in the spices stir and cook for an additional 3 minutes.",
            "Add the black beans to the skillet and toss to combine. Continue to cook, stirring frequently, until the black beans are fully heated through. About 5 minutes. Take off of heat and set aside.",
            "Once the sweet potatoes are done baking, let cool slightly. Once cool, cut the sweet potatoes open and shred the flesh from the skin so that the inside is mashed and easy to scoop out.",
            "Evenly spread the black bean mixture, avocado, cilantro, and cashew crema sauce on top of the 4 sweet potatoes.",
            "Serve immediately and ENJOY!!"
          ]
        },
        {
          slug: "bowties-and-broccoli",
          title: "Bowties & Broccoli",
          time: 15,
          ingredients: [
            "12 oz pasta",
            "1 lb frozen broccoli florets",
            "3 Tbsp butter",
            "3 Tbsp grated Parmesan",
            "Salt to taste",
            "Freshly cracked pepper to taste",
            "Pinch crushed red pepper (optional)"
          ],
          cookingSteps: [
            "Bring a pot of water to a boil, then add the pasta. Boil until the pasta is al dente (7-10 minutes). Add the frozen broccoli florets to the boiling pasta water, turn off the heat, and let sit for 1-2 minutes, or until the broccoli is tender-crisp. Drain the pasta and broccoli in a colander.",
            "Transfer the pasta and broccoli back to the pot (with the heat off) or to a bowl and add the butter. Toss until the butter has melted and coated everything. Add the Parmesan, salt, freshly cracked pepper, and red pepper flakes, then toss to coat again. Taste and adjust seasoning as needed. Serve immediately."
          ]
        },
        {
          slug: "sheet-pan-sausage-and-veggies",
          title: "Sheet Pan Sausage & Veggies",
          time: 40,
          ingredients: [
            "2 cups (~1 small) red potato",
            "3/4ths pound green beans",
            "1 large head of broccoli (~ 1 and 1/2 cups)",
            "1 and 1/2 cups chopped bell peppers 2 large or 6-7 mini sweet bell peppers",
            "9 ounces smoked sausage I use turkey or chicken, not ground sausage",
            "6 tablespoons olive oil",
            "1/4 teaspoon red pepper flakes optional",
            "1 teaspoon paprika",
            "1/2 teaspoon garlic powder",
            "1 tablespoon dried oregano",
            "1 tablespoon dried parsley",
            "1/4 teaspoon salt",
            "1/4 teaspoon pepper",
            "Serve with: fresh parsley, quinoa/rice, lots of freshly grated Parmesan cheese"
          ],
          cookingSteps: [
            "Preheat the oven to 400 degrees F.",
            "Line a large sheet pan with foil or parchment paper.",
            "Prep the veggies: chop the red potatoes (pretty small pieces here so they will be tender in time), trim the green beans and halve (see video above recipe), chop the broccoli, chop the peppers into thick squares, and coin the sausage in thick slices.",
            "Place all the veggies and sausage on a sheet pan. Pour the olive oil and all the spices on top. Toss to evenly coat all the veggies and meat. (I use this 15x21 inch sheet pan)",
            "Bake 15 minutes, remove from the oven and flip/stir all the veggies around. Return to the oven and bake for another 10-15 minutes or until vegetables are crisp tender and sausage is browned.",
            "If desired, sprinkle freshly grated Parmesan cheese over the veggies and sausage as soon as they come out of the oven.",
            "Enjoy with rice or quinoa and fresh parsley if desired."
          ]
        },
        {
          slug: "pesto-chicken-bake",
          title: "Pesto Chicken Bake",
          time: 35,
          ingredients: [
            "3 chicken breasts, organic recommended",
            "1 6 oz. jar basil pesto",
            "2 medium tomatoes, sliced",
            "3 –6 slices mozzarella cheese"
          ],
          cookingSteps: [
            "Preheat the oven to 350° F. Season chicken breasts liberally with salt and pepper.",
            "OPTIONAL STEP: While the oven is preheating you can heat some olive oil or butter in a skillet. Once hot add the chicken breast and sear for 1-2 minutes on each side until caramelized. The chicken should still be raw in the center.",
            "Arrange chicken breasts (seared or raw) onto a baking dish or rimmed baking sheet.",
            "Use a spoon to cover chicken with pesto.",
            "Top each chicken breast with 1 slice of mozzarella cheese and 2 sliced tomatoes.",
            "Bake for 20- 30 minutes (time will vary depending on thickness of chicken and whether or not it has been seared), or until chicken is no longer pink in the center. Broil the chicken the final 2 minutes so that the cheese is bubbly and golden. Serve immediately."
          ]
        }
      ]
    };
  }
  getRecipe(slug) {
    return this.state.recipes.find(recipe => recipe.slug === slug);
  }
  render() {
    return (
      <Router>
        <Recipes path="/" recipes={this.state.recipes} />
        <Recipes path="/with/:ingredient" recipes={this.state.recipes} />
        <Recipe
          path="/recipe/:recipeSlug"
          getRecipe={slug => this.getRecipe(slug)}
        />
        <NotFound default="true" />
      </Router>
    );
  }
}

export default App;
