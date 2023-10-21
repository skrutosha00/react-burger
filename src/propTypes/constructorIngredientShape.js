import PropTypes from "prop-types";

import ingredientShape from "propTypes/ingredientShape";

const constructorIngredientShape = {
  ...ingredientShape,
  uid: PropTypes.string
};

export default constructorIngredientShape;
